<script lang="ts">
    export let href = undefined;
    export let selected: boolean = false;
    export let style: "default" | "navigation" = "default";
    let className;
    export { className as class };
</script>

<style lang="scss" src="./ListViewItem.scss"></style>

{#if !href}
    <li class="list-view-item style-{style} {className || ""}" class:type-icon={$$slots.icon} class:selected {...$$restProps}>
        <slot name="icon" />
        <span>
            <slot />
        </span>
    </li>
    {:else}
    <a class="list-view-item style-{style} {className || ""}" class:type-icon={$$slots.icon} class:selected {href} {...$$restProps}>
        <slot name="icon" />
        <span>
            <slot />
        </span>
    </a>
{/if}