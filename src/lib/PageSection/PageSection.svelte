<script lang="ts">
    let className: string = "";
    export { className as class };
</script>

<style lang="scss" src="./PageSection.scss"></style>

<section class="page-section {className || ""}" {...$$restProps}>
    <slot name="outer" />
    {#if $$slots.default}
        <div class="page-section-inner">
            <slot />
        </div>
    {/if}
</section>