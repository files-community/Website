<script lang="ts">
	import { links } from "$data/links"
	import { docs } from "$data/docs"
	import { Navbar } from "$lib/"
	import { onMount } from "svelte"

	import Chat from "@fluentui/svg-icons/icons/chat_24_regular.svg?raw"
	import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw"
	import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw"
	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw"
	import PaintBrush from "@fluentui/svg-icons/icons/paint_brush_24_regular.svg?raw"

	let theme = "light";
    
    onMount(() => {
        theme = window?.matchMedia('(prefers-color-scheme: dark)')?.matches ? "dark" : "light";

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
            theme = e.matches ? "dark" : "light";
        });
    });

    const { github, discord } = links;

    const navbarItems = [
        {
            name: "Home",
            path: "/",
            icon: Home
        },
        {
            name: "Docs",
            path: "/docs",
            sidebarTree: docs,
            icon: Book
        },
        {
            name: "Themes",
            path: "/themes",
            icon: PaintBrush
        }
    ];

    const navbarButtons = [
        {
            label: "Discord",
            href: `https://discord.gg/${discord}`,
            icon: Chat
        },
        {
            label: "GitHub",
            href: `https://github.com/${github.owner}/${github.repo}`,
            icon: Code
        }
    ];
</script>

<svelte:head>
    <meta property="og:site_name" content="Files">

    <meta property="og:type" content="website">
    
    <link href="/branding/logo-{theme === 'light' ? 'light' : 'dark'}.svg" rel="icon" type="image/svg+xml">
    <meta content="/branding/banner-{theme === 'light' ? 'light' : 'dark'}.png" property="og:image">

    <meta name="description" content="A modern file explorer that pushes the boundaries of the platform.">
    <meta property="og:description" content="A modern file explorer that pushes the boundaries of the platform.">
    <meta name="keywords" content="Files, File Explorer, Fluent Design, Microsoft, Windows, UWP">
    <meta name="author" content="Files Community">

    <meta name="theme-color" content="#005fb8">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@FilesForWindows">
    <meta name="twitter:creator" content="@FilesForWindows">
</svelte:head>

<Navbar items={navbarItems} buttons={navbarButtons} />
<slot />

<style lang="scss" global>
    @use "src/styles/global";
    @use "src/styles/markdown";
</style>