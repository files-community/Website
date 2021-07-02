<script>
    export let center = false;
    export let size = 1;

    const sizes = [1, 2, 3];
</script>

<template>
    <!-- for some reason svelte doesn't have dynamic tag support yet -->
    {#if size === 1}
        <h1 class="title {(sizes.includes(size)) ? `size-${size}` : 'size-1'}" class:text-center={center}>
            <slot/>
        </h1>
    {:else if size === 2}
        <h2 class="title {(sizes.includes(size)) ? `size-${size}` : 'size-1'}" class:text-center={center}>
            <slot/>
        </h2>
    {:else if size === 3}
        <h3 class="title {(sizes.includes(size)) ? `size-${size}` : 'size-1'}" class:text-center={center}>
            <slot/>
        </h3>
    {/if}
</template>

<style lang="scss">
    .title {
        margin: 0;
        color: var(--text-primary);
        font-weight: 800;
        &.text-center {
            text-align: center;
        }
        &.size- {
            &1 {
                font-size: 72px;
                line-height: 1.4;
            }
            &2 {
                font-size: 64px;
                line-height: 1.3;
            }
            &3 {
                font-size: 56px;
                line-height: 1.2;
            }
        }
    }
</style>