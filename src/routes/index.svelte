<script lang="ts">
	import {
		CommunitySection,
		DesignSection,
		FeaturesSection,
		HeroSection,
		ThemesSection,
		Footer
	} from "$layout/";
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>Files</title>
	<meta content="Files - Home" name="og:title" />
	<meta content="Files - Home" name="twitter:title" />

	<meta content="/branding/banner-light.png" name="og:image" />
	<meta content="{$page.host}/branding/banner-light.png" name="twitter:image" />
</svelte:head>

<HeroSection />

<DesignSection />

<FeaturesSection />

<ThemesSection />

<CommunitySection />

<Footer />