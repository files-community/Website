<script lang="ts">
	import { defaultI18nValues, HeaderChip, PageSection } from "$lib";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	let scrollPositionY = 0;
</script>

<svelte:window on:scroll={() => (scrollPositionY = window.scrollY)} />

<PageSection id="tabs-section">
	<HeaderChip>{$_("home.tabs.chip", defaultI18nValues)}</HeaderChip>
	<h2>{$_("home.tabs.title", defaultI18nValues)}</h2>
	<p>{$_("home.tabs.description", defaultI18nValues)}</p>
	<div class="buttons-spacer">
		<Button href="/download/" variant="accent">
			{$_("home.tabs.download", defaultI18nValues)}
		</Button>
		<Button variant="hyperlink" href="/docs/features/tabs">
			{$_("home.tabs.learn_more", defaultI18nValues)}
		</Button>
	</div>
	<div class="tabs-image">
		<picture>
			<source
				media="(prefers-color-scheme: dark)"
				srcset="/screenshots/folder-list-dark.png"
			/>
			<source
				media="(prefers-color-scheme: light)"
				srcset="/screenshots/folder-list-light.png"
			/>
			<img
				alt="Files screenshot"
				class="files-screenshot"
				height="768"
				src="/screenshots/folder-list-light.png"
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
	@use "TabsSection";
</style>
