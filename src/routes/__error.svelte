<script context="module" lang="ts">
	import type { ErrorLoad } from "@sveltejs/kit";

	export const load: ErrorLoad = ({error, status}) => {
		return {
			props: {
				status: status,
				error: error
			}
		}
	}
</script>

<script lang="ts">
	export let status: number;
	export let error: Error;
</script>

<section class="error-page">
	<div class="window">
		<div class="titlebar">
			<div class="titlebar-text">Error: {status}</div>
			<div class="titlebar-controls">
				<button aria-label="Minimize"></button>
				<button aria-label="Maximize"></button>
				<button aria-label="Close"></button>
			</div>
		</div>
		<div class="window-body">
			<div class="error-inner">
				<img alt="Error icon" src="/ui/icons/98-error.png"/>
				<div class="error-message">
					<p>
						Uh Oh! Something went wrong while loading this page.
						<br/>
						{error.message}
					</p>
				</div>
			</div>
			{#if error.stack}
				<pre><code>{error.stack}</code></pre>
			{/if}
			<footer>
				<a href="/">
					<button>Return Home</button>
				</a>
			</footer>
		</div>
	</div>
</section>

<style lang="scss">
	@use "src/styles/pages/error";
</style>