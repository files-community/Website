<script>
    import { onMount } from 'svelte';
    import { org, repo, storeId } from './stores';
    import { Title, Subtext, Anchor, Flex, Button, PageSection } from 'components';

    import Navbar from './Navbar.svelte';
    import AppSkeleton from './AppSkeleton.svelte';

    let canvas;
    let version = '';
    let contributors1 = [];
    let contributors2 = [];
    let contributors3 = [];

    async function getReleaseVersion(endpoint) {
        return await fetch(endpoint).then(result => result.json()).then(result => {
            if (result) return result.tag_name;
        }).catch(err => {
            console.error(err);
            return '';
        });
    }

    async function getContributors(endpoint) {
        return await fetch(endpoint).then(result => result.json()).then(result => {
            return result;
        }).catch(err => {
            console.error(err);
            return '';
        });
    }

    onMount(async () => {

        // temporary thing to test theming. once a proper theme system is added this can be removed
        document.body.className = 'theme-light';

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
        let run = () => {
            for (let x = 0; x <= 35; x++) {
                for (let y = 0; y <= 35; y++) {
                    getColor(x, y, red(x, y, time), green(x, y, time), blue(x, y, time));
                }
            }
            time += 0.05;
            window.requestAnimationFrame(run);
        }
        run();
        
        // Fetch our release version
        version = await getReleaseVersion(`https://api.github.com/repos/${$org}/${$repo}/releases/latest`);

        // Fetch contributors
        const contributorsEndpoint = `https://api.github.com/repos/${$org}/${$repo}/contributors?per_page=35`;

        contributors1 = await getContributors(`${contributorsEndpoint}&page=1`);
        contributors2 = await getContributors(`${contributorsEndpoint}&page=2`);
        contributors3 = await getContributors(`${contributorsEndpoint}&page=3`);
    });
</script>

