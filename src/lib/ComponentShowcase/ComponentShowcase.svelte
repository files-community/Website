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
        <div class="card" style="height: 72px;"></div>
        <img
            class="properties"
            src="exported/properties-{theme}.png"
            alt="Properties dialog"
            width="402"
            height="583"
            loading="lazy"
        />
        <div>
            <img
                class="drive"
                src="exported/drive-{theme}.png"
                alt="Drive button"
                width="88"
                height="280"
                loading="lazy"
            />
            <img
                class="tabs"
                src="exported/tabs-{theme}.png"
                alt="Tabs flyout"
                width="309"
                height="233"
                loading="lazy"
            />
        </div>
    </div>
    <div class="column right">
        <img
            class="calendar"
            src="exported/calendar-{theme}.png"
            alt="Calendar flyout"
            width="300"
            height="348"
            loading="lazy"
        />
        <img
            class="layout"
            src="exported/layout-{theme}.png"
            alt="Layout flyout"
            width="270"
            height="270"
            loading="lazy"
        />
        <div class="card" style="height: 128px;"></div>
    </div>
</div>

<style lang="scss">
  @use "ComponentShowcase";
</style>