<script>
	import { Metadata } from "$lib";
	import { page } from "$app/stores";
</script>

<svelte:head>
	<Metadata title="Files - Download Stable"/>
	<meta content="/branding/banner-download-light.png" name="og:image"/>
	<meta content="https://{$page.host}/branding/banner-download-light.png" name="twitter:image"/>
	<meta
		http-equiv="refresh"
		content="0; url=ms-appinstaller:?source=https://filescommunity.blob.core.windows.net/files/stable/Files.Package.appinstaller"
	>
</svelte:head>