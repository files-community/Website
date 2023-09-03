<script lang="ts">
	import { onNavigate } from "$app/navigation";
	import { externalLink } from "$lib";
	import { date as dateFormat } from "svelte-i18n";

	export let slug = "";
	export let date = "";
	export let author = "";
	export let title = "";
	export let description = "";
	export let thumbnail = "";

	let postThumbnail: HTMLImageElement;
</script>

<a class="blog-card" href="/blog/posts/{slug}" {...$$restProps}>
	<img
		alt="{title} thumbnail"
		class="thumbnail"
		src={thumbnail}
		style:view-transition-name="post-thumbnail-{slug}"
	/>
	<div class="body">
		<h5 style:view-transition-name="post-title-{slug}">{title}</h5>
		<span>{description}</span>
	</div>
	<footer>
		<img
			alt="{author} avatar"
			loading="lazy"
			src="https://github.com/{author}.png"
		/>
		<div class="post-info">
			<object aria-label="Author link">
				<a href="https://github.com/{author}" {...externalLink}>
					{author}
				</a>
			</object>
			<span>{$dateFormat(new Date(date), { format: "medium" })}</span>
		</div>
	</footer>
	<slot />
</a>

<style lang="scss">
	@use "./BlogCard";
</style>
