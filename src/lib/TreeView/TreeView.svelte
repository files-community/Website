<script lang="ts">
    import { onMount } from "svelte";
    
    import { page } from "$app/stores";

    import ListViewItem from "../ListViewItem/ListViewItem.svelte";

    export let tree = [];

    let treeViewState;

    onMount(() => {
        treeViewState = JSON.parse(localStorage.getItem("treeViewState") ?? "{}");
    });
    
    const id = s => s.toLowerCase().split(" ").join("-");

    function toggleExpansion(name) {
        event.stopPropagation();
        treeViewState[id(name)] = !treeViewState[id(name)];
        localStorage.setItem("treeViewState", JSON.stringify(treeViewState));
    }
</script>

<style lang="scss" src="./TreeView.scss"></style>

{#each tree as { name, path, type, pages, icon }}
    {#if type === "category"}
        <div class="subtree" class:expanded={treeViewState?.[id(name)]}>
            <ListViewItem type="expander" expanded={treeViewState?.[id(name)]} on:click={toggleExpansion(name)}>
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
        <ListViewItem type="navigation" selected={`/docs${path}` === $page.path} href="/docs{path}">
            <svelte:fragment slot="icon">
                {@html icon || ""}
            </svelte:fragment>
            {name}
        </ListViewItem>
    {/if}
{/each}