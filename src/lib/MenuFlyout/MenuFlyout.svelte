<script lang="ts">
    import { onMount } from "svelte";

    let menu: HTMLUListElement;
    let outer: HTMLDivElement;

    onMount(() => {
        outer.setAttribute("style", `--menu-flyout-height: ${menu.offsetHeight}px; --menu-flyout-width: ${menu.offsetWidth}px;`);
    });
</script>

<style lang="scss" src="./MenuFlyout.scss"></style>

<div
    on:click|stopPropagation
    bind:this={outer}
    class="menu-flyout-outer"
>
    <ul bind:this={menu} role="menu" class="menu-flyout">
        <slot />
    </ul>
</div>