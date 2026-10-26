<script lang="ts">
	import { links } from "$data/links";
	import {
		defaultI18nValues,
		externalLink,
		HeaderChip,
		PageSection,
	} from "$lib";
	import { Button, PersonPicture } from "fluent-svelte";
	import { onMount } from "svelte";
	import { _, locale } from "svelte-i18n";
	import Chat from "~icons/fluent/chat-multiple-24-regular";
	import Code from "~icons/fluent/code-24-regular";
	import Translate from "~icons/fluent/translate-24-regular";
	import Heart from "~icons/fluent/heart-24-filled";
	import ChevronRight from "~icons/fluent/chevron-right-16-regular";
	import {
		loadContributors,
		type ContributorData,
		type RepoStats,
	} from "$data/repo-stats";

	export let contributors: ContributorData[];
	export let stats: RepoStats;

	const ways = [
		{
			key: "discord",
			icon: Chat,
			href: `https://discord.gg/${links.discord}`,
			external: true,
		},
		{
			key: "code",
			icon: Code,
			href: "/docs/contributing/building-from-source",
		},
		{
			key: "translate",
			icon: Translate,
			href: "/docs/contributing/translating",
		},
	];

	// Round down, so a number on the page is never higher than the real one
	$: atLeast = (value: number, step: number) =>
		`${new Intl.NumberFormat($locale ?? "en", { notation: "compact" }).format(
			Math.floor(value / step) * step,
		)}+`;

	// Released languages in the app (Files.App/Strings), counting regional
	// variants like pt-BR and pt-PT once
	const languages = "40+";

	$: tiles = [
		{ value: atLeast(stats.stars, 1000), key: "stars" },
		{ value: atLeast(stats.contributors, 100), key: "contributors" },
		{ value: languages, key: "languages" },
		{ value: `${stats.releasesThisYear}`, key: "releases" },
	];

	// If the server hit GitHub's rate limit, try again from the visitor's
	// browser, which has its own limit
	onMount(async () => {
		if (!contributors.length) contributors = await loadContributors(fetch);
	});

	const facepile = 16;
</script>

<PageSection id="community-section">
	<div class="community-header">
		<HeaderChip>{$_("home.community.chip", defaultI18nValues)}</HeaderChip>
		<h2>{$_("home.community.heading", defaultI18nValues)}</h2>
		<p>{$_("home.community.intro", defaultI18nValues)}</p>
	</div>

	<dl class="stats" style:--count={tiles.length}>
		{#each tiles as { value, key } (key)}
			<div class="stat">
				<dt>{$_(`home.community.stats.${key}`, defaultI18nValues)}</dt>
				<dd>{value}</dd>
			</div>
		{/each}
	</dl>

	{#if contributors.length}
		<div class="people">
			<ul class="facepile">
				{#each contributors.slice(0, facepile) as { login, avatar_url, html_url } (login)}
					<li>
						<a href={html_url} title={login} {...externalLink}>
							<PersonPicture
								src={avatar_url}
								size={44}
								alt={login}
								loading="lazy"
							/>
						</a>
					</li>
				{/each}
			</ul>
			<p>{$_("home.community.people_description", defaultI18nValues)}</p>
			<Button
				variant="hyperlink"
				href="https://github.com/{links.github.owner}/{links.github
					.repo}/graphs/contributors"
				{...externalLink}
			>
				{$_("home.community.all_contributors", defaultI18nValues)}
			</Button>
		</div>
	{/if}

	<div class="community">
		<div class="card sponsor">
			<span class="sponsor-icon"><Heart /></span>
			<h3>{$_("home.community.sponsor_title", defaultI18nValues)}</h3>
			<p>{$_("home.community.sponsor_description", defaultI18nValues)}</p>
			<Button variant="accent" href={links.sponsor} {...externalLink}>
				{$_("home.community.sponsor_button", defaultI18nValues)}
			</Button>
		</div>

		<div class="card involved">
			<h3>{$_("home.community.involved_title", defaultI18nValues)}</h3>
			<div class="ways">
				{#each ways as way (way.key)}
					<a class="way" href={way.href} {...way.external ? externalLink : {}}>
						<span class="way-icon"><svelte:component this={way.icon} /></span>
						<span class="way-text">
							<b>{$_(`home.community.${way.key}_title`, defaultI18nValues)}</b>
							<span
								>{$_(
									`home.community.${way.key}_description`,
									defaultI18nValues,
								)}</span
							>
						</span>
						<ChevronRight class="way-chevron" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "./CommunitySection";
</style>
