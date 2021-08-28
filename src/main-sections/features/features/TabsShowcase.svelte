<script lang="ts">
	import { Titlebar } from "$lib/"
	import { draw } from "svelte/transition"
</script>

<svg class="backdrop-icon" height="20" style="--icon-scale: 0.9; --icon-stroke-width: 0.1" viewBox="0 0 20 20"
     width="20" xmlns="http://www.w3.org/2000/svg">
	<path d="M5.49707 3C4.11636 3 2.99707 4.11929 2.99707 5.5V14.5C2.99707 15.8807 4.11636 17 5.49707 17H14.4971C15.8778 17 16.9971 15.8807 16.9971 14.5V7H9.49707C8.66864 7 7.99707 6.32843 7.99707 5.5V3H5.49707Z M8.99707 3V5.5C8.99707 5.77614 9.22093 6 9.49707 6H16.9971V5.5C16.9971 4.11929 15.8778 3 14.4971 3H8.99707Z"
	      in:draw={{ duration: 1200 }}/>
</svg>
<div class="tabs-showcase">
	<div class="showcase-panel">
		<Titlebar>Window</Titlebar>
	</div>
	<div class="showcase-panel">
		<Titlebar>Window</Titlebar>
	</div>
	<div class="showcase-panel">
		<Titlebar>Window</Titlebar>
	</div>
</div>

<style lang="scss">
	@use "src/styles/mixins" as *;
	// Tabs showcase
	.tabs-showcase {
		@include flex($align: center, $justify: center);

		.showcase-panel {
			position: absolute;
			width: 400px;
			height: 300px;
			animation: feature-panel 500ms cubic-bezier(0.165, 0.84, 0.44, 1) backwards 800ms;
			overflow: hidden;
			&:first-child {
				transform: translate(var(--panel-offset), var(--panel-offset));
				animation: feature-panel 500ms cubic-bezier(0.165, 0.84, 0.44, 1) backwards 400ms,
				merge-windows 250ms ease forwards 2s;
				--panel-offset: -32px;
			}
			&:last-child {
				transform: translate(var(--panel-offset), var(--panel-offset));
				animation: feature-panel 500ms cubic-bezier(0.165, 0.84, 0.44, 1) backwards 1200ms,
				merge-windows 250ms ease forwards 2s;
				--panel-offset: 32px;
			}
		}
	}

	@keyframes feature-panel {
		from {
			opacity: 0;
			transform: translate(var(--panel-offset, 0px), var(--panel-offset, 0px)) scale(calc(0.9 + var(--panel-scale, 0)));
			transform-origin: bottom;
		}
	}

	// Window "merging" animation
	@keyframes merge-windows {
		to {
			transform: none;
			box-shadow: none;
		}
	}
</style>