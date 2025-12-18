<script lang="ts">
	import {
		HeroSection,
		DualPaneSection,
		CommunitySection,
		DesignSection,
		FeaturesSection,
		ThemesSection,
	} from "$layout";
	import { defaultI18nValues, Metadata } from "$lib";
	import { _ } from "svelte-i18n";

	export let data;
	$: ({ contributors } = data);
</script>

<Metadata title={$_("metadata.home", defaultI18nValues)} />

<HeroSection />

<DualPaneSection />

<DesignSection />

<FeaturesSection />

<ThemesSection />

<CommunitySection {contributors} />
