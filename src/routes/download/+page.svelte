<script lang="ts">
	import { links } from "$data/links";
	import { externalLink, Metadata } from "$lib";
	import { Button, InfoBadge, InfoBar, TextBlock } from "fluent-svelte";
	import { onMount } from "svelte";
	import DownloadSourceCard from "./DownloadSourceCard.svelte";
	import type { DownloadSource } from "./types";

	let isWindows = false;

	const downloadSources = [
		{
			name: "Microsoft Store",
			description: "Get Files from the Microsoft Store",
			href: isWindows
				? `ms-windows-store://pdp/?ProductId=${links.storeId}&mode=mini`
				: `https://www.microsoft.com/store/apps/${links.storeId}?mode=mini&cid=FilesWebsite`,
			icon: "/download-sources/msstore_light.svg",
			darkModeIcon: "/download-sources/msstore_dark.svg",
			external: true
		},
		{
			name: "Sideload",
			description: "Install Files without the Microsoft Store",
			href: "/appinstallers/Files.stable.appinstaller",
			icon: "/branding/logo-light.svg",
			darkModeIcon: "/branding/logo-dark.svg"
		},
		{
			name: "Preview",
			description: "Get early access to improvements and new features",
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
		>Download Files</TextBlock
	>
	<InfoBar severity="success" closable={false}>
		Please consider sponsoring Files on GitHub!

		<Button
			slot="action"
			variant="accent"
			href="https://github.com/sponsors/yaira2"
			{...externalLink}
		>
			Sponsor Now
		</Button>

		<svelte:fragment slot="icon">
			&nbsp;
		</svelte:fragment>
	</InfoBar>

	<section class="download-sources">
		{#each downloadSources as source}
			<DownloadSourceCard {source} />
		{/each}
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

		block-size: calc(100vh - 58px);

		.download-sources {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 1rem;
		}
	}
</style>
