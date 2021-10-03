<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ fetch }) => ({
		props: {
			posts: await fetch("/blog.json").then(response => response.json())
		}
	});
</script>

<script lang="ts">
    import { Button, PageSection, HeaderChip, BlogCard, tilt } from "$lib";

    interface Post {
        path: string,
        metadata: {
            title: string,
            date: string,
            description?: string,
            thumbnail?: string,
            author?: string
        }
    }

    export let posts: Post[];

    const mainPost: Post = posts[0];

    let scrollY: number;
</script>

<svelte:head>
    <title>Files - Blog</title>
    <meta property="og:title" content="Files - Blog">

    <meta property="og:image" content="/branding/banner-blog-light.png">
</svelte:head>

<svelte:window bind:scrollY />

<PageSection id="blog">
    <div class="blog-backdrop">
        <img
            src={mainPost.metadata.thumbnail}
            alt=""
            width="0"
            style="transform: translateY({Math.floor(scrollY / 2.5)}px)"
        />
    </div>
    <div class="main-post">
        <img
            use:tilt={{ max: 3, scale: 1.02 }}
            src={mainPost.metadata.thumbnail}
            alt="Main post thumbnail"
            width="633"
            height="422"
        />
        <div class="main-post-info">
            <HeaderChip>{new Date(mainPost.metadata.date.replace(/-/g, '\/').replace(/T.+/, '')).toLocaleDateString("en-US", {
                year: 'numeric', day: "numeric", month: 'short'
            })}</HeaderChip>
            <h2>{mainPost.metadata.title}</h2>
            <p>{mainPost.metadata.description}</p>
            <Button variant="accent" href="blog/{mainPost.path.replace(/\.[^/.]+$/, "")}">Read More</Button>
        </div>
    </div>
    <div class="blog-cards">
        {#each posts.slice(1) as post}
            <BlogCard path={post.path} {...post.metadata} />
        {/each}
    </div>
</PageSection>

<style lang="scss">
    @use "../src/styles/pages/blog";
</style>