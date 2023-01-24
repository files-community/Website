<script lang="ts">
	import { onMount } from "svelte";
	import { dev } from "$app/environment";
	import { _ } from "svelte-i18n";

	import { FeatureCard, HeaderChip, PageSection } from "$lib";
	import type { FeatureCardData } from "$data/features";

	import FeatureShowcase from "./FeatureShowcase.svelte";
	import Cloud from "@fluentui/svg-icons/icons/cloud_24_regular.svg?raw";
	import TabDesktop from "@fluentui/svg-icons/icons/tab_desktop_20_regular.svg?raw";
	import EyeVisible from "@fluentui/svg-icons/icons/eye_20_regular.svg?raw";
	import Tag from "@fluentui/svg-icons/icons/tag_24_regular.svg?raw";

	let currentFeature = 0;

	let cardPaginationInterval = 16;

	export const featureCards = [
		{
			title: $_("home.features.tabs.title"),
			description: $_("home.features.tabs.description"),
			icon: TabDesktop
		},		
		{
			title: $_("home.features.columns.title"),
			description: $_("home.features.columns.description"),
			icon: TabDesktop
		}
		{
			title: $_("home.features.cloud.title"),
			description: $_("home.features.cloud.description"),
			icon: Cloud
		},
		{
			title: $_("home.features.preview.title"),
			description: $_("home.features.preview.description"),
			icon: EyeVisible
		},
		{
			title: $_("home.features.tags.title"),
			description: $_("home.features.tags.description"),
			icon: Tag
		}
	] as const satisfies readonly FeatureCardData[];

	onMount(() => {
		if (!dev) {
			// Iterate through feature cards every n seconds
			setInterval(() => {
				currentFeature += currentFeature !== 3 ? 1 : -currentFeature;
				cardPaginationInterval = 16;
			}, cardPaginationInterval * 1000);
		}
	});
</script>

<PageSection id="features-section">
	<div class="features-section-left">
		<FeatureShowcase feature={currentFeature} />
	</div>
	<div class="features-section-right">
		<HeaderChip>{$_("home.features.chip")}</HeaderChip>
		<h2>{$_("home.features.title")}</h2>
		<p>{$_("home.features.description")}</p>
		<hr />
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
