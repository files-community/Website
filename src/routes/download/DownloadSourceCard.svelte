<script lang="ts">
	import { TextBlock } from "fluent-svelte";
	import type { DownloadSource } from "./types";

	export let source: DownloadSource;

	let link: HTMLAnchorElement;

	$: filename = source.href.substring(source.href.lastIndexOf("/") + 1)

	const downloadAppInstaller = () => link.click();

	const downloadWithKeyboard = (e: KeyboardEvent) => {
		if (e.key === "Enter") downloadAppInstaller()
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<article tabindex="0" class="download-source" on:click={downloadAppInstaller} on:keydown={downloadWithKeyboard}>
	<TextBlock variant="title">{source.name}</TextBlock>
	<TextBlock class="download-source-description">
		{source.description}
	</TextBlock>
	<a
		href={source.href}
		download={!source.external ? filename : ""}
		bind:this={link}
		style:display="none"
	>
		download
	</a>
</article>

<style lang="scss">
	.download-source {
		border-radius: var(--fds-control-corner-radius);
		border: 1px solid var(--fds-card-stroke-default);
		box-shadow: var(--fds-card-shadow);
		transition: var(--fds-control-normal-duration) ease;
		background: var(--fds-card-background-default);
		cursor: pointer;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2rem;

		&:hover {
			box-shadow: var(--fds-flyout-shadow);
			transform: translateY(-2px);
		}

		:global {
			.download-source-description {
				max-inline-size: 20ch;
				text-align: center;
			}
		}
	}
</style>
