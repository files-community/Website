<script lang="ts">
    export let group = [];
    export let value = undefined;
    export let selected: boolean = false;
    export let disabled: boolean = false;
    export let compact: boolean = false;
    export let type: "default" | "checkbox" | "radio" | "combobox" | "link" = "default";
</script>

<style lang="scss" src="./MenuFlyoutItem.scss"></style>

{#if type === "default"}
    <li role="menuitem" class="menu-flyout-item" {...$$restProps}>
        <slot/>
    </li>
    {:else if type === "link"}

    <!-- svelte-ignore a11y-missing-attribute -->
    <a role="menuitem" class="menu-flyout-item" {...$$restProps}>
        <slot/>
    </a>
    {:else if type === "checkbox"}
    <label
        role="menuitem"
        class="menu-flyout-item"
        class:selected
        {...$$restProps}
    >
        <input bind:checked={selected} bind:group {value} type="checkbox" hidden />
        <slot/>
    </label>
    {:else if type === "radio" || type === "combobox"}
    <label
        role="menuitem"
        class="menu-flyout-item"
        class:combo-box-item={type === "combobox"}
        class:selected={(group === value) || selected}
        {...$$restProps}
    >
        <input bind:group {value} checked={selected} type="radio" hidden />
        <slot/>
    </label>
{/if}