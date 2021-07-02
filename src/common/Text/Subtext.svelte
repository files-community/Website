<script>
    export let center = false;
</script>

<template>
    <p class="subtext" class:text-center={center}>
        <slot/>
    </p>
</template>

<style lang="scss">
    .subtext {
        margin: 0;
        color: var(--text-secondary);
        font-weight: 500;
        font-size: 16px;
        line-height: 1.4;
        &.text-center {
            text-align: center;
        }
    }
</style>