<script>
	import { draw } from "svelte/transition";
	import { previewFiles } from "$data/features";

	let currentPreviewFile = 0;
</script>

<svg
	class="backdrop-icon"
	width="48"
	height="48"
	style="--icon-scale: 0.9; --icon-stroke-width: 0.3"
	viewBox="0 0 48 48"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		in:draw|local={{ duration: 1250 }}
		d="M24.833 12.5H40.25C42.2543 12.5 43.8913 14.0724 43.9948 16.0508L44 16.25V35.25C44 37.2543 42.4276 38.8913 40.4492 38.9948L40.25 39H7.75C5.74574 39 4.10873 37.4276 4.0052 35.4492L4 35.25V18.999L17.8036 19L18.0297 18.9932C19.0049 18.9344 19.9192 18.4968 20.5769 17.7743L20.724 17.6025L24.833 12.5ZM17.0607 9C17.8933 9 18.7 9.27703 19.3552 9.78393L19.5301 9.92784L21.974 12.066L18.7771 16.0342L18.6826 16.1388C18.4832 16.336 18.223 16.4605 17.9443 16.4921L17.8036 16.5L4 16.499V12.75C4 10.7457 5.57236 9.10873 7.55084 9.0052L7.75 9H17.0607Z"
		xmlns="http://www.w3.org/2000/svg"
	/>
</svg>
<div class="previewer-showcase">
	{#key currentPreviewFile}
		<aside class="showcase-panel preview-pane">
			{#each [previewFiles[currentPreviewFile]] as file}
				<div class="preview">
					{#if file?.extension === "html"}
						<iframe
							title="Document"
							style:border="none"
							src="/preview-samples/{file.name}.{file.extension}"
						/>
					{:else if file?.code}
						<pre class="scroller">
							<code>{@html file.code}</code>
						</pre>
					{:else}<img src={file.icon} alt="File icon" />{/if}
				</div>
				<div class="grabber" />
				<div class="metadata scroller">
					<h4>
						{file.name}{typeof file.extension !== "undefined"
							? "."
							: ""}{file.extension ?? ""}
					</h4>
					<h5>
						{file.extension
							? `${file.extension.toUpperCase()} File`
							: "File Folder"}
					</h5>
					{#if file.bitDepth}
						<h6>Bit Depth</h6>
						<span>{file.bitDepth}</span>
					{/if}
					{#if file?.dimensions?.horizontal && file?.dimensions?.vertical}
						<h6>Dimensions</h6>
						<span
							>{file.dimensions.horizontal} x {file.dimensions.vertical}</span
						>
					{/if}
					{#if file?.dpi?.horizontal}
						<h6>Horizontal Resolution</h6>
						<span>{file.dpi.horizontal}</span>
					{/if}
					{#if file?.dpi?.vertical}
						<h6>Vertical Resolution</h6>
						<span>{file.dpi.vertical}</span>
					{/if}
					{#if file.items}
						<h6>Item Count</h6>
						<span>{file.items}</span>
					{/if}
					{#if file.lineCount}
						<h6>Line Count</h6>
						<span>{file.lineCount}</span>
					{/if}
					{#if file.path}
						<h6>Path</h6>
						<span>{file.path}</span>
					{/if}
					{#if file.added}
						<h6>Date Created</h6>
						<span>{file.added}</span>
					{/if}
					{#if file.modified}
						<h6>Date Modified</h6>
						<span>{file.modified}</span>
					{/if}
				</div>
			{/each}
		</aside>
	{/key}
	<div class="showcase-panel files-grid">
		{#each previewFiles as file, i}
			<div
				class="file"
				class:selected={currentPreviewFile === i}
				on:click={() => (currentPreviewFile = i)}
				style="--file-index: {i};"
			>
				<img src={file.icon} alt="File icon" />
				{file.name}{typeof file.extension !== "undefined"
					? "."
					: ""}{file.extension ?? ""}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@use "./PreviewShowcase";
</style>
