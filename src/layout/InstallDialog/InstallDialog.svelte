<script lang="ts">
	import {
		defaultI18nValues,
		externalLink,
		openWithStoreProtocol,
		storeHref,
		storeProtocolHref,
		TerminalCommand,
	} from "$lib";
	import { Button, ComboBox, ContentDialog } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import { onDestroy } from "svelte";
	import { browser } from "$app/environment";
	import StoreLogo from "../StoreCta/StoreLogo.svelte";
	import { links } from "$data/links";
	import ArrowDownload from "~icons/fluent/arrow-download-24-regular";
	import Heart from "~icons/fluent/heart-24-filled";
	import Checkmark from "~icons/fluent/checkmark-circle-20-regular";
	import Copy from "~icons/fluent/copy-24-regular";
	import CopiedIcon from "~icons/fluent/checkmark-24-regular";

	export let open = false;

	// Keep the page behind the dialog from scrolling while it's open
	$: if (browser)
		document.documentElement.classList.toggle("scroll-locked", open);
	onDestroy(() => {
		if (browser) document.documentElement.classList.remove("scroll-locked");
	});

	type Channel = "stable" | "preview";
	type Source =
		| "store"
		| "classic"
		| "winget"
		| "chocolatey"
		| "scoop"
		| "powershell"
		| "offline";

	let channel: Channel = "stable";
	let source: Source = "store";
	let architecture = "x64";

	$: channels = (["stable", "preview"] as const).map(value => ({
		value,
		name: $_(`download.channel.${value}`, defaultI18nValues),
	}));
	$: sources = (
		[
			"store",
			"classic",
			"winget",
			"chocolatey",
			"scoop",
			"powershell",
			"offline",
		] as const
	).map(value => ({
		value,
		name: $_(`download.methods.${value}.name`, defaultI18nValues),
	}));
	$: architectures = ["x64", "arm64"].map(value => ({
		value,
		name: $_(`download.methods.offline.${value}`, defaultI18nValues),
	}));

	const storeIds: Record<Channel, string> = {
		stable: links.storeId,
		preview: links.storePreviewId,
	};
	$: href = storeHref(storeIds[channel]);
	$: protocolHref = storeProtocolHref(storeIds[channel]);

	// Store and Classic get a card with a heading and points instead of a
	// description
	$: cards = {
		store: {
			badge: $_("home.download.recommended", defaultI18nValues),
			title: $_("home.download.store_title", defaultI18nValues),
			points: ["support", "updates", "install"].map(point =>
				$_(`home.download.benefits.${point}`, defaultI18nValues),
			),
		},
		classic: {
			badge: $_("download.dialog.free", defaultI18nValues),
			title: $_("download.dialog.classic_title", defaultI18nValues),
			points: ["features", "updates", "app_installer"].map(point =>
				$_(`download.dialog.classic_benefits.${point}`, defaultI18nValues),
			),
		},
	} as Partial<
		Record<Source, { badge: string; title: string; points: string[] }>
	>;

	const commands: Partial<Record<Source, Record<Channel, string>>> = {
		winget: {
			stable: "winget install -e --id FilesCommunity.Files",
			preview: "winget install -e --id FilesCommunity.FilesPreview",
		},
		chocolatey: {
			stable: "choco install files",
			preview: "choco install filespreview",
		},
		scoop: {
			stable: "scoop install nonportable/files-np",
			preview: "scoop install nonportable/files-preview-np",
		},
		powershell: {
			stable:
				"Add-AppxPackage -AppInstallerFile https://cdn.files.community/files/stable/Files.Package.appinstaller",
			preview:
				"Add-AppxPackage -AppInstallerFile https://cdn.files.community/files/preview/Files.Package.appinstaller",
		},
	};

	$: command = commands[source]?.[channel];

	let copied = false;
	let copiedTimeout: ReturnType<typeof setTimeout>;

	const copyCommand = () => {
		if (!command) return;
		navigator.clipboard.writeText(command);
		copied = true;
		clearTimeout(copiedTimeout);
		copiedTimeout = setTimeout(() => (copied = false), 1500);
	};

	// Offline packages, in the order they need to be installed
	$: offlineFiles = (() => {
		const folder = architecture === "arm64" ? "ARM64" : "x64";
		const base = `https://cdn.files.community/files/${channel}/Files.Package`;
		return [
			`${base}/Dependencies/${folder}/Microsoft.VCLibs.${folder}.14.00.Desktop.appx`,
			`${base}/Dependencies/${folder}/Microsoft.VCLibs.${folder}.14.00.appx`,
			`${base}/Dependencies/${folder}/Microsoft.WindowsAppRuntime.2.msix`,
			`${base}/Files.Package_x64_arm64.msixbundle`,
		];
	})();
</script>

<ContentDialog
	bind:open
	class="install-dialog"
	title={$_("download.other_options", defaultI18nValues)}
	on:backdropclick={() => (open = false)}
