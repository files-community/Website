<script lang="ts">
	import { _ } from "svelte-i18n";

	import type { FeatureCardData } from "$data/features";
	import {
		defaultI18nValues,
		entries,
		FeatureCard,
		HeaderChip,
		PageSection,
	} from "$lib";

	import Cloud from "~icons/fluent/cloud-24-regular";
	import EyeVisible from "~icons/fluent/eye-20-regular";
	import Archive from "~icons/fluent/folder-zip-24-regular";
	import Columns from "~icons/fluent/panel-left-28-regular";
	import TabDesktop from "~icons/fluent/tab-desktop-20-regular";
	import Tag from "~icons/fluent/tag-24-regular";
	import Branch from "~icons/fluent/branch-24-regular";
	import DualPane from "~icons/fluent/panel-right-28-regular";
	import Hash from "~icons/fluent/number-symbol-24-regular";

	let cardPaginationInterval = 16;

	export const featureCards = {
		tabs: {
			title: $_("home.features.tabs.title", defaultI18nValues),
			description: $_("home.features.tabs.description", defaultI18nValues),
			icon: TabDesktop,
		},
		dualPane: {
			title: $_("home.features.dual-pane.title", defaultI18nValues),
			description: $_("home.features.dual-pane.description", defaultI18nValues),
			icon: DualPane,
		},
		tags: {
			title: $_("home.features.tags.title", defaultI18nValues),
			description: $_("home.features.tags.description", defaultI18nValues),
			icon: Tag,
		},
		columns: {
			title: $_("home.features.columns.title", defaultI18nValues),
			description: $_("home.features.columns.description", defaultI18nValues),
			icon: Columns,
		},
		archives: {
			title: $_("home.features.archives.title", defaultI18nValues),
			description: $_("home.features.archives.description", defaultI18nValues),
			icon: Archive,
		},
		cloud: {
			title: $_("home.features.cloud.title", defaultI18nValues),
			description: $_("home.features.cloud.description", defaultI18nValues),
			icon: Cloud,
		},
		preview: {
			title: $_("home.features.preview.title", defaultI18nValues),
			description: $_("home.features.preview.description", defaultI18nValues),
			icon: EyeVisible,
		},
		git: {
			title: $_("home.features.git.title", defaultI18nValues),
			description: $_("home.features.git.description", defaultI18nValues),
			icon: Branch,
		},
		hashes: {
			title: $_("home.features.hashes.title", defaultI18nValues),
			description: $_("home.features.hashes.description", defaultI18nValues),
			icon: Hash,
		},
	} as const satisfies { [name: string]: FeatureCardData };

	let currentFeature: keyof typeof featureCards = "tabs";
</script>

<PageSection id="features-section">
	<div class="features-section-right">
		<HeaderChip>{$_("home.features.chip")}</HeaderChip>
		<h2>{$_("home.features.title")}</h2>
		<p>{$_("home.features.description", defaultI18nValues)}</p>
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
				>
					<svelte:component this={feature.icon} slot="icon" />
					{feature.title}
				</FeatureCard>
			{/each}
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "FeaturesSection";
</style>
