<script lang="ts">
	export let variant: "standard" | "accent" = "standard";
	export let type = "button";
	export let href = undefined;
	export let disabled = false;
	let className = "";
	export { className as class };
</script>

{#if href}
	<a
		class="button style-{variant} {className || ''}"
		class:disabled
		on:click
		on:keypress
		on:keydown
		on:focus
		on:blur
		href={disabled ? undefined : href}
		{...$$restProps}
	>
		<slot />
	</a>
{:else}
	<button
		class="button style-{variant} {className || ''}"
		on:click
		on:keypress
		on:keydown
		on:focus
		on:blur
		{type}
		{disabled}
		{...$$restProps}
	>
		<slot />
	</button>
{/if}

<style lang="scss" src="./Button.scss"></style>
