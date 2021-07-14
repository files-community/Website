<script lang="ts">
    import { onMount } from "svelte";

    import { links } from "$stores";
    import { PageSection, Button, HyperlinkButton, ComponentShowcase, HeaderChip } from "$lib";
    import { getReleaseVersion } from "./fetchHomepageData";

    import ArrowDownload from "@fluentui/svg-icons/icons/arrow_download_24_regular.svg?raw";
    import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";

    let windows: boolean;
    let version: string;
    let canvas: HTMLCanvasElement;

    onMount(async() => {
        
        // Platform detection
        windows = navigator.platform === "Win32";

        // Fetch release version
        version = await getReleaseVersion();

        // Rainbow canvas
        let time: number = 0;
        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        const getColor = (x: number, y: number, r: number, g: number, b: number): void => {
            context.fillStyle = `rgb(${r}, ${g}, ${b})`;
            context.fillRect(x, y, 1, 1);
        }
        const red = (x: number, y: number, t: number): number => {
            return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
        }
        const green = (x: number, y: number, t: number): number => {
            return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
        }
        const blue = (x: number, y: number, t: number): number => {
            return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
        }
        const run = (): void => {
            for (let x = 0; x <= 35; x++) {
                for (let y = 0; y <= 35; y++) {
                    getColor(x, y, red(x, y, time), green(x, y, time), blue(x, y, time));
                }
            }
            time += 0.05;
            window.requestAnimationFrame(run);
        }
        run();
    });
</script>

<svelte:head>
    <title>Files</title>
    <meta property="og:title" content="Files">
</svelte:head>

<PageSection id="hero-section">
    <canvas width="32" height="32" bind:this={canvas}/>
    <div class="hero-left">
        <h1>Files</h1>
        <p>A modern file explorer that pushes the boundaries of the platform.</p>
        <div>
            <Button
                href={windows ? `ms-windows-store://pdp/?ProductId=${links.storeId}` : `https://www.microsoft.com/en-us/p/files/${links.storeId}`}
                target="_blank"
                rel="noreferrer noopener"
                style="accent"
            >
                {@html ArrowDownload}
                <div class="hero-button-inner">
                    <h5>Download {version || ""}</h5>
                    <span>Get it from Microsoft</span>
                </div>
            </Button>
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
    <hr class="divider"/>
</PageSection>

<PageSection id="design-section">
    <div class="design-section-content">
        <HeaderChip>Design</HeaderChip>
        <h2>Power meets beauty.</h2>
        <p>Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs, and so much more.</p>
        <HyperlinkButton
            href="https://www.microsoft.com/design/fluent/"
            target="_blank"
            rel="noreferrer noopener"
        >
            Learn More
        </HyperlinkButton>
    </div>
    <ComponentShowcase />
</PageSection>

<PageSection id="design-section-newstyle">
    <div class="design-section-content">
        <div class="design-section-text">
            <HeaderChip>Design</HeaderChip>
            <h2>Power meets beauty.</h2>
            <p>Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs, and so much more.</p>
            <HyperlinkButton
                href="https://www.microsoft.com/design/fluent/"
                target="_blank"
                rel="noreferrer noopener"
            >
                Learn More
            </HyperlinkButton>
        </div>
        <div class="design-image">
            <picture class="files-screensot-container">
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
            min-height: 85%;
            justify-content: space-between;
            align-items: center;
            canvas {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 100vh;
                height: 100vh;
                opacity: 0.8;
                mask: radial-gradient(at bottom right, var(--background-base), transparent 70%);
                z-index: -1;
                pointer-events: none;
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

    .hero-buttons {
        @include flex($wrap: true, $gap: 5px);
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