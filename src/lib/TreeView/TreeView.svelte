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
        treeViewState[id(name)] = !treeViewState[id(name)];
        localStorage.setItem("treeViewState", JSON.stringify(treeViewState));
    }
</script>

<style lang="scss" src="./TreeView.scss"></style>

{#each tree as {name, path, type, pages}}
    {#if type === "category"}
        <div class="subtree" class:expanded={treeViewState?.[id(name)]}>
            <ListViewItem type="expander" expanded={treeViewState?.[id(name)]} on:click={toggleExpansion(name)}>
                {name}
            </ListViewItem>
            <div class="subtree-items" style="--treeview-subtree-height: {(pages?.length || 0) * 38.3334}px">
                <svelte:self tree={pages} />
            </div>
        </div>
    {:else}
        <ListViewItem type="navigation" selected={`/docs${path}` === $page.path} href="/docs{path}">{name}</ListViewItem>
    {/if}
{/each}