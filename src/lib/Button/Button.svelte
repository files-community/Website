<script lang="ts">
    import type { ButtonStyles } from "$types";

    export let style: ButtonStyles = "standard";
    export let type: string = "button";
    export let id = undefined;
    export let href = undefined;
    export let disabled: boolean = false;
    let className = undefined;
    export {className as class};
</script>

<style lang="scss" src="./Button.scss"></style>

{#if href}
    <a
        class={`button style-${style}` + ` ${className || ""}`}
        class:disabled
        on:click
        on:keypress
        on:keydown
        on:focus
        on:blur
        {id}
        href={disabled ? undefined : href}
        {...$$restProps}
    >
        <slot />
    </a>
    {:else}
    <button
        class={`button style-${style}` + ` ${className || ""}`}
        on:click
        on:keypress
        on:keydown
        on:focus
        on:blur
        {type}
        {id}
        {disabled}
        {...$$restProps}
    >
        <slot />
    </button>
{/if}