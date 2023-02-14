<script lang="ts">
	import { dev } from "$app/environment";
	import { page } from "$app/stores";

	import { Footer, Navbar } from "$layout";
	import { links, type NavbarItem } from "$data/links";
	import { _ } from "svelte-i18n";

	import "fluent-svelte/theme.css";

	import Chat from "@fluentui/svg-icons/icons/chat_24_regular.svg?raw";
	import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";
	import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import News from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
	// import PaintBrush from "@fluentui/svg-icons/icons/paint_brush_24_regular.svg?raw";

	const { github, discord } = links;

	const navbarItems: NavbarItem[] = [
		{
			name: $_("navbar.home"),
			path: "/",
			icon: Home
		},
		{
			name: $_("navbar.docs"),
			path: "/docs",
			sidebarTree: $page.data.docs ?? [],
			icon: Book
		},
		// {
		//     name: $_("navbar.themes"),
		//     path: "/themes",
		//     icon: PaintBrush
		// },
		{
			name: $_("navbar.news"),
			path: "/blog",
			icon: News
		},
		{
			name: $_("navbar.download"),
			path: "/download",
			icon: undefined
		}
	];

	const navbarButtons = [
		{
			label: $_("navbar.discord"),
			href: `https://discord.gg/${discord}`,
			icon: Chat
		},
		{
			label: $_("navbar.github"),
			href: `https://github.com/${github.owner}/${github.repo}`,
			icon: Code
		}
	];
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

	<meta content={$_("metadata.description")} name="description" />
	<meta content={$_("metadata.description")} name="og:description" />
	<meta content={$_("metadata.description")} name="twitter:description" />
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

<style global lang="scss">
	@use "src/styles/global";
	@use "src/styles/markdown";
</style>
