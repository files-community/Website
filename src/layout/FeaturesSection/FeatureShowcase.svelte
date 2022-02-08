<script lang="ts">
	import CloudShowcase from "./cloud/CloudShowcase.svelte";
	import PreviewShowcase from "./preview/PreviewShowcase.svelte";
	import TagsShowcase from "./tags/TagsShowcase.svelte";
	import TabsShowcase from "./tabs/TabsShowcase.svelte";
	import "./FeatureShowcase.scss";

	export let feature = 0;
</script>

{#if feature === 0}
	<CloudShowcase />
{:else if feature === 1}
	<PreviewShowcase />
{:else if feature === 2}
	<TagsShowcase />
{:else if feature === 3}
	<TabsShowcase />
{/if}
