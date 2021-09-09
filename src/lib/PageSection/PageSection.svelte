<script lang="ts">
  let className = "";
  export { className as class };
</script>

<style lang="scss" src="./PageSection.scss"></style>

<section {...$$restProps} class="page-section {className || ''}">
  <slot name="outer" />
  {#if $$slots.default}
    <div class="page-section-inner">
      <slot />
    </div>
  {/if}
</section>