<script lang="ts">
	import {
		CommunitySection,
		DesignSection,
		FeaturesSection,
		ThemesSection
	} from "$layout";
	import { Metadata } from "$lib";
	import { _ } from "svelte-i18n";
</script>

<Metadata title={$_("metadata.home")} />

<DesignSection />

<FeaturesSection />

<ThemesSection />

<CommunitySection />
