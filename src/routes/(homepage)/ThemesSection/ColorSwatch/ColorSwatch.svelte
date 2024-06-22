<script lang="ts" generics="T">
	import type { Color } from "$data/features";
	import { Tooltip } from "fluent-svelte";

	export let type: "standard" | "round" = "standard";
	export let colorName: Color = { name: "Black", color: "#000" };
	export let value: T | undefined = undefined;
	export let group: T;
	let className = "";
	export { className as class };
</script>

<Tooltip text={colorName.name}>
	<input
		{...$$restProps}
		bind:group
		class="color-swatch {className || ``}"
		class:type-round={type === "round"}
		class:type-standard={type === "standard"}
		on:change
		on:click
		style:background-color={colorName.color}
		type="radio"
		{value}
	/>
</Tooltip>

<style lang="scss">
	@use "ColorSwatch";
</style>
