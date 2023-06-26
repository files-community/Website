<script lang="ts">
	import { page } from "$app/stores";
	import { _ } from "svelte-i18n";
	import { defaultI18nValues } from "$lib";

	export let title = $_("metadata.name");
	export let description = $_("metadata.description", defaultI18nValues);
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

	<meta content={description} name="description" />
	<meta content={description} name="og:description" />
	<meta content={description} name="twitter:description" />
</svelte:head>
