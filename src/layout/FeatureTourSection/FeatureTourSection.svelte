<script lang="ts">
	import { defaultI18nValues, HeaderChip, PageSection } from "$lib";
	import { _ } from "svelte-i18n";
	import FeatureShot from "./FeatureShot.svelte";
	import StoreCta from "../StoreCta/StoreCta.svelte";
	import ReopenTab from "~icons/fluent/tab-arrow-left-24-regular";
	import Hash from "~icons/fluent/number-symbol-24-regular";
	import Keyboard from "~icons/fluent/keyboard-24-regular";
	import SortIcon from "~icons/fluent/arrow-sort-24-regular";
	import FilterIcon from "~icons/fluent/filter-24-regular";
	import LockedZip from "~icons/fluent/folder-zip-24-regular";
	import Code from "~icons/fluent/code-24-regular";
	import GoUp from "~icons/fluent/arrow-up-24-regular";
	import Overlay from "~icons/fluent/picture-in-picture-24-regular";
	import ChevronRight from "~icons/fluent/chevron-right-12-regular";

	type Edge = "top" | "right" | "bottom" | "left";

	// `edges` are the sides of the crop where the window ends; the other sides
	// run off the card.
	const features: {
		id: string;
		edges: Edge[];
		zoom?: boolean;
		/** Hard crop with no fade */
		bare?: boolean;
		docs?: string;
	}[] = [
		{
			id: "dualpane",
			edges: ["top", "left"],
			docs: "/docs/features/dual-pane",
		},
		{ id: "tags", edges: ["top", "left"], docs: "/docs/features/tags" },
		{ id: "columns", edges: ["top"], docs: "/docs/features/layout" },
		{
			id: "palette",
			edges: ["top", "right"],
			zoom: true,
			docs: "/docs/features/command-palette",
		},
		{
			id: "git",
			edges: ["right", "bottom"],
			docs: "/docs/features/git",
		},
		{
			id: "toolbar",
			edges: ["left"],
			docs: "/docs/features/toolbar",
		},
		{ id: "extract", edges: [], bare: true },
		{
			id: "foldersizes",
			edges: ["left", "right", "bottom"],
			docs: "/docs/customize-settings/files-and-folders#calculate-folder-sizes",
		},
		{
			id: "backgrounds",
			edges: ["top", "right"],
			docs: "/docs/features/background-image",
		},
	];

	const more = [
		{ id: "reopen_tab", icon: ReopenTab },
		{ id: "hashes", icon: Hash },
		{ id: "shortcuts", icon: Keyboard },
		{ id: "compact_overlay", icon: Overlay },
		{ id: "go_up", icon: GoUp },
		{ id: "sort_together", icon: SortIcon },
		{ id: "filter", icon: FilterIcon },
		{ id: "archives", icon: LockedZip },
		{ id: "ide", icon: Code },
	];
</script>

<PageSection id="tour-section">
	<div class="tour-header">
		<HeaderChip>{$_("home.tour.chip", defaultI18nValues)}</HeaderChip>
		<h2>{$_("home.tour.title", defaultI18nValues)}</h2>
		<p>{$_("home.tour.description", defaultI18nValues)}</p>
	</div>

	<ul class="feature-grid">
		{#each features as feature (feature.id)}
			<li class="feature-card">
				<div class="feature-text">
					<h3>{$_(`home.tour.${feature.id}.title`, defaultI18nValues)}</h3>
					<p>{$_(`home.tour.${feature.id}.description`, defaultI18nValues)}</p>
					{#if feature.docs}
						<a class="learn-more" href={feature.docs}>
							{$_("home.tour.learn_more", defaultI18nValues)}
							<ChevronRight aria-hidden="true" />
						</a>
					{/if}
				</div>
				<FeatureShot
					id={feature.id}
					edges={feature.edges}
					zoom={feature.zoom}
					fade={!feature.bare}
					alt={$_(`home.tour.${feature.id}.alt`, defaultI18nValues)}
				/>
			</li>
		{/each}
	</ul>

	<div class="more">
		<h3>{$_("home.tour.more.title", defaultI18nValues)}</h3>
		<ul class="more-grid">
			{#each more as item (item.id)}
				<li>
					<span class="more-icon"><svelte:component this={item.icon} /></span>
					<div>
						<h4>{$_(`home.tour.more.${item.id}.title`, defaultI18nValues)}</h4>
						<p>
							{$_(`home.tour.more.${item.id}.description`, defaultI18nValues)}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>

	<StoreCta />
</PageSection>

<style lang="scss">
	@use "FeatureTourSection";
</style>
