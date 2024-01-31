<script lang="ts">
	import { onMount } from "svelte";
	import {
		ColorSwatch,
		defaultI18nValues,
		HeaderChip,
		PageSection,
	} from "$lib";
	import { Button, TextBlock } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import type { Tag } from "$data/features";
	import { error } from "@sveltejs/kit";

	let systemTheme = "light";
	let currentTheme = 0;
	let scrollPositionY = 0;
	let innerHeight = 0;
	let visible = true;
	let noInitialDelay = false;
	let anchor: HTMLDivElement;

	const themeColors: Tag[] = [
		{
			name: $_("home.themes.grey_blue", defaultI18nValues),
			color: "var(--fds-solid-background-tertiary)",
		},
		{
			name: $_("home.themes.grey_green", defaultI18nValues),
			color: "hsl(219, 15%, 30%)",
		},
		{
			name: $_("home.themes.purple", defaultI18nValues),
			color: "hsl(261, 43%, 45%)",
		},
		{
			name: $_("home.themes.yellow_white", defaultI18nValues),
			color: "hsl(43, 100%, 50%)",
		},
		{
			name: $_("home.themes.white_teal", defaultI18nValues),
			color: "hsl(192, 81%, 14%)",
		},
		{
			name: $_("home.themes.sky_blue", defaultI18nValues),
			color: "hsl(193, 43%, 67%)",
		},
	];

	$: themeSrc = currentTheme > 0 ? `theme-${currentTheme + 1}` : systemTheme;

	// Essentially determines if the user has seen the top 1/4th of the themes section or not
	$: if (
		anchor &&
		anchor.getBoundingClientRect().top +
			anchor.offsetHeight / 4 +
			scrollPositionY <
			scrollPositionY + innerHeight
	)
		visible = true;

	onMount(() => {
		const handleThemeChange = (e: MediaQueryListEvent) => {
			systemTheme = e.matches ? "dark" : "light";
		};

		visible = false; // We want SSR to have these visible by default, so we'll just do this.

		systemTheme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches
			? "dark"
			: "light";

		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", handleThemeChange);

		return () =>
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", handleThemeChange);
	});
</script>

<svelte:window bind:innerHeight />
<svelte:body on:scroll={() => (scrollPositionY = document.body.scrollTop)} />

<PageSection class="theme-{currentTheme + 1}" id="themes-section">
	<div bind:this={anchor} class="scroll-anchor" />
	<div class="themes-section-content">
		<HeaderChip>{$_("home.themes.chip", defaultI18nValues)}</HeaderChip>
		<TextBlock variant="titleLarge"
			>{$_("home.themes.title", defaultI18nValues)}</TextBlock
		>
		<p>{$_("home.themes.description", defaultI18nValues)}</p>
		<div class="theme-chooser">
			{#each themeColors as color, i}
				<ColorSwatch
					bind:group={currentTheme}
					value={i}
					colorName={color}
					aria-label={$_("home.themes.select_theme", {
						values: { index: i + 1 },
					})}
				/>
			{/each}
		</div>
		<div class="buttons-spacer">
			<Button href="/docs/customize-settings/appearance/" variant="accent">
				{$_("home.design.learn_more", defaultI18nValues)}
			</Button>
		</div>
	</div>
	<div
		class="component-showcase"
		class:no-initial-delay={noInitialDelay}
		class:visible
	>
		<div class="column left">
			<div class="card" style:block-size="72px" />
			<img
				alt="Properties dialog"
				class="properties"
				height="583"
				loading="lazy"
				src="/ui/exported/properties-{themeSrc}.svg"
				width="413"
			/>
			<div>
				<img
					alt="Drive button"
					class="drive"
					height="280"
					loading="lazy"
					src="/ui/exported/drive-{themeSrc}.svg"
					width="88"
				/>
				<img
					alt="Tabs flyout"
					class="tabs"
					height="233"
					loading="lazy"
					src="/ui/exported/tabs-{themeSrc}.svg"
					width="309"
				/>
			</div>
		</div>
		<div class="column right">
			<img
				alt="Calendar flyout"
				class="calendar"
				height="348"
				loading="lazy"
				src="/ui/exported/calendar-{themeSrc}.svg"
				width="300"
			/>
			<img
				alt="Layout flyout"
				class="layout"
				height="270"
				loading="lazy"
				src="/ui/exported/layout-{themeSrc}.svg"
				width="270"
			/>
			<div class="card" style:block-size="128px" />
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "ThemesSection";
</style>
