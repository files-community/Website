<script lang="ts">
	import { browser } from "$app/environment";
	import { links } from "$data/links";
	import {
		defaultI18nValues,
		Metadata,
		storeHref,
		storeProtocolHref,
	} from "$lib";
	import { InstallDialog } from "$layout";
	import { Button, TextBlock } from "fluent-svelte";
	import DownloadSourceCard from "./DownloadSourceCard.svelte";
	import type { DownloadSource } from "./types";
	import type { PageData } from "./$types";
	import { _ } from "svelte-i18n";
	import { fly } from "svelte/transition";
	import { quartOut } from "svelte/easing";

	export let data: PageData;

	// Read up front: the intro transitions take their settings when they
	// are created, before an onMount update would apply
	const reduceMotion =
		browser && matchMedia("(prefers-reduced-motion: reduce)").matches;

	const { stableVersion, previewVersion } = data;

	const storeSources = [
		{
			name: $_("download.stable_name", defaultI18nValues),
			description: $_(
				"download.microsoft_store.description",
				defaultI18nValues,
			),
			href: storeHref(links.storeId),
			protocolHref: storeProtocolHref(links.storeId),
			icon: "/branding/logo-light.svg",
			darkModeIcon: "/branding/logo-dark.svg",
			external: true,
			paid: true,
			recommended: true,
			version: stableVersion,
		},
		{
			name: $_("download.preview_name", defaultI18nValues),
			description: $_("download.preview.description", defaultI18nValues),
			href: storeHref(links.storePreviewId),
			protocolHref: storeProtocolHref(links.storePreviewId),
			icon: "/download-sources/preview_light.svg",
			darkModeIcon: "/download-sources/preview_dark.svg",
			external: true,
			paid: true,
			version: previewVersion,
		},
	] as const satisfies readonly DownloadSource[];

	let installOpen = false;
</script>

<Metadata title="Files • Download" image="download" />

<main class="download-page">
	<header class="page-header">
		<TextBlock variant="titleLarge">
			{$_("download.title", defaultI18nValues)}
		</TextBlock>
		<TextBlock class="page-subtitle">
			{$_("download.subtitle", defaultI18nValues)}
		</TextBlock>
	</header>

	<section class="download-group">
		{#each storeSources as source, i (source.href)}
			<div
				in:fly={{
					y: 8,
					duration: reduceMotion ? 0 : 200,
					delay: reduceMotion ? 0 : i * 40,
					easing: quartOut,
				}}
			>
				<DownloadSourceCard {source} />
			</div>
		{/each}
	</section>

	<div class="other-options">
		<Button variant="hyperlink" on:click={() => (installOpen = true)}>
			{$_("download.other_options", defaultI18nValues)}
		</Button>
		<!-- Old links to the install docs land here, so keep their troubleshooting in reach -->
		<Button variant="hyperlink" href="/docs/getting-started/troubleshooting">
			{$_("download.requirements.troubleshooting", defaultI18nValues)}
		</Button>
	</div>
</main>

<InstallDialog bind:open={installOpen} />

<style lang="scss">
	.download-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		gap: 1.5rem;
		padding: 2rem;
		max-width: 900px;
		margin-inline: auto;

		min-block-size: calc(100vh - 58px);

		.page-header {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
			text-align: center;

			:global(.page-subtitle) {
				color: var(--fds-text-secondary);
			}
		}

		.download-group {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.other-options {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.5rem;
		}
	}
</style>
