<script lang="ts">
	import { page } from "$app/stores";
	import { _ } from "svelte-i18n";
	
	export let title = $_("metadata.name");
	export let image = "";
	$: imageFile = image.startsWith("/")
		? image
		: `/branding/banner${image === "" ? "" : "-" + image}.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="og:title" />
	<meta content={title} name="twitter:title" />

	<meta content={imageFile} name="og:image" />
	<meta content="https://{$page.url.host}{imageFile}" name="twitter:image" />
</svelte:head>
