<script lang="ts">
    import { page } from "$app/stores";

    export let items = [];
    export let buttons = [];
</script>

<style lang="scss" src="./Navbar.scss"></style>

<header class="navbar">
    <nav class="inner">
        <a href="/" class="logo-wrap">
            <img alt="Files logo" class="logo" width="32" height="32" src="/branding/logo.svg" />
        </a>
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
                    rel={external ? "noreferrer noopener" : ""}
                >
                    {#if icon}
                        <span class="icon">{icon}</span>
                    {/if}
                    <span>{name}</span>
                </a>
            {/if}
        {/each}
    </nav>
    <div class="buttons">
        {#each buttons as { icon, href, label }}
            <a {href} aria-label={label} title={label} target="_blank" rel="noreferrer noopener">
                {icon}
            </a>
        {/each}
    </div>
</header>