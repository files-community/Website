<script lang="ts">
	import { t } from "$data/i18n";
	import { getMaturity } from "$data/i18n/maturities";
	import { externalLink } from "$lib";
	import { PersonPicture } from "fluent-svelte";

	export let html_url: string = undefined;
	export let avatar_url: string = undefined;
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
			<span
				>{contributions}
				{getMaturity(contributions, [
					t("section.community.members.contribution_1"),
					t("section.community.members.contributions_2_5"),
					t("section.community.members.contributions_6_0")
				])}
			</span>
		</div>
	</a>
{/if}

<style lang="scss">
	@use "./Contributor";
</style>
