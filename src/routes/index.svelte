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

    let contributors1 = [];
    let contributors2 = [];
    let contributors3 = [];

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
    <canvas width="32" height="32" bind:this={heroCanvas}></canvas>
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

<PageSection id="design-section-alt">
    <div class="design-section-content">
        <HeaderChip>I am out of ideas</HeaderChip>
        <h2>What do I put here?</h2>
        <p>why are you looking at me?</p>
        <div class="buttons-spacer">
            <Button style="accent" href="">
                Learn more
            </Button>
            <HyperlinkButton
                href="https://www.microsoft.com/design/fluent/"
                target="_blank"
                rel="noreferrer noopener"
            >
                Learn less
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

<style lang="scss">
    @use "static/mixins" as *;

    :global {
        #hero-section {
            @include flex($direction: row);
            gap: 4rem;
            overflow: hidden;
            height: 75vh;
            min-height: 584px;
            max-height: 1024px;
            border-bottom: 1px solid var(--DividerStrokeColorDefault);
            .button {
                padding: 7px 12px;
                svg {
                    @include icon($size: 18px);
                }
            }
            .split-button .button:last-child {
                padding: 0 8px;
                svg {
                    @include icon($size: 12px);
                }
            }

            canvas {
                z-index: -1;
                opacity: 0.5;
                mask: radial-gradient(at bottom right, var(--background-base), transparent 70%);
                width: 100vh;
                height: 100vh;
                position: absolute;
                bottom: 0;
                right: 0;
            }
            .button svg {
                @include icon($size: 18px);
            }
        }
        .style-standard .hero-button-inner {
            color: var(--text-color-secondary);
            h5 {
                color: var(--text-color-primary);
            }
        }
        @media (prefers-color-scheme: dark) {
            #hero-section canvas {
                opacity: 0.4;
            }
        }
    }

    .hero- {
        &left {
            @include flex($direction: column, $justify: center);
            flex: 1 1 auto;
            height: auto;   
        }
        &button-inner {
            @include flex($direction: column);
            font-size: 10px;
            line-height: normal;
            margin-left: 8px;
            h5 {
                font-size: 12px;
                font-weight: 600;
                margin-bottom: 8px;
                margin: 0;
            }
        }
        &screenshot {
            -webkit-user-drag: none;
            user-select: none;
            height: 100%;
            width: auto;
            background-color: var(--control-color-disabled);
            border: 1px solid var(--SurfaceStrokeColorDefault);
            border-radius: calc(var(--overlay-corner-radius) / 2);
            backdrop-filter: blur(200px) saturate(150%);
            box-shadow: var(--window-elevation);
        }
    }

    @media only screen and (max-width: 1068px) {
        :global(#hero-section) {
            @include flex($direction: column);
            height: auto;
            max-height: unset;
        }
        .hero- {
            &left {
                text-align: center;
                align-items: center;
            }
            &screenshot {
                -webkit-user-drag: none;
                user-select: none;
                width: 100%;
                height: auto;
            }
        }
    }

    :global {
        #design-section {
            @include flex($direction: column, $align: center);
            text-align: center;
            p {
                max-width: 650px;
            }
        }
    }

    .design-image {
        @include flex($direction: column, $justify: center, $align: center);
        position: relative;
        width: 80vw;
        height: 100%;
        margin-top: 164px;
        text-align: center;
    }

    .files- {
        &screenshot, &wallpaper {
            -webkit-user-drag: none;
            user-select: none;
            height: auto;
        }
        &screenshot {
            position: absolute;
            top: -36px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 70%;
            max-width: 1024px;
            z-index: 1;
            background-color: var(--LayerFillColorDefault);
            border: 1px solid var(--SurfaceStrokeColorDefault);
            border-radius: var(--overlay-corner-radius);
            backdrop-filter: blur(60px) saturate(150%);
            box-shadow: var(--window-elevation);
        }
        &wallpaper {
            position: relative;
            width: 90%;
            max-width: 1440px;
            border-radius: calc(var(--overlay-corner-radius) * 1.5);
            border: 1px solid var(--CardStrokeColorDefault);
        }
    }

    @media only screen and (max-width: 768px) {
        .design-image {
            width: 100%;
        }
        .files- {
            &screenshot {
                width: 90%;
                transform: none !important;
                border-radius: calc(var(--overlay-corner-radius) / 2);
            }
            &wallpaper {
                width: 100%;
                border-radius: var(--overlay-corner-radius);
            }
        }
    }

    :global {
        #design-section-alt {
            @include flex($align: center);
            border-radius: 0 0 12px 12px;
            min-height: 600px;
            background-color: var(--background-base);
            overflow: hidden;
            .component-showcase {
                position: absolute;
                right: -400px;
                transform: rotate(30deg);
            }
        }
    }

    .design-section-content {
        width: 45%;
        min-width: 478px;
    }

    @media screen and (max-width: 832px) {
        .design-section-content {
            width: 100%;
            min-width: unset;
        }
    }


    :global(#community-section) {
        @include flex($justify: center);
        min-height: fit-content;
        overflow: hidden;
    }

    .community-section- {
        &text {
            text-align: center;
            --background-base: #F3F3F3;
            --text-color-primary: #202020;
            --text-color-secondary: #282828;
            --text-color-tertiary: var(--text-color-secondary);
            --subtle-color-secondary: rgba(0, 0, 0, 0.035);
            --subtle-color-tertiary: rgba(0, 0, 0, 0.024);
            --subtle-color-disabled: rgba(255, 255, 255, 0);
            --accent-text-default: var(--accent-color-dark-3);
            --accent-text-tertiary: var(--accent-color-dark-2);
        }
        &card {
            @include flex($direction: column, $justify: center, $align: center);
            width: 100%;
            min-height: 600px;
            max-width: 2048px;
            padding: 72px 48px;
            position: relative;
            z-index: 0;
            border-radius: var(--overlay-corner-radius);
            background-color: #F9F9F9;
            box-shadow: 0 2.74416px 2.74416px rgb(0 0 0 / 3%),
                        0 5.48831px 5.48831px rgb(0 0 0 / 4%),
                        0 13.7208px 10.9766px rgb(0 0 0 / 5%),
                        0 20.5812px 20.5812px rgb(0 0 0 / 6%),
                        0 41.1623px 41.1623px rgb(0 0 0 / 7%),
                        0 96.0454px 89.1851px rgb(0 0 0 / 9%);
            canvas {
                z-index: -1;
                border-radius: var(--overlay-corner-radius);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        .community-section-card {
            padding: 24px;
            h2 {
                font-size: 32px;
            }
        }
    }

    .contributors- {
        &container {
            margin-top: 48px;
        }
        &row {
            @include flex($align: center, $gap: 12px);
            position: relative;
            margin-bottom: 12px;
            &:nth-child(even) {
                left: 24px;
            }
            &:nth-child(odd) {
                left: -24px;
            }
            &:last-child {
                margin: 0;
            }
        }
    }
</style>