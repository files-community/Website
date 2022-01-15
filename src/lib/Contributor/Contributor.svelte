<script lang="ts">
	import { external } from "$lib";
	import { PersonPicture } from "fluent-svelte";

	export let html_url: string = undefined;
	export let avatar_url: string = undefined;
	export let type = "User";
	export let login = "Unknown";
	export let contributions = 0;
</script>

{#if type === "User"}
	<a
		tabindex="-1"
		class="contributor"
		href={html_url}
		{...external}
	>
		<PersonPicture src={avatar_url}
		               size={32}
		               alt="{login}'s avatar"
		               loading="lazy"
		/>
		<div class="info">
			<h5>{login}</h5>
			<span>{contributions} {contributions > 1 ? "contributions" : "contribution"}</span>
		</div>
	</a>
{/if}

<style lang="scss">
	@use "./Contributor";
</style>
