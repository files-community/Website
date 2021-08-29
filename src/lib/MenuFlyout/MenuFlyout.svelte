<script lang="ts">
    import { onMount } from "svelte";

    let menu: HTMLUListElement;
    let outer: HTMLDivElement;

    onMount(() => {
        outer.setAttribute("style", `--menu-flyout-height: ${menu.offsetHeight}px; --menu-flyout-width: ${menu.offsetWidth}px;`);
    });
</script>

<style src="./MenuFlyout.scss"></style>

<div
    class="menu-flyout-outer"
    bind:this={outer}
    on:click|stopPropagation
>
	<ul bind:this={menu} class="menu-flyout" role="menu">
		<slot/>
	</ul>
</div>