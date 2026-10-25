<script lang="ts">
	// White bag on the dark light-mode accent, blue on the light dark-mode one
	export let size = 20;
</script>

<img
	alt=""
	class="store-logo on-light"
	height={size}
	src="/download-sources/msstore_dark.svg"
	width={size}
/>
<img
	alt=""
	class="store-logo on-dark"
	height={size}
	src="/download-sources/msstore_light.svg"
	width={size}
/>

<style lang="scss">
	.store-logo {
		flex: none;
	}

	.on-dark {
		display: none;
	}

	@media (prefers-color-scheme: dark) {
		.on-light {
			display: none;
		}

		.on-dark {
			display: block;
		}
	}
</style>
