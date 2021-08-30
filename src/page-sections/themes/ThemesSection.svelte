<script lang="ts">
	import {
        Button,
        ColorSwatch,
        ComponentShowcase,
        HeaderChip,
        HyperlinkButton,
        PageSection
    } from "$lib";

	let currentTheme: any = 0;
	const colors = ["var(--background-tertiary);", "#414958", "#6441a4", "#feb400", "#073642", "#88c0d0"];
</script>

<PageSection class="theme-{currentTheme + 1}" id="themes-section">
	<div class="themes-section-content">
		<HeaderChip>Themes</HeaderChip>
		<h2>Distinctly personal.</h2>
		<p>Have it your way. Files features a fully customizable user interface, right down to the colors and materials.
			Explore themes created by the community or dive right into the docs and create your own.</p>
		<div class="theme-chooser">
			{#each colors as color, i}
				<ColorSwatch {color} selected={currentTheme === i} on:click={() => currentTheme = i} />
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
	<ComponentShowcase/>
</PageSection>

<style lang="scss">
	@use "ThemesSection";
</style>
