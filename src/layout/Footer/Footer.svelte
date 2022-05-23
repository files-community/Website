<script lang="ts">
	import { externalLink, PageSection } from "$lib";
	import { Button, IconButton } from "fluent-svelte";
	import { links } from "$data/links";
	import Discord from "$static/ui/icons/discord.svg?raw";
	import Github from "$static/ui/icons/github.svg?raw";
	import Twitter from "$static/ui/icons/twitter.svg?raw";
	import { text } from "../../i18n/i18n";

	const contributors = [
		{
			name: "Tropical",
			link: "https://github.com/Tropix126/"
		},
		{
			name: "TheOnlyTails",
			link: "https://www.theonlytails.com/"
		},
		{
			name: "Yair",
			link: "https://github.com/yaichenbaum/"
		},
		{
			name: "Marcel Wagner",
			link: "https://github.com/chingucoding/"
		},
		{
			name: "Michael West",
			link: "https://michaelwe.st/"
		}
	];
</script>

<PageSection type="footer" id="page-footer">
	<div class="column">
		<a class="logo" href="/" sveltekit:prefetch>
			<picture>
				<source media="(prefers-color-scheme: dark)" srcset="/branding/logo-dark.svg">
				<source media="(prefers-color-scheme: light)" srcset="/branding/logo-light.svg">
				<img alt="Files logo" height="32" src="/branding/logo-light.svg" width="32">
			</picture>
			Files
		</a>
		<div class="social-links">
			<IconButton
				href="https://github.com/{links.github.owner}/{links.github.repo}/"
				title="{text.footer.gitHubRepository()}"
				aria-label="{text.footer.gitHubRepository()}"
				{...externalLink}
			>
				{@html Github}
			</IconButton>
			<IconButton
				href="https://twitter.com/{links.twitter}/"
				title="{text.footer.twitterProfile()}"
				aria-label="{text.footer.twitterProfile()}"
				{...externalLink}
			>
				{@html Twitter}
			</IconButton>
			<IconButton
				href="https://discord.gg/{links.discord}"
				title="{text.footer.discordServer()}"
				aria-label="{text.footer.discordServer()}"
				{...externalLink}
			>
				{@html Discord}
			</IconButton>
		</div>
		<p>{text.footer.copyright({thisYear: new Date().getFullYear()})}</p>
		<a href="https://vercel.com/?utm_source=FilesCommunity&utm_campaign=oss" {...externalLink}>
			<img src="/branding/vercel-banner.svg" alt="Powered by Vercel" />
		</a>
	</div>
	<div class="column">
		<p>{text.footer.pages()}</p>
		<Button variant="hyperlink" sveltekit:prefetch href="/">{text.footer.home()}</Button>
		<Button variant="hyperlink" sveltekit:prefetch href="/docs">{text.footer.documentation()}</Button>
		<Button variant="hyperlink" sveltekit:prefetch href="/blog">{text.footer.blog()}</Button>
	</div>
	<div class="column">
		<p>{text.footer.contributeToFiles()}</p>
		<Button variant="hyperlink" {...externalLink}
		        href="https://github.com/{links.github.owner}/{links.github.repo}/issues/new"
		>
			{text.footer.giveFeedback()}
		</Button>

		<Button variant="hyperlink" href="/docs/contributing/code-style">
			{text.footer.styleGuide()}
		</Button>

		<Button variant="hyperlink" href="/docs/contributing/translating-files">
			{text.footer.translations()}
		</Button>

		<p>{text.footer.contributeToSite()}</p>
		<Button variant="hyperlink" {...externalLink}
		        href="https://github.com/{links.github.owner}/{links.github.siteRepo}/"
		>
			{text.footer.gitHubRepo()}
		</Button>

		<Button variant="hyperlink" {...externalLink}
		        href="https://github.com/{links.github.owner}/{links.github.siteRepo}/issues/new"
		>
			{text.footer.foundBug()}
		</Button>
	</div>
	<div class="column">
		<p>{text.footer.webTeam()}</p>
		{#each contributors as contributor}
			<Button variant="hyperlink" href={contributor.link} {...externalLink}>{contributor.name}</Button>
		{/each}
	</div>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
