<script>
    export let href = undefined;
    export let target = undefined;
</script>

<template>
    <a class="anchor" {href} target={(target === '_blank') ? '_blank' : undefined} rel={(target === '_blank') ? 'noreferrer noopener' : undefined}>
        <slot/>
    </a>
</template>

<style lang="scss">
    .anchor {
        color: var(--accent);
        font-weight: 500;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
</style>