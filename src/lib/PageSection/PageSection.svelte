 <script lang="ts">
	export let type: string = undefined;

	let className = "";
	export { className as class };
</script>

<!-- go complain to https://github.com/sveltejs/svelte/pull/5481 -->
{#if type === "header"}
	<header {...$$restProps} class="page-section{' ' + className || ''}">
		<slot name="outer" />
		{#if $$slots.default}
			<div class="page-section-inner">
				<slot />
			</div>
		{/if}
	</header>
{:else if type === "footer"}
	<footer {...$$restProps} class="page-section{' ' + className || ''}">
		<slot name="outer" />
		{#if $$slots.default}
			<div class="page-section-inner">
				<slot />
			</div>
		{/if}
	</footer>
{:else}
	<section {...$$restProps} class="page-section{' ' + className || ''}">
		<slot name="outer" />
		{#if $$slots.default}
			<div class="page-section-inner">
				<slot />
			</div>
		{/if}
	</section>
{/if}

<style lang="scss">@use "./PageSection";
</style>
