<script lang="ts">
    import { onMount } from "svelte";

	import { FeatureCard, HeaderChip, PageSection } from "$lib";    
	import { featureCards } from "$data/features";

	import FeatureShowcase from "./FeatureShowcase.svelte";

	let currentFeature = 0;

	const cardPaginationInterval = 16;

	onMount(() => {
		// Iterate through feature cards every n seconds
		setInterval(() => currentFeature += currentFeature !== 3 ? 1 : -currentFeature, cardPaginationInterval * 1000);
	});
</script>

<PageSection id="features-section">
	<div class="features-section-left">
		<FeatureShowcase feature={currentFeature} />
	</div>
	<div class="features-section-right">
		<HeaderChip>Features</HeaderChip>
		<h2>It already does that.</h2>
		<p>Cloud files integration? Tabs and multiple layouts? Rich file previews? Files has it covered with robust features
			you expect from a modern file manager.</p>
		<hr role="separator"/>
		<div class="feature-cards-container">
			{#each featureCards as feature, i}
				<FeatureCard
                    on:click={() => currentFeature = i}
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