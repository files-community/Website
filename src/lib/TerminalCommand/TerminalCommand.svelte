<script lang="ts">
    import Copy from "@fluentui/svg-icons/icons/copy_24_regular.svg?raw";

    export let command: string = "";

    let copied: boolean = false;

    function copy() {
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

<style lang="scss" src="./TerminalCommand.scss"></style>