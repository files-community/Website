<script lang="ts">
	import { PageSection, HyperlinkButton, IconButton } from "$lib";
	import { links } from "$data/links";
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
					<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
				</svg>
			</IconButton>
			<IconButton
				href="https://twitter.com/{links.twitter}/"
				title="Twitter profile"
				aria-label="Twitter profile"
				target="_blank"
				rel="noreferrer noopener"
			>
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
				</svg>
			</IconButton>
			<IconButton
				href="https://discord.gg/{links.discord}/"
				title="Discord server"
				aria-label="Discord server"
				target="_blank"
				rel="noreferrer noopener"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="71" height="55" viewBox="0 0 71 55" fill="none">
					<path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
				</svg>
			</IconButton>
		</div>
		<p>Copyright © 2021, The Files Authors</p>
	</div>
	<div class="column">
		<p>Pages</p>
		<HyperlinkButton
			sveltekit:prefetch
			href="https://twitter.com/FilesForWindows"
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
		<HyperlinkButton
			href="/docs/contributing/code-style"
		>
			Style Guide
		</HyperlinkButton>
		<HyperlinkButton
			href="/docs/contributing/translating-files"
		>
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

<style lang="scss" src="./Footer.scss"></style>