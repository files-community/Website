<script lang="ts">
    import { onMount } from "svelte";

    import CalendarView_light from "$static/exported/CalendarView_light.svg?raw";
    import CalendarView_dark from "$static/exported/CalendarView_dark.svg?raw";
    import ContentDialog_light from "$static/exported/ContentDialog_light.svg?raw";
    import ContentDialog_dark from "$static/exported/ContentDialog_dark.svg?raw";
    import DatePicker_light from "$static/exported/DatePicker_light.svg?raw";
    import InfoBar_dark from "$static/exported/InfoBar_dark.svg?raw";
    import InfoBar_light from "$static/exported/InfoBar_light.svg?raw";
    import InkToolbar_dark from "$static/exported/InkToolbar_dark.svg?raw";
    import InkToolbar_light from "$static/exported/InkToolbar_light.svg?raw";
    import NavigationView_dark from "$static/exported/NavigationView_dark.svg?raw";
    import NavigationView_light from "$static/exported/NavigationView_light.svg?raw";
    import TeachingTip_dark from "$static/exported/TeachingTip_dark.svg?raw";
    import TeachingTip_light from "$static/exported/TeachingTip_light.svg?raw";

    let theme;

    onMount(() => {
        theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    });
</script>

<style lang="scss" src="./ComponentShowcase.scss"></style>

<template>
    <div class="component-showcase">
        {#if theme === "light"}
            <div class="column left">
                {@html CalendarView_light}
                {@html ContentDialog_light}
                {@html DatePicker_light}
                {@html TeachingTip_light}
            </div>
            <div class="column right">
                {@html InfoBar_light}
                {@html InkToolbar_light}
                {@html NavigationView_light}
            </div>
            {:else if theme === "dark"}
            <div class="column left">
                {@html CalendarView_dark}
                {@html ContentDialog_dark}
                {@html DatePicker_light}
                {@html TeachingTip_dark}
            </div>
            <div class="column right">
                {@html InfoBar_dark}
                {@html InkToolbar_dark}
                {@html NavigationView_dark}
            </div>
        {/if}
    </div>
</template>