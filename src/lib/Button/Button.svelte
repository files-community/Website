<script lang="ts">
	import type { ButtonStyles } from "src/types"

	export let buttonStyle: ButtonStyles = "standard"
	export let type = "button"
	export let href = undefined
	export let disabled = false
	let className = ""
	export { className as class }
</script>

<style lang="scss" src="./Button.scss"></style>

{#if href}
	<a
			class="button style-{buttonStyle} {className || ''}"
			class:disabled
			on:click
			on:keypress
			on:keydown
			on:focus
			on:blur
			href={disabled ? undefined : href}
			{...$$restProps}
	>
		<slot/>
	</a>
{:else}
	<button
			class="button style-{buttonStyle} {className || ''}"
			on:click
			on:keypress
			on:keydown
			on:focus
			on:blur
			{type}
			{disabled}
			{...$$restProps}
	>
		<slot/>
	</button>
{/if}