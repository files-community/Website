<script lang="ts">
    import { page } from "$app/stores";
    import { slide } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    import ChevronDown from "@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw";

    export let tree = [];

    $: expansionState = {};

    function toggleExpansion(name) {
        const state = expansionState[name];

        if (!state) expansionState[name] = false;
        expansionState[name] = !state;
    }
</script>

<style lang="scss" src="./TreeView.scss"></style>

{#each tree as {name, path, children}}
    {#if children}
        <div class="subtree">
            <a class="tree-item" class:expanded={expansionState[name]} class:selected={`/docs${path}` === $page.path} href="/docs{path}" on:click={toggleExpansion(name)}>
                <span>{name}</span>
                {@html ChevronDown}
            </a>
            {#if expansionState[name]}
                <div class="subtree-items" transition:slide="{{duration: 250, easing: cubicInOut}}">
                    <svelte:self tree={children} />
                </div>
            {/if}
        </div>
    {:else}
        <a class="tree-item" class:selected={`/docs${path}` === $page.path} href="/docs{path}">{name}</a>
    {/if}
{/each}