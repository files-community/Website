<script>
	import MenuFlyout from "./MenuFlyout.svelte";

	export let open = false;
	const toggleDropdown = () => open = !open;

	let container: HTMLDivElement;
	const handleOuterClick = (e) => {
		if (open && ((!e.target && container) || !container.contains(e.target))) toggleDropdown();
	}
</script>

<svelte:window on:mousedown={handleOuterClick}/>

<div
		aria-expanded={open}
		bind:this={container}
		class="menu-flyout-container"
		class:open
		on:click={toggleDropdown}
>
	<slot/>
	{#if open}
		<MenuFlyout on:click>
			<slot name="menu"/>
		</MenuFlyout>
	{/if}
</div>

<style global>
	.menu-flyout-container {
		position: relative;
		display: inline-flex;
		max-width: 100%;
	}
</style>