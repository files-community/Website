<script lang="ts">
    export let value: any = undefined;
    export let color: string = "#000000";
    export let group = [];
    let className: string = "";
    export { className as class };
</script>

<style lang="scss" src="./ColorSwatch.scss"></style>

<input
    bind:group
    {value}
    type="radio"
    class="color-swatch {className || ""}"
    style="background-color: {color}"
    {...$$restProps}
/>