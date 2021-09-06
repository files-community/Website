<script lang="ts">
	import { page } from "$app/stores";

	import ListViewItem from "../ListViewItem/ListViewItem.svelte";
	import TreeView from "../TreeView/TreeView.svelte";

	import Navigation from "@fluentui/svg-icons/icons/navigation_24_regular.svg?raw";

	export let items = [];
	export let buttons = [];

	let innerWidth = 649; // Don't render the mobile layout before hydration
	let sidebarVisible = false;
	let sidebar;
	let sidebarButton: HTMLButtonElement;

	function toggleSidebar() {
		sidebarVisible = !sidebarVisible;
	}

	function handleOuterClick(e) {
		if (!sidebarVisible || (e.target === sidebarButton || sidebarButton.contains(e.target)) || (e.target === sidebar || sidebar.contains(e.target))) return;
		toggleSidebar();
	}
</script>

<style lang="scss" src="./Navbar.scss"></style>

<svelte:window bind:innerWidth on:click={handleOuterClick}/>

<header class="navbar">
	<nav class="inner">
		<a class="logo" href="/">
			<picture>
				<source
                    media="(prefers-color-scheme: dark)"
                    srcset="/branding/logo-dark.svg"
				>
				<source
                    media="(prefers-color-scheme: light)"
                    srcset="/branding/logo-light.svg"
				>
				<img
                    alt="Files logo"
                    class="logo-image"
                    height="32"
                    src="/branding/logo-light.svg"
                    width="32"
				>
			</picture>
			Files
		</a>
		{#if innerWidth > 648}
			<div class="divider" role="separator"></div>
			{#each items as {name, path, external, icon, type}}
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
			{#each buttons as {icon, href, label}}
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
        class="sidebar scroller"
        class:visible={sidebarVisible}
	>
        {#each items as {name, path, external, sidebarTree, icon, type}}
            {#if type === "divider"}
                <hr role="separator"/>
            {:else}
                {#if !sidebarTree}
                    <ListViewItem
                        type="navigation"
                        on:click={toggleSidebar}
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
                {:else}
                    <TreeView on:click={toggleSidebar} tree={[
                        {
                            type: "category",
                            name,
                            icon,
                            pages: [ ...sidebarTree ]
                        }
                    ]}/>
                {/if}
            {/if}
        {/each}
		<hr role="separator"/>
		{#each buttons as {icon, href, label}}
			<ListViewItem
					{href}
					type="navigation"
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