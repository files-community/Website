<script context="module" lang="ts">
	import type { ErrorLoad } from "@sveltejs/kit";

	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				status: status,
				error: error
			}
		};
	};
</script>

<script lang="ts">
	import { draggable, DragOptions } from "@neodrag/svelte";
	import { Metadata } from "$lib";

	export let status: number;
	export let error: Error;

	const draggableOptions: DragOptions = {
		bounds: "parent",
		handle: ".titlebar"
	};
</script>

<svelte:head>
	<Metadata />
</svelte:head>

<section class="error-page">
	<div class="window" use:draggable={draggableOptions}>
		<div class="titlebar">
			<div class="titlebar-text">Error: {status}</div>
			<div class="titlebar-controls">
				<button aria-label="Minimize" />
				<button aria-label="Maximize" />
				<button aria-label="Close" />
			</div>
		</div>
		<div class="window-body">
			<div class="error-inner">
				<img alt="Error icon" src="/ui/icons/98-error.png" />
				<div class="error-message">
					<p>
						Uh Oh! Something went wrong while loading this page.
						<br />
						{error.message}
					</p>
				</div>
			</div>
			{#if error.stack}
				<pre><code>{error.stack}</code></pre>
			{/if}
			<footer>
				<a href="/">
					<button>Return Home</button>
				</a>
			</footer>
		</div>
	</div>
</section>

<style lang="scss">
	@use "src/styles/pages/error";
</style>
