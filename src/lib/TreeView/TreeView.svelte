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
        <div class="subtree">
            <a
                class="tree-item"
                class:expanded={treeViewState?.[path]}
                class:selected={`/docs${path}` === $page.path}
                href="/docs{path}"
                on:click={toggleExpansion(path)}
            >
                <span>{name}</span>
                {@html ChevronDown}
            </a>
            {#if treeViewState?.[path]}
                <div class="subtree-items" transition:slide="{{duration: 250, easing: cubicInOut}}">
                    <svelte:self tree={children} />
                </div>
            {/if}
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