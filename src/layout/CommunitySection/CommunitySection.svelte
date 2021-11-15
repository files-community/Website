<script lang="ts">
	import type { ContributorData } from "$data/fetchHomepageData";
	import { getContributors } from "$data/fetchHomepageData";
	import { onMount } from "svelte";

	import { links } from "$data/links";
	import {
		Contributor,
		HeaderChip,
		HyperlinkButton,
		PageSection,
		rainbowCanvas
	} from "$lib";

	// Fetch contributors for the community section
	let [contributors1, contributors2, contributors3]: Array<ContributorData[]> =
		[[], [], []];

	onMount(async () => {
		// Fetch contributors for the community section
		contributors1 = await getContributors(1);
		contributors2 = await getContributors(2);
		contributors3 = await getContributors(3);
	});
</script>

<PageSection id="community-section">
	<div class="community-section-card">
		<div class="community-section-text">
			<HeaderChip>Community</HeaderChip>
			<h2>Designed and developed by you.</h2>
			<p>
				Files is free and open source software, maintained and designed by a
				collective of hundreds of contributors.
			</p>
			<div class="buttons-spacer">
				<HyperlinkButton href="https://discord.gg/{links.discord}">
					Join the discussion
				</HyperlinkButton>
				<HyperlinkButton href="/docs/contributing/code-style">
					Become a contributor
				</HyperlinkButton>
			</div>
		</div>
		{#if contributors1 && contributors2 && contributors3}
			<div class="contributors-container">
				{#each [contributors1, contributors2, contributors3] as contributors}
					<div class="contributors-row">
						{#each contributors.sort(() => Math.random() - 0.5) as { html_url, avatar_url, login, contributions, type }}
							<Contributor
								{html_url}
								{avatar_url}
								{login}
								{contributions}
								{type}
							/>
						{/each}
					</div>
				{/each}
			</div>
		{/if}
		<canvas use:rainbowCanvas></canvas>
	</div>
</PageSection>

<style lang="scss" src="./CommunitySection.scss"></style>
