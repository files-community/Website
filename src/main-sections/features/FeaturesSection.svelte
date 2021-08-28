<script lang="ts">
	import { FeatureCard, HeaderChip, PageSection } from "$lib/"
	import { onMount } from "svelte"
	import { featureCards } from "$data/features"
	import CloudShowcase from "./features/CloudShowcase.svelte"
	import PreviewShowcase from "./features/PreviewShowcase.svelte"
	import TagsShowcase from "./features/TagsShowcase.svelte"
	import TabsShowcase from "./features/TabsShowcase.svelte"

	let currentFeature = 0
	const cardSwitchInterval = 16 // in seconds

	onMount(() => {
		// Iterate through feature cards
		setInterval(() => currentFeature += currentFeature !== 3 ? 1 : -currentFeature, cardSwitchInterval * 1000)
	})
</script>

<PageSection id="features-section">
	<div class="features-section-left">
		{#if currentFeature === 0}
			<CloudShowcase/>
		{:else if currentFeature === 1}
			<PreviewShowcase/>
		{:else if currentFeature === 2}
			<TagsShowcase/>
		{:else if currentFeature === 3}
			<TabsShowcase/>
		{/if}
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