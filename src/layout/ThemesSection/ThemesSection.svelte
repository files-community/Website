<script lang="ts">
	import { onMount } from "svelte";
	import {
		Button,
		ColorSwatch,
		HeaderChip,
		HyperlinkButton,
		PageSection
	} from "$lib";

	let systemTheme = "light";
	let currentTheme = 0;
	let scrollY = 0;
	let innerHeight = 0;
	let visible = true;
	let noInitialDelay = false;
	let anchor: HTMLDivElement;

	const themeColors = [
		"var(--background-tertiary);",
		"#414958",
		"#6441a4",
		"#feb400",
		"#073642",
		"#88c0d0"
	];

	$: themeSrc = currentTheme > 0 ? `theme-${currentTheme + 1}` : systemTheme;

	// Essentially determines if the user has seen the top 1/4th of the themes section or not
	$: if (
		anchor &&
		anchor.getBoundingClientRect().top + anchor.offsetHeight / 4 + scrollY <
			scrollY + innerHeight
	)
		visible = true;

	// function replayAnimations() {
	// 	noInitialDelay = true;

	// 	if (!!HTMLElement.prototype.getAnimations) {
	// 		for (const node of showcase.querySelectorAll(".card, img")) {
	// 			for (const animation of node.getAnimations()) {
	// 				animation.finish();
	// 				animation.play();
	// 			}
	// 		}
	// 	}
	// }

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
	<div bind:this={anchor} class="scroll-anchor" />
	<div class="themes-section-content">
		<HeaderChip>Themes</HeaderChip>
		<h2>Distinctly personal.</h2>
		<p>
			Have it your way. Files features a fully customizable user interface,
			right down to the colors and materials. Explore themes created by the
			community or dive right into the docs and create your own.
		</p>
		<div class="theme-chooser">
			{#each themeColors as color, i}
				<ColorSwatch
					bind:group={currentTheme}
					value={i}
					{color}
					aria-label="Select theme {i + 1}"
				/>
			{/each}
		</div>
		<div class="buttons-spacer">
			<Button
				href="https://www.microsoft.com/store/productId/9N20KQ61LSFQ"
				rel="noreferrer noopener"
				target="_blank"
				variant="accent"
			>
				Get Themes
			</Button>
			<HyperlinkButton href="docs/configuring/custom-themes">
				Read the docs
			</HyperlinkButton>
		</div>
	</div>
	<div
		class="component-showcase"
		class:no-initial-delay={noInitialDelay}
		class:visible
	>
		<div class="column left">
			<div class="card" style="height: 72px;" />
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
			<div class="card" style="height: 128px;" />
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "ThemesSection";
</style>
