<script lang="ts">
	export let type: "standard" | "round" = "standard";
	export let color = "#000";
    export let selected = false;
    export let group = [];
    export let index = -1;
    let className = "";
	export { className as class };
</script>

<style lang="scss">
	@use "ColorSwatch";
</style>

<label>
    <input {...$$restProps}
    on:click
    bind:group
    class="color-swatch {className || ``}"
    class:type-round={type === "round"}
    class:type-standard={type === "standard"}
    class:selected
    style="background-color: {color}"
    type="radio"
    aria-label="Select color option {index}"
    />
</label>