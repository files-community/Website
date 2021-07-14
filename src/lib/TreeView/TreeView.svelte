<script lang="ts">
    import { onMount } from "svelte";
    
    import { page } from "$app/stores";

    import ChevronDown from "@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw";

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
            <div class="tree-item" on:click={toggleExpansion(name)}>
                <span>{name}</span>
                {@html ChevronDown}
            </div>
            <div class="subtree-items" style="--treeview-subtree-height: {(pages?.length || 0) * 40}px">
                <svelte:self tree={pages} />
            </div>
        </div>
    {:else}
        <a
            class="tree-item"
            class:selected={`/docs${path}` === $page.path}
            href="/docs{path}"
        >
            {name}
        </a>
    {/if}
{/each}