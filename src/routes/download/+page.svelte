<script lang="ts">
	import { defaultI18nValues, Metadata } from "$lib";
	import { TextBlock } from "fluent-svelte";
	import DownloadSourceCard from "./DownloadSourceCard.svelte";
	import type { DownloadSource } from "./types";
	import type { PageData } from "./$types";
	import { _ } from "svelte-i18n";
	import { fly, slide } from "svelte/transition";
	import { quartOut } from "svelte/easing";
	import { onMount } from "svelte";

	export let data: PageData;

	let reduceMotion = false;

	onMount(() => {
		reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
	});

	const { stableVersion, previewVersion } = data;

	type Method = "store" | "classic";

	let showMoreOptions = false;

	const downloadSources = {
		store: [
			{
				name: $_("download.stable_name", defaultI18nValues),
				description: $_(
					"download.microsoft_store.description",
					defaultI18nValues,
				),
				href: `https://apps.microsoft.com/detail/9nghp3dx8hdx?cid=FilesWebsite`,
				protocolHref: `ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite`,
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
				href: `https://apps.microsoft.com/detail/9NSQD9PKV3SS?cid=FilesWebsite`,
				protocolHref: `ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite`,
				icon: "/download-sources/preview_light.svg",
				darkModeIcon: "/download-sources/preview_dark.svg",
				external: true,
				paid: true,
				version: previewVersion,
			},
		],
		classic: [
			{
				name: $_("download.other_methods.name", defaultI18nValues),
				description: $_(
					"download.other_methods.description",
					defaultI18nValues,
				),
				href: `/docs/getting-started/install`,
				icon: "/ui/icons/exe.png",
			},
		],
	} as const satisfies Record<Method, readonly DownloadSource[]>;
</script>

<Metadata title="Files • Download" image="download" />

<slot />

<main class="download-page">
	<header class="page-header">
		<TextBlock variant="titleLarge">
			{$_("download.title", defaultI18nValues)}
		</TextBlock>
		<TextBlock class="page-subtitle">
			{$_("download.subtitle", defaultI18nValues)}
		</TextBlock>
	</header>
	<section class="download-sources">
		{#each downloadSources.store as source, i (source.href)}
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
		<button
			class="more-options-toggle"
			aria-expanded={showMoreOptions}
			aria-controls="classic-sources"
			on:click={() => (showMoreOptions = !showMoreOptions)}
		>
			{$_("download.more_options", defaultI18nValues)}
			<svg
				class="chevron"
				class:open={showMoreOptions}
				width="12"
				height="12"
				viewBox="0 0 12 12"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M2.2 4.2 6 8l3.8-3.8"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
		{#if showMoreOptions}
			<div
				id="classic-sources"
				class="classic-sources"
				transition:slide={{
					duration: reduceMotion ? 0 : 200,
					easing: quartOut,
				}}
			>
				{#each downloadSources.classic as source (source.href)}
					<DownloadSourceCard {source} />
				{/each}
			</div>
		{/if}
	</section>
</main>

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

		.download-sources {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.more-options-toggle {
			display: inline-flex;
			align-items: center;
			gap: 0.375rem;
			align-self: center;
			border: none;
			background: transparent;
			color: var(--fds-text-secondary);
			font-family: inherit;
			font-size: 14px;
			line-height: 20px;
			padding: 0.375rem 0.75rem;
			border-radius: var(--fds-control-corner-radius);
			cursor: pointer;
			transition: var(--fds-control-normal-duration) ease;

			&:hover {
				color: var(--fds-text-primary);
				background: var(--fds-subtle-fill-secondary);
			}

			&:active {
				background: var(--fds-subtle-fill-tertiary);
			}

			&:focus-visible {
				outline: 2px solid var(--fds-focus-stroke-outer);
			}

			.chevron {
				display: block;
				flex-shrink: 0;
				margin-block-start: 2px;
				transition: transform var(--fds-control-normal-duration) ease;

				&.open {
					transform: rotate(180deg);
				}
			}
		}

		.classic-sources {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
