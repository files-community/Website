<script lang="ts">
	import {
		defaultI18nValues,
		externalLink,
		HeaderChip,
		openWithStoreProtocol,
		PageSection,
	} from "$lib";
	import { Button, MenuFlyout, MenuFlyoutItem } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import { goto } from "$app/navigation";
	import { links } from "$data/links";
	import ArrowDownload from "~icons/fluent/arrow-download-24-regular";
	import ChevronDown from "~icons/fluent/chevron-down-16-regular";
	import Code from "~icons/fluent/code-24-regular";

	const storeHref = `https://apps.microsoft.com/detail/${links.storeId}?cid=FilesWebsite`;
	const storeProtocolHref = `ms-windows-store://pdp/?ProductId=${links.storeId}&cid=FilesWebsite`;
</script>

<PageSection id="hero-section">
	<div class="hero-left">
		<h1>Files</h1>
		<p>{$_("home.hero.description", defaultI18nValues)}</p>
		<div class="buttons-spacer">
			<div class="split-button">
				<Button
					href={storeHref}
					id="hero-download-button"
					variant="accent"
					{...externalLink}
					on:click={e => openWithStoreProtocol(e, storeProtocolHref, storeHref)}
				>
					<ArrowDownload />
					<div class="hero-button-inner">
						<h5>{$_("home.hero.download", defaultI18nValues)}</h5>
						<span>{$_("home.hero.install_on_windows", defaultI18nValues)}</span>
					</div>
				</Button>
				<MenuFlyout placement="bottom" alignment="end">
					<Button
						variant="accent"
						aria-label={$_("download.more_options", defaultI18nValues)}
					>
						<ChevronDown />
					</Button>
					<svelte:fragment slot="flyout">
						<MenuFlyoutItem on:click={() => goto("/download")}>
							{$_("download.more_options", defaultI18nValues)}
						</MenuFlyoutItem>
					</svelte:fragment>
				</MenuFlyout>
			</div>
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
					srcset="/screenshots/dual-pane-dark.png"
				/>
				<source
					media="(prefers-color-scheme: light)"
					srcset="/screenshots/dual-pane-light.png"
				/>
				<img
					alt="Files new tab screenshot"
					height="768"
					src="/screenshots/dual-pane-light.png"
					width="1024"
				/>
			</picture>
		</div>
	</div>
	<div class="rainbow-background" slot="outer"></div>
</PageSection>

<style lang="scss">
	@use "HeroSection";
</style>
