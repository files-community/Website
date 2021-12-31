<script lang="ts">
	import { HyperlinkButton, IconButton, PageSection } from "$lib";
	import { links } from "$data/links";
	import Discord from "$static/ui/icons/discord.svg?raw";
	import Github from "$static/ui/icons/github.svg?raw";
	import Twitter from "$static/ui/icons/twitter.svg?raw";
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
				title="GitHub repository"
				aria-label="GitHub repository"
				target="_blank"
				rel="noreferrer noopener"
			>
				{@html Github}
			</IconButton>
			<IconButton
				href="https://twitter.com/{links.twitter}/"
				title="Twitter profile"
				aria-label="Twitter profile"
				target="_blank"
				rel="noreferrer noopener"
			>
				{@html Twitter}
			</IconButton>
			<IconButton
				href="https://discord.gg/{links.discord}"
				title="Discord server"
				aria-label="Discord server"
				target="_blank"
				rel="noreferrer noopener"
			>
				{@html Discord}
			</IconButton>
		</div>
		<p>Copyright © 2021, The Files Authors</p>
	</div>
	<div class="column">
		<p>Pages</p>
		<HyperlinkButton
			sveltekit:prefetch
			href="/"
		>
			Home
		</HyperlinkButton>
		<HyperlinkButton
			sveltekit:prefetch
			href="/docs"
		>
			Documentation
		</HyperlinkButton>
		<HyperlinkButton
			sveltekit:prefetch
			href="/blog"
		>
			Blog
		</HyperlinkButton>
	</div>
	<div class="column">
		<p>Contribute to Files</p>
		<HyperlinkButton
			href="https://github.com/{links.github.owner}/{links.github.repo}/issues/new"
			target="_blank"
			rel="noreferrer noopener"
		>
			Give Feedback
		</HyperlinkButton>

		<HyperlinkButton href="/docs/contributing/code-style">
			Style Guide
		</HyperlinkButton>

		<HyperlinkButton href="/docs/contributing/translating-files">
			Translations
		</HyperlinkButton>

		<p>Contribute to this site</p>
		<HyperlinkButton
			href="https://github.com/{links.github.owner}/{links.github.siteRepo}/"
			target="_blank"
			rel="noreferrer noopener"
		>
			GitHub Repo
		</HyperlinkButton>

		<HyperlinkButton
			href="https://github.com/{links.github.owner}/{links.github.siteRepo}/issues/new"
			target="_blank"
			rel="noreferrer noopener"
		>
			Found a bug?
		</HyperlinkButton>
	</div>
	<div class="column">
		<p>Web Team</p>
		<HyperlinkButton
			href="https://github.com/Tropix126/"
			target="_blank"
			rel="noreferrer noopener"
		>
			Tropical
		</HyperlinkButton>

		<HyperlinkButton
			href="https://www.theonlytails.com/"
			target="_blank"
			rel="noreferrer noopener"
		>
			TheOnlyTails
		</HyperlinkButton>

		<HyperlinkButton
			href="https://github.com/yaichenbaum/"
			target="_blank"
			rel="noreferrer noopener"
		>
			Yair
		</HyperlinkButton>

		<HyperlinkButton
			href="https://github.com/chingucoding/"
			target="_blank"
			rel="noreferrer noopener"
		>
			Marcel Wagner
		</HyperlinkButton>

		<HyperlinkButton
			href="https://michaelwe.st/"
			target="_blank"
			rel="noreferrer noopener"
		>
			Michael West
		</HyperlinkButton>
	</div>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
