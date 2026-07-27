<script lang="ts">
	import { defaultI18nValues, Metadata } from "$lib";
	import { TextBlock } from "fluent-svelte";
	import DownloadSourceCard from "./DownloadSourceCard.svelte";
	import type { DownloadSource } from "./types";
	import type { PageData } from "./$types";
	import { _ } from "svelte-i18n";
	import { fly } from "svelte/transition";
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

	const methods: Method[] = ["store", "classic"];

	let method: Method = "store";

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
				name: $_("download.stable_name", defaultI18nValues),
				description: $_(
					"download.classic_stable.description",
					defaultI18nValues,
				),
				href: `/appinstallers/Files.stable.appinstaller`,
				icon: "/branding/logo-light.svg",
				darkModeIcon: "/branding/logo-dark.svg",
				version: stableVersion,
			},
			{
				name: $_("download.preview_name", defaultI18nValues),
				description: $_(
					"download.classic_preview.description",
					defaultI18nValues,
				),
				href: `/appinstallers/Files.preview.appinstaller`,
				icon: "/download-sources/preview_light.svg",
				darkModeIcon: "/download-sources/preview_dark.svg",
				version: previewVersion,
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
	<div class="channel-selector">
		{#each methods as m}
			<button
				class:selected={method === m}
				aria-pressed={method === m}
				data-text={$_(`download.methods.${m}`, defaultI18nValues)}
				on:click={() => (method = m)}
			>
				{$_(`download.methods.${m}`, defaultI18nValues)}
			</button>
		{/each}
	</div>
	<section class="download-sources">
		{#each downloadSources[method] as source, i (source.href)}
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
		<p>
			{$_("download.self_signed.description", defaultI18nValues)}<a
				href="/docs/getting-started/install"
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

		.channel-selector {
			display: flex;
			align-self: center;
			gap: 0.25rem;
			padding: 0.25rem;
			border: 1px solid var(--fds-card-stroke-default);
			border-radius: var(--fds-overlay-corner-radius);
			background: var(--fds-card-background-default);

			button {
				position: relative;
				display: inline-flex;
				flex-direction: column;
				align-items: center;
				border: none;
				background: transparent;
				color: var(--fds-text-secondary);
				font-family: inherit;
				font-size: 16px;
				font-weight: 400;
				line-height: 22px;
				padding: 0.625rem 1.25rem;
				border-radius: var(--fds-control-corner-radius);
				cursor: pointer;
				transition: var(--fds-control-normal-duration) ease;

				// Reserve the semibold width so neighbors don't shift on selection
				&::before {
					content: attr(data-text);
					font-weight: 600;
					block-size: 0;
					overflow: hidden;
					visibility: hidden;
				}

				&:hover:not(.selected) {
					color: var(--fds-text-primary);
					background: var(--fds-subtle-fill-secondary);
				}

				&:active {
					background: var(--fds-subtle-fill-tertiary);
				}

				&:focus-visible {
					outline: 2px solid var(--fds-focus-stroke-outer);
				}

				&.selected {
					color: var(--fds-text-primary);
					font-weight: 600;
					background: var(--fds-subtle-fill-secondary);

					&::after {
						content: "";
						position: absolute;
						inset-block-end: 0;
						inset-inline: 0;
						margin-inline: auto;
						inline-size: 1rem;
						block-size: 3px;
						border-radius: 1.5px;
						background: var(--fds-accent-default);
					}
				}
			}
		}

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
