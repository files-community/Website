<script lang="ts">
	import { externalLink } from "$lib";
	import { PersonPicture } from "fluent-svelte";
	import { _ } from "svelte-i18n";

	export let html_url: string | undefined = undefined;
	export let avatar_url: string | undefined = undefined;
	export let type = "User";
	export let login = "Unknown";
	export let contributions = 0;
</script>

{#if type === "User"}
	<a tabindex="-1" class="contributor" href={html_url} {...externalLink}>
		<PersonPicture
			src={avatar_url}
			size={32}
			alt="{login}'s avatar"
			loading="lazy"
		/>
		<div class="info">
			<h5>{login}</h5>
			<span>
				{$_("home.community.contributions", {
					values: { amount: contributions }
				})}
			</span>
		</div>
	</a>
{/if}

<style lang="scss">
	@use "./Contributor";
</style>
