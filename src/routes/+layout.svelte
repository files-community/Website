<script lang="ts">
	import { dev } from "$app/environment";
	import { page } from "$app/stores";

	import { defaultI18nValues } from "$lib";
	import { Footer, Navbar } from "$layout";
	import { links, type NavbarItem } from "$data/links";
	import { _ } from "svelte-i18n";

	import { minimal } from "$data/minimalism";

	import "fluent-svelte/theme.css";

	import Chat from "~icons/fluent/chat-24-regular";
	import Code from "~icons/fluent/code-24-regular";
	import Home from "~icons/fluent/home-24-regular";
	import Book from "~icons/fluent/book-24-regular";
	import News from "~icons/fluent/news-24-regular";
	import Download from "~icons/fluent/arrow-download-24-regular";
	import { afterNavigate, onNavigate } from "$app/navigation";
	import { onMount } from "svelte";
	// import PaintBrush from "~icons/fluent/paint-brush-24-regular";

	const { github, discord } = links;

	const navbarItems: NavbarItem[] = [
		{
			name: $_("navbar.home", defaultI18nValues),
			path: "/",
			icon: Home,
		},
		{
			name: $_("navbar.docs", defaultI18nValues),
			path: "/docs",
			sidebarTree: $page.data.docs ?? [],
			icon: Book,
		},
		{
			name: $_("navbar.news", defaultI18nValues),
			path: "/blog",
			icon: News,
		},
		{
			name: $_("navbar.download"),
			path: "/download",
			icon: Download,
		},
	];

	const navbarButtons = [
		{
			label: $_("navbar.discord", defaultI18nValues),
			href: `https://discord.gg/${discord}`,
			icon: Chat,
		},
		{
			label: $_("navbar.github", defaultI18nValues),
			href: `https://github.com/${github.owner}/${github.repo}`,
			icon: Code,
		},
	];

	onNavigate(async navigation => {
		if (!document.startViewTransition) return;

		return new Promise(resolve => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta content="Files" name="og:site_name" />

	<meta content="website" name="og:type" />

	<link
		href="/branding/logo{$page.route.id === 'themes'
			? '-themes'
			: ''}-light.svg"
		rel="icon"
		type="image/svg+xml"
		media="(prefers-color-scheme: light)"
	/>
	<link
		href="/branding/logo{$page.route.id === 'themes' ? '-themes' : ''}-dark.svg"
		rel="icon"
		type="image/svg+xml"
		media="(prefers-color-scheme: dark)"
	/>

	<meta
		content="Files, File Explorer, Fluent Design, Microsoft, Windows, UWP"
		name="keywords"
	/>
	<meta content="Files Community" name="author" />

	<meta content="#005fb8" name="theme-color" />

	<meta content="summary_large_image" name="twitter:card" />
	<meta content="@FilesForWindows" name="twitter:site" />
	<meta content="@FilesForWindows" name="twitter:creator" />

	{#if !dev && $page.url.host === "files.community"}
		<script type="text/javascript">
			(function (c, l, a, r, i, t, y) {
				c[a] =
					c[a] ||
					function () {
						(c[a].q = c[a].q || []).push(arguments);
					};
				t = l.createElement(r);
				t.async = true;
				t.src = "https://www.clarity.ms/tag/" + i;
				y = l.getElementsByTagName(r)[0];
				y.parentNode.insertBefore(t, y);
			})(window, document, "clarity", "script", "4q1wajdktz");
		</script>
	{/if}
</svelte:head>

<Navbar buttons={navbarButtons} items={navbarItems} />
<slot />
<Footer />

{#if !minimal}
	<style global lang="scss">
		@use "src/styles/scrollbar";
		@use "src/styles/global";
		@use "src/styles/markdown";
	</style>
{/if}
{#if minimal}
	<style global lang="scss">
		@use "src/styles/global";
		@use "src/styles/markdown";
	</style>
{/if}
