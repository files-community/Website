<script lang="ts">
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import { circOut } from "svelte/easing";

	import { page } from "$app/stores";
	import ChevronDown from "~icons/fluent/chevron-down-16-regular";

	import { ListItem } from "fluent-svelte";
	import { getCSSDuration } from "fluent-svelte/internal";
	import type { DocsTree } from "$data/docs";

	export let tree: DocsTree = [];
	export let initial = true;

	let treeViewState: any;

	onMount(() => {
		// Check localStorage for an existing treeViewState
		// If none exists, use a blank object string
		treeViewState = JSON.parse(localStorage.getItem("treeViewState") ?? "{}");
	});

	// Function for expanding/collapsing docs categories
	const toggleExpansion = (event: MouseEvent, name: string) => {
		event.stopPropagation();

		// Modify treeViewState to have the opposite of the previous entry for the category
		treeViewState[name] = !treeViewState[name];

		// Update value in localStorage for persistence
		localStorage.setItem("treeViewState", JSON.stringify(treeViewState));
	};
</script>

<div class="tree-view scroller" class:initial>
	{#each tree as tree}
		{@const { title, path, icon } = tree}
		{#if "pages" in tree}
			{@const pages = tree.pages}
			<div class="subtree" class:expanded={!treeViewState?.[title]}>
				<ListItem on:click={e => toggleExpansion(e, title)}>
					<svelte:fragment slot="icon">
						{#if icon}
							<svelte:component this={icon} />
						{/if}
					</svelte:fragment>
					<span class="tree-view-item">{title}</span>
					<div class="expander-icon" class:expanded={!treeViewState?.[title]}>
						<ChevronDown />
					</div>
				</ListItem>
				{#if !treeViewState?.[title]}
					<div
						class="subtree-items"
						transition:slide={{
							duration: getCSSDuration("--fds-control-fast-duration"),
							easing: circOut,
						}}
						class:expanded={!treeViewState?.[title]}
					>
						<svelte:self tree={pages} initial={false} />
					</div>
				{/if}
			</div>
		{:else}
			<ListItem
				on:click
				selected={`/docs${path}` === $page.url.pathname}
				href="/docs{path}"
			>
				<svelte:fragment slot="icon">
					{#if icon}
						<svelte:component this={icon} />
					{/if}
				</svelte:fragment>
				{title}
			</ListItem>
		{/if}
	{/each}
</div>

<style lang="scss">
	@use "src/styles/mixins" as *;

	.tree-view {
		.subtree {
			:global {
				.list-item span {
					@include flex($align: center, $justify: space-between);
					inline-size: 100%;

					.expander-icon {
						@include flex($align: center);
						transition: transform var(--fds-control-fast-duration)
							var(--fds-control-fast-out-slow-in-easing);
						transform-origin: center;

						&.expanded {
							transform: rotate(180deg);
						}

						svg {
							@include icon;
						}
					}
				}
			}
		}

		&.initial {
			@media screen and (width >= 648px) {
				block-size: calc(100vh - 58px);
			}
		}
	}

	// Add padding to subtrees for the nesting effect
	.subtree-items {
		padding-inline-start: 24px;
	}
</style>
