<script lang="ts">
	import { CommunitySection, DesignSection, FeaturesSection, HeroSection, ThemesSection } from "$main-sections/"
</script>

<svelte:head>
	<title>Files</title>
	<meta content="Files - Home" property="og:title">

	<meta content="/branding/banner-light.png" property="og:image">
</svelte:head>

<HeroSection/>

<DesignSection/>

<FeaturesSection/>

<ThemesSection/>

<CommunitySection/>

<style lang="scss">
	@use "../main-sections/hero/HeroSection";
</style>