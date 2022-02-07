<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	import { docs, DocsMap } from "$data/docs";
	import { getCSSDuration } from "fluent-svelte/internal"

	export const load: Load = ({ url }) => {
		const docsPages = findPages(docs);

		return {
			props: {
				pagePath: url.pathname,
				currentPage: docsPages.find(p => `/docs${ p.path }` === url.pathname),
				docsPages
			}
		};
	};

	function findPages(docsStructure: DocsMap[] | DocsMap): DocsMap[] {
		if (Array.isArray(docsStructure)) {
			// it's an array of pages/categories
			return docsStructure
				.map(page => findPages(page)) // recursively flatten the structure and filter to only include pages
				.flat(Infinity) as DocsMap[]; // flatten the structure to get rid of any nesting
		} else {
			// it's a single page/category, not a structure
			if (docsStructure.type === "category") {
				// it's a category
				return docsStructure.pages
					.map(page => findPages(page)) // filter down and down until only pages are left
					.flat(Infinity) as DocsMap[]; // flatten the array
			} else {
				// it's a page
				return [docsStructure];
			}
		}
	}
</script>

<script lang="ts">
	import { fly } from "svelte/transition";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	import type { DocsMap } from "$data/docs";
	import { links } from "$data/links";
	import { externalLink, Metadata, TreeView } from "$lib";
	import { Button, ListItem, TextBox } from "fluent-svelte";

	export let pagePath = "";
	export let docsPages: DocsMap[];
	export let currentPage: DocsMap = { name: "Overview", path: "" };

	let value: string = "";
	let searchQuery: string = "";
	let searchFocused: boolean = false;
	let autoSuggestVisible: boolean = false;
	let selection: number = 0;

	// Name of the current page used in <title>
	$: pageTitle = currentPage.name;

	// Basic search matching for filtering docs pages
	$: searchResults = docsPages.filter(page =>
		page.name
			.toLowerCase()
			.replace(/ /gi, "")
			.includes((searchQuery ?? "").toLowerCase().replace(/ /gi, ""))
	);

	// Determines if the auto-suggest flyout should be shown
	$: if (searchQuery && searchFocused) autoSuggestVisible = true;

	// Since we can't use bind:value and have our clear button work, the best way is through this handler
	const updateSearchQuery = () => (searchQuery = value);

	// Handler for keyboard navigation in the search autocomplete flyout
	const handleSearchKeys = (e: KeyboardEvent) => {
		const { key } = e;
		if (key === "ArrowUp" || key === "ArrowDown") e.preventDefault();
		if (key === "Enter") {
			if (
				searchResults.length > 0 &&
				$page.url.pathname !== `/docs${ searchResults[selection].path }`
			)
				goto(`/docs${ searchResults[selection].path }`, {
					keepfocus: true
				});
		} else if (key === "ArrowDown") {
			selection++;
			if (selection > searchResults.length - 1) selection = 0;
		} else if (key === "ArrowUp") {
			selection--;
			if (selection < 0) selection = searchResults.length - 1;
		}
	};

	// Action for handling clicks outside a DOM node
	const clickOutside = (node: Element, eventHandler: () => boolean) => {
		const handleClick = (event: MouseEvent) => {
			const path = event.composedPath();
			if (!path.includes(node)) eventHandler();
		};

		document.addEventListener("click", handleClick);

		return {
			destroy() {
				document.removeEventListener("click", handleClick);
			}
		};
	};
</script>

<svelte:head>
	<Metadata title="Files • {pageTitle ? `Docs - ${pageTitle}` : 'Docs'}"
	          image="docs"
	/>
</svelte:head>

<section class="docs">
	<aside class="sidebar">
		<div class="search">
			<div
				class="autosuggest-wrapper"
				use:clickOutside={() => (autoSuggestVisible = false)}
			>
				<TextBox
					bind:value
					flyoutVisible={autoSuggestVisible}
					on:clear={updateSearchQuery}
					on:focus={() => (searchFocused = true)}
					on:input={updateSearchQuery}
					on:keydown={handleSearchKeys}
					on:search={() => {
						if (
							searchResults.length > 0 &&
							$page.url.pathname !== `/docs${searchResults[selection].path}`
						)
							goto(`/docs${searchResults[selection].path}`, {
								keepfocus: true
							});
					}}
					placeholder="Search Documentation"
					type="search"
				/>
				{#if autoSuggestVisible}
					<div class="autosuggest-flyout scroller">
						{#if searchResults.length > 0}
							{#each searchResults as { name, path }, i}
								<ListItem selected={selection === i} href="/docs{path}">
									{name}
								</ListItem>
							{/each}
						{:else}
							<ListItem>No results found</ListItem>
						{/if}
					</div>
				{/if}
			</div>
			<hr role="separator">
		</div>
		<TreeView tree={docs} />
	</aside>
	<article class="page scroller">
		<div class="search-mobile">
			<div
				class="autosuggest-wrapper"
				use:clickOutside={() => (autoSuggestVisible = false)}
			>
				<TextBox
					bind:value
					flyoutVisible={autoSuggestVisible}
					on:clear={updateSearchQuery}
					on:focus={() => (searchFocused = true)}
					on:input={updateSearchQuery}
					on:keydown={handleSearchKeys}
					on:search={() => {
						if (
							searchResults.length > 0 &&
							$page.url.pathname !== `/docs${searchResults[selection].path}`
						)
							goto(`/docs${searchResults[selection].path}`, {
								keepfocus: true
							});
					}}
					placeholder="Search Documentation"
					type="search"
				/>
				{#if autoSuggestVisible}
					<div class="autosuggest-flyout scroller">
						{#if searchResults.length > 0}
							{#each searchResults as { name, path }, i}
								<ListItem selected={selection === i} href="/docs{path}">
									{name}
								</ListItem>
							{/each}
						{:else}
							<ListItem>No results found</ListItem>
						{/if}
					</div>
				{/if}
			</div>
		</div>
		{#key pagePath}
			<div class="page-inner markdown-body" in:fly|local={{ y: 6, duration: 300, delay: 300 }}
			     out:fly|local={{ y: 6, duration: 300 }}>
				<header>
					<span>
						{$page.url.pathname.split("/").join(" / ").substring(2)}
						{$page.url.pathname === "/docs" ? " / overview" : ""}
					</span>
					<div class="header-right">
						<Button variant="hyperlink"
						        href="https://github.com/{links.github.owner}/{links.github
								.siteRepo}/edit/main/src/routes/docs{currentPage.path ||
								'/index'}.md"
						        {...externalLink}
						>
							Edit this page
						</Button>
					</div>
				</header>
				<slot />
			</div>
		{/key}
	</article>
</section>

<style lang="scss">
	@use "src/styles/pages/docs";
</style>
