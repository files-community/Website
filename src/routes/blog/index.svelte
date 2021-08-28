<script context="module">
	import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ fetch }) => ({
		props: {
			posts: await fetch("/blog/posts.json").then(response => response.json())
		}
	});
</script>

<script>
    import { Button, PageSection, BlogCard, tilt } from "$lib";

    interface Post {
        path: string,
        metadata: {
            title?: string,
            description?: string,
            thumbnail?: string
        }
    }

    export let posts: Post[];

    const mainPost = posts[0];

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
            width="640"
            height="420"
        />
        <div class="main-post-info">
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