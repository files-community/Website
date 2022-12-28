<script lang="ts">
	import { draggable, type DragOptions } from "@neodrag/svelte";
	import { Metadata } from "$lib";
	import { page } from "$app/stores";
	import { t } from "$data/i18n";

	const draggableOptions: DragOptions = {
		bounds: "parent",
		handle: ".titlebar"
	};
</script>

<Metadata />

<section class="error-page">
	<div class="window" use:draggable={draggableOptions}>
		<div class="titlebar">
			<div class="titlebar-text">{t('errors.name')}: {$page.status}</div>
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
						{t('errors.description')}
						<br />
						{$page.error.message}
					</p>
				</div>
			</div>
			{#if $page.error.stack}
				<pre><code>{$page.error.stack}</code></pre>
			{/if}
			<footer>
				<a href="/">
					<button>{t('errors.return')}</button>
				</a>
			</footer>
		</div>
	</div>
</section>

<style lang="scss">
	@use "src/styles/pages/error";
</style>
