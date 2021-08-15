<script lang="ts">
    export let type: "standard" | "round" = "standard";
    export let value: any = undefined;
    export let color = "#000000";
    export let group = [];
    let className = "";
    export { className as class };
</script>

<style lang="scss">
    @use "ColorSwatch";
</style>

<input
    bind:group
    {value}
    type="radio"
    class="color-swatch {className || ``}"
    class:type-standard={type === "standard"}
    class:type-round={type === "round"}
    style="background-color: {color}"
    {...$$restProps}
/>