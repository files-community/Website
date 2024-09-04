<script lang="ts">
	import { links } from "$data/links";
	import { defaultI18nValues, externalLink, Metadata } from "$lib";
	import { Button, InfoBadge, InfoBar, TextBlock } from "fluent-svelte";
	import { onMount } from "svelte";
	import DownloadSourceCard from "./DownloadSourceCard.svelte";
	import type { DownloadSource } from "./types";
	import { _ } from "svelte-i18n";

	let isWindows = false;

	const downloadSources = [
		{
			name: $_("download.microsoft_store.title", defaultI18nValues),
			description: $_(
				"download.microsoft_store.description",
				defaultI18nValues
			),
			href: `ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite`,
			icon: "/branding/logo-light.svg",
			darkModeIcon: "/branding/logo-dark.svg",
			external: true,
		},
		{
			name: $_("download.preview.title", defaultI18nValues),
			description: $_("download.preview.description", defaultI18nValues),
			href: "/appinstallers/Files.preview.appinstaller",
			icon: "/download-sources/preview_light.svg",
			darkModeIcon: "/download-sources/preview_dark.svg",
		},
	] as const satisfies readonly DownloadSource[];

	onMount(() => {
		isWindows = navigator.userAgent.includes("Windows");
	});
</script>

<Metadata title="Files • Download" image="download" />

<slot />

<main class="download-page">
	<TextBlock variant="titleLarge" style="text-align: center;"
		>{$_("download.title", defaultI18nValues)}</TextBlock
	>
	<InfoBar class="donation-infobar" severity="success" closable={false}>
		<div
			style="display: flex; gap: 0.5rem; margin-block-end: 7px; margin-block-start: 7px;"
		>
			{$_("download.donation_description", defaultI18nValues)}

			<Button
				slot="action"
				variant="accent"
				href="https://github.com/sponsors/yaira2"
				{...externalLink}
			>
				{$_("download.donation_button", defaultI18nValues)}
			</Button>
		</div>

		<svelte:fragment slot="icon">&nbsp;</svelte:fragment>
	</InfoBar>

	<section class="download-sources">
		{#each downloadSources as source}
			<DownloadSourceCard {source} />
		{/each}
		<p>
			{$_("download.self_signed.description", defaultI18nValues)}<a
				href="/appinstallers/Files.stable.appinstaller"
				>{$_("download.self_signed.link_text", defaultI18nValues)}</a
			>.
		</p>
	</section>
</main>

<style lang="scss">
	.download-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		gap: 2rem;
		padding: 2rem;
		max-width: 900px;
		margin-inline: auto;

		inline-size: fit-content;
		block-size: calc(100vh - 58px);

		.download-sources {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			> p {
				text-align: center;
			}
		}
	}
</style>
