<script lang="ts">
	import { links } from "$data/links";
	import { externalLink, Metadata } from "$lib";
	import { Button, InfoBadge, InfoBar, TextBlock } from "fluent-svelte";
	import { onMount } from "svelte";
	import DownloadSourceCard from "./DownloadSourceCard.svelte";
	import type { DownloadSource } from "./types";
	import { _ } from "svelte-i18n";

	let isWindows = false;

	const downloadSources = [
		{
			name: "Microsoft Store",
			description: $_("download.microsoft_store.description"),
			href: `ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite`,
			icon: "/download-sources/msstore_light.svg",
			darkModeIcon: "/download-sources/msstore_dark.svg",
			external: true
		},
		{
			name: $_("download.preview.title"),
			description: $_("download.preview.description"),
			href: "/appinstallers/Files.preview.appinstaller",
			icon: "/download-sources/preview_light.svg",
			darkModeIcon: "/download-sources/preview_dark.svg"
		}
	] as const satisfies readonly DownloadSource[];

	onMount(() => {
		isWindows = navigator.userAgent.includes("Windows");
	});
</script>

<Metadata title="Files • Download" image="download" />

<slot />

<main class="download-page">
	<TextBlock variant="titleLarge" style="text-align: center;"
		>{$_("download.title")}</TextBlock
	>
	<InfoBar severity="success" closable={false}>
		{$_("download.donation_description")}

		<Button
			slot="action"
			variant="accent"
			href="https://paypal.me/yaichenbaum"
			{...externalLink}
		>
			{$_("download.donation_button")}
		</Button>

		<svelte:fragment slot="icon">&nbsp;</svelte:fragment>
	</InfoBar>

	<section class="download-sources">
		{#each downloadSources as source}
			<DownloadSourceCard {source} />
		{/each}
		<p>
			{$_("download.self_signed.description")}<a
				href="/appinstallers/Files.Stable.exe"
				>{$_("download.self_signed.link_text")}</a
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
