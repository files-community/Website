<script lang="ts">
    import { page } from "$app/stores";
    
    import ListViewItem from "../ListViewItem/ListViewItem.svelte"; // for some reason vite gets ang

    import Navigation from "@fluentui/svg-icons/icons/navigation_24_regular.svg?raw";

    export let items = [];
    export let buttons = [];

    let innerWidth: number = 641; // Don't render the mobile layout before hydration
    let sidebarVisible: boolean = false;
    let sidebar;
    let sidebarButton: HTMLButtonElement;

    function toggleSidebar() {
        sidebarVisible = !sidebarVisible;
    }

    function handleOuterClick(e) {
        if (!e.target === sidebarButton || !sidebarButton.contains(e.target) || (sidebarVisible && (!e.target === sidebar || !sidebar.contains(e.target)))) return;
        toggleSidebar();
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
                        target={external ? "_blank" :  undefined}
                        rel={external ? "noreferrer noopener" : undefined}
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
            <button
                on:click|stopPropagation={toggleSidebar}
                bind:this={sidebarButton}
                class="button sidebar-button"
            >
                {@html Navigation}
            </button>
        {/if}
    </div>
    <aside
        bind:this={sidebar}
        class:visible={sidebarVisible}
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
                    target={external ? "_blank" :  undefined}
                    rel={external ? "noreferrer noopener" : undefined}
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
</header>