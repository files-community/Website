<script lang="ts">
	import {
		CommunitySection,
		HeroSection,
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

<FeaturesSection />

<ThemesSection />

<CommunitySection {contributors} />
