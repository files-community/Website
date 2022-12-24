<script lang="ts">
	import { t } from "$data/i18n";
	import {
		CommunitySection,
		DesignSection,
		FeaturesSection,
		ThemesSection
	} from "$layout";
	import { Metadata } from "$lib";
</script>

<svelte:head>
	<Metadata title={`Files • ${t("meta.header.home")}`} />
</svelte:head>

<DesignSection />

<FeaturesSection />

<ThemesSection />

<CommunitySection />
