<script lang="ts">
	import { onMount } from "svelte";

	let menu: HTMLUListElement;
	let outer: HTMLDivElement;

	onMount(() => {
		outer.style.setAttribute(
			"style",
			`--menu-flyout-height: ${menu.offsetHeight}px; --menu-flyout-width: ${menu.offsetWidth}px;`
		);
	});
</script>

<div bind:this={outer} class="menu-flyout-outer" on:click|stopPropagation>
	<ul bind:this={menu} class="menu-flyout" role="menu">
		<slot />
	</ul>
</div>

<style lang="scss" src="./MenuFlyout.scss"></style>
