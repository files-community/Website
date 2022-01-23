<script lang="ts">
	import { getContributors } from "$data/fetchHomepageData";
	import { links } from "$data/links";
	import { Contributor, HeaderChip, PageSection } from "$lib";
	import { Button } from "fluent-svelte";
	import Profile from "@fluentui/svg-icons/icons/person_32_filled.svg?raw";

	// Fetch contributors for the community section
	const contributorRows = [getContributors(1), getContributors(2), getContributors(3)]
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
				<Button variant="hyperlink" href="https://discord.gg/{links.discord}">
					Join the discussion
				</Button>
				<Button variant="hyperlink" href="/docs/contributing/code-style">
					Become a contributor
				</Button>
			</div>
		</div>
		{#if contributorRows.every(it => it)}
			<div class="contributors-container">
				{#each contributorRows as contributorsPromise}
					<div class="contributors-row">
						{#await contributorsPromise then contributors}
							{#each contributors.sort(() => Math.random() - 0.5) as {
								html_url,
								avatar_url,
								login,
								contributions,
								type
							}}
								<Contributor
									{html_url}
									{avatar_url}
									{login}
									{contributions}
									{type}
								/>
							{/each}
						{:catch err}
							{#each Array(35) as _}
								<Contributor
									html_url="https://github.com/yaichenbaum"
									avatar_url="data:image/svg+xml;{encodeURIComponent(Profile)}"
									contributions={0}
								/>
							{/each}
						{/await}
					</div>
				{/each}
			</div>
		{/if}
		<div class="rainbow-background"></div>
	</div>
</PageSection>

<style lang="scss">@use "./CommunitySection";
</style>
