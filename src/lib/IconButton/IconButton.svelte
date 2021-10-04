<script lang="ts">
	export let size = undefined;
	export let href = "";

	let className = "";
	export { className as class };
</script>

{#if href}
	<a {href} class="icon-button {className || ''}" style={size ? `--icon-size: ${size}px` : undefined} {...$$restProps}>
		<slot />
	</a>
{:else}
	<button class="icon-button {className || ''}" style={size ? `--icon-size: ${size}px` : undefined} {...$$restProps}>
		<slot />
	</button>
{/if}

<style lang="scss" src="./IconButton.scss"></style>