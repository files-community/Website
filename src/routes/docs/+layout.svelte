<script lang="ts">
	import type { LayoutData } from "./$types";
	import { fly } from "svelte/transition";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { _ } from "svelte-i18n";

	import { links } from "$data/links";
	import { externalLink, Metadata, TreeView } from "$lib";
	import { Button, ListItem, TextBox } from "fluent-svelte";

	export let data: LayoutData;
	$: ({ docs, pagePath, docsPages, currentPage } = data);

	let value = "";
	let searchQuery = "";
	let searchFocused = false;
	let autoSuggestVisible = false;
	let selection = 0;

	// Name of the current page used in <title>
	$: pageTitle = currentPage.title;

	// Basic search matching for filtering docs pages
	$: searchResults = docsPages.filter(page =>
		page.title
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
				$page.url.pathname !== `/docs${searchResults[selection].path}`
			)
				goto(`/docs${searchResults[selection].path}`, {
					keepFocus: true
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

<Metadata
	title={pageTitle
		? $_("metadata.docs_page", { values: { title: pageTitle } })
		: $_("metadata.docs_home")}
	image="docs"
/>

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
								keepFocus: true
							});
					}}
					placeholder="Search Documentation"
					type="search"
				/>
				{#if autoSuggestVisible}
					<div class="autosuggest-flyout scroller">
						{#if searchResults.length > 0}
							{#each searchResults as { title, path }, i}
								<ListItem selected={selection === i} href="/docs{path}">
									{title}
								</ListItem>
							{/each}
						{:else}
							<ListItem>{$_("docs.autocomplete_empty")}</ListItem>
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
							$page.url.pathname !== `/docs${searchResults[selection].path}`
						)
							goto(`/docs${searchResults[selection].path}`, {
								keepFocus: true
							});
					}}
					placeholder="Search Documentation"
					type="search"
				/>
				{#if autoSuggestVisible}
					<div class="autosuggest-flyout scroller">
						{#if searchResults.length > 0}
							{#each searchResults as { title, path }, i}
								<ListItem selected={selection === i} href="/docs{path}">
									{title}
								</ListItem>
							{/each}
						{:else}
							<ListItem>{$_("docs.autocomplete_empty")}</ListItem>
						{/if}
					</div>
				{/if}
			</div>
		</div>
		{#key pagePath}
			<div
				class="page-inner markdown-body"
				in:fly|local={{ y: 6, duration: 300, delay: 300 }}
				out:fly|local={{ y: 6, duration: 300 }}
			>
				<header>
					<span>
						{$page.url.pathname.split("/").join(" / ").substring(2)}
						{$page.url.pathname === "/docs" ? " / overview" : ""}
					</span>
					<div class="header-right">
						<Button
							variant="hyperlink"
							href="https://github.com/{links.github.owner}/{links.github
								.siteRepo}/edit/main/src/routes/docs{currentPage.path}/+page.md"
							{...externalLink}
						>
							{$_("docs.edit_page")}
						</Button>
					</div>
				</header>
				<h1>{pageTitle}</h1>
				<slot />
			</div>
		{/key}
	</article>
</section>

<style lang="scss">
	@use "src/styles/pages/docs";
</style>
