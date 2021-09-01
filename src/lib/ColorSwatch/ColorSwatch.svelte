<script lang="ts">
	export let type: "standard" | "round" = "standard";
	export let color = "#000";
    export let value: any = undefined;
    export let group = [];
	let className = "";
	export { className as class };
</script>

<style lang="scss">
	@use "ColorSwatch";
</style>

<input
    bind:group
    {...$$restProps}
    {value}
    type="radio"
    class="color-swatch {className || ``}"
    class:type-round={type === "round"}
    class:type-standard={type === "standard"}
    style="background-color: {color}"
/>