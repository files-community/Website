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
	import { Footer } from "$layout";

	interface Post {
		path: string;
		metadata: {
			title: string;
			description: string;
			author: string;
			thumbnail: string;
			date: string;
		};
	}

	export let posts: Post[];

	const mainPost: Post = posts[0];

	let scrollY: number;
</script>

<svelte:head>
	<title>Files - Blog</title>
	<meta content="Files - Blog" property="og:title" />

	<meta content="/branding/banner-blog-light.png" property="og:image" />
</svelte:head>

<svelte:window bind:scrollY />

<PageSection id="blog">
	<div class="blog-backdrop">
		<img
			alt=""
			src={mainPost.metadata.thumbnail}
			style="transform: translateY({Math.floor(scrollY / 2.5)}px)"
			width="0"
		/>
	</div>
	<div class="main-post">
		<img
			alt="Main post thumbnail"
			height="422"
			src={mainPost.metadata.thumbnail}
			use:tilt={{ max: 2.5, scale: 1.01 }}
			width="633"
		/>
		<div class="main-post-info">
			<HeaderChip
				>{new Date(
					mainPost.metadata.date.replace(/-/g, "/").replace(/T.+/, "")
				).toLocaleDateString("en-US", {
					year: "numeric",
					day: "numeric",
					month: "short"
				})}</HeaderChip
			>
			<h2>{mainPost.metadata.title}</h2>
			<p>{mainPost.metadata.description}</p>
			<Button
				href="blog/{mainPost.path.replace(/\.[^/.]+$/, '')}"
				variant="accent"
				>Read More
			</Button>
		</div>
	</div>
	{#if posts.slice(1).length > 0}
		<div class="blog-cards">
			{#each posts.slice(1) as post}
				<BlogCard path={post.path} {...post.metadata} />
			{/each}
		</div>
	{:else}
		<p>More posts coming soon!</p>
	{/if}
</PageSection>

<Footer />

<style lang="scss">
	@use "../src/styles/pages/blog";
</style>
