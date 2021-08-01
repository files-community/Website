<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status,
                error: error
			}
		};
	}
</script>

<script lang="ts">
    export let status;
    export let error;
</script>

<style lang="scss">
    @use "src/styles/pages/error.scss";
</style>

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
                <img alt="Error icon" src="/ui/98-error.png" />
                <div class="error-message">
                    <p>
                        Uh Oh! Something went wrong while loading this page.
                        <br />
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