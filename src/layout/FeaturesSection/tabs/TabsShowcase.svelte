<script lang="ts">
	import { draw } from "svelte/transition";
	import { Titlebar } from "$lib";

	let selectedTab = 0;
</script>

<svg
	class="backdrop-icon"
	height="20"
	style="--icon-scale: 0.9; --icon-stroke-width: 0.125"
	viewBox="0 0 20 20"
	width="20"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		in:draw={{ duration: 1200 }}
		d="M5.49707 3C4.11636 3 2.99707 4.11929 2.99707 5.5V14.5C2.99707 15.8807 4.11636 17 5.49707 17H14.4971C15.8778 17 16.9971 15.8807 16.9971 14.5V7H9.49707C8.66864 7 7.99707 6.32843 7.99707 5.5V3H5.49707Z M8.99707 3V5.5C8.99707 5.77614 9.22093 6 9.49707 6H16.9971V5.5C16.9971 4.11929 15.8778 3 14.4971 3H8.99707Z"
	/>
</svg>

<div class="tabs-showcase">
	<div class="showcase-panel">
		<Titlebar>Files</Titlebar>
	</div>
	<div class="showcase-panel">
		<Titlebar>Files</Titlebar>
	</div>
	<div class="tabs-anchor">
		<div class="tab-row">
			<div class="tab"
			     class:selected={selectedTab === 0} on:click={() => selectedTab = 0}
			>
				<img src="/ui/icons/documents.png" alt="Documents folder icon" width="16" height="16">
				Documents
			</div>
			<div class="tab"
			     class:selected={selectedTab === 1} on:click={() => selectedTab = 1}
			>
				<img src="/ui/icons/desktop.png" alt="Desktop folder icon" width="16" height="16">
				Desktop
			</div>
			<div class="tab"
			     class:selected={selectedTab === 2} on:click={() => selectedTab = 2}
			>
				<img src="/ui/icons/pictures.png" alt="Pictures folder icon" width="16" height="16">
				Pictures
			</div>
		</div>
		<div class="showcase-panel">
			<Titlebar>Files</Titlebar>
			<div class="files-grid">
				{#each Array(12) as _, i}
					<div style="--file-index: {i};" class="placeholder-file"></div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use "./TabsShowcase";
</style>