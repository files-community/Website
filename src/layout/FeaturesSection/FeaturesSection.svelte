<script lang="ts">
	import { onMount } from "svelte";
	import { dev } from "$app/environment";
	import { _ } from "svelte-i18n";

	import { defaultI18nValues, entries, FeatureCard, HeaderChip, PageSection } from "$lib";
	import type { FeatureCardData } from "$data/features";

	import FeatureShowcase from "./FeatureShowcase.svelte";
	import Cloud from "@fluentui/svg-icons/icons/cloud_24_regular.svg?raw";
	import TabDesktop from "@fluentui/svg-icons/icons/tab_desktop_20_regular.svg?raw";
	import EyeVisible from "@fluentui/svg-icons/icons/eye_20_regular.svg?raw";
	import Tag from "@fluentui/svg-icons/icons/tag_24_regular.svg?raw";
	import Columns from "@fluentui/svg-icons/icons/panel_left_28_regular.svg?raw";
	import Archive from "@fluentui/svg-icons/icons/folder_zip_24_regular.svg?raw";
	
	let cardPaginationInterval = 16;

	export const featureCards = {
		tabs: {
			title: $_("home.features.tabs.title", defaultI18nValues),
			description: $_("home.features.tabs.description", defaultI18nValues),
			icon: TabDesktop
		},
		columns: {
			title: $_("home.features.columns.title", defaultI18nValues),
			description: $_("home.features.columns.description", defaultI18nValues),
			icon: Columns
		},
		archives: {
			title: $_("home.features.archives.title", defaultI18nValues),
			description: $_("home.features.archives.description", defaultI18nValues),
			icon: Archive
		},
		cloud: {
			title: $_("home.features.cloud.title", defaultI18nValues),
			description: $_("home.features.cloud.description", defaultI18nValues),
			icon: Cloud
		},
		preview: {
			title: $_("home.features.preview.title", defaultI18nValues),
			description: $_("home.features.preview.description", defaultI18nValues),
			icon: EyeVisible
		},
		tags: {
			title: $_("home.features.tags.title", defaultI18nValues),
			description: $_("home.features.tags.description", defaultI18nValues),
			icon: Tag
		}
	} as const satisfies { [name: string]: FeatureCardData };

	let currentFeature: keyof typeof featureCards = "tabs";
</script>

<PageSection id="features-section">
	<div class="features-section-right">
		<HeaderChip>{$_("home.features.chip")}</HeaderChip>
		<h2>{$_("home.features.title")}</h2>
		<p>{$_("home.features.description")}</p>
		<hr />
		<div class="feature-cards-container">
			{#each entries(featureCards) as [id, feature]}
				<FeatureCard
					on:click={() => {
						currentFeature = id;
						cardPaginationInterval = 24;
					}}
					clickable
					selected={currentFeature === id}
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
