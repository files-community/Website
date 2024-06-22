<script lang="ts">
	import { defaultI18nValues, externalLink, PageSection } from "$lib";
	import { Button, IconButton } from "fluent-svelte";
	import { links } from "$data/links";
	import { _ } from "svelte-i18n";
	import Github from "~icons/mdi/github";
	import Discord from "~icons/simple-icons/discord";

	const contributors = [
		{
			name: "Tropical",
			link: "https://github.com/Tropix126/",
		},
		{
			name: "TheOnlyTails",
			link: "https://www.theonlytails.com/",
		},
		{
			name: "Marcel Wagner",
			link: "https://github.com/chingucoding/",
		},
		{
			name: "Michael West",
			link: "https://michaelwe.st/",
		},
	];
</script>

<PageSection type="footer" id="page-footer">
	<div class="column">
		<a class="logo" href="/">
			<picture>
				<source
					media="(prefers-color-scheme: dark)"
					srcset="/branding/logo-dark.svg"
				/>
				<source
					media="(prefers-color-scheme: light)"
					srcset="/branding/logo-light.svg"
				/>
				<img
					alt="Files logo"
					height="32"
					src="/branding/logo-light.svg"
					width="32"
				/>
			</picture>
			Files
		</a>
		<div class="social-links">
			<IconButton
				href="https://github.com/{links.github.owner}/{links.github.repo}/"
				title="GitHub repository"
				aria-label="GitHub repository"
				{...externalLink}
			>
				<Github />
			</IconButton>
			<IconButton
				href="https://discord.gg/{links.discord}"
				title="Discord server"
				aria-label="Discord server"
				{...externalLink}
			>
				<Discord />
			</IconButton>
		</div>
		<p>
			Copyright ⓒ {new Date().getFullYear()} Files Community
		</p>
	</div>
	<div class="column">
		<p>Pages</p>
		<Button variant="hyperlink" href="/">
			{$_("footer.home", defaultI18nValues)}
		</Button>
		<Button variant="hyperlink" href="/docs">
			{$_("footer.docs", defaultI18nValues)}
		</Button>
		<Button variant="hyperlink" href="/blog">
			{$_("footer.news", defaultI18nValues)}
		</Button>
		<Button variant="hyperlink" href="/download">
			{$_("footer.download", defaultI18nValues)}
		</Button>
	</div>
	<div class="column">
		<p>{$_("footer.contribute", defaultI18nValues)}</p>
		<Button
			variant="hyperlink"
			{...externalLink}
			href="https://github.com/{links.github.owner}/{links.github
				.repo}/issues/new/choose"
		>
			{$_("footer.feedback", defaultI18nValues)}
		</Button>

		<Button variant="hyperlink" href="/docs/contributing/code-style">
			{$_("footer.style_guide", defaultI18nValues)}
		</Button>

		<Button
			{...externalLink}
			href="https://crowdin.com/project/files-app"
			variant="hyperlink"
		>
			{$_("footer.translations", defaultI18nValues)}
		</Button>
	</div>
	<div class="column">
		<p>{$_("footer.web_team", defaultI18nValues)}</p>
		{#each contributors as contributor}
			<Button variant="hyperlink" href={contributor.link} {...externalLink}>
				{contributor.name}
			</Button>
		{/each}
	</div>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
