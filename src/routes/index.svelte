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
        Rainbow,
        RainbowAlt
    } from "$lib";

    import ArrowDownload from "@fluentui/svg-icons/icons/arrow_download_24_regular.svg?raw";
    import ChevronDown from "@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw";
    import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";

    let windows: boolean;
    let heroCanvas: HTMLCanvasElement;
    let communityCanvas: HTMLCanvasElement;
    let contributors = [];

    onMount(async () => {
        windows = navigator.platform === "Win32";

        contributors = await getContributors(1);

        new Rainbow(heroCanvas).render();
        new RainbowAlt(communityCanvas).render();
    });
</script>

<svelte:head>
    <title>Files</title>
    <meta property="og:title" content="Files">
</svelte:head>

<PageSection id="hero-section">
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
    <div class="hero-right">
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
    </div>
    <canvas width="32" height="32" bind:this={heroCanvas}></canvas>
</PageSection>

<PageSection id="design-section">
    <div class="design-section-content">
        <HeaderChip>Design</HeaderChip>
        <h2>Power meets beauty.</h2>
        <p>Explore a beautiful windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs, and so much more.</p>
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
    </div>
    <ComponentShowcase />
</PageSection>

<PageSection id="community-section">
    <div class="community-section-card">
        <HeaderChip>Community</HeaderChip>
        <h2>Designed and developed by you.</h2>
        <p>Files is free and open source software, maintained and designed by a collective of hundreds of contributors.</p>
        <div class="button-spacer">
            <HyperlinkButton href="https://discord.gg/{links.discord}">Join the discussion</HyperlinkButton>
            <HyperlinkButton href="/docs/contributing/code-style">Become a contributor</HyperlinkButton>
        </div>
        <canvas bind:this={communityCanvas}></canvas>
    </div>
</PageSection>


<PageSection id="design-section-newstyle">
    <div class="design-section-content">
        <div class="design-section-text">
            <HeaderChip>Design</HeaderChip>
            <h2>Power meets beauty.</h2>
            <p>Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs, and so much more.</p>
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
            <picture class="files-screenshot-container">
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
            min-height: 572px;
            max-height: 1024px;
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

            .hero-left {
                @include flex($direction: column, $justify: center);
                max-width: 40%;
                height: auto;
            }

            .hero-right {
                max-width: 60%;
            
                .hero-screenshot {
                    align-self: center;
                    width: 100%;
                    height: 100%;
                    background-color: var(--control-color-disabled);
                    border: 1px solid var(--SurfaceStrokeColorDefault);
                    border-radius: var(--overlay-corner-radius);
                    box-sizing: content-box;
                    backdrop-filter: blur(200px) saturate(150%);
                    -webkit-backdrop-filter: blur(200px) saturate(150%);
                    box-shadow: var(--window-elevation);
                }
            }

            .divider {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0;
                height: 1px;
                background-color: var(--DividerStrokeColorDefault);
                border: none;
            }
        }
        @media (prefers-color-scheme: dark) {
            #hero-section canvas {
                opacity: 0.4;
            }
        }

        @media only screen and (max-width: 768px) {
            #hero-section {
                @include flex($direction: column);
                min-height: 115vw;

                .hero-left {
                    max-width: 100%;
                }

                .hero-right {
                    max-width: 100%;
                    .hero-screenshot {
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }
    }

    .buttons-spacer {
        @include flex($wrap: true, $gap: 8px);
    }

    .hero-button-inner {
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

    :global(.style-standard .hero-button-inner) {
        color: var(--text-color-secondary);
        h5 {
            color: var(--text-color-primary);
        }
    }

    :global {
        #design-section {
            @include flex($align: center);
            border-radius: 0 0 12px 12px;
            min-height: 600px;
            background-color: var(--background-base);
            overflow: hidden;
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
            .component-showcase {
                position: absolute;
                right: -400px;
                transform: rotate(30deg);
            }
        }
    }

    :global {
        #community-section {
            @include flex($justify: center);
            text-align: center;
            --background-base: #F3F3F3;
            --text-color-primary: #202020;
            --text-color-secondary: #282828;
            --text-color-tertiary: var(--text-color-secondary);
            --subtle-color-secondary: rgba(0, 0, 0, 0.035);
            --subtle-color-tertiary: rgba(0, 0, 0, 0.024);
            --subtle-color-disabled: rgba(255, 255, 255, 0);
            --accent-text-default: var(--accent-color-dark-2);
            --accent-text-tertiary: var(--accent-color-dark-1);
        }
        .community-section-card {
            @include flex($direction: column, $justify: center, $align: center);
            width: 100%;
            min-height: 600px;
            max-width: 2048px;
            margin-top: -144px;
            padding: 72px 48px;
            position: relative;
            z-index: 0;
            border-radius: var(--overlay-corner-radius);
            background-color: var(--background-base);
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

    :global {
        #design-section-newstyle {
            @include flex($align: center);
            min-height: fit-content;
            align-items: flex-start;
            margin: auto;

            .design-section-content {
                @include flex($direction: column, $align: center);

                .design-section-text{
                    text-align: center;
                    p {
                        max-width: 65ch;
                    }
                }


                .design-image {
                    position: relative;
                    width: 80vw;
                    height: 100%;
                    margin-top: 9rem;
                    text-align: center;

                    .files-screensot-container {
                        height: auto;
                    }

                    .files-screenshot {
                        position: absolute;
                        width: 70%;
                        max-width: 1024px;
                        height: auto;
                        margin-left: auto;
                        margin-right: auto;
                        left: 0;
                        right: 0;
                        top: -6rem;
                        z-index: 5;
                        background-color: var(--LayerFillColorDefault);
                        border: 1px solid var(--SurfaceStrokeColorDefault);
                        border-radius: var(--overlay-corner-radius);
                        box-sizing: content-box;
                        backdrop-filter: blur(60px) saturate(150%);
                        -webkit-backdrop-filter: blur(60px) saturate(150%);
                        box-shadow: var(--window-elevation);
                    }

                    .files-wallpaper {
                        position: relative;
                        width: 90%;
                        max-width: 1440px;
                        height: auto;
                        border-radius: calc(var(--overlay-corner-radius) * 1.5);
                        border: 1px solid var(--CardStrokeColorDefault);
                        box-shadow: var(--card-elevation);
                    }
                }

                @media only screen and (max-width: 768px) {
                    .design-image {
                        width: 100%;

                        .files-screenshot {
                            width: 90%;
                        }

                        .files-wallpaper {
                            width: 100%;
                            border-radius: var(--overlay-corner-radius);
                        }
                    }
                }
            }
        }
    }
</style>