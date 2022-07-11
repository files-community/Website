<script lang="ts">
	import { onMount } from "svelte";
	import { ColorSwatch, HeaderChip, PageSection } from "$lib";
	import { TextBlock } from "fluent-svelte";
	import type { Tag } from "$data/features";
	import { text } from "../../i18n/i18n";

	let systemTheme = "light";
	let currentTheme = 0;
	let scrollY = 0;
	let innerHeight = 0;
	let visible = true;
	let noInitialDelay = false;
	let anchor: HTMLDivElement;

	const themeColors: Tag[] = [
		{ name: text.section.themes.color.darkGreyLightBlue(), color: "var(--fds-solid-background-tertiary)" },
		{ name: text.section.themes.color.blueGreyNeonGreen(), color: "hsl(219, 15%, 30%)" },
		{ name: text.section.themes.color.purple(), color: "hsl(261, 43%, 45%)" },
		{ name: text.section.themes.color.yellowWhite(), color: "hsl(43, 100%, 50%)" },
		{ name: text.section.themes.color.coolWhiteDarkTeal(), color: "hsl(192, 81%, 14%)" },
		{ name: text.section.themes.color.skyBlue(), color: "hsl(193, 43%, 67%)" }
	];

	$: themeSrc = currentTheme > 0 ? `theme-${ currentTheme + 1 }` : systemTheme;

	// Essentially determines if the user has seen the top 1/4th of the themes section or not
	$: if (
		anchor &&
		anchor.getBoundingClientRect().top + anchor.offsetHeight / 4 + scrollY <
		scrollY + innerHeight
	)
		visible = true;

	onMount(() => {
		visible = false; // We want SSR to have these visible by default, so we'll just do this.

		systemTheme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches
			? "dark"
			: "light";

		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", e => {
				systemTheme = e.matches ? "dark" : "light";
			});
	});
</script>

<svelte:window bind:innerHeight bind:scrollY />

<PageSection class="theme-{currentTheme + 1}" id="themes-section">
	<div bind:this={anchor} class="scroll-anchor"></div>
	<div class="themes-section-content">
		<HeaderChip>{text.section.themes.title()}</HeaderChip>
		<TextBlock variant="titleLarge">{text.section.themes.hook()}</TextBlock>
		<p>{text.section.themes.description()}</p>
		<div class="theme-chooser">
			{#each themeColors as color, i}
				<ColorSwatch
					bind:group={currentTheme}
					value={i}
					colorName={color}
					aria-label="Select theme {i + 1}"
				/>
			{/each}
		</div>
	</div>
	<div
		class="component-showcase"
		class:no-initial-delay={noInitialDelay}
		class:visible
	>
		<div class="column left">
			<div class="card" style:block-size="72px"></div>
			<img
				alt="Properties dialog"
				class="properties"
				height="583"
				loading="lazy"
				src="/ui/exported/properties-{themeSrc}.svg"
				width="413"
			>
			<div>
				<img
					alt="Drive button"
					class="drive"
					height="280"
					loading="lazy"
					src="/ui/exported/drive-{themeSrc}.svg"
					width="88"
				>
				<img
					alt="Tabs flyout"
					class="tabs"
					height="233"
					loading="lazy"
					src="/ui/exported/tabs-{themeSrc}.svg"
					width="309"
				>
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
			>
			<img
				alt="Layout flyout"
				class="layout"
				height="270"
				loading="lazy"
				src="/ui/exported/layout-{themeSrc}.svg"
				width="270"
			>
			<div class="card" style:block-size="128px"></div>
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "ThemesSection";
</style>
