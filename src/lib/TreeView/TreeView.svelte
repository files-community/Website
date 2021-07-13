<script lang="ts">
    import { onMount } from "svelte";
    
    import { page } from "$app/stores";
    import { slide } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    import ChevronDown from "@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw";

    export let tree = [];

    let treeViewState;

    onMount(() => {
        treeViewState = JSON.parse(localStorage.getItem("treeViewState") ?? "{}");
    });

    function toggleExpansion(path) {
        treeViewState[path] = !treeViewState[path];
        localStorage.setItem("treeViewState", JSON.stringify(treeViewState));
    }
</script>

<style lang="scss" src="./TreeView.scss"></style>

{#each tree as {name, path, children}}
    {#if children}
        <div class="subtree" class:expanded={treeViewState?.[path]}>
            <a
                class="tree-item"
                class:selected={`/docs${path}` === $page.path}
                href="/docs{path}"
                on:click={toggleExpansion(path)}
            >
                <span>{name}</span>
                {@html ChevronDown}
            </a>
            <div class="subtree-items" style="--treeview-subtree-height: {(children.length) * 40}px">
                <svelte:self tree={children} />
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