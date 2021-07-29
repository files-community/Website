<script lang="ts">
    export let href = undefined;
    export let group = undefined;
    export let value = undefined;
    export let selected: boolean = false;
    export let style: "default" | "navigation" = "default";
    let className = "";
    export { className as class };
</script>

<style lang="scss" src="./ListViewItem.scss"></style>

{#if typeof group === "undefined"}
    {#if !href}
        <li on:click class="list-view-item style-{style} {className || ""}" class:type-icon={$$slots.icon} class:selected {...$$restProps}>
            <slot name="icon" />
            <span>
                <slot />
            </span>
        </li>
        {:else}
        <a on:click class="list-view-item style-{style} {className || ""}" class:type-icon={$$slots.icon} class:selected {href} {...$$restProps}>
            <slot name="icon" />
            <span>
                <slot />
            </span>
        </a>
    {/if}
    {:else}
    <label>
        <input bind:group on:change type="radio" {value} checked={selected} hidden />
        <svelte:self on:click {style} class={className} {href} selected={(group === value) || selected} {...$$restProps}>
            <slot />
        </svelte:self>
    </label>
{/if}