<script lang="ts">
	import { externalLink, PageSection } from "$lib";
	import { Button, IconButton } from "fluent-svelte";
	import { links } from "$data/links";
	import Github from "./icons/github.svg?raw";
	import Twitter from "./icons/twitter.svg?raw";
	import Discord from "./icons/discord.svg?raw";

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
		<a class="logo" href="/" data-sveltekit-prefetch>
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
				{@html Github}
			</IconButton>
			<IconButton
				href="https://twitter.com/{links.twitter}/"
				title="Twitter profile"
				aria-label="Twitter profile"
				{...externalLink}
			>
				{@html Twitter}
			</IconButton>
			<IconButton
				href="https://discord.gg/{links.discord}"
				title="Discord server"
				aria-label="Discord server"
				{...externalLink}
			>
				{@html Discord}
			</IconButton>
		</div>
		<p>Copyright © 2021 - {new Date().getFullYear()}, The Files Authors</p>
		<a
			href="https://vercel.com/?utm_source=FilesCommunity&utm_campaign=oss"
			{...externalLink}
		>
			<img src="/branding/vercel-banner.svg" alt="Powered by Vercel" />
		</a>
	</div>
	<div class="column">
		<p>Pages</p>
		<Button variant="hyperlink" data-sveltekit-prefetch href="/">Home</Button>
		<Button variant="hyperlink" data-sveltekit-prefetch href="/docs">
			Documentation
		</Button>
		<Button variant="hyperlink" data-sveltekit-prefetch href="/blog">
			Blog
		</Button>
	</div>
	<div class="column">
		<p>Contribute to Files</p>
		<Button
			variant="hyperlink"
			{...externalLink}
			href="https://github.com/{links.github.owner}/{links.github
				.repo}/issues/new"
		>
			Give Feedback
		</Button>

		<Button variant="hyperlink" href="/docs/contributing/code-style">
			Style Guide
		</Button>

		<Button
			{...externalLink}
			href="https://crowdin.com/project/files-app"
			variant="hyperlink"
		>
			Translations
		</Button>

		<p>Contribute to this site</p>
		<Button
			variant="hyperlink"
			{...externalLink}
			href="https://github.com/{links.github.owner}/{links.github.siteRepo}/"
		>
			GitHub Repo
		</Button>

		<Button
			variant="hyperlink"
			{...externalLink}
			href="https://github.com/{links.github.owner}/{links.github
				.siteRepo}/issues/new"
		>
			Found a bug?
		</Button>
	</div>
	<div class="column">
		<p>Web Team</p>
		{#each contributors as contributor}
			<Button variant="hyperlink" href={contributor.link} {...externalLink}
				>{contributor.name}</Button
			>
		{/each}
	</div>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
