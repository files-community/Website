<script lang="ts">
	import type { ContributorData } from "$data/fetchHomepageData";

    import { onMount } from "svelte";

	import { links } from "$data/links";
	import { getContributors } from "$data/fetchHomepageData";
	import {
        Contributor,
        HeaderChip,
        HyperlinkButton,
        PageSection,
        rainbowCanvas
    } from "$lib";

	// Fetch contributors for the community section
	let [contributors1, contributors2, contributors3]: Array<ContributorData[]> = [[], [], []];

	// Utility function for randomly shuffling an array
	const shuffle = a => a.sort(() => Math.random() - 0.5);

	onMount(async () => {
		// Fetch contributors for the community section
		contributors1 = await getContributors(1);
		contributors2 = await getContributors(2);
		contributors3 = await getContributors(3);
	})
</script>

<PageSection id="community-section">
	<div class="community-section-card">
		<div class="community-section-text">
			<HeaderChip>Community</HeaderChip>
			<h2>Designed and developed by you.</h2>
			<p>Files is free and open source software, maintained and designed by a collective of hundreds of
				contributors.</p>
			<div class="buttons-spacer">
				<HyperlinkButton href="https://discord.gg/{links.discord}">Join the discussion</HyperlinkButton>
				<HyperlinkButton href="/docs/contributing/code-style">Become a contributor</HyperlinkButton>
			</div>
		</div>
		{#if contributors1 && contributors2 && contributors3}
			<div class="contributors-container">
				{#each [contributors1, contributors2, contributors3] as contributors}
					<div class="contributors-row">
						{#each shuffle(contributors) as {html_url, avatar_url, login, contributions, type}}
							<Contributor
                                {html_url}
                                {avatar_url}
                                {login}
                                {contributions}
                                {type}
							/>
						{/each}
					</div>
				{/each}
			</div>
		{/if}
		<canvas use:rainbowCanvas></canvas>
	</div>
</PageSection>

<style lang="scss">
	@use "src/styles/mixins" as *;

	// Outer section
	:global(#community-section) {
		overflow: hidden;

		// Center our buttons
		.buttons-spacer {
			justify-content: center;
		}
	}

	.community-section- {
		// Since we need to always contrast against a
		// light-ish background, we'll need to hardcode
		// some variables.
		&text {
			text-align: center; // Align text to center
			--background-base: #f3f3f3;
			--text-color-primary: #202020;
			--text-color-secondary: #282828;
			--text-color-tertiary: var(--text-color-secondary);
			--subtle-color-secondary: rgba(0, 0, 0, 0.035);
			--subtle-color-tertiary: rgba(0, 0, 0, 0.024);
			--subtle-color-disabled: rgba(255, 255, 255, 0);
			--accent-text-default: var(--accent-color-dark-3);
			--accent-text-tertiary: var(--accent-color-dark-2);

			// Align descriptions to center
			p {
				margin-right: auto;
				margin-left: auto;
			}
		}

		// Inner card element
		// Encompasses the content of the community section
		&card {
			@include flex($direction: column, $justify: center, $align: center);
			position: relative;
			z-index: 0;
			width: 100%;
			max-width: 2048px;
			min-height: 600px;
			padding: 72px 48px;
			border-radius: var(--overlay-corner-radius);
			background-color: #F9F9F9;
			box-shadow: 0 2.74416px 2.74416px rgb(0 0 0 / 3%),
			0 5.48831px 5.48831px rgb(0 0 0 / 4%),
			0 13.7208px 10.9766px rgb(0 0 0 / 5%),
			0 20.5812px 20.5812px rgb(0 0 0 / 6%),
			0 41.1623px 41.1623px rgb(0 0 0 / 7%),
			0 96.0454px 89.1851px rgb(0 0 0 / 9%);

			canvas {
                --gradient-color-1: #8560f2; 
                --gradient-color-2: #d264e9; 
                --gradient-color-3: #ccbad4;  
                --gradient-color-4: #a8d2ff;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
				width: 100%;
				height: 100%;
				border-radius: var(--overlay-corner-radius);
			}
		}
	}

	// Contributors
	// Left scroller animation
	@keyframes contributors-left {
		to {
			transform: translateX(50%);
		}
	}

	// Right scroller animation
	@keyframes contributors-right {
		to {
			transform: translateX(-50%);
		}
	}

	// Contributor cards
	.contributors- {

		// Contributors container
		// Serves no other purpose other than spacing it from the main text.
		&container {
			position: relative;
			max-width: 2800px;

			// Preserve box-shadows when overflow is hidden
			margin-bottom: -128px;
			padding: 64px 0 128px 0;
			overflow: hidden;

			// Fade gutters
			// Seamlessly fades incoming/outgoing cards into the section at large resolutions.
			&::before,
			&::after {
				content: "";
				position: absolute;
				z-index: 1;
				width: 96px;
				height: 100%;
			}

			&::before {
				left: 0;
				background-image: linear-gradient(90deg, var(--background-secondary), transparent);
			}

			&::after {
				right: 0;
				background: linear-gradient(90deg, transparent, var(--background-secondary));
			}
		}

		// Contributor rows
		&row {
			position: relative;
			margin-bottom: 12px;
			white-space: nowrap;

			// Space out contributor cards
			:global(.contributor) {
				margin-right: 12px;
			}

			// Add some variation between rows
			&:nth-child(even) {
				left: 24px;
				float: left;
				animation: contributors-right 80s linear infinite;
			}

			&:nth-child(odd) {
				left: -24px;
				float: right;
				animation: contributors-left 80s linear infinite;
			}

			// Prevent extra bottom margins
			&:last-child {
				margin: 0;
				animation-delay: 2s;
			}
		}
	}

	// Community section small device support
	@media only screen and (max-width: 768px) {

		// We have less space to work with here,
		// so we'll decrease the padding of the card.
		.community-section-card {
			padding: 24px;

			// The header also starts to look bad when it
			// wraps too much, so decrease the font-size
			h2 {
				font-size: 3.2rem;
			}
		}
	}
</style>