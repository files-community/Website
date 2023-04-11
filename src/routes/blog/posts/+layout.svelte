<script lang="ts">
	import { defaultI18nValues, externalLink, Metadata } from "$lib";
	import { _ } from "svelte-i18n";
	import Share from "@fluentui/svg-icons/icons/share_24_regular.svg?raw";
	import ArrowLeft from "@fluentui/svg-icons/icons/arrow_left_24_regular.svg?raw";
	import { IconButton, MenuFlyout, MenuFlyoutItem } from "fluent-svelte";
	import { page } from "$app/stores";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;

	$: ({ title, thumbnail, author, date } = data);
</script>

<Metadata title={$_("metadata.blog_page", defaultI18nValues)} image={thumbnail} />

<section class="blog-post">
	<article>
		<div class="post-title">
			<IconButton
				--icon-color="var(--text-color-secondary)"
				aria-label="Back to Blog"
				class="back-button"
				href="/blog"
				title="Back to Blog"
			>
				{@html ArrowLeft}
			</IconButton>
			<h1>{title}</h1>
		</div>
		<div class="post-info">
			<img alt="{author} avatar" src="https://github.com/{author}.png" />
			<a class="hyperlink" href="https://github.com/{author}" {...externalLink}
				>@{author}</a
			>
			<span>•</span>
			{new Date(date.replace(/-/g, "/").replace(/T.+/, "")).toLocaleDateString(
				"en-US",
				{
					year: "numeric",
					day: "numeric",
					month: "short"
				}
			)}
			<MenuFlyout placement="bottom">
				<IconButton
					size={20}
					aria-label="Share"
					class="share-button"
					title="Share"
				>
					{@html Share}
				</IconButton>
				<svelte:fragment slot="flyout">
					<MenuFlyoutItem
						on:click={
							() => navigator.share({
								title,
								url: window.location.href
							})}
					>
						{$_("blog.share.default", defaultI18nValues)}
					</MenuFlyoutItem>
					<MenuFlyoutItem
						on:click={() => navigator.clipboard.writeText($page.url.href)}
					>
						{$_("blog.share.url", defaultI18nValues)}
					</MenuFlyoutItem>
					<MenuFlyoutItem>
						<a
							href="https://twitter.com/intent/tweet?text={encodeURIComponent(
								$page.url.href
							)}"
							{...externalLink}
						>
							{$_("blog.share.tweet", defaultI18nValues)}
						</a>
					</MenuFlyoutItem>
					<MenuFlyoutItem>
						<a
							href="https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(
								$page.url.href
							)}"
							{...externalLink}
						>
							{$_("blog.share.facebook", defaultI18nValues)}
						</a>
					</MenuFlyoutItem>
					<MenuFlyoutItem>
						<a href="/blog/feed.rss" {...externalLink}>{$_("blog.share.rss", defaultI18nValues)}</a>
					</MenuFlyoutItem>
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
	@use "src/styles/pages/blogPost";
</style>
