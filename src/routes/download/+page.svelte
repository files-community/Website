<script lang="ts">
	import { dev } from "$app/environment";
	import { page } from "$app/stores";
	import { links } from "$data/links";
	import { externalLink, Metadata } from "$lib";
	import { Button, InfoBar, TextBlock } from "fluent-svelte";
	import { onMount } from "svelte";
	import DownloadSourceCard from "./DownloadSourceCard.svelte";
	import type { DownloadSource } from "./types";

	$: channel = $page.url.pathname.includes("preview") ? "preview" : "stable";

	let isWindows = false;

	const downloadSources = [
		{
			name: "Microsoft Store",
			description: "Get Files from the Microsoft Store.",
			href: isWindows
				? `ms-windows-store://pdp/?ProductId=${links.storeId}&mode=mini`
				: `https://www.microsoft.com/store/apps/${links.storeId}?cid=FilesWebsite`,
			icon: "",
			external: true
		},
		{
			name: "Sideload",
			description:
				"Install Files without the Microsoft Store",
			href: "/appinstallers/Files.stable.appinstaller",
			icon: ""
		},
		{
			name: "Sideload Preview",
			description: "Get early access to improvements and new features.",
			href: "/appinstallers/Files.preview.appinstaller",
			icon: ""
		}
	] as const satisfies readonly DownloadSource[];

	onMount(() => {
		isWindows = navigator.userAgent.includes("Windows");
	});
</script>

<svelte:head>
	<Metadata title="Files • Download {channel}" image="download" />
</svelte:head>

<slot />

<main class="download-page">
	<TextBlock variant="titleLarge" style="text-align: center;"
		>Download Files</TextBlock
	>

	<div class="download-page-main-content">
		<InfoBar severity="attention" closable={false}>
			Please consider sponsoring Files on GitHub!

			<Button
				slot="action"
				variant="accent"
				href="https://github.com/sponsors/yaira2"
				{...externalLink}
			>
				Sponsor Now
			</Button>
		</InfoBar>

		<section class="download-sources">
			{#each downloadSources as source}
				<DownloadSourceCard {source} />
			{/each}
		</section>
	</div>
</main>

<style lang="scss">
	.download-page {
		display: grid;
		place-content: space-around center;
		grid-template-rows: 0.5fr 1.5fr;
		gap: 1rem;
		padding: 2rem;

		block-size: calc(100vh - 58px);

		.download-page-main-content {
			.download-sources {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 1rem;
			}
		}
	}
</style>
