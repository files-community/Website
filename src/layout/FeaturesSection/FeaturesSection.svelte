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
	import Hash from "~icons/fluent/number-symbol-24-regular";
	import Diamond from "~icons/fluent/diamond-24-regular";
	import PanelRight from "~icons/fluent/panel-right-24-regular";
	import Keyboard from "~icons/fluent/Keyboard-24-regular";

	export const featureCards = {
		tabs: {
			title: $_("home.features.tabs.title", defaultI18nValues),
			description: $_("home.features.tabs.description", defaultI18nValues),
			icon: TabDesktop,
		},
		dualPane: {
			title: $_("home.features.dual-pane.title", defaultI18nValues),
			description: $_("home.features.dual-pane.description", defaultI18nValues),
			icon: PanelRight,
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
			icon: PanelRight,
		},
		popupPreview: {
			title: $_("home.features.popup-preview.title", defaultI18nValues),
			description: $_(
				"home.features.popup-preview.description",
				defaultI18nValues,
			),
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
		command: {
			title: $_("home.features.command-palette.title", defaultI18nValues),
			description: $_("home.features.command-palette.description", defaultI18nValues),
			icon: Diamond,
		},
		keyboard: {
			title: $_("home.features.remap-key-bindings.title", defaultI18nValues),
			description: $_("home.features.remap-key-bindings.description", defaultI18nValues),
			icon: Keyboard,
		},
	} as const satisfies { [name: string]: FeatureCardData };
</script>

<PageSection id="features-section">
	<div class="features-section-right">
		<HeaderChip>{$_("home.features.chip")}</HeaderChip>
		<h2>{$_("home.features.title")}</h2>
		<p>{$_("home.features.description", defaultI18nValues)}</p>
		<hr />
		<div class="feature-cards-container">
			{#each entries(featureCards) as [id, feature] (id)}
				<FeatureCard description={feature.description}>
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
