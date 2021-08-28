<script lang="ts">
	let menu: HTMLUListElement

	const bindMenuDimensions = (node: HTMLDivElement) => {
		node.setAttribute("style", `--menu-flyout-height: ${ menu.offsetHeight }px; --menu-flyout-width: ${ menu.offsetWidth }px;`)
	}
</script>

<style lang="scss" src="./MenuFlyout.scss"></style>

<div
		class="menu-flyout-outer"
		on:click|stopPropagation
		use:bindMenuDimensions
>
	<ul bind:this={menu} class="menu-flyout" role="menu">
		<slot/>
	</ul>
</div>