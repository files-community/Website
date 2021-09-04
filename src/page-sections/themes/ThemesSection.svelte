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

	const themeColors = ["var(--background-tertiary);", "#414958", "#6441a4", "#feb400", "#073642", "#88c0d0"];
    
    $: themeSrc = currentTheme > 0 ? `theme-${currentTheme + 1}` : systemTheme;

    onMount(() => {
        systemTheme = window?.matchMedia('(prefers-color-scheme: dark)')?.matches ? "dark" : "light";

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
            systemTheme = e.matches ? "dark" : "light";
        });
    });
</script>

<PageSection class="theme-{currentTheme + 1}" id="themes-section">
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
			<Button variant="accent" href="https://www.microsoft.com/store/productId/9N20KQ61LSFQ" target="_blank">
				Get Themes
			</Button>
			<HyperlinkButton
					href="docs/configuring/custom-themes">
				Read the docs
			</HyperlinkButton>
		</div>
	</div>
	<div class="component-showcase">
        <div class="column left">
            <div class="card" style="height: 72px;"></div>
            <img
                class="properties"
                src="exported/properties-{themeSrc}.png"
                alt="Properties dialog"
                width="413"
                height="583"
                loading="lazy"
            />
            <div>
                <img
                    class="drive"
                    src="exported/drive-{themeSrc}.png"
                    alt="Drive button"
                    width="88"
                    height="280"
                    loading="lazy"
                />
                <img
                    class="tabs"
                    src="exported/tabs-{themeSrc}.png"
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
                src="exported/calendar-{themeSrc}.png"
                alt="Calendar flyout"
                width="300"
                height="348"
                loading="lazy"
            />
            <img
                class="layout"
                src="exported/layout-{themeSrc}.png"
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
