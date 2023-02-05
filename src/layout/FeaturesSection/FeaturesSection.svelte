<script lang="ts">
	import { onMount } from "svelte";
	import { dev } from "$app/environment";
	import { _ } from "svelte-i18n";

	import { entries, FeatureCard, HeaderChip, PageSection } from "$lib";
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
			title: $_("home.features.tabs.title"),
			description: $_("home.features.tabs.description"),
			icon: TabDesktop
		},
		columns: {
			title: $_("home.features.columns.title"),
			description: $_("home.features.columns.description"),
			icon: Columns
		},
		archives: {
			title: $_("home.features.archives.title"),
			description: $_("home.features.archives.description"),
			icon: Archive
		},
		cloud: {
			title: $_("home.features.cloud.title"),
			description: $_("home.features.cloud.description"),
			icon: Cloud
		},
		preview: {
			title: $_("home.features.preview.title"),
			description: $_("home.features.preview.description"),
			icon: EyeVisible
		},
		tags: {
			title: $_("home.features.tags.title"),
			description: $_("home.features.tags.description"),
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
