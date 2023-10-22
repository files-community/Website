<script lang="ts">
	import { draggable, type DragOptions } from "@neodrag/svelte";
	import { Metadata } from "$lib";
	import { page } from "$app/stores";

	const draggableOptions: DragOptions = {
		bounds: "parent",
		handle: ".titlebar",
	};
</script>

<Metadata />

<section class="error-page">
	<div class="window" use:draggable={draggableOptions}>
		<div class="titlebar">
			<div class="titlebar-text">Error: {$page.status}</div>
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
						{$page.error?.message}
					</p>
				</div>
			</div>
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
