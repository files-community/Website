<script lang="ts">
    import { onMount } from "svelte";

    let theme = "light";

    onMount(() => {
        theme = window?.matchMedia('(prefers-color-scheme: dark)')?.matches ? "dark" : "light";

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
            theme = e.matches ? "dark" : "light";
        });
    });
</script>

<div class="component-showcase">
    <div class="column left">
        <img
            src="exported/properties-{theme}.png"
            alt="Properties dialog"
            width="402"
            height="583"
        />
        <img
            src="exported/tabs-{theme}.png"
            alt="Tabs flyout"
            width="309"
            height="233"
        />
    </div>
    <div class="column right">
    </div>
</div>

<style lang="scss">
  @use "ComponentShowcase";
</style>