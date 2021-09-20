<script lang="ts">
  let className = "";
  export { className as class };
</script>

<section {...$$restProps} class="page-section {className || ''}">
  <slot name="outer" />
  {#if $$slots.default}
    <div class="page-section-inner">
      <slot />
    </div>
  {/if}
</section>

<style lang="scss" src="./PageSection.scss"></style>