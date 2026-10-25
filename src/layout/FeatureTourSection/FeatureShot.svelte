<script lang="ts">
	// A crop of a Files screenshot with a faked Mica backdrop baked in. The
	// window's frame is drawn on the `edges` where the window ends; the other
	// sides fade out as the window runs off the card.
	export let id: string;
	export let alt: string;
	export let edges: ("top" | "right" | "bottom" | "left")[] = [];
	/** Zooms in on the anchored side, for shots too wide to read */
	export let zoom = false;
	/** Crop hard at the card's edges instead of fading, for shots of menus */
	export let fade = true;
</script>

<div
	class="feature-shot"
	class:top={edges.includes("top")}
	class:right={edges.includes("right")}
	class:bottom={edges.includes("bottom")}
	class:left={edges.includes("left")}
	class:zoom
	class:no-fade={!fade}
>
	<img
		{alt}
		class="light"
		loading="lazy"
		src="/screenshots/home/feature-{id}-light.png"
	/>
	<img
		{alt}
		class="dark"
		loading="lazy"
		src="/screenshots/home/feature-{id}-dark.png"
	/>
</div>

<style lang="scss">
	$inset: 24px;
	$radius: 8px;
	$fade: 18%;

	.feature-shot {
		position: relative;
		flex: 1 1 auto;
		min-block-size: 280px;

		--mask-x: linear-gradient(
			to right,
			transparent,
			#000 #{$fade},
			#000 calc(100% - #{$fade}),
			transparent
		);
		--mask-y: linear-gradient(
			to bottom,
			transparent,
			#000 #{$fade},
			#000 calc(100% - #{$fade}),
			transparent
		);
		--x: center;
		--y: center;

		&.left {
			--mask-x: linear-gradient(
				to right,
				#000 calc(100% - #{$fade}),
				transparent
			);
			--x: left;
		}

		&.right {
			--mask-x: linear-gradient(
				to left,
				#000 calc(100% - #{$fade}),
				transparent
			);
			--x: right;
		}

		&.left.right {
			--mask-x: linear-gradient(#000, #000);
		}

		&.top {
			--mask-y: linear-gradient(
				to bottom,
				#000 calc(100% - #{$fade}),
				transparent
			);
			--y: top;
		}

		&.bottom {
			--mask-y: linear-gradient(
				to top,
				#000 calc(100% - #{$fade}),
				transparent
			);
			--y: bottom;
		}

		&.top.bottom {
			--mask-y: linear-gradient(#000, #000);
		}

		&.no-fade {
			--mask-x: linear-gradient(#000, #000);
			--mask-y: linear-gradient(#000, #000);
		}
	}

	img {
		position: absolute;
		inset-block-start: 20px;
		display: block;
		max-inline-size: none;
		inline-size: calc(100% - var(--pad-left, 0px) - var(--pad-right, 0px));
		block-size: calc(100% - 20px - var(--pad-bottom, 0px));
		// Physical sides throughout: edges describe the screenshot, not text
		// direction, so the crop stays the same in right-to-left languages
		left: var(--pad-left, 0px);
		box-sizing: border-box;
		border: 0 solid var(--fds-surface-stroke-default);
		object-fit: cover;
		object-position: var(--x) var(--y);
		mask-image: var(--mask-x), var(--mask-y);
		mask-composite: intersect;
		user-select: none;
		-webkit-user-drag: none;

		.left & {
			--pad-left: #{$inset};
			border-left-width: 1px;
		}

		.right & {
			--pad-right: #{$inset};
			border-right-width: 1px;
		}

		.bottom & {
			--pad-bottom: #{$inset};
			border-block-end-width: 1px;
		}

		.top & {
			border-block-start-width: 1px;
		}

		.top.left & {
			border-top-left-radius: $radius;
		}

		.top.right & {
			border-top-right-radius: $radius;
		}

		.bottom.left & {
			border-bottom-left-radius: $radius;
		}

		.bottom.right & {
			border-bottom-right-radius: $radius;
		}

		&.dark {
			display: none;
		}

		@media (prefers-color-scheme: dark) {
			&.light {
				display: none;
			}

			&.dark {
				display: block;
			}
		}
	}

	// A whole palette would be too small to read on a card, so show part of
	// it at a larger size and let the rest run off the card
	.feature-shot.zoom img {
		--mask-x: linear-gradient(#000, #000);
		--mask-y: linear-gradient(#000, #000);
		left: 24px;
		inline-size: 170%;
		block-size: auto;
		border-right-width: 0;
	}

	@media screen and (width < 900px) {
		.feature-shot {
			min-block-size: 300px;
		}
	}
</style>
