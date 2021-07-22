<script lang="ts">
    import MenuFlyout from "./MenuFlyout.svelte";

    export let open = false;

    let container;

    function toggleDropdown() {
        open = !open;
    }

    function handleOuterClick(e) {
        if (open && (!e.target === container || !container.contains(e.target))) toggleDropdown();
    }
</script>

<svelte:window on:mousedown={handleOuterClick} />

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

<style lang="scss" global>
    .menu-flyout-container {
        display: inline-flex;
        max-width: 100%;
        position: relative;
    }
</style>