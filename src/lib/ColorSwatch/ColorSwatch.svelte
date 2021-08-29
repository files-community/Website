<script lang="ts">
	export let type: "standard" | "round" = "standard";
	export let color = "#000";
    export let selected = false;
	let className = "";
	export { className as class };
</script>

<style lang="scss">
	@use "ColorSwatch";
</style>

<div
    {...$$restProps}
    on:click
    class="color-swatch {className || ``}"
    class:type-round={type === "round"}
    class:type-standard={type === "standard"}
    class:selected
    style="background-color: {color}"
></div>