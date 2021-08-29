<script lang="ts">
	export let type: "standard" | "round" = "standard";
	export let value: any = undefined;
	export let color = "#000";
	export let group = [];
	let className = "";
	export { className as class };
</script>

<style lang="scss">
	@use "ColorSwatch";
</style>

<label>
    <input
        {...$$restProps}
        bind:group
        class="color-swatch {className || ``}"
        class:type-round={type === "round"}
        class:type-standard={type === "standard"}
        style="background-color: {color}"
        type="radio"
        {value}
    />
</label>