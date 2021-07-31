<script lang="ts">
    import { links } from "$stores/links";
    import { Navbar } from "$lib";
    
    import Chat from "@fluentui/svg-icons/icons/chat_24_regular.svg?raw";
    import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";
    import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
    import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
    import PaintBrush from "@fluentui/svg-icons/icons/paint_brush_24_regular.svg?raw";

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
    ]
</script>

<svelte:head>
    <meta property="og:site_name" content="Files">

    <meta property="og:type" content="website">
    
    <link rel="icon" type="image/svg+xml" href="/branding/logo.svg">

    <meta name="description" content="A modern file explorer that pushes the boundaries of the platform.">
    <meta property="og:description" content="A modern file explorer that pushes the boundaries of the platform.">
    <meta name="keywords" content="Files, File Explorer, Fluent Design, Microsoft, Windows, UWP">
    <meta name="author" content="Files Community">

    <meta name="theme-color" content="#005fb8">

    <meta property="og:image" content="/branding/banner.png">

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