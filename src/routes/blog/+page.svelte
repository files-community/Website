<script lang="ts">
	import { BlogCard, HeaderChip, Metadata, PageSection, tilt } from "$lib";
	import { Button } from "fluent-svelte";
	import type { Post } from "./+page.server";
	import type { PageData } from "./$types";

	export let data: PageData;
	$: ({ posts } = data);

	const mainPost: Post = posts[0];

	let scrollY: number;
</script>

<svelte:head>
	<Metadata title="Files • Blog" image="blog" />
</svelte:head>

<svelte:window on:scroll={() => window.requestAnimationFrame(() => scrollY = window.scrollY )} />

<PageSection id="blog">
	<div class="blog-backdrop">
		<img
			alt=""
			src={mainPost.metadata.thumbnail}
			style:transform="translateY({Math.floor(scrollY / 2.5)}px)"
			width="0"
		>
	</div>
	<div class="main-post">
		<a href="/blog/{mainPost.path}/">
			<img
				alt="Main post thumbnail"
				height="422"
				src={mainPost.metadata.thumbnail}
				use:tilt={{ max: 2.5, scale: 1.01 }}
				width="633"
			>
		</a>
		<div class="main-post-info">
			<HeaderChip>{
				new Date(mainPost.metadata.date.replace(/-/g, "/").replace(/T.+/, ""))
					.toLocaleDateString("en-US", {
						year: "numeric",
						day: "numeric",
						month: "short"
					})
			}</HeaderChip>
			<h2>{mainPost.metadata.title}</h2>
			<p>{mainPost.metadata.description}</p>
			<Button
				href="/blog/{mainPost.path}/"
				variant="accent"
			>
				Read More
			</Button>
		</div>
	</div>
	{#if posts.slice(1).length > 0}
		<div class="blog-cards">
			{#each posts.slice(1) as post}
				<BlogCard path={post.path} {...post.metadata}/>
			{/each}
		</div>
	{:else}
		<p>More posts coming soon!</p>
	{/if}
</PageSection>

<style lang="scss">
	@use "../src/styles/pages/blog";
</style>