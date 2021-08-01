<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    import { docs } from "$stores/docs";
    import { TreeView, TextBox, ListViewItem } from "$lib";

    let value: string = "";
    let searchQuery: string = "";
    let searchFocused: boolean = false;
    let autoSuggestVisible: boolean = false;
    let selection: number = 0;
    
    $: pageTitle = filterPages(docs).find(a => a.path === $page.path.replace("/docs", "")).name;
    $: searchResults = filterPages(docs).filter(page => page.name.toLowerCase().split(" ").join("").includes((searchQuery ?? "").toLowerCase().split(" ").join("")));
    $: if (searchQuery && searchFocused) {
        autoSuggestVisible = true;
    }

    function updateSearchQuery() {
        searchQuery = value;
    }

    function handleSearchKeys(e) {
        const { key } = e;
        if (key === "ArrowUp" || key === "ArrowDown") e.preventDefault();
        if (key === "Enter" ) {
            if (searchResults.length > 0 && $page.path !== `/docs${searchResults[selection].path}`) goto(`/docs${searchResults[selection].path}`, {
                keepfocus: true
            });
        } else if (key=== "ArrowDown") {
            selection++;
            if (selection > searchResults.length - 1) selection = 0;
        } else if (key === "ArrowUp") {
            selection--;
            if (selection < 0) selection = searchResults.length - 1;
        }
    }

    function clickOutside(node, eventHandler) {
        const handleClick = event => {
            const path = event.composedPath();
            if (!path.includes(node)) eventHandler();
        }
        document.addEventListener("click", handleClick);
        return {
            destroy() {
                document.removeEventListener("click", handleClick);
            }
        }
    }

    // I have literally no idea what this even does, but it seems to work sooooo
    function filterPages(array) {
        if (Array.isArray(array)) return array.map(a => filterPages(a)).flat(Infinity).filter(a => a.hasOwnProperty("path"));
        if (array.hasOwnProperty("pages")) return [{
            ...array
        }, ...array.pages.map(a => filterPages(a))];
        return array;
    }
</script>

<svelte:head>
    <title>Files - {pageTitle ? `Docs - ${pageTitle}` : "Docs"}</title>
    <meta property="og:title" content="Files - {pageTitle ? `Docs - ${pageTitle}` : "Docs"}">

    <meta property="og:image" content="/branding/banner-docs-light.png">
</svelte:head>

<section class="docs">
    <aside class="sidebar scroller">
        <div
            use:clickOutside={() => autoSuggestVisible = false}
            class="search"
        >
            <TextBox
                bind:value
                on:keydown={handleSearchKeys}
                on:input={updateSearchQuery}
                on:clear={updateSearchQuery}
                on:focus={() => searchFocused = true}
                on:search={() => {
                    if (searchResults.length > 0 && $page.path !== `/docs${searchResults[selection].path}`) goto(`/docs${searchResults[selection].path}`, {
                        keepfocus: true
                    });
                }}
                flyoutVisible={autoSuggestVisible}
                type="search"
                placeholder="Search Documentation"
            />
            {#if autoSuggestVisible}
                <div class="autosuggest-flyout scroller">
                    {#if searchResults.length > 0}
                        {#each searchResults as {name, path}, i}
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
            <hr role="separator" />
        </div>
        <TreeView tree={docs} />
    </aside>
    <article class="page scroller markdown-body">
        <slot />
    </article>
</section>

<style lang="scss">
    @use "src/styles/pages/docs";
</style>