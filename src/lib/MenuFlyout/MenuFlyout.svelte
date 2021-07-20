<script lang="ts">
    import { onMount } from "svelte";
    import BezierEasing from "bezier-easing";

    let menu: HTMLUListElement;
    let anchor: HTMLDivElement;

    function menuTransition(node, { duration = 250, easing = BezierEasing(0, 0, 0, 1) }) {
        const style = getComputedStyle(node);
        const transform = style.transform === "none" ? "" : style.transform;
        const height = node.offsetHeight;

        return {
            duration,
            easing,
            css: t => {
                return `transform: ${transform} translateY(-${(1 - t) * height}px);`;
            }
        };
    }

    onMount(() => {
        anchor.setAttribute("style", `--menu-flyout-height: ${menu.offsetHeight}px; --menu-flyout-width: ${menu.offsetWidth}px;`);
    });
</script>

<style lang="scss" src="./MenuFlyout.scss"></style>

<div
    bind:this={anchor}
    class="menu-flyout-anchor"
>
    <ul in:menuTransition bind:this={menu} role="menu" class="menu-flyout">
        <slot />
    </ul>
</div>