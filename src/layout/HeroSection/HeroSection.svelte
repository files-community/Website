<script lang="ts">
	import {
		defaultI18nValues,
		externalLink,
		openWithStoreProtocol,
		PageSection,
		storeHref,
		storeProtocolHref,
	} from "$lib";
	import { onMount } from "svelte";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import { links } from "$data/links";
	import StoreLogo from "../StoreCta/StoreLogo.svelte";
	import InstallDialog from "../InstallDialog/InstallDialog.svelte";

	const href = storeHref(links.storeId);
	const protocolHref = storeProtocolHref(links.storeId);

	let installOpen = false;

	// 0 at the top of the page, 1 once it has scrolled a bit
	let lift = 0;

	onMount(() => {
		const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
		let frame = 0;

		const update = () => {
			frame = 0;
			lift = reducedMotion.matches
				? 0
				: Math.min(1, Math.max(0, scrollY / 320));
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};

		update();
		addEventListener("scroll", onScroll, { passive: true });
		reducedMotion.addEventListener("change", update);
		return () => {
			removeEventListener("scroll", onScroll);
			reducedMotion.removeEventListener("change", update);
			cancelAnimationFrame(frame);
		};
	});
</script>

<PageSection id="hero-section">
	<div class="hero-text">
		<h1>{$_("home.hero.title", defaultI18nValues)}</h1>
		<p>{$_("home.hero.tagline", defaultI18nValues)}</p>
		<div class="buttons-spacer hero-buttons">
			<Button
				{href}
				id="hero-download-button"
				class="hero-store-button"
				variant="accent"
				{...externalLink}
				on:click={e => openWithStoreProtocol(e, protocolHref, href)}
			>
				<StoreLogo size={24} />
				<div class="hero-button-inner">
					<span class="hero-button-title"
						>{$_("home.cta.get_files", defaultI18nValues)}</span
					>
					<span>{$_("home.hero.from_store", defaultI18nValues)}</span>
				</div>
			</Button>
			<!-- Beside the Store button, not under it, to keep the hero short -->
			<Button
				variant="hyperlink"
				class="hero-more"
				on:click={() => (installOpen = true)}
			>
				{$_("download.other_options", defaultI18nValues)}
			</Button>
		</div>
		<span class="hero-note"
			>{$_("home.hero.store_note", defaultI18nValues)}</span
		>
	</div>
	<div class="hero-visual" style:--lift={lift}>
		<div class="hero-desktop">
			<picture>
				<source
					media="(prefers-color-scheme: dark)"
					srcset="/screenshots/home/hero-desktop-dark.webp"
				/>
				<img
					alt=""
					class="hero-desktop-image"
					height="800"
					src="/screenshots/home/hero-desktop-light.webp"
					width="1152"
				/>
			</picture>
			<picture>
				<source
					media="(prefers-color-scheme: dark)"
					srcset="/screenshots/home/hero-app-dark.webp"
				/>
				<img
					alt={$_("home.hero.screenshot_alt", defaultI18nValues)}
					class="hero-window"
					fetchpriority="high"
					height="880"
					src="/screenshots/home/hero-app-light.webp"
					width="1240"
				/>
			</picture>
		</div>
	</div>
	<div class="rainbow-background" slot="outer"></div>
</PageSection>

<InstallDialog bind:open={installOpen} />

<style lang="scss">
	@use "HeroSection";
</style>