>
	<div class="layout">
		<div class="pickers">
			<!-- Not <label>s: a click on a menu item would reach the dropdown
		     button through the label and open the menu again -->
			<div class="field" role="group" aria-labelledby="install-source">
				<span id="install-source"
					>{$_("download.dialog.source", defaultI18nValues)}</span
				>
				<ComboBox items={sources} bind:value={source} />
			</div>
			<div class="field" role="group" aria-labelledby="install-version">
				<span id="install-version"
					>{$_("download.dialog.version", defaultI18nValues)}</span
				>
				<ComboBox items={channels} bind:value={channel} />
			</div>
			<!-- Keeps its space when hidden, so the column doesn't shift -->
			<div
				class="field architecture"
				class:hidden={source !== "offline"}
				inert={source !== "offline"}
				role="group"
				aria-labelledby="install-architecture"
			>
				<span id="install-architecture"
					>{$_("download.dialog.architecture", defaultI18nValues)}</span
				>
				<ComboBox items={architectures} bind:value={architecture} />
			</div>
		</div>

		<!-- Every option is laid out in the same cell so the dialog keeps the
	     height of the tallest one and doesn't jump when the source changes -->
		<div class="options">
			{#each sources as { value } (value)}
				{@const card = cards[value]}
				<div
					class="option"
					class:hidden={value !== source}
					inert={value !== source}
				>
					<div class="result" class:card>
						{#if card}
							<div class="card-heading">
								<picture>
									<source
										media="(prefers-color-scheme: dark)"
										srcset="/branding/logo-dark.svg"
									/>
									<img
										src="/branding/logo-light.svg"
										alt=""
										width="48"
										height="48"
									/>
								</picture>
								<span class="badge">{card.badge}</span>
							</div>
							<h3 class="card-title">{card.title}</h3>
							<ul class="benefits">
								{#each card.points as point (point)}
									<li><Checkmark />{point}</li>
								{/each}
							</ul>
						{:else if value === "offline"}
							<p>
								{$_("download.methods.offline.description", defaultI18nValues)}
							</p>
							<ol class="offline-files">
								{#each offlineFiles as file (file)}
									<li>
										<a href={file}
											>{file.substring(file.lastIndexOf("/") + 1)}</a
										>
									</li>
								{/each}
							</ol>
						{:else}
							<p>
								{$_(`download.methods.${value}.description`, defaultI18nValues)}
							</p>
							<TerminalCommand command={commands[value]?.[channel] ?? ""} />
						{/if}
					</div>

					{#if value !== "store"}
						<div class="sponsor">
							<Heart aria-hidden="true" />
							<p>{$_("download.dialog.sponsor", defaultI18nValues)}</p>
							<Button href={links.sponsor} {...externalLink}>
								{$_("download.dialog.sponsor_link", defaultI18nValues)}
							</Button>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<p
			class="requirements"
			class:hidden={source === "store"}
			inert={source === "store"}
		>
			{$_("download.requirements.message", defaultI18nValues)}
			<a href="/docs/getting-started/troubleshooting"
				>{$_("download.requirements.troubleshooting", defaultI18nValues)}</a
			>
		</p>
	</div>

	<svelte:fragment slot="footer">
		{#if source === "store"}
			<Button
				{href}
				class="primary-action"
				variant="accent"
				{...externalLink}
				on:click={e => openWithStoreProtocol(e, protocolHref, href)}
			>
				<StoreLogo />
				{$_("home.download.store_button", defaultI18nValues)}
			</Button>
		{:else if source === "classic"}
			<Button
				href="/appinstallers/Files.{channel}.appinstaller"
				class="primary-action"
				variant="accent"
				download="Files.{channel}.appinstaller"
			>
				<ArrowDownload />
				{$_("download.dialog.classic_button", defaultI18nValues)}
			</Button>
		{:else if command}
			<Button class="primary-action" variant="accent" on:click={copyCommand}>
				{#if copied}
					<CopiedIcon />
					{$_("download.dialog.copied", defaultI18nValues)}
				{:else}
					<Copy />
					{$_("download.dialog.copy_command", defaultI18nValues)}
				{/if}
			</Button>
		{/if}
		<Button class="close-button" on:click={() => (open = false)}
			>{$_("download.dialog.close", defaultI18nValues)}</Button
		>
	</svelte:fragment>
</ContentDialog>

<style lang="scss">
	// The gutter stays reserved so the page doesn't shift when the scrollbar hides
	:global(html.scroll-locked) {
		overflow: hidden;
		scrollbar-gutter: stable;
	}

	// fluent-svelte's 30% smoke barely shows over the light hero background
	:global(.content-dialog-smoke.darken:has(> .content-dialog.install-dialog)) {
		background-color: rgb(0 0 0 / 50%);
	}

	// The dropdowns open past the dialog's edges, so it can't clip them; the
	// body and footer round their own corners instead. Scoped under the
	// backdrop to outweigh fluent-svelte's width for size-standard
	:global(.content-dialog-smoke .content-dialog.size-standard.install-dialog) {
		inline-size: 760px;
		max-inline-size: calc(100vw - 24px);
		overflow: visible;

		:global(.content-dialog-body) {
			overflow: visible;
			border-start-start-radius: inherit;
			border-start-end-radius: inherit;
		}

		:global(.content-dialog-footer) {
			border-end-start-radius: inherit;
			border-end-end-radius: inherit;
		}

		// fluent-svelte lines the menu up with the selected item, which can put
		// it above the dialog or off the screen; open it below the box instead
		:global(.combo-box-dropdown) {
			inset-block-start: 100%;
			margin-block-start: 4px;
		}

		// Close keeps the same slot whether or not there's an action beside it
		:global(.content-dialog-footer) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		:global(.content-dialog-footer > .close-button) {
			grid-column: 2;
			justify-self: stretch;
			inline-size: auto;
		}

		// Too narrow for the Store button's label at half width
		@media screen and (width < 480px) {
			:global(.content-dialog-footer) {
				grid-template-columns: minmax(0, 1fr);
				grid-auto-flow: row;
			}

			:global(.content-dialog-footer > .close-button) {
				grid-column: 1;
			}
		}
	}

	// Stacked in one column the dialog can be taller than a phone screen.
	// Scrolling the backdrop rather than the dialog body keeps the dropdowns
	// from being clipped, and the auto margins still center it when it fits
	@media screen and (width < 700px) {
		:global(.content-dialog-smoke:has(> .content-dialog.install-dialog)) {
			justify-content: start;
			overflow-y: auto;
			padding-block: 12px;
		}

		:global(
			.content-dialog-smoke .content-dialog.size-standard.install-dialog
		) {
			position: relative;
			margin-block: auto;
		}
	}

	.layout {
		display: grid;
		grid-template-areas:
			"pickers options"
			"requirements options";
		grid-template-rows: auto 1fr;
		grid-template-columns: 220px minmax(0, 1fr);
		gap: 16px 24px;

		@media screen and (width < 700px) {
			grid-template-areas: "pickers" "options" "requirements";
			grid-template-rows: auto;
			grid-template-columns: minmax(0, 1fr);
		}
	}

	.pickers {
		display: flex;
		grid-area: pickers;
		flex-direction: column;
		gap: 12px;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 4px;

		span {
			font-size: 1.4rem;
		}

		:global(.combo-box) {
			inline-size: 100%;
		}
	}

	.options {
		display: grid;
		grid-area: options;
	}

	.option {
		display: flex;
		flex-direction: column;
		grid-area: 1 / 1;

		&.hidden {
			visibility: hidden;
		}
	}

	.result {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: start;
		gap: 12px;
		padding: 16px;
		border: 1px solid var(--fds-card-stroke-default);
		border-radius: var(--fds-control-corner-radius);
		background-color: var(--fds-card-background-default);

		p {
			margin: 0;
			color: var(--fds-text-secondary);
			font-size: 1.4rem;
		}

		:global(.terminal-command) {
			align-self: stretch;
			margin: 0;

			:global(.command) {
				overflow-wrap: anywhere;
			}
		}

		&.card {
			justify-content: center;
			gap: 16px;
			padding: 20px;
		}
	}

	:global(.primary-action) {
		gap: 8px;

		:global(svg) {
			inline-size: 16px;
			block-size: 16px;
		}
	}

	.architecture.hidden {
		visibility: hidden;

		// In one column the empty space would sit between the pickers and the card
		@media screen and (width < 700px) {
			display: none;
		}
	}

	.offline-files {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin: 0;
		padding-inline-start: 20px;
		font-size: 1.4rem;

		a {
			color: var(--fds-accent-text-primary);
			overflow-wrap: anywhere;
		}
	}

	.sponsor {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-block-start: 12px;
		padding: 12px 16px;
		border: 1px solid var(--fds-card-stroke-default);
		border-radius: var(--fds-control-corner-radius);
		background-color: var(--fds-card-background-secondary);

		p {
			flex: 1;
			margin: 0;
			font-size: 1.4rem;
		}

		:global(svg) {
			flex: none;
			inline-size: 20px;
			block-size: 20px;
			color: #e3405c;
		}

		:global(.button) {
			flex: none;
		}

		@media screen and (width < 648px) {
			flex-wrap: wrap;

			p {
				flex-basis: calc(100% - 32px);
			}

			:global(.button) {
				margin-inline-start: 32px;
			}
		}
	}

	.card-heading {
		display: flex;
		align-items: center;
		gap: 12px;

		img {
			display: block;
		}
	}

	.card-title {
		margin: 0;
		font-size: 2rem;
		font-weight: 600;
	}

	.badge {
		padding: 2px 10px;
		border-radius: 999px;
		background-color: var(--fds-accent-default);
		color: var(--fds-text-on-accent-primary);
		font-size: 1.2rem;
		font-weight: 600;
	}

	.benefits {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 1.4rem;

		li {
			display: flex;
			align-items: center;
			gap: 8px;
		}

		:global(svg) {
			flex: none;
			inline-size: 20px;
			block-size: 20px;
			color: var(--fds-accent-default);
		}
	}

	.requirements {
		grid-area: requirements;
		align-self: end;
		margin: 0;
		color: var(--fds-text-secondary);
		font-size: 1.2rem;

		a {
			color: var(--fds-accent-text-primary);
		}

		&.hidden {
			visibility: hidden;

			@media screen and (width < 700px) {
				display: none;
			}
		}
	}
</style>
