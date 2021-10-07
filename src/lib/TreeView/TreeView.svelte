<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	import ListViewItem from "../ListViewItem/ListViewItem.svelte";

	export let tree = [];

	let treeViewState;

	onMount(() => {
		// Check localStorage for an existing treeViewState
		// If none exists, use a blank object string
		treeViewState = JSON.parse(localStorage.getItem("treeViewState") ?? "{}");
	});

	// Utility function for converting regular names to kebab case
	const id = s => s.toLowerCase().split(" ").join("-");

	// Function for expanding/collapsing docs categories
	const toggleExpansion = (event: MouseEvent, name) => {
		event.stopPropagation();

		// Modify treeViewState to have the opposite of the previous entry for the category
		treeViewState[id(name)] = !treeViewState[id(name)];

		// Update value in localStorage for persistence
		localStorage.setItem("treeViewState", JSON.stringify(treeViewState));
	};
</script>

<div class="tree-view">
	{#each tree as { name, path, type, pages, icon }}
		{#if type === "category"}
			<div class="subtree" class:expanded={treeViewState?.[id(name)]}>
				<ListViewItem
					type="expander"
					expanded={treeViewState?.[id(name)]}
					on:click={e => toggleExpansion(e, name)}
				>
					<svelte:fragment slot="icon">
						{@html icon || ""}
					</svelte:fragment>
					{name}
				</ListViewItem>
				{#if treeViewState?.[id(name)]}
					<div class="subtree-items">
						<svelte:self tree={pages} />
					</div>
				{/if}
			</div>
		{:else}
			<ListViewItem
				on:click
				type="navigation"
				selected={`/docs${path}` === $page.path}
				href="/docs{path}"
			>
				<svelte:fragment slot="icon">
					{@html icon || ""}
				</svelte:fragment>
				{name}
			</ListViewItem>
		{/if}
	{/each}
</div>

<style lang="scss">
	@media only screen and (min-width: 648px) {
		.tree-view:last-child {
			margin-block-end: 1rem;
		}
	}

	// Add padding to subtrees for the nesting effect
	.subtree-items {
		padding-inline-start: 24px;
	}
</style>