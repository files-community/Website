<script lang="ts">
	import { externalLink, Metadata } from "$lib";
	import { Button, InfoBar, ProgressRing } from "fluent-svelte";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { page } from "$app/stores";
	import { dev } from "$app/env";
	import { text } from "../../i18n/i18n";

	$: channel = $page.url.pathname.includes("preview") ? "preview" : "stable";

	let link: HTMLAnchorElement;

	let firefox = false;

	const downloadAppInstaller = () => link.click();

	onMount(() => {
		firefox = navigator.userAgent.includes("Firefox");
		if (!dev) downloadAppInstaller();
	});
</script>

<svelte:head>
	<Metadata title="Files • Download {channel}" image="download" />
</svelte:head>

<slot />

<main class="download-page">
	<h1>{text.section.download.downloading()}</h1>
	<ProgressRing size={64} />
	<p>{text.section.download.thankYou()} 🎉</p>
	<p>{@html text.section.download.comment({link: "<a href=\"/appinstallers/Files.{channel}.appinstaller\" download bind:this={link}>" +  text.section.download.here() + "</a>"})}</p>

	{#if firefox}
		<InfoBar severity="caution" closable={false}>
			{@html text.section.download.firefoxMessage()}
		</InfoBar>
	{/if}

	<p>{text.section.download.wantSupport()}</p>
	<Button
		href="https://github.com/sponsors/yaichenbaum"
		variant="accent"
		{...externalLink}
	>
		{text.section.download.donate()}
	</Button>
</main>

<style lang="scss">
	.download-page {
		display: grid;
		place-items: center;
		margin-block-start: 1rem;

		h1 {
			font-size: 5rem;
		}

		p {
			font-size: 1.75rem;

			&:nth-last-child(2) {
				margin-block: 2em;
			}

			&:last-child {
				margin-block-start: 0;
				padding-block-start: 1em;
				border-top: 1px solid var(--fds-subtle-fill-secondary)
			}
		}
	}
</style>