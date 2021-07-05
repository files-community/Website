<script lang="ts">
    export let href = undefined;
    export let disabled: boolean = false;
    let className = undefined;
    export {className as class};
</script>

<style lang="scss" src="./HyperlinkButton.scss" global></style>

<a
    class={"hyperlink-button" + ` ${className}` || ""}
    class:disabled
    on:click
    on:keypress
    on:keydown
    on:focus
    on:blur
    href={(href && !disabled) ? href : undefined}
    {...$$restProps}
>
    <slot />
</a>