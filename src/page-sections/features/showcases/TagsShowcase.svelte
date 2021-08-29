<script lang="ts">
	import { ColorSwatch } from "$lib"
	import { draw } from "svelte/transition"
	import { tags } from "$data/features"

	let currentTag = 0
</script>

<svg class="backdrop-icon" height="32" style="--icon-scale: 0.75" viewBox="0 0 32 32" width="32"
     xmlns="http://www.w3.org/2000/svg">
	<path d="M15.9516 4.07892C16.6927 3.38568 17.6695 3 18.6842 3H25.4998C27.4328 3 28.9998 4.567 28.9998 6.5V13.2574C28.9998 14.3182 28.5783 15.3356 27.8282 16.0858L16.005 27.909C14.3452 29.5687 11.6543 29.5687 9.99455 27.909L3.66863 21.5831C1.96966 19.8841 2.01578 17.1157 3.77041 15.4742L15.9516 4.07892ZM22.4998 12C23.8805 12 24.9998 10.8807 24.9998 9.5C24.9998 8.11929 23.8805 7 22.4998 7C21.119 7 19.9998 8.11929 19.9998 9.5C19.9998 10.8807 21.119 12 22.4998 12Z"
	      in:draw={{ duration: 1200 }}/>
</svg>
<div class="tags-showcase">
	<div class="showcase-panel">
		<div class="showcase-panel tags-picker">
			{#each tags as {color}, i}
				<ColorSwatch
						bind:group={currentTag}
						--color-index={i}
						tabindex="-1"
						type="round"
						value={i}
						{color}
				/>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use "src/styles/mixins" as *;

	// Tags showcase
	.tags-showcase {
		.showcase-panel {
			animation: feature-preview 500ms cubic-bezier(0.165, 0.84, 0.44, 1) backwards 400ms;
		}

		& > .showcase-panel {
			@include flex($justify: center);
			width: 400px;
			height: 260px;
		}

		.tags-picker {
			@include flex($gap: 16px);
			position: absolute;
			bottom: -24px;
			z-index: 1;
			padding: 12px;
			animation-delay: 600ms;
		}

		:global(.color-swatch) {
			animation: 250ms ease feature-item-scale backwards calc(800ms + (100ms * var(--color-index)));
		}
	}

	// Panel entrance animation
	@keyframes feature-preview {
		from {
			opacity: 0;
			transform: translateY(48px) scale(0.9);
			transform-origin: bottom;
		}
	}
</style>