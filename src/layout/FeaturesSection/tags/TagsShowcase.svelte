<script lang="ts">
	import { draw } from "svelte/transition";
	import { taggedFiles, tags } from "$data/features";
	import { ColorSwatch } from "$lib";
	import { text } from "../../../i18n/i18n";

	let selectedTag = 0;
</script>

<svg
	class="backdrop-icon"
	style="--icon-scale: 0.75"
	width="32"
	height="32"
	viewBox="0 0 32 32"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		in:draw|local={{ duration: 1200 }}
		d="M15.9516 4.07892C16.6927 3.38568 17.6695 3 18.6842 3H25.4998C27.4328 3 28.9998 4.567 28.9998 6.5V13.2574C28.9998 14.3182 28.5783 15.3356 27.8282 16.0858L16.005 27.909C14.3452 29.5687 11.6543 29.5687 9.99455 27.909L3.66863 21.5831C1.96966 19.8841 2.01578 17.1157 3.77041 15.4742L15.9516 4.07892ZM22.4998 12C23.8805 12 24.9998 10.8807 24.9998 9.5C24.9998 8.11929 23.8805 7 22.4998 7C21.119 7 19.9998 8.11929 19.9998 9.5C19.9998 10.8807 21.119 12 22.4998 12Z"
	/>
</svg>

<div class="tags-showcase">
	<div class="showcase-panel">
		<table class="files-table">
			<tr>
				<th></th>
				<th>{text.section.features.preview.name()}</th>
				<th>{text.section.features.preview.tag()}</th>
			</tr>
			{#each taggedFiles as file, i}
				<tr style="--file-index: {i}" class:tag-selected={tags.findIndex(t => t.name === file.tag) === selectedTag}>
					<td>
						<img src="/ui/icons/{file.icon}.png" width="24" height="24"
						     alt={file.icon === "folder" ? `${file.icon} file` : "Folder"}
						>
					</td>
					<td>{file.name}</td>
					<td class="tag-cell">
						<div class="tag-cell-inner">
							<svg width="16" height="16" viewBox="0 0 16 16">
								<circle cx="8" cy="8" r="6" fill={tags.find(t => t.name === file.tag).color} />
							</svg>
							<span>{file.tag}</span>
						</div>
					</td>
				</tr>
			{/each}
		</table>
	</div>
	<div class="showcase-panel tags-picker">
		{#each tags as tag, i}
			<ColorSwatch
				bind:group={selectedTag}
				--color-index={i}
				value={i}
				type="round"
				colorName={tag}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	@use "./TagsShowcase";
</style>