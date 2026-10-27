<script lang="ts">
	// A crop of a Files screenshot with a faked Mica backdrop baked in. Every
	// crop covers the same area of the window, so all cards share one scale.
	export let id: string;
	export let alt: string;
</script>

<div class="feature-shot">
	<img
		{alt}
		class="light"
		loading="lazy"
		width="1040"
		height="780"
		src="/screenshots/home/feature-{id}-light.webp"
	/>
	<img
		{alt}
		class="dark"
		loading="lazy"
		width="1040"
		height="780"
		src="/screenshots/home/feature-{id}-dark.webp"
	/>
</div>

<style lang="scss">
	.feature-shot {
		margin-block-start: auto;
		padding: 20px 24px 24px;
	}

	img {
		display: block;
		inline-size: 100%;
		block-size: auto;
		aspect-ratio: 4 / 3;
		box-sizing: border-box;
		border: 1px solid var(--fds-surface-stroke-default);
		border-radius: 8px;
		user-select: none;
		-webkit-user-drag: none;

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
</style>
