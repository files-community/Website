<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { theme } from "$data/theme";

	export let title = "Files";
	export let image = "";
	$: imageFile = image.startsWith("/") ? image : `/branding/banner-${image}${image !== "" ? "-" : ""}${$theme}.png`

	onMount(() => {
		$theme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";

		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", e => {
				$theme = e.matches ? "dark" : "light";
			});
	});
</script>

<title>{title}</title>
<meta content={title} name="og:title">
<meta content={title} name="twitter:title">

{#if $theme}
	<meta content={imageFile} name="og:image">
	<meta content="https://{$page.url.host}{imageFile}" name="twitter:image">
{/if}