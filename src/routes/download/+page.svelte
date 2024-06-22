<script lang="ts">
	import { defaultI18nValues, externalLink, Metadata } from "$lib";
	import { Button, InfoBar, TextBlock } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import DownloadSourceCard from "./DownloadSourceCard.svelte";
	import type { DownloadSource } from "./types";

	import HelpIcon from "~icons/fluent/handshake-24-filled";

	const downloadSources = [
		{
			name: $_("download.microsoft_store.title", defaultI18nValues),
			description: $_(
				"download.microsoft_store.description",
				defaultI18nValues,
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
</script>

<Metadata title="Files • Download" image="download" />

<slot />

<main class="download-page">
	<TextBlock variant="titleLarge" style="text-align: center;"
		>{$_("download.title", defaultI18nValues)}</TextBlock
	>
	<InfoBar class="donation-infobar" severity="success" closable={false}>
		<div class="mb-2 mt-2 flex gap-2">
			{$_("download.donation_description", defaultI18nValues)}

			<Button
				slot="action"
				href="https://github.com/sponsors/yaira2"
				{...externalLink}
			>
				{$_("download.donation_button", defaultI18nValues)}
			</Button>
		</div>

		<HelpIcon slot="icon"></HelpIcon>
	</InfoBar>

	<section class="download-sources">
		{#each downloadSources as source}
			<DownloadSourceCard {source} />
		{/each}
	</section>

	<p class="text-center">
		{$_("download.self_signed.description", defaultI18nValues)}<a
			href="https://cdn.files.community/files/download/Files.Stable.exe"
			class="text-[--fds-accent-text-primary] underline hover:text-[--fds-accent-text-tertiary] hover:no-underline active:text-[--fds-accent-text-secondary] active:no-underline"
			>{$_("download.self_signed.link_text", defaultI18nValues)}</a
		>.
	</p>
</main>

<style lang="scss">
	.download-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		gap: 1rem;
		padding: 1rem;
		max-width: 900px;
		margin-inline: auto;

		inline-size: fit-content;
		block-size: calc(100vh - 58px);

		.download-sources {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
		}
	}
</style>
