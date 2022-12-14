<script lang="ts">
	import { externalLink } from "$lib";
	import { TextBlock } from "fluent-svelte";
	import type { DownloadSource } from "./types";

	export let source: DownloadSource;

	let link: HTMLAnchorElement;

	$: filename = source.href.substring(source.href.lastIndexOf("/") + 1);

	const downloadAppInstaller = () => link.click();

	const downloadWithKeyboard = (e: KeyboardEvent) => {
		if (e.key === "Enter") downloadAppInstaller();
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<article
	tabindex="0"
	class="download-source"
	on:click={downloadAppInstaller}
	on:keydown={downloadWithKeyboard}
>
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset={source.darkModeIcon} />
		<img
			class="download-source-icon"
			src={source.icon}
			alt="{source.name} logo"
		/>
	</picture>
	<TextBlock variant="title" style="text-align: center;">{source.name}</TextBlock>
	<TextBlock class="download-source-description">
		{source.description}
	</TextBlock>
	<a
		href={source.href}
		download={!source.external ? filename : ""}
		{...externalLink}
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
		place-items: center;
		gap: 1rem;
		padding: 2rem;

		@media (prefers-reduced-motion: no-preference) {
			&:hover {
				box-shadow: var(--fds-flyout-shadow);
				transform: translateY(-2px);

				.download-source-icon {
					box-shadow: var(--fds-flyout-shadow);
					transform: translateY(-2px);
				}
			}
		}

		:global {
			.download-source-description {
				max-inline-size: 20ch;
				text-align: center;
			}
		}

		.download-source-icon {
			max-inline-size: 10rem;
			transition: var(--fds-control-normal-duration) ease;
		}
	}
</style>
