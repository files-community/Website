<script lang="ts">
	import { externalLink } from "$lib";
	import { Button, ProgressRing } from "fluent-svelte";
</script>

<slot/>

<div class="download-page">
	<h1>Downloading</h1>
	<ProgressRing size={64}/>
	<p>Thank you for downloading Files! 🎉</p>

	<p>Want to support the creators of Files?</p>
	<Button
		href="https://github.com/sponsors/yaichenbaum"
		variant="accent"
		{...externalLink}
	>
		Donate
	</Button>
</div>

<style lang="scss">
	.download-page {
		display: grid;
		place-items: center;
		margin-block-start: 1rem;

		h1 {
			font-size: 5rem;

			&:after {
				content: "...";
				animation: dots 3s linear infinite;
			}
		}

		p {
			font-size: 1.75rem;

			&:first-of-type {
				margin-block: 2em;
			}

			&:nth-of-type(2) {
				margin-block-start: 0;
				padding-block-start: 1em;
				border-top: 1px solid var(--fds-subtle-fill-secondary)
			}
		}
	}

	@keyframes dots {
		0% {
			content: "";
		}
		33% {
			content: ".";
		}
		66% {
			content: "..";
		}
		100% {
			content: "...";
		}
	}
</style>