<script lang="ts">
    import { onMount } from "svelte";

    import { links } from "$stores";
    import { getContributors } from "./fetchHomepageData";
    import {
        PageSection,
        Button,
        HyperlinkButton,
        ComponentShowcase,
        HeaderChip,
        Contributor,
        RainbowCanvas,
        RainbowCanvasAlt
    } from "$lib";

    import ArrowDownload from "@fluentui/svg-icons/icons/arrow_download_24_regular.svg?raw";
    import ChevronDown from "@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw";
    import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";

    let windows: boolean;
    let heroCanvas: HTMLCanvasElement;
    let communityCanvas: HTMLCanvasElement;
    let scrollY: number;

    let [contributors1, contributors2, contributors3] = [[], [], []];

    const shuffle = a => a.sort(() => Math.random() - 0.5);
    
    onMount(async () => {
        new RainbowCanvas(heroCanvas).render();
        new RainbowCanvasAlt(communityCanvas).render();

        windows = navigator.platform === "Win32";

        contributors1 = await getContributors(1);
        contributors2 = await getContributors(2);
        contributors3 = await getContributors(3);
    });
</script>

<style lang="scss">
    @use "src/styles/pages/home.scss";
</style>

<svelte:head>
    <title>Files</title>
    <meta property="og:title" content="Files">
</svelte:head>

<svelte:window bind:scrollY/>

<PageSection id="hero-section">
    <div class="hero-left">
        <h1>Files</h1>
        <p>A modern file explorer that pushes the boundaries of the platform.</p>
        <div class="buttons-spacer">
            <div class="split-button">
                <Button
                    href={windows ? `ms-windows-store://pdp/?ProductId=${links.storeId}` : `https://www.microsoft.com/en-us/p/files/${links.storeId}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    style="accent"
                >
                    {@html ArrowDownload}
                    <div class="hero-button-inner">
                        <h5>Download</h5>
                        <span>Microsoft Store</span>
                    </div>
                </Button>
                <Button style="accent">
                    {@html ChevronDown}
                </Button>
            </div>
            <Button
                href="https://github.com/{links.github.owner}/{links.github.repo}/"
                target="_blank"
                rel="noreferrer noopener"
            >
                {@html Code}
                <div class="hero-button-inner">
                    <h5>View GitHub</h5>
                    <span>Files is open source!</span>
                </div>
            </Button>
        </div>
    </div>
    <picture>
        <source
            media="(prefers-color-scheme: dark)"
            srcset="/screenshots/hero-dark.png"
        >
        <source
            media="(prefers-color-scheme: light)"
            srcset="/screenshots/hero-light.png"
        >
        <img
            class="hero-screenshot"
            src="/screenshots/hero-light.png"
            alt="Files new tab screenshot"
        >
    </picture>
    <canvas width={32} height={32} bind:this={heroCanvas}></canvas>
</PageSection>

<PageSection id="design-section">
    <HeaderChip>Design</HeaderChip>
    <h2>Power meets beauty.</h2>
    <p>Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs, and so much more.</p>
    <div class="buttons-spacer">
        <Button style="accent" href="">
            Try it out
        </Button>
        <HyperlinkButton
            href="https://www.microsoft.com/design/fluent/"
            target="_blank"
            rel="noreferrer noopener"
        >
            Learn More
        </HyperlinkButton>
    </div>
    <div class="design-image">
        <picture>
            <source
                media="(prefers-color-scheme: dark)"
                srcset="/screenshots/hero-dark.png"
            >
            <source
                media="(prefers-color-scheme: light)"
                srcset="/screenshots/hero-light.png"
            >
            <img
                class="files-screenshot"
                style="transform: translatey({scrollY / -10}px)"
                src="/screenshots/hero-light.png"
                alt="Files new tab screenshot"
            >
        </picture>
        <picture>
            <source
                media="(prefers-color-scheme: dark)"
                srcset="/screenshots/win11-dark.png"
            >
            <source
                media="(prefers-color-scheme: light)"
                srcset="/screenshots/win11-light.png"
            >
            <img
                class="files-wallpaper"
                src="/screenshots/win11-light.png"
                alt="Files new tab screenshot"
            >
        </picture>
    </div>
</PageSection>

<PageSection>
    <HeaderChip>Features</HeaderChip>
</PageSection>

<PageSection id="themes-section">
    <div class="themes-section-content">
        <HeaderChip>Themes</HeaderChip>
        <h2>Customize to your liking.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <div class="buttons-spacer">
            <Button style="accent" href="themes">
                Get Themes
            </Button>
            <HyperlinkButton
                href="docs/configuring/custom-themes"
            >
                Read the docs
            </HyperlinkButton>
        </div>
    </div>
    <ComponentShowcase />
</PageSection>

<PageSection id="community-section">
    <div class="community-section-card">
        <div class="community-section-text">
            <HeaderChip>Community</HeaderChip>
            <h2>Designed and developed by you.</h2>
            <p>Files is free and open source software, maintained and designed by a collective of hundreds of contributors.</p>
            <div class="buttons-spacer">
                <HyperlinkButton href="https://discord.gg/{links.discord}">Join the discussion</HyperlinkButton>
                <HyperlinkButton href="/docs/contributing/code-style">Become a contributor</HyperlinkButton>
            </div>
        </div>
        <div class="contributors-container">
            <div class="contributors-row">
                {#each shuffle(contributors1) as {html_url, avatar_url, login, contributions, type}}
                    <Contributor
                        {html_url}
                        {avatar_url}
                        {login}
                        {contributions}
                        {type}
                    />
                {/each}
            </div>
            <div class="contributors-row">
                {#each shuffle(contributors2) as {html_url, avatar_url, login, contributions, type}}
                    <Contributor
                        {html_url}
                        {avatar_url}
                        {login}
                        {contributions}
                        {type}
                    />
                {/each}
            </div>
            <div class="contributors-row">
                {#each shuffle(contributors3) as {html_url, avatar_url, login, contributions, type}}
                    <Contributor
                        {html_url}
                        {avatar_url}
                        {login}
                        {contributions}
                        {type}
                    />
                {/each}
            </div>
        </div>
        <canvas bind:this={communityCanvas}></canvas>
    </div>
</PageSection>