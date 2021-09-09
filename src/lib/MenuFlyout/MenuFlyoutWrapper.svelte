<script lang="ts">
  import MenuFlyout from "./MenuFlyout.svelte";

  export let open = false;
  const toggleDropdown = () => open = !open;

  $: console.log(`Inner: ${ open }`);
  // $: if (open) toggleDropdown()

  let container: HTMLDivElement;
  const handleOuterClick = (e) => {
    if (open && ((!e.target && container) || !container.contains(e.target))) toggleDropdown();
  };
</script>

<svelte:window on:mousedown={handleOuterClick} />

<div
  aria-expanded={open}
  bind:this={container}
  class="menu-flyout-container"
  class:open
  on:click={toggleDropdown}
>
  <slot />
  {#if open}
    <MenuFlyout>
      <slot name="menu" />
    </MenuFlyout>
  {/if}
</div>

<style global lang="scss">
	.menu-flyout-container {
		position: relative;
		display: inline-flex;
		max-width: 100%;
	}
</style>