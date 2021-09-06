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
    let anchor: HTMLDivElement;

	const themeColors = ["var(--background-tertiary);", "#414958", "#6441a4", "#feb400", "#073642", "#88c0d0"];
    
    $: themeSrc = currentTheme > 0 ? `theme-${currentTheme + 1}` : systemTheme;
    $: if (anchor && anchor.getBoundingClientRect().top + (anchor.offsetHeight / 4) + scrollY < scrollY + innerHeight) visible = true;

    onMount(() => {
        visible = false; // We want SSR to have these visible by default, so we'll just do this.

        systemTheme = window?.matchMedia('(prefers-color-scheme: dark)')?.matches ? "dark" : "light";

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
            systemTheme = e.matches ? "dark" : "light";
        });
    });
</script>

<svelte:window bind:scrollY bind:innerHeight />

<PageSection class="theme-{currentTheme + 1}" id="themes-section">
    <div class="scroll-anchor" bind:this={anchor}></div>
	<div class="themes-section-content">
		<HeaderChip>Themes</HeaderChip>
		<h2>Distinctly personal.</h2>
		<p>Have it your way. Files features a fully customizable user interface, right down to the colors and materials.
			Explore themes created by the community or dive right into the docs and create your own.</p>
		<div class="theme-chooser">
			{#each themeColors as color, i}
				<ColorSwatch bind:group={currentTheme} value={i} {color} aria-label="Select theme {i + 1}" />
			{/each}
		</div>
		<div class="buttons-spacer">
			<Button variant="accent" href="https://www.microsoft.com/store/productId/9N20KQ61LSFQ" target="_blank" rel="noreferrer noopener">
				Get Themes
			</Button>
			<HyperlinkButton
					href="docs/configuring/custom-themes">
				Read the docs
			</HyperlinkButton>
		</div>
	</div>
	<div class="component-showcase" class:visible>
        <div class="column left">
            <div class="card" style="height: 72px;"></div>
            <img
                class="properties"
                src="/ui/exported/properties-{themeSrc}.svg"
                alt="Properties dialog"
                width="413"
                height="583"
                loading="lazy"
            />
            <div>
                <img
                    class="drive"
                    src="/ui/exported/drive-{themeSrc}.svg"
                    alt="Drive button"
                    width="88"
                    height="280"
                    loading="lazy"
                />
                <img
                    class="tabs"
                    src="/ui/exported/tabs-{themeSrc}.svg"
                    alt="Tabs flyout"
                    width="309"
                    height="233"
                    loading="lazy"
                />
            </div>
        </div>
        <div class="column right">
            <img
                class="calendar"
                src="/ui/exported/calendar-{themeSrc}.svg"
                alt="Calendar flyout"
                width="300"
                height="348"
                loading="lazy"
            />
            <img
                class="layout"
                src="/ui/exported/layout-{themeSrc}.svg"
                alt="Layout flyout"
                width="270"
                height="270"
                loading="lazy"
            />
            <div class="card" style="height: 128px;"></div>
        </div>
    </div>
</PageSection>

<style lang="scss">
	@use "ThemesSection";
</style>
