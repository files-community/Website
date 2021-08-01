<script lang="ts">
    import { onMount } from "svelte";

    import { links } from "$stores/links";
    import { getContributors, getReleaseUrl } from "./fetchHomepageData";
    import {
        Button,
        ColorSwatch,
        ComponentShowcase,
        Contributor,
        FeatureCard,
        HeaderChip,
        HyperlinkButton,
        PageSection,
        MenuFlyout,
        ListViewItem,
        ContentDialog,
        TerminalCommand,
        RainbowCanvas,
        RainbowCanvasAlt
    } from "$lib";

    import ArrowDownload from "@fluentui/svg-icons/icons/arrow_download_24_regular.svg?raw";
    import ChevronDown from "@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw";
    import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";
    import Cloud from "@fluentui/svg-icons/icons/cloud_24_regular.svg?raw";
    import ShieldKeyhole from "@fluentui/svg-icons/icons/shield_keyhole_24_regular.svg?raw";
    import TabDesktop from "@fluentui/svg-icons/icons/tab_desktop_20_regular.svg?raw";
    import EyeVisible from "@fluentui/svg-icons/icons/eye_show_20_regular.svg?raw";

    let [contributors1, contributors2, contributors3] = [[], [], []];
    let windows: boolean;
    let wingetDialogOpen: boolean = false;
    let wingetCommandCopied: boolean = false;
    let heroCanvas: HTMLCanvasElement;
    let communityCanvas: HTMLCanvasElement;
    let downloadSource: number = 0;
    let releaseUrl: string = "";
    let scrollY: number;
    let themes: number = 0;
    let features: number = 0;

    const shuffle = a => a.sort(() => Math.random() - 0.5);

    const downloadSources = ["Microsoft Store", "GitHub Release", "Winget (CLI)"];
    const storeUrl = windows ? `ms-windows-store://pdp/?ProductId=${links.storeId}` : `https://www.microsoft.com/en-us/p/files/${links.storeId}`;
    
    $: downloadUrl = downloadSource === 0 ? storeUrl : releaseUrl;

    function copyWingetCommand() {
        navigator.clipboard.writeText("winget install Files-Community.Files");
        wingetCommandCopied = true; 
        setTimeout(() => {
            wingetCommandCopied = false; 
        }, 500);
    }

    function updateDownloadSource(value) {
        localStorage.setItem("downloadSource", value);
    }

    onMount(async () => {
        new RainbowCanvas(heroCanvas).render();
        new RainbowCanvasAlt(communityCanvas).render();

        if (!localStorage.getItem("downloadSource")) localStorage.setItem("downloadSource", 0);
        downloadSource = parseInt(localStorage.getItem("downloadSource")) ?? 0;
        
        windows = navigator.platform === "Win32";
        releaseUrl = await getReleaseUrl();

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
    <meta property="og:title" content="Files - Home">

    <meta property="og:image" content="/branding/banner-light.png">
</svelte:head>

<svelte:window bind:scrollY />

<ContentDialog title="Installing Files via winget" width="448" bind:open={wingetDialogOpen}>
    To download and install Files using <a class="hyperlink" href="https://github.com/microsoft/winget-cli" target="_blank" rel="noreferrer noopener">winget</a>, paste the following command into a terminal of your choice:
    <TerminalCommand command="winget install Files-Community.Files" />
    <svelte:fragment slot="footer">
        <Button style="accent" on:click={copyWingetCommand}>{wingetCommandCopied ? "Copied!" : "Copy"}</Button>
        <Button on:click={() => wingetDialogOpen = false}>Close</Button>
    </svelte:fragment>
</ContentDialog>

<PageSection id="hero-section">
    <div class="hero-left">
        <h1>Files</h1>
        <p>A modern file explorer that pushes the boundaries of the platform.</p>
        <div class="buttons-spacer">
            <div class="split-button">
                <Button
                    style="accent"
                    id="hero-download-button"
                    href={downloadSource !== 2 ? downloadUrl : undefined}
                    target={downloadSource !== 2 ? "_blank" : undefined}
                    rel={downloadSource !== 2 ? "noreferrer noopener" : undefined}
                    on:click={() => {
                        if (downloadSource === 2) wingetDialogOpen = true;
                    }}
                >
                    {@html ArrowDownload}
                    <div class="hero-button-inner">
                        <h5>Download</h5>
                        <span>{downloadSources[downloadSource]}</span>
                    </div>
                </Button>
                <MenuFlyout>
                    <Button style="accent">
                        {@html ChevronDown}
                    </Button>
                    <svelte:fragment slot="menu">
                        <ListViewItem
                            bind:group={downloadSource}
                            on:change={updateDownloadSource(0)}
                            value={0}
                        >
                            Microsoft Store
                        </ListViewItem>
                        <ListViewItem
                            bind:group={downloadSource}
                            on:change={updateDownloadSource(1)}
                            value={1}
                        >
                            Github Release
                        </ListViewItem>
                        <ListViewItem
                            bind:group={downloadSource}
                            on:change={updateDownloadSource(2)}
                            on:click={() => wingetDialogOpen = true}
                            value={2}
                        >
                            Winget (CLI)
                        </ListViewItem>
                    </svelte:fragment>
                </MenuFlyout>
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
    <div class="hero-right">
        <div class="hero-image-container">
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
                    src="/screenshots/hero-light.png"
                    alt="Files new tab screenshot"
                >
            </picture>
        </div>
    </div>
    <canvas slot="outer" width={32} height={32} bind:this={heroCanvas}></canvas>
</PageSection>

<PageSection id="design-section">
    <HeaderChip>Design</HeaderChip>
    <h2>Power meets beauty.</h2>
    <p>Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.</p>
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
                srcset="/screenshots/folder-list-dark.png"
            >
            <source
                media="(prefers-color-scheme: light)"
                srcset="/screenshots/folder-list-light.png"
            >
            <img
                class="files-screenshot"
                style="transform: translateY({Math.floor(scrollY / -10)}px)"
                src="/screenshots/folder-list-light.png"
                alt="Files folder list screenshot"
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
                alt="Windows 11 wallpaper"
            >
        </picture>
    </div>
</PageSection>

<PageSection id="features-section">
    <div class="features-section-left">
    </div>
    <div class="features-section-right">
        <HeaderChip>Features</HeaderChip>
        <h2>It already does that.</h2>
        <p>Cloud files integration? Tabs and multiple layouts? Rich file previews? Files has it covered with robust features you expect from a modern file manager.</p>
        <hr role="separator" />
        <div class="feature-cards-container">
            <FeatureCard selected description="Integration with cloud services such as OneDrive, Google Drive, and iCloud allow you to manage your documents and photos in the cloud, right from the sidebar.">
                <svelte:fragment slot="icon">
                    {@html Cloud}
                </svelte:fragment>
                Seamless cloud integration
            </FeatureCard>
            <FeatureCard description="Preview documents, photos, and more without opening them. Peek at code files with advanced syntax highlighting and markdown support.">
                <svelte:fragment slot="icon">
                    {@html EyeVisible}
                </svelte:fragment>
                File preview
            </FeatureCard>
            <FeatureCard description="Use the same familiar permissions system from File Explorer, but with a new modern design that's a delight to use.">
                <svelte:fragment slot="icon">
                    {@html ShieldKeyhole}
                </svelte:fragment>
                Permissions management
            </FeatureCard>
            <FeatureCard description="Avoid multiple windows and keep your desktop clutter-free. Files features a browser-like tabbing interface complete with keyboard shortcuts.">
                <svelte:fragment slot="icon">
                    {@html TabDesktop}
                </svelte:fragment>
                Multitask with tabs
            </FeatureCard>
        </div>
    </div>
</PageSection>

<PageSection id="themes-section" class="theme-{themes + 1}">
    <div class="themes-section-content">
        <HeaderChip>Themes</HeaderChip>
        <h2>Disctinctly personal.</h2>
        <p>Have it your way. Files features a fully customizable user interface, right down to the colors and materials. Explore themes created by the community or dive right into the docs and create your own.</p>
        <div class="theme-chooser">
            <ColorSwatch color="var(--background-tertiary);" value={0} bind:group={themes} />
            <ColorSwatch color="#414958" value={1} bind:group={themes} />
            <ColorSwatch color="#6441a4" value={2} bind:group={themes} />
            <ColorSwatch color="#feb400" value={3} bind:group={themes} />
            <ColorSwatch color="#073642" value={4} bind:group={themes} />
            <ColorSwatch color="#88c0d0" value={5} bind:group={themes} />
        </div>
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
        {#if contributors1 && contributors2 && contributors3}
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
        {/if}
        <canvas bind:this={communityCanvas}></canvas>
    </div>
</PageSection>