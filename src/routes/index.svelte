<script lang="ts">
    import { onMount } from "svelte";
    import { draw } from "svelte/transition";

    import Highlight from "svelte-highlight";
    import cpp from "svelte-highlight/src/languages/cpp";

    import { links } from "$data/links";
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
    import Tag from "@fluentui/svg-icons/icons/tag_24_regular.svg?raw";
    import TabDesktop from "@fluentui/svg-icons/icons/tab_desktop_20_regular.svg?raw";
    import EyeVisible from "@fluentui/svg-icons/icons/eye_show_20_regular.svg?raw";
    import Checkmark from "@fluentui/svg-icons/icons/checkmark_20_regular.svg?raw";
    import ArrowSync from "@fluentui/svg-icons/icons/arrow_sync_20_regular.svg?raw";

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
    let currentFeature: number = 0;
    let currentPreviewFile: number = 0;

    const shuffle = a => a.sort(() => Math.random() - 0.5);

    const downloadSources = ["Microsoft Store", "GitHub Release", "Winget (CLI)"];
    const storeUrl = windows ? `ms-windows-store://pdp/?ProductId=${links.storeId}` : `https://www.microsoft.com/en-us/p/files/${links.storeId}`;
    const cloudTable = [
        {
            name: "GitHub",
            icon: "folder",
            status: "success"
        },
        {
            name: "electron-v1.4.13-win32-ia32.zip",
            icon: "zip",
            status: "sync"
        },
        {
            name: "start.js",
            icon: "note",
            status: "success"
        },
        {
            name: "2021-08-05 15.03.05.mp4",
            icon: "video",
            status: "success"
        },
        {
            name: "christmas-card-2017.png",
            icon: "picture",
            status: "success"
        },
        {
            name: "install.bat",
            icon: "exe",
            status: "success"
        },
        {
            name: "dQw4w9WgXcQ.mp3",
            icon: "music",
            status: "success"
        },
    ];
    const previewFiles = [
        {
            name: "June 2018",
            icon: "/ui/folder.png",
            items: 3,
            added: "Thursday, June 21, 2018 11:24 AM",
            modified: "Sunday, November 15, 2020 6:50 PM",
            path: "C:\\Users\\Austin\\Desktop\\June 2018"
        },
        {
            name: "waves",
            extension: "png",
            icon: "/preview-samples/waves.png",
            bitDepth: 24,
            dimensions: {
                horizontal: 1496,
                vertical: 960
            },
            dpi: {
                horizontal: 72,
                vertical: 72
            },
            added: "Sunday, August 1, 2021 12:34 AM",
            modified: "Monday, August 9, 2021 12:34 AM",
            path: "C:\\Users\\Austin\\Pictures\\waves.png"
        },
        {
            name: "index",
            extension: "html",
            icon: "/ui/note.png",
            added: "Wednesday, July 14, 2021 8:47 PM",
            modified: "Monday, July 31, 2021 4:32 AM",
            path: "C:\\Users\\Austin\\Documents\\index.html"
        },
        {
            name: "main",
            extension: "cpp",
            icon: "/ui/cpp.svg",
            added: "Monday, June 28, 2021 8:20 AM",
            modified: "Monday, July 12, 2021 1:30 PM",
            lineCount: 8,
            code: `#include <iostream>

using namespace std;

int main()
{
    cout << "Hello World" << endl;
}`,
            path: "C:\\Users\\Austin\\Documents\\GitHub\\\\waves.png"
        }
    ];
    
    $: downloadUrl = downloadSource === 0 ? storeUrl : releaseUrl;

    function copyWingetCommand() {
        navigator.clipboard.writeText("winget install Files-Community.Files");
        wingetCommandCopied = true; 
        setTimeout(() => {
            wingetCommandCopied = false; 
        }, 500);
    }

    function updateDownloadSource(value: number) {
        console.log("updateDownloadSource called");
        localStorage.setItem("downloadSource", value);
    }

    function setFeature(value) {
        currentFeature = value;
    }

    setInterval(() => {
        if (currentFeature !== 3)  {
            currentFeature++;
        } else {
            currentFeature = 0;
        }
    }, 8000);

    onMount(async () => {
        new RainbowCanvas(heroCanvas).render();
        new RainbowCanvasAlt(communityCanvas).render();

        if (!localStorage.getItem("downloadSource")) localStorage.setItem("downloadSource", "0");
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
                            on:change={() => updateDownloadSource(0)}
                            value={0}
                        >
                            Microsoft Store
                        </ListViewItem>
                        <ListViewItem
                            bind:group={downloadSource}
                            on:change={() => updateDownloadSource(1)}
                            value={1}
                        >
                            Github Release
                        </ListViewItem>
                        <ListViewItem
                            bind:group={downloadSource}
                            on:change={() => {
                                updateDownloadSource(2);
                                wingetDialogOpen = true;
                            }}
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
        {#if currentFeature === 0}
            <svg class="backdrop-logo" width="256" height="256" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path in:draw={{ duration: 1000 }} d="M24 10C18.262 10 13.5501 14.3935 13.0448 20H12.75C8.46979 20 5 23.4698 5 27.75C5 32.0302 8.46979 35.5 12.75 35.5H35.25C39.5302 35.5 43 32.0302 43 27.75C43 23.4698 39.5302 20 35.25 20H34.9552C34.4499 14.3935 29.738 10 24 10Z" />
            </svg>
            <div class="showcase-panel cloud-files-showcase">
                <svg class="cloud-provider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78">
                    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                </svg>
                <svg class="cloud-provider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.3 841.9">
                    <path fill="#D9272E" d="M296.8,168.2C157.2,168.2,43.9,281.4,43.9,421c0,139.6,113.2,252.8,252.8,252.8S549.6,560.6,549.6,421  C549.6,281.4,436.4,168.2,296.8,168.2z M428.1,510.5c0,4.3-3.5,7.8-7.8,7.8h-33.1c-4.3,0-7.8-3.5-7.8-7.8V408.8c0-0.9-1-1.3-1.7-0.7  l-70,70c-6.1,6.1-15.9,6.1-22,0l-70-70c-0.6-0.6-1.7-0.2-1.7,0.7v101.7c0,4.3-3.5,7.8-7.8,7.8h-33.1c-4.3,0-7.8-3.5-7.8-7.8V331.5  c0-4.3,3.5-7.8,7.8-7.8H196c4.1,0,8.1,1.6,11,4.6l87,87c1.5,1.5,4,1.5,5.5,0l87-87c2.9-2.9,6.9-4.6,11-4.6h22.7  c4.3,0,7.8,3.5,7.8,7.8V510.5z"/>
                </svg>
                <table>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                    {#each cloudTable as { name, icon, status }, i}
                        <tr style="--file-index: {i}">
                            <td>
                                <img src="ui/{icon}.png" alt={icon === "folder" ? `${icon} file` : "Folder"} width="24" height="24" />
                            </td>
                            <td>{name}</td>
                            <td class="status-{status === "success" ? "success" : "sync"}">
                                {@html status === "success" ? Checkmark : ArrowSync}
                            </td>
                        </tr>
                    {/each}
                </table>
            </div>
            {:else if currentFeature === 1}
            <svg class="backdrop-logo" style="--logo-scale: 0.9" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path in:draw={{ duration: 1250 }} xmlns="http://www.w3.org/2000/svg" d="M24.833 12.5H40.25C42.2543 12.5 43.8913 14.0724 43.9948 16.0508L44 16.25V35.25C44 37.2543 42.4276 38.8913 40.4492 38.9948L40.25 39H7.75C5.74574 39 4.10873 37.4276 4.0052 35.4492L4 35.25V18.999L17.8036 19L18.0297 18.9932C19.0049 18.9344 19.9192 18.4968 20.5769 17.7743L20.724 17.6025L24.833 12.5ZM17.0607 9C17.8933 9 18.7 9.27703 19.3552 9.78393L19.5301 9.92784L21.974 12.066L18.7771 16.0342L18.6826 16.1388C18.4832 16.336 18.223 16.4605 17.9443 16.4921L17.8036 16.5L4 16.499V12.75C4 10.7457 5.57236 9.10873 7.55084 9.0052L7.75 9H17.0607Z" />
            </svg>
            <div class="previewer-showcase">
                <div class="preview-pane-outer">
                    <div class="showcase-panel preview-pane">
                        {#each [previewFiles[currentPreviewFile]] as file}
                            <div class="preview">
                                {#if file?.extension === "html"}
                                    <iframe title="Document" frameBorder={0} src="/preview-samples/{file.name}.{file.extension}" />
                                    {:else if file?.extension === "cpp"}
                                        <Highlight language={cpp} code={file?.code} />
                                    {:else}
                                    <img src={file.icon} alt="File icon" />
                                {/if}
                            </div>
                            <div class="grabber"></div>
                            <div class="metadata scroller">
                                <h4>
                                    {file.name}{typeof file.extension !== "undefined" ? "." : ""}{file.extension ?? ""}
                                </h4>
                                <h5>
                                    {file.extension ? `${file.extension.toUpperCase()} File` : "File Folder"}
                                </h5>
                                {#if file.bitDepth}
                                    <h6>Bit Depth</h6>
                                    <span>{file.bitDepth}</span>
                                {/if}
                                {#if file?.dimensions?.horizontal && file?.dimensions?.vertical}
                                    <h6>Dimensions</h6>
                                    <span>{file.dimensions.horizontal} x {file.dimensions.vertical}</span>
                                {/if}
                                {#if file?.dpi?.horizontal}
                                    <h6>Horizontal Resolution</h6>
                                    <span>{file.dpi.horizontal}</span>
                                {/if}
                                {#if file?.dpi?.vertical}
                                    <h6>Vertical Resolution</h6>
                                    <span>{file.dpi.vertical}</span>
                                {/if}
                                {#if file.items}
                                    <h6>Item Count</h6>
                                    <span>{file.items}</span>
                                {/if}
                                {#if file.lineCount}
                                    <h6>Line Count</h6>
                                    <span>{file.lineCount}</span>
                                {/if}
                                {#if file.path}
                                    <h6>Path</h6>
                                    <span>{file.path}</span>
                                {/if}
                                {#if file.added}
                                    <h6>Date Created</h6>
                                    <span>{file.added}</span>
                                {/if}
                                {#if file.modified}
                                    <h6>Date Created</h6>
                                    <span>{file.modified}</span>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="showcase-panel files-grid">
                    {#each previewFiles as file, i}
                        <div
                            class="file"
                            class:selected={currentPreviewFile === i}
                            on:click={() => currentPreviewFile = i}
                        >
                            <img src={file.icon} alt="File icon" />
                            {file.name}{typeof file.extension !== "undefined" ? "." : ""}{file.extension ?? ""}
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
    <div class="features-section-right">
        <HeaderChip>Features</HeaderChip>
        <h2>It already does that.</h2>
        <p>Cloud files integration? Tabs and multiple layouts? Rich file previews? Files has it covered with robust features you expect from a modern file manager.</p>
        <hr role="separator" />
        <div class="feature-cards-container">
            <FeatureCard
                on:click={() => setFeature(0)}
                selected={currentFeature === 0}
                description="Integration with cloud services such as OneDrive, Google Drive, and iCloud allow you to manage your documents and photos in the cloud, right from the sidebar."
            >
                <svelte:fragment slot="icon">
                    {@html Cloud}
                </svelte:fragment>
                Seamless cloud integration
            </FeatureCard>
            <FeatureCard
                on:click={() => setFeature(1)}
                selected={currentFeature === 1}
                description="Preview documents, photos, and more without opening them. Support for rich previews, syntax highlighting, markdown and video playback is all built in."
            >
                <svelte:fragment slot="icon">
                    {@html EyeVisible}
                </svelte:fragment>
                File preview
            </FeatureCard>
            <FeatureCard
                on:click={() => setFeature(2)}
                selected={currentFeature === 2}
                description="Quickly mark and organize your files and folders for later by assigning them colored and named tags for easy identification. You can even add your own custom tags!"
            >
                <svelte:fragment slot="icon">
                    {@html Tag}
                </svelte:fragment>
                Tagged Files & Folders
            </FeatureCard>
            <FeatureCard
                on:click={() => setFeature(3)}
                selected={currentFeature === 3}
                description="Avoid multiple windows and keep your desktop clutter-free. Files features a browser-like tabbing interface complete with keyboard shortcuts."
            >
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