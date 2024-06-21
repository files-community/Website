<script lang="ts">
	export let type: "header" | "footer" | undefined = undefined;

	let className = "";
	export { className as class };
</script>

<svelte:element
	this={type ?? "section"}
	class="page-section{' ' + className || ''}"
	{...$$restProps}
>
	<slot name="outer" />
	{#if $$slots.default}
		<div class="page-section-inner">
			<slot />
		</div>
	{/if}
</svelte:element>

<style lang="scss">
	@use "./PageSection";
</style>
