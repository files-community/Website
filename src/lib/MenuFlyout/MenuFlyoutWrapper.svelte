<script lang="ts">
    import MenuFlyout from "./MenuFlyout.svelte";

    export let open = false;

    let container;

    function toggleDropdown() {
        open = !open;
    }

    function handleWindowClick(e) {
        if (open && (!e.target === container || !container.contains(e.target))) toggleDropdown();
    }
</script>

<svelte:window on:mousedown={handleWindowClick}/>

<div
    bind:this={container}
    on:click={toggleDropdown}
    class:open
    class="menu-flyout-container"
    aria-expanded={open}
>
    <slot/>
    {#if open}
        <MenuFlyout on:click>
            <slot name="menu"/>
        </MenuFlyout>
    {/if}
</div>

<style lang="scss">
    .menu-flyout-container {
        display: inline-flex;
        max-width: 100%;
        position: relative;
    }
</style>