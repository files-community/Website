import { onMount } from "svelte";

export let minimal = false;

onMount(() => {
	const params = new URLSearchParams(window.location.search);
	minimal = params.has("minimal");
});
