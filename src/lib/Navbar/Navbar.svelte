<script lang="ts">
    import { page } from "$app/stores";
    import BezierEasing from "bezier-easing";
    
    import { ListViewItem } from "$lib";

    import Navigation from "@fluentui/svg-icons/icons/navigation_24_regular.svg?raw";

    export let items = [];
    export let buttons = [];

    let innerWidth: number = 641; // Don't render the mobile layout before hydration
    let sidebarOpen: boolean = false;
    let sidebar;

    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
    }

    function handleOuterClick(e) {
        if (sidebarOpen && (!e.target === sidebar || !sidebar.contains(e.target))) toggleSidebar();
    }

    function sidebarSlide(node, { duration = 350, easing = BezierEasing(0.1, 0.9, 0.2, 1) }) {
        const style = getComputedStyle(node);
        const transform = style.transform === "none" ? "" : style.transform;
        const height = node.offsetHeight;

        return {
            duration,
            easing,
            css: t => {
                return `transform: ${transform} translateX(${(1 - t) * height}px);`;
            }
        };
    }
</script>

<style lang="scss" src="./Navbar.scss"></style>

<svelte:window on:click={handleOuterClick} bind:innerWidth />

<header class="navbar">
    <nav class="inner">
        <a href="/" class="logo">
            <img alt="Files logo" class="logo-image" width="32" height="32" src="/branding/logo.svg" />
            Files
        </a>
        {#if innerWidth > 648}
            <div class="divider" role="separator"></div>
            {#each items as { name, path, external, icon, type }}
                {#if type === "divider"}
                    <div class="divider" role="separator"></div>
                    {:else}
                    <a
                        class="item"
                        class:selected={$page.path === path || ($page.path.split("/").length > 1 && path.split("/").length > 1 && $page.path.startsWith(path) && !(path === "" || path === "/")) || (path === "/" && $page.path === "")}
                        href={path}
                        target={external ? "_blank" :  ""}
                        rel={external ? "noreferrer noopener" : "prefetch"}
                    >
                        {#if icon}
                            {@html icon}
                        {/if}
                        <span>{name}</span>
                    </a>
                {/if}
            {/each}
        {/if}
    </nav>
    <div class="buttons">
        {#if innerWidth > 648}
            {#each buttons as { icon, href, label }}
                <a class="button" {href} aria-label={label} title={label} target="_blank" rel="noreferrer noopener">
                    {@html icon}
                </a>
            {/each}
            {:else}
            <button class="button sidebar-button" on:click|stopPropagation={toggleSidebar}>
                {@html Navigation}
            </button>
        {/if}
    </div>
    {#if sidebarOpen && innerWidth <= 648}
        <aside
            in:sidebarSlide
            out:sidebarSlide={{ duration: 120 }}
            on:click|stopPropagation
            bind:this={sidebar}
            class="sidebar"
        >
            {#each items as { name, path, external, icon, type }}
                {#if type === "divider"}
                    <hr role="separator" />
                    {:else}
                    <ListViewItem
                        style="navigation"
                        selected={$page.path === path || ($page.path.split("/").length > 1 && path.split("/").length > 1 && $page.path.startsWith(path) && !(path === "" || path === "/")) || (path === "/" && $page.path === "")}
                        href={path}
                        target={external ? "_blank" :  ""}
                        rel={external ? "noreferrer noopener" : "prefetch"}
                    >
                        <svelte:fragment slot="icon">
                            {#if icon}
                                {@html icon}
                            {/if}
                        </svelte:fragment>
                        <span>{name}</span>
                    </ListViewItem>
                {/if}
            {/each}
            <hr role="separator" />
            {#each buttons as { icon, href, label }}
                <ListViewItem
                        {href}
                        style="navigation"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <svelte:fragment slot="icon">
                            {#if icon}
                                {@html icon}
                            {/if}
                        </svelte:fragment>
                        <span>{label}</span>
                    </ListViewItem>
            {/each}
        </aside>
    {/if}
</header>