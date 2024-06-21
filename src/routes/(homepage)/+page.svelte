<script lang="ts">
	import { defaultI18nValues, Metadata } from "$lib";
	import { _ } from "svelte-i18n";
	import DesignSection from "./DesignSection/DesignSection.svelte";
	import FeaturesSection from "./FeaturesSection/FeaturesSection.svelte";
	import ThemesSection from "./ThemesSection/ThemesSection.svelte";
	import CommunitySection from "./CommunitySection/CommunitySection.svelte";

	export let data;
	$: ({ contributors } = data);
</script>

<Metadata title={$_("metadata.home", defaultI18nValues)} />

<DesignSection />

<FeaturesSection />

<ThemesSection />

<CommunitySection {contributors} />
