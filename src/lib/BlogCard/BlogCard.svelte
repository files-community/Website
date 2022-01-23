<script lang="ts">
	import { externalLink } from "$lib";

	export let path = "";
	export let date = "";
	export let author = "";
	export let title = "";
	export let description = "";
	export let thumbnail = "";
</script>

<a
	class="blog-card"
	href="/blog/{path.replace(/\.[^/.]+$/, '')}"
	{...$$restProps}
>
	<img alt="{title} thumbnail" class="thumbnail" src={thumbnail}>
	<div class="body">
		<h5>{title}</h5>
		<span>{description}</span>
	</div>
	<footer>
		<img
			alt="{author} avatar"
			loading="lazy"
			src="https://github.com/{author}.png"
		>
		<div class="post-info">
			<object aria-label="Author link">
				<a
					href="https://github.com/{author}"
					rel="noreferrer noopener"
					{...externalLink}
				>
					{author}
				</a>
			</object>
			<span>{
				new Date(date.replace(/-/g, "/").replace(/T.+/, "")).toLocaleDateString("en-US", {
					year: "numeric",
					day: "numeric",
					month: "short"
				})
			}</span>
		</div>
	</footer>
	<slot />
</a>

<style lang="scss">@use "./BlogCard";
</style>
