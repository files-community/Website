<script lang="ts">
    import { onMount } from "svelte";

    import { links } from "$stores";
    import { PageSection, Button, HyperlinkButton, ComponentShowcase, HeaderChip } from "$lib";
    import { getReleaseVersion } from "./fetchHomepageData";

    let isWindows;
    let version;
    let canvas: HTMLCanvasElement;

    onMount(async() => {

        // Platform detection
        isWindows = navigator.platform === "Win32";

        // Fetch release version
        let version = await getReleaseVersion();

        // Canvas
        let time = 0;
        const context = canvas.getContext('2d');
        const getColor = (x, y, r, g, b) => {
            context.fillStyle = `rgb(${r}, ${g}, ${b})`;
            context.fillRect(x, y, 1, 1);
        }
        const red = (x, y, t) => {
            return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
        }
        const green = (x, y, t) => {
            return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
        }
        const blue = (x, y, t) => {
            return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
        }
        const run = () => {
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

<PageSection id="hero-section">
    <canvas width="32" height="32" bind:this={canvas}/>
    <h1>Files</h1>
    <p>A modern file explorer that pushes the boundaries of the platform.</p>
    <div>
        <Button
            href={isWindows ? `ms-windows-store://pdp/?ProductId=${links.storeId}` : `https://www.microsoft.com/en-us/p/files/${links.storeId}`}
            target="_blank"
            rel="noreferrer noopener"
            style="accent"
        >
            
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
            
            <div class="hero-button-inner">
                <h5>View GitHub</h5>
                <span>Files is open source!</span>
            </div>
        </Button>
    </div>
</PageSection>

<PageSection id="design-section">
    <div class="design-section-content">
        <HeaderChip>Design</HeaderChip>
        <h1>Consistent</h1>
        <p>Files utilizes the tried and true Fluent Design system in it's UI. All elements of the application are consistent and beautiful native components.</p>
        <HyperlinkButton>Learn More</HyperlinkButton>
    </div>
    <div class="component-showcase-outer">
        <ComponentShowcase theme="light" />
    </div>
</PageSection>

<style lang="scss">
    @use "static/mixins" as *;

    :global(.page-section) {
        h1 {
            margin: 0;
            color: var(--text-color-primary);
            font: {
                size: 72px;
                weight: 600;
            }
        }
        p {
            margin-bottom: 24px;
            margin-top: 12px;
            font-size: 1rem;
            color: var(--text-color-tertiary);
        }
    }

    :global {
        #hero-section {
            @include flex($direction: column, $justify: center);
            overflow: hidden;
            height: 75vh;
            min-height: 512px;
            max-height: 1024px;
            canvas {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 100vh;
                height: 100vh;
                opacity: 0.5;
                mask: radial-gradient(at bottom right, var(--background-base), transparent 70%);
                z-index: -1;
                pointer-events: none;
            }
            .button {
                font: {
                    size: 18px;
                    family: var(--font-family-icon);
                }
            }
        }
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

    :global(#design-section) {
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
    }

    .component-showcase-outer {
        position: absolute;
        right: 150px;
        margin-top: 420px;
        transform: rotate(30deg);
    }
</style>