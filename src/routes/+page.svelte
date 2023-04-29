<script lang="ts">
	import {
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

<DesignSection />

<FeaturesSection />

<ThemesSection />

<CommunitySection {contributors} />