<template>
    <PageSection id="hero-section">
            <Navbar selectedItem={0} items={[
                {
                    name: 'Home',
                    href: '/'
                },
                {
                    name: 'Docs',
                    href: '/',
                    external: true
                },
                {
                    name: 'Discord',
                    href: '/',
                    external: true
                },
                {
                    name: 'GitHub',
                    href: '/',
                    external: true
                }
            ]}/>
            <Flex id="hero-inner-container" align="center" gap>
                <Flex direction="column" id="hero-left-container">
                    <Title>Files</Title>
                    <Subtext>A modern file explorer that pushes the boundaries of the platform.</Subtext>
                    <Flex id="hero-button-container" gap wrap>
                        <Button type="primary" href={`ms-windows-store://pdp/?ProductId=${$storeId}`} custom>
                            <Flex gap align="center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none">
                                    <path d="M12.25 38.5H35.75C36.7165 38.5 37.5 39.2835 37.5 40.25C37.5 41.1682 36.7929 41.9212 35.8935 41.9942L35.75 42H12.25C11.2835 42 10.5 41.2165 10.5 40.25C10.5 39.3318 11.2071 38.5788 12.1065 38.5058L12.25 38.5H35.75H12.25ZM23.6065 6.2558L23.75 6.25C24.6682 6.25 25.4212 6.95711 25.4942 7.85647L25.5 8V29.333L30.2931 24.5407C30.9765 23.8573 32.0846 23.8573 32.768 24.5407C33.4514 25.2242 33.4514 26.3322 32.768 27.0156L24.9898 34.7938C24.3064 35.4772 23.1984 35.4772 22.515 34.7938L14.7368 27.0156C14.0534 26.3322 14.0534 25.2242 14.7368 24.5407C15.4202 23.8573 16.5282 23.8573 17.2117 24.5407L22 29.329V8C22 7.08183 22.7071 6.32881 23.6065 6.2558L23.75 6.25L23.6065 6.2558Z" fill="currentColor"/>
                                </svg>
                                <Flex direction="column">
                                    <span class="button-title">Download {version}</span>
                                    <span class="button-description">Microsoft Store</span>
                                </Flex>
                            </Flex>
                        </Button>
                        <Button href={`https://github.com/${$org}/${$repo}/`} target="_blank" custom>
                            <Flex gap align="center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18">
                                    <path fill-rule="evenodd" fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                                <Flex direction="column">
                                    <span class="button-title">GitHub</span>
                                    <span class="button-description">Files is open source!</span>
                                </Flex>
                            </Flex>
                        </Button>
                    </Flex>
                </Flex>
                <AppSkeleton/>
            </Flex>
            <canvas width="32" height="32" bind:this={canvas} id="background-canvas"/>
    </PageSection>
    <PageSection id="community-section">
        <Flex id="community-section-inner" align="center" justify="center" direction="column">
            <Title size={3} center>Community Driven</Title>
            <Subtext center>
                Files is <Anchor href="https://github.com/files-community/Files/blob/main/LICENSE" target="_blank">free and open source</Anchor> software maintained and designed by the community.
            </Subtext>
            <div class="contributors-container">
                <div class="contributors-row">
                    {#each contributors1 as contributor}
                        {#if !contributor.login.endsWith('[bot]')}
                            <div class="contributor-card">
                                <img class="contributor-avatar" src={contributor.avatar_url} alt="{contributor.login} avatar"/>
                                <div class="contributor-info">
                                    <h5>{contributor.login}</h5>
                                    <span>{contributor.contributions} {(contributor.contributions > 1) ? 'Contributions' : 'Contribution'}</span>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
                <div class="contributors-row">
                    {#each contributors2 as contributor}
                        {#if !contributor.login.endsWith('[bot]')}
                            <div class="contributor-card">
                                <img class="contributor-avatar" src={contributor.avatar_url} alt="{contributor.login} avatar"/>
                                <div class="contributor-info">
                                    <h5>{contributor.login}</h5>
                                    <span>{contributor.contributions} {(contributor.contributions > 1) ? 'Contributions' : 'Contribution'}</span>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
                <div class="contributors-row">
                    {#each contributors3 as contributor}
                        {#if !contributor.login.endsWith('[bot]')}
                            <div class="contributor-card">
                                <img class="contributor-avatar" src={contributor.avatar_url} alt="{contributor.login} avatar"/>
                                <div class="contributor-info">
                                    <h5>{contributor.login}</h5>
                                    <span>{contributor.contributions} {(contributor.contributions > 1) ? 'Contributions' : 'Contribution'}</span>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </Flex>
    </PageSection>
</template>

<style lang="scss">
    :global {
        #hero-section {
            z-index: 1;
            height: 100vh;
            min-height: 724px;
            max-height: 1000px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            padding: 64px 72px;
            background: var(--background-secondary);
        }
        #hero-inner-container .button {
            padding: 0 12px;
            height: 45px;
            min-width: 150px;
            justify-content: flex-start;
            text-align: left;
            line-height: 1.4;
            .button-title {
                font-size: 12px;
                font-weight: 600;
            }
            .button-description {
                font-size: 10px;
                font-weight: 400;
            }
        }
        #hero-inner-container,
        #hero-left-container {
            flex: 1 1 auto;
        }
        #hero-button-container {
            margin-top: 24px;
        }
        #community-section {
            overflow: hidden;
            background: var(--background-primary);
            .subtext {
                margin-top: 4px;
                margin-bottom: 24px;
            }
        }
    }
    
    @keyframes contributors-scroller-right {
        to {
            transform: translateX(50%);
        }
    }

    @keyframes contributors-scroller-left {
        to {
            transform: translateX(-50%);
        }
    }

    #background-canvas {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100vh;
        width: 100vh;
        mask: radial-gradient(at bottom right, #000, transparent 70%);
        z-index: -1;
        pointer-events: none;
    }

    .contributors-container {
        max-width: 1800px;
        overflow: hidden;
        position: relative;
    }

    .contributors-row {
        white-space: nowrap;
        margin-bottom: 10px;
        &:nth-child(odd) {
            float: right;
            animation: contributors-scroller-right 60.5s linear infinite;
        }
        &:nth-child(even) {
            float: left;
            animation: contributors-scroller-left 60.5s linear infinite;
        }
        &:last-child {
            margin: 0;
        }
    }

    @media screen and (min-width: 1800px) {
        .contributors-container {
            &::before,
            &::after {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                width: 100px;
                z-index: 1;
            }
            &::before {
                background-image: linear-gradient(90deg, var(--background-primary), transparent);
            }
            &::after {
                right: 0;
                background-image: linear-gradient(90deg, transparent, var(--background-primary));
            }
        }
    }

    .contributor-card {
        margin-right: 10px;
        display: inline-flex;
        align-items: center;
        padding: 16px;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.7);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.059), inset 0 -1px 0 rgba(0, 0, 0, 0.102);
    }

    .contributor-avatar {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 50%;
    }

    .contributor-info {
        margin-left: 10px;
        font-size: 12px;
        color: var(--text-secondary);
        h5 {
            color: var(--text-primary);
            font-size: 14px;
            font-weight: 600;
            margin: 0;
        }
    }

    :global(.theme-dark #background-canvas) {
        opacity: 0.5;
    }

    :global {
        .acrylic-material {
            backdrop-filter: blur(60px) saturate(5);
            overflow: hidden;
        }

        .acrylic-material::before {
            content: '';
            z-index: -1;
            background-blend-mode: normal, color, luminosity;
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0.8;
        }

        .acrylic-material::before {
            background: var(--acrylic-layer);
        }
    }
</style>