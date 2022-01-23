<script lang="ts">
	import Copy from "@fluentui/svg-icons/icons/copy_24_regular.svg?raw";

	export let command = "";

	let copied = false;

	const copy = () => {
		navigator.clipboard.writeText(command);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 500);
	};
</script>

<div class="terminal-command" class:copied>
	<span class="shell-prefix">$</span>
	<span class="command">{command}</span>
	<button
		aria-label="Copy terminal command"
		class="copy-button"
		on:click={copy}
		title="Copy Command"
	>
		{@html Copy}
	</button>
</div>

<style lang="scss">@use "./TerminalCommand";
</style>
