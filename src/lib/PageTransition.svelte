<script>
  import { fly } from "svelte/transition";
  export let refresh = "";
</script>

{#key refresh}
  <div
		in:fly={{ y: 6, duration: 400, delay: 400 }}
    out:fly={{ y: 6, duration: 400 }}
	>
    <slot />
  </div>
{/key}
