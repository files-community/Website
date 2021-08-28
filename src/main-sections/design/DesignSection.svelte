<script lang="ts">
	import { Button, HeaderChip, HyperlinkButton, PageSection } from "$lib/index"

	let scrollY: number
</script>

<svelte:window bind:scrollY/>

<PageSection id="design-section">
	<HeaderChip>Design</HeaderChip>
	<h2>Power meets beauty.</h2>
	<p>Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple
		folders with tabs. And so much more.</p>
	<div class="buttons-spacer">
		<Button buttonStyle="accent" href="">
			Try it out
		</Button>
		<HyperlinkButton
				href="https://www.microsoft.com/design/fluent/"
				rel="noreferrer noopener"
				target="_blank"
		>
			Learn More
		</HyperlinkButton>
	</div>
	<div class="design-image">
		<picture>
			<source
					media="(prefers-color-scheme: dark)"
					srcset="/screenshots/folder-list-dark.png"
			>
			<source
					media="(prefers-color-scheme: light)"
					srcset="/screenshots/folder-list-light.png"
			>
			<img
					alt="Files folder list screenshot"
					class="files-screenshot"
					src="/screenshots/folder-list-light.png"
					style="transform: translateY({Math.floor(scrollY / -10)}px)"
			>
		</picture>
		<picture>
			<source
					media="(prefers-color-scheme: dark)"
					srcset="/screenshots/win11-dark.png"
			>
			<source
					media="(prefers-color-scheme: light)"
					srcset="/screenshots/win11-light.png"
			>
			<img
					alt="Windows 11 wallpaper"
					class="files-wallpaper"
					src="/screenshots/win11-light.png"
			>
		</picture>
	</div>
</PageSection>

<style lang="scss">
	@use "DesignSection";
</style>