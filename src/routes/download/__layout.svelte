<script lang="ts">
	import { externalLink, Metadata } from "$lib";
	import { Button, InfoBar, ProgressRing } from "fluent-svelte";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { page } from "$app/stores";
	import { dev } from "$app/env";

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
	<h1>Downloading...</h1>
	<ProgressRing size={64} />
	<p>Thank you for downloading Files! 🎉</p>
	<p>If the download hasn't started yet, press
		<a href="/appinstallers/Files.{channel}.appinstaller" download bind:this={link}>
			here
		</a>
		to start it:
	</p>

	{#if firefox}
		<InfoBar severity="caution" closable={false}>
			Firefox adds a <code>.xml</code> file extension to the downloaded installer.
			Remove it before opening the installer.
		</InfoBar>
	{/if}

	<p>Want to support the creators of Files?</p>
	<Button
		href="https://github.com/sponsors/yaichenbaum"
		variant="accent"
		{...externalLink}
	>
		Donate
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