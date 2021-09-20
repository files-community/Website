<script lang="ts">
  export let href = undefined;
  export let disabled: boolean = false;
  let className: string = "";
  export { className as class };
</script>

<a
  {...$$restProps}
  class="hyperlink-button {className || ''}"
  class:disabled
  href={href && !disabled ? href : undefined}
  on:blur
  on:click
  on:focus
  on:keydown
  on:keypress
>
  <slot />
</a>

<style lang="scss">
	@use "HyperlinkButton";
</style>