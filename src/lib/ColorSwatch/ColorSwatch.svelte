<script lang="ts">
	export let type: "standard" | "round" = "standard";
	export let color = "#000";
	export let value: any = undefined;
	export let group: any = [];
	let className = "";
	export { className as class };
</script>

<input
	{...$$restProps}
	bind:group
	class="color-swatch {className || ``}"
	class:type-round={type === "round"}
	class:type-standard={type === "standard"}
	on:change
	on:click
	style="background-color: {color}"
	type="radio"
	{value}
>

<style lang="scss">
	@use "ColorSwatch";
</style>
