<script lang="ts">
	import {
		defaultI18nValues,
		externalLink,
		HeaderChip,
		openWithStoreProtocol,
		PageSection,
		storeHref,
		storeProtocolHref,
	} from "$lib";
	import { links } from "$data/links";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import StoreLogo from "../StoreCta/StoreLogo.svelte";
	import InstallDialog from "../InstallDialog/InstallDialog.svelte";
	import Checkmark from "~icons/fluent/checkmark-circle-20-regular";

	const href = storeHref(links.storeId);
	const protocolHref = storeProtocolHref(links.storeId);
	const benefits = ["support", "updates", "install"];

	let installOpen = false;
</script>

<PageSection id="download-section">
	<div class="download-header">
		<HeaderChip>{$_("home.download.chip", defaultI18nValues)}</HeaderChip>
		<h2>{$_("home.download.title", defaultI18nValues)}</h2>
		<p>{$_("home.download.description", defaultI18nValues)}</p>
	</div>

	<div class="recommended">
		<div class="recommended-text">
			<span class="badge"
				>{$_("home.download.recommended", defaultI18nValues)}</span
			>
			<h3>{$_("home.download.store_title", defaultI18nValues)}</h3>
			<p>{$_("home.download.store_description", defaultI18nValues)}</p>
			<ul class="benefits">
				{#each benefits as benefit (benefit)}
					<li>
						<Checkmark />{$_(
							`home.download.benefits.${benefit}`,
							defaultI18nValues,
						)}
					</li>
				{/each}
			</ul>
		</div>
		<div class="recommended-action">
			<picture>
				<source
					media="(prefers-color-scheme: dark)"
					srcset="/branding/logo-dark.svg"
				/>
				<img src="/branding/logo-light.svg" alt="" width="96" height="96" />
			</picture>
			<Button
				{href}
				class="recommended-button"
				variant="accent"
				{...externalLink}
				on:click={e => openWithStoreProtocol(e, protocolHref, href)}
			>
				<StoreLogo />
				{$_("home.download.store_button", defaultI18nValues)}
			</Button>
		</div>
	</div>

	<Button variant="hyperlink" on:click={() => (installOpen = true)}>
		{$_("download.other_options", defaultI18nValues)}
	</Button>
</PageSection>

<InstallDialog bind:open={installOpen} />

<style lang="scss">
	@use "DownloadSection";
</style>
