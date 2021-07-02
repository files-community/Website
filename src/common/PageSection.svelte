<script>
    export let id = undefined;
</script>

<template>
    <section {id} class="page-section">
        <slot/>
    </section>
</template>

<style lang="scss">
    .page-section {
        position: relative;
        padding: 72px;
    }
</style>