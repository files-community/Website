<script lang="ts">
	import Copy from "@fluentui/svg-icons/icons/copy_24_regular.svg?raw";
	import { text } from "../../i18n/i18n";

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
		title="{text.section.hero.winget.copyCommand()}"
	>
		{@html Copy}
	</button>
</div>

<style lang="scss">@use "./TerminalCommand";
</style>
