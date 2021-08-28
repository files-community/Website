<script lang="ts">
	import { createEventDispatcher } from "svelte"

	export let open: boolean = false
	export let title: string = "unknown"
	export let width: string = "auto"

	const dispatch = createEventDispatcher()

	const appendModal = (node: HTMLDivElement) => {
		let modalsLayer = document.getElementById("modals-layer")
		if (!modalsLayer) {
			modalsLayer = Object.assign(document.createElement("div"), {
				className: "layer-container",
				id: "modals-layer"
			})
			document.body.appendChild(modalsLayer)
		}

		modalsLayer.appendChild(node)
		node.focus()
		document.body.style.overflow = "hidden"

		return {
			destroy() {
				node.remove()
				if (modalsLayer.childNodes) modalsLayer.remove()
				document.body.style.overflow = ""
			}
		}
	}

	const close = () => {
		open = false
		dispatch("close")
	}

	const handleEscapeKey = (e: KeyboardEvent) => {
		if (e.key === "Escape" && open) close()
	}
</script>

<style lang="scss">
	@use "ContentDialog";
</style>

<svelte:window on:keydown={handleEscapeKey}/>

{#if open}
	<div class="content-dialog-smoke" role="dialog" aria-modal="true" use:appendModal>
		<div class="content-dialog" style="--content-dialog-width: {width}px;">
			<div class="content-dialog-body">
				<h2>{title}</h2>
				<slot/>
			</div>
			<footer>
				<slot name="footer"/>
			</footer>
		</div>
	</div>
{/if}