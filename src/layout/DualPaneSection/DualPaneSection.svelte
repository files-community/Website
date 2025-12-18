<script lang="ts">
	import { defaultI18nValues, HeaderChip, PageSection } from "$lib";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	let scrollPositionY = 0;
</script>

<svelte:window on:scroll={() => (scrollPositionY = window.scrollY)} />

<PageSection id="dual-pane-section">
	<HeaderChip>{$_("home.dual-pane.chip", defaultI18nValues)}</HeaderChip>
	<h2>{$_("home.dual-pane.title", defaultI18nValues)}</h2>
	<p>{$_("home.dual-pane.description", defaultI18nValues)}</p>
	<div class="buttons-spacer">
		<Button href="/download/" variant="accent">
			{$_("home.dual-pane.download", defaultI18nValues)}
		</Button>
		<Button variant="hyperlink" href="/docs/features/dual-pane">
			{$_("home.dual-pane.learn_more", defaultI18nValues)}
		</Button>
	</div>
	<div class="dual-pane-image">
		<picture>
			<source
				media="(prefers-color-scheme: dark)"
				srcset="/screenshots/dual-pane-dark.png"
			/>
			<source
				media="(prefers-color-scheme: light)"
				srcset="/screenshots/dual-pane-light.png"
			/>
			<img
				alt="Files Dual Pane screenshot"
				class="files-screenshot"
				height="768"
				src="/screenshots/dual-pane-light.png"
				style:transform="translateY({Math.floor(scrollPositionY / +35)}px)"
				width="1024"
			/>
		</picture>
		<picture>
			<source
				media="(prefers-color-scheme: dark)"
				srcset="/screenshots/win11-dark.jpg"
			/>
			<source
				media="(prefers-color-scheme: light)"
				srcset="/screenshots/win11-light.jpg"
			/>
			<img
				alt="Windows 11 wallpaper"
				class="files-wallpaper"
				height="900"
				src="/screenshots/win11-light.jpg"
				width="1440"
			/>
		</picture>
	</div>
</PageSection>

<style lang="scss">
	@use "DualPaneSection";
</style>
