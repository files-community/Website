<script lang="ts">
	import { defaultI18nValues, externalLink, HeaderChip, PageSection } from "$lib";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import { links } from "$data/links";
	import ArrowDownload from "~icons/fluent/arrow-download-24-regular";
	import Code from "~icons/fluent/code-24-regular";
</script>

<PageSection id="hero-section">
	<div class="hero-left">
		<h1>Files</h1>
		<p>{$_("home.hero.description", defaultI18nValues)}</p>
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
	<div class="hero-right">
		<div class="hero-image-container">
			<picture>
				<source
					media="(prefers-color-scheme: dark)"
					srcset="/screenshots/folder-list-dark.png"
				>
				<source
					media="(prefers-color-scheme: light)"
					srcset="/screenshots/folder-list-light.png"
				>
				<img
					alt="Files new tab screenshot"
					height="768"
					src="/screenshots/folder-list-light.png"
					width="1024"
				>
			</picture>
		</div>
	</div>
	<div class="rainbow-background" slot="outer"></div>
</PageSection>

<style lang="scss">
	@use "HeroSection";
</style>
