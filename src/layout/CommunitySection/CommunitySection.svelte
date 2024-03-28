<script lang="ts">
	import { links } from "$data/links";
	import {
		Contributor,
		defaultI18nValues,
		HeaderChip,
		PageSection,
	} from "$lib";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import Profile from "~icons/fluent/person-32-filled?raw";
	import type { PageData } from "../../routes/$types";

	export let contributors: PageData["contributors"];
</script>

<PageSection id="community-section">
	<div class="community-section-card">
		<div class="community-section-text">
			<HeaderChip>{$_("home.community.chip", defaultI18nValues)}</HeaderChip>
			<h2>{$_("home.community.title", defaultI18nValues)}</h2>
			<p>{$_("home.community.description", defaultI18nValues)}</p>
			<div class="buttons-spacer">
				<Button variant="hyperlink" href="https://discord.gg/{links.discord}">
					{$_("home.community.discord", defaultI18nValues)}
				</Button>
				<Button variant="hyperlink" href="/docs/contributing/code-style">
					{$_("home.community.docs", defaultI18nValues)}
				</Button>
			</div>
		</div>
		<div class="contributors-container">
			{#each contributors as rowPromise, i}
				<div class="contributors-row">
					{#await rowPromise then row}
						{#each row.sort(() => Math.random() - 0.5) as { html_url, avatar_url, login, contributions, type }}
							<Contributor
								{html_url}
								{avatar_url}
								{login}
								{contributions}
								{type}
							/>
						{/each}
					{:catch}
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
		<div class="rainbow-background" />
	</div>
</PageSection>

<style lang="scss">
	@use "./CommunitySection";
</style>
