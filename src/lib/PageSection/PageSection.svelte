<script lang="ts">
    let className: string = "";
    export { className as class };
</script>

<style lang="scss" src="./PageSection.scss" global></style>

<section class="page-section {className || ""}" {...$$restProps}>
    <slot />
</section>