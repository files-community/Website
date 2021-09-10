<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	import { docs } from "$data/docs";
	import { links } from "$data/links";

	import { HyperlinkButton, ListViewItem, TextBox, TreeView } from "$lib";

	let value: string = "";
	let searchQuery: string = "";
	let searchFocused: boolean = false;
	let autoSuggestVisible: boolean = false;
	let selection: number = 0;

	// A recursively flattened version of the docs mapping containing an array of all pages
	const docsPages = filterPages(docs);

	// These are pretty self-explanatory
	$: currentPage = docsPages.find(p => `/docs${p.path}` === $page.path);

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
				$page.path !== `/docs${searchResults[selection].path}`
			)
				goto(`/docs${searchResults[selection].path}`, {
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

	// Action for handling clicks outside of a DOM node
	const clickOutside = (node, eventHandler) => {
		const handleClick = event => {
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

	// ??????
	function filterPages(array) {
		if (Array.isArray(array))
			return array
				.map(a => filterPages(a))
				.flat(Infinity)
				.filter(a => a.hasOwnProperty("path")); // ???
		if (array.hasOwnProperty("pages"))
			return [
				{
					...array
				},
				...array.pages.map(a => filterPages(a))
			]; // ?????????
		return array;
	}
</script>

<svelte:head>
	<title>Files - {pageTitle ? `Docs - ${pageTitle}` : "Docs"}</title>
	<meta
		content="Files - {pageTitle ? `Docs - ${pageTitle}` : 'Docs'}"
		property="og:title"
	/>

	<meta content="/branding/banner-docs-light.png" property="og:image" />
</svelte:head>

<section class="docs">
	<aside class="sidebar scroller">
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
							$page.path !==
								`/docs${searchResults[selection].path}`
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
								<ListViewItem
									selected={selection === i}
									href="/docs{path}"
								>
									{name}
								</ListViewItem>
							{/each}
						{:else}
							<ListViewItem>No results found</ListViewItem>
						{/if}
					</div>
				{/if}
			</div>
			<hr role="separator" />
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
							$page.path !==
								`/docs${searchResults[selection].path}`
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
								<ListViewItem
									selected={selection === i}
									href="/docs{path}"
								>
									{name}
								</ListViewItem>
							{/each}
						{:else}
							<ListViewItem>No results found</ListViewItem>
						{/if}
					</div>
				{/if}
			</div>
		</div>
		<div class="page-inner markdown-body">
			<header>
				<span>
					{$page.path
						.split("/")
						.join(" / ")
						.substring(2)}{$page.path === "/docs"
						? " / overview"
						: ""}
				</span>
				<div class="header-right">
					<HyperlinkButton
						href="https://github.com/{links.github.owner}/{links
							.github
							.siteRepo}/edit/main/src/routes/docs{currentPage.path ||
							'/index'}.svx"
						rel="noreferrer noopener"
						target="_blank"
					>
						Edit this page
					</HyperlinkButton>
				</div>
			</header>
			<slot />
		</div>
	</article>
</section>

<style lang="scss">
	@use "src/styles/pages/docs";
</style>
