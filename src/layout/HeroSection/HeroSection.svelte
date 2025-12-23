<script lang="ts">
	import { defaultI18nValues, externalLink, HeaderChip, PageSection } from "$lib";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import { links } from "$data/links";
	import ArrowDownload from "~icons/fluent/arrow-download-24-regular";
	import Code from "~icons/fluent/code-24-regular";
	let scrollPositionY: number;
</script>

<svelte:body on:scroll={() => (scrollPositionY = document.body.scrollTop)} />

<PageSection id="hero-section">
	<h2>{$_("home.hero.title", defaultI18nValues)}</h2>
	<p>{$_("home.hero.description", defaultI18nValues)}</p>
	<div class="hero-left">
		<div class="buttons-spacer">
			<Button
				href="/download"
				id="hero-download-button"
				variant="accent"
			>
				<ArrowDownload />
				<div class="hero-button-inner">
					<h5>{$_("home.hero.download", defaultI18nValues)}</h5>
					<span>{$_("home.hero.install_on_windows", defaultI18nValues)}</span>
				</div>
			</Button>
			<Button
				href="https://github.com/{links.github.owner}/{links.github.repo}/"
				{...externalLink}
			>
				<Code />
				<div class="hero-button-inner">
					<h5>{$_("home.hero.view_on_github", defaultI18nValues)}</h5>
					<span>{$_("home.hero.files_is_open_source", defaultI18nValues)}</span>
				</div>
			</Button>
		</div>
	</div>
	<div class="hero-image">
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
				alt="Files folder list screenshot"
				class="files-screenshot"
				height="768"
				src="/screenshots/folder-list-light.png"
				style:transform="translateY({Math.floor(scrollPositionY / +20)}px)"
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
	@use "HeroSection";
</style>
