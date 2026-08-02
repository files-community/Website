<script lang="ts">
	import { defaultI18nValues, externalLink } from "$lib";
	import { TextBlock } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import type { DownloadSource } from "./types";

	export let source: DownloadSource;

	$: filename = source.href.substring(source.href.lastIndexOf("/") + 1);

	// Try the ms-windows-store: protocol first and fall back to the web
	// listing if nothing handles it. If the Store app opens, this window
	// loses focus/visibility, which cancels the fallback.
	const openWithProtocol = (e: MouseEvent) => {
		const { protocolHref, href } = source;

		if (
			!protocolHref ||
			e.button !== 0 ||
			e.ctrlKey ||
			e.metaKey ||
			e.shiftKey ||
			e.altKey ||
			!navigator.userAgent.includes("Windows")
		)
			return;

		e.preventDefault();

		let cancelled = false;
		const cancel = () => (cancelled = true);
		window.addEventListener("blur", cancel, { once: true });
		document.addEventListener("visibilitychange", cancel, { once: true });

		window.setTimeout(() => {
			window.removeEventListener("blur", cancel);
			document.removeEventListener("visibilitychange", cancel);
			if (cancelled || document.visibilityState !== "visible") return;
			// Still here: no protocol handler took over, open the web listing.
			if (!window.open(href, "_blank", "noopener,noreferrer"))
				location.assign(href);
		}, 1500);

		location.assign(protocolHref);
	};
</script>

<a
	class="download-source"
	class:promoted={source.paid}
	href={source.href}
	download={source.download ? filename : undefined}
	{...source.external || source.download ? externalLink : {}}
	on:click={openWithProtocol}
>
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset={source.darkModeIcon} />
		<img
			class="download-source-icon"
			src={source.icon}
			alt="{source.name} logo"
		/>
	</picture>
	<div class="label-container">
		<div class="title-container">
			<div class="title-row">
				<TextBlock variant="subtitle">{source.name}</TextBlock>
				{#if source.recommended}
					<span class="recommended-tag">
						{$_("download.recommended", defaultI18nValues)}
					</span>
				{/if}
			</div>
			{#if source.version}
				<TextBlock class="download-source-version">
					{$_("download.version_label", {
						values: { version: source.version },
					})}
				</TextBlock>
			{/if}
		</div>
		<TextBlock class="download-source-description">
			{source.description}
		</TextBlock>
	</div>
	{#if source.external || source.download}
		<div class="action-container">
			{#if source.external}
				<picture>
					<source
						media="(prefers-color-scheme: dark)"
						srcset="/download-sources/msstore-badge-light.svg"
					/>
					<img
						class="download-source-badge"
						src="/download-sources/msstore-badge-dark.svg"
						alt={$_("download.store_badge_alt", defaultI18nValues)}
					/>
				</picture>
			{:else}
				<picture>
					<source
						media="(prefers-color-scheme: dark)"
						srcset="/download-sources/classic-installer-badge-light.png"
					/>
					<img
						class="download-source-badge"
						src="/download-sources/classic-installer-badge-dark.png"
						alt={$_("download.classic_badge_alt", defaultI18nValues)}
					/>
				</picture>
			{/if}
		</div>
	{/if}
</a>

<style lang="scss">
	.download-source {
		border-radius: var(--fds-control-corner-radius);
		border: 1px solid var(--fds-card-stroke-default);
		box-shadow: var(--fds-card-shadow);
		transition: var(--fds-control-normal-duration) ease;
		background: var(--fds-card-background-default);
		cursor: pointer;
		color: inherit;
		text-decoration: none;

		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1.5rem;
		padding: 1.25rem 1.5rem;

		&.promoted {
			border-color: color-mix(
				in srgb,
				var(--fds-accent-default) 45%,
				var(--fds-card-stroke-default)
			);
			background:
				linear-gradient(
					135deg,
					color-mix(in srgb, var(--fds-accent-default) 9%, transparent),
					transparent 55%
				),
				var(--fds-card-background-default);
		}

		@media (prefers-reduced-motion: no-preference) {
			&:hover {
				box-shadow: var(--fds-flyout-shadow);
				transform: translateY(-2px);

				.download-source-icon {
					filter: drop-shadow(var(--fds-flyout-shadow));
					transform: translateY(-2px);
				}
			}
		}

		:global {
			.download-source-description {
				text-align: left;
				max-width: 50rem;
			}

			.download-source-version {
				color: var(--fds-text-secondary);
			}
		}

		.recommended-tag {
			padding: 0.125rem 0.625rem;
			border-radius: 1rem;
			font-size: 12px;
			font-weight: 600;
			line-height: 16px;
			white-space: nowrap;
			color: var(--fds-text-on-accent-primary);
			background: var(--fds-accent-default);
		}

		.download-source-icon {
			max-inline-size: 3.5rem;
			transition: var(--fds-control-normal-duration) ease;
		}

		.label-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
			flex-grow: 1;
		}

		.title-container {
			display: flex;
			flex-direction: column;
		}

		.title-row {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		.action-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.25rem;
			flex-shrink: 0;

			.download-source-badge {
				block-size: 52px;
			}
		}

		@media (max-width: 648px) {
			flex-direction: column;
			gap: 1rem;
			padding: 1.5rem 1.25rem;

			:global(.download-source-description) {
				text-align: center;
			}

			.label-container {
				align-items: center;
			}

			.title-container {
				align-items: center;
			}

			.title-row {
				justify-content: center;
			}
		}
	}
</style>
