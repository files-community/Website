<script lang="ts">
	import { onMount } from "svelte";

	import { FeatureCard, HeaderChip, PageSection } from "$lib";
	import { featureCards } from "$data/features";

	import FeatureShowcase from "./FeatureShowcase.svelte";
	import { dev } from "$app/env";
	import { text } from "../../i18n/i18n";

	let currentFeature = 0;

	let cardPaginationInterval = 16;

	onMount(() => {
		if (!dev) {
			// Iterate through feature cards every n seconds
			setInterval(
				() => {
					currentFeature += currentFeature !== 3 ? 1 : -currentFeature;
					cardPaginationInterval = 16;
				},
				cardPaginationInterval * 1000
			);
		}
	});
</script>

<PageSection id="features-section">
	<div class="features-section-left">
		<FeatureShowcase feature={currentFeature} />
	</div>
	<div class="features-section-right">
		<HeaderChip>{text.section.features.title()}</HeaderChip>
		<h2>{text.section.features.hook()}</h2>
		<p>{text.section.features.description()}</p>
		<hr>
		<div class="feature-cards-container">
			{#each featureCards as feature, i}
				<FeatureCard
					on:click={() => {
						currentFeature = i;
						cardPaginationInterval = 24;
					}}
					clickable
					selected={currentFeature === i}
					description={feature.description}
					icon={feature.icon}
				>
					{feature.title}
				</FeatureCard>
			{/each}
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "FeaturesSection";
</style>
