<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ page, fetch }) => ({
		props: {
			post: await fetch(`${page.path}.json`).then(response =>
				response.json()
			)
		}
	});
</script>

<script lang="ts">
	import { MenuFlyout, ListViewItem } from "$lib";

	import Share from "@fluentui/svg-icons/icons/share_24_regular.svg?raw";
	import ArrowLeft from "@fluentui/svg-icons/icons/arrow_left_24_regular.svg?raw";

	export let post;

	const { title, thumbnail, author, date } = post.metadata;
</script>

<svelte:head>
	<title>Files - {title}</title>
	<meta content="Files - {title}" property="og:title" />

	<meta content={thumbnail} property="og:image" />
</svelte:head>

<section class="blog-post">
	<article>
		<div class="post-title">
			<a
				aria-label="Back to Blog"
				class="back-button"
				href="/blog"
				title="Back to Blog"
			>
				{@html ArrowLeft}
			</a>
			<h1>{title}</h1>
		</div>
		<div class="post-info">
			<img alt="{author} avatar" src="https://github.com/{author}.png" />
			<a
				class="hyperlink"
				href="https://github.com/{author}"
				rel="noreferrer noopener"
				target="_blank">@{author}</a
			>
			<span>•</span>
			{new Date(
				date.replace(/-/g, "/").replace(/T.+/, "")
			).toLocaleDateString("en-US", {
				year: "numeric",
				day: "numeric",
				month: "short"
			})}
			<MenuFlyout>
				<button aria-label="Share" class="share-button" title="Share">
					{@html Share}
				</button>
				<svelte:fragment slot="menu">
					<ListViewItem
						on:click={() =>
							navigator.clipboard.writeText(window.location.href)}
					>
						Copy URL
					</ListViewItem>
					<ListViewItem
						href="https://twitter.com/intent/tweet?text={window
							.location.href}"
						rel="noreferrer noopener"
						target="_blank"
					>
						Twitter
					</ListViewItem>
					<ListViewItem
						href="https://www.facebook.com/sharer/sharer.php?u={window
							.location.href}"
						rel="noreferrer noopener"
						target="_blank"
					>
						Facebook
					</ListViewItem>
				</svelte:fragment>
			</MenuFlyout>
		</div>
		{#if thumbnail}
			<img class="post-thumbnail" src={thumbnail} alt="Thumbnail" />
		{/if}
		<div class="markdown-body">
			<slot />
		</div>
	</article>
</section>

<style lang="scss">
	@use "../src/styles/pages/blogPost";
</style>
