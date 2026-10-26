<script lang="ts">
	import {
		HeroSection,
		FeatureTourSection,
		DownloadSection,
		CommunitySection,
	} from "$layout";
	import { defaultI18nValues, Metadata } from "$lib";
	import { _ } from "svelte-i18n";

	export let data;
	$: ({ contributors, stats } = data);
</script>

<Metadata title={$_("metadata.home", defaultI18nValues)} />

<HeroSection />

<FeatureTourSection />

<CommunitySection {contributors} {stats} />

<DownloadSection />
