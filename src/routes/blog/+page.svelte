<script lang="ts">
	import {
		defaultI18nValues,
		HeaderChip,
		Metadata,
		PageSection,
		tilt,
	} from "$lib";
	import { Button } from "fluent-svelte";
	import { _, date } from "svelte-i18n";
	import type { PageData } from "./$types";
	import BlogCard from "./BlogCard/BlogCard.svelte";

	export let data: PageData;
	$: ({ posts } = data);
	$: mainPost = posts[0];

	let scrollY: number;
</script>

<Metadata title={$_("metadata.blog_home", defaultI18nValues)} image="blog" />

<svelte:window
	on:scroll={() =>
		window.requestAnimationFrame(() => (scrollY = window.scrollY))}
/>

<PageSection id="blog">
	<div class="blog-backdrop">
		<img
			alt=""
			src={mainPost.metadata.thumbnail}
			style:transform="translateY({Math.floor(scrollY / 2.5)}px)"
			width="0"
		/>
	</div>
	<div class="main-post">
		<div class="main-post-info">
			<HeaderChip>
				{$date(new Date(mainPost.metadata.date), { format: "medium" })}
			</HeaderChip>
			<h2 style:view-transition-name="post-title-{mainPost.slug}">
				{mainPost.metadata.title}
			</h2>
			<p>{mainPost.metadata.description}</p>
			<Button href="/blog/posts/{mainPost.slug}/" variant="accent">
				{$_("blog.read_more", defaultI18nValues)}
			</Button>
		</div>
		<a href="/blog/posts/{mainPost.slug}/">
			<img
				class="thumbnail"
				alt="Main post thumbnail"
				height="422"
				src={mainPost.metadata.thumbnail}
				use:tilt={{ max: 2.5, scale: 1.01 }}
				width="633"
				style:view-transition-name="post-thumbnail-{mainPost.slug}"
			/>
		</a>
	</div>
	{#if posts.slice(1).length > 0}
		<div class="blog-cards">
			{#each posts.slice(1) as post}
				<BlogCard slug={post.slug} {...post.metadata} />
			{/each}
		</div>
	{:else}
		<p>{$_("blog.coming_soon", defaultI18nValues)}</p>
	{/if}
</PageSection>

<style lang="scss">
	@use "src/styles/pages/blog";
</style>
