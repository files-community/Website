<script>
	import Copy from "@fluentui/svg-icons/icons/copy_24_regular.svg?raw"

	export let command = "";

    let copied = false;

    const copy = () => {
        navigator.clipboard.writeText(command);
        copied = true;
        setTimeout(() => {
            copied = false;
        }, 500);
    }
</script>

<div class="terminal-command" class:copied>
    <span class="shell-prefix">$</span>
    <span class="command">{command}</span>
    <button on:click={copy} aria-label="Copy terminal command" title="Copy Command" class="copy-button">
        {@html Copy}
    </button>
</div>

<style src="./TerminalCommand.scss"></style>