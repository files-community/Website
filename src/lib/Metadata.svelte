<script lang="ts">
	import { page } from "$app/stores";

	export let title = "Files";
	export let image = "/branding/banner-light.png";
</script>

<title>{title}</title>
<meta content={title} name="og:title" />
<meta content={title} name="twitter:title" />

<meta content={image} name="og:image" />
<meta content="https://{$page.host}{image}" name="twitter:image" />