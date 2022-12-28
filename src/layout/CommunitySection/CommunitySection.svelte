<script lang="ts">
	import { getContributors } from "$data/fetchHomepageData";
	import { links } from "$data/links";
	import { Contributor, HeaderChip, PageSection } from "$lib";
	import { Button } from "fluent-svelte";
	import Profile from "@fluentui/svg-icons/icons/person_32_filled.svg?raw";
	import { defaultLanguage, getLanguage, t } from "$data/i18n";

	// Fetch contributors for the community section
	const contributorRows = [
		getContributors(1),
		getContributors(2),
		getContributors(3)
	];
</script>

<PageSection id="community-section">
	<div class="community-section-card">
		<div class="community-section-text">
			<HeaderChip>{t("section.community.chip")}</HeaderChip>
			<h2>{t("section.community.header")}</h2>
			<p>{t("section.community.description")}</p>
			<div class="buttons-spacer">
				<Button variant="hyperlink" href="https://discord.gg/{links.discord}">
					{t("section.community.discussion")}
				</Button>
				<Button
					variant="hyperlink"
					href={getLanguage() === defaultLanguage
						? "/docs/contributing/code-style"
						: `/docs/${getLanguage()}-contributing/code-style`}
				>
					{t("section.community.contributor")}
				</Button>
			</div>
		</div>
		{#if contributorRows.every(it => it)}
			<div class="contributors-container">
				{#each contributorRows as contributorsPromise}
					<div class="contributors-row">
						{#await contributorsPromise then contributors}
							{#each contributors.sort(() => Math.random() - 0.5) as { html_url, avatar_url, login, contributions, type }}
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
									html_url="https://github.com/yaira2"
									avatar_url="data:image/svg+xml;{encodeURIComponent(Profile)}"
									contributions={0}
								/>
							{/each}
						{/await}
					</div>
				{/each}
			</div>
		{/if}
		<div class="rainbow-background" />
	</div>
</PageSection>

<style lang="scss">
	@use "./CommunitySection";
</style>
