<script lang="ts">
	import { onMount } from "svelte";
	import Copy from "~icons/fluent/copy-24-regular";
	import Check from "~icons/fluent/checkmark-24-regular";

	let copied = false;
	let headerElements: NodeListOf<HTMLElement>;

	const copyLink = (id: string) => {
		const url = new URL(window.location.href);
		url.hash = id;
		navigator.clipboard.writeText(url.toString());
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	};

	const createAnchorButton = (header: HTMLElement) => {
		const id = header.id;
		if (!id) return;

		const button = document.createElement("button");
		button.className = "header-anchor-button";
		button.setAttribute("aria-label", `Copy link to ${header.textContent}`);
		button.setAttribute("title", "Copy link");
		button.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M5.503 4.627 5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123ZM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9Zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75Z"/></svg>`;
		
		button.addEventListener("click", (e) => {
			e.preventDefault();
			copyLink(id);
		});

		header.style.position = "relative";
		header.appendChild(button);
	};

	onMount(() => {
		// Find all headers with IDs
		headerElements = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");
		
		headerElements.forEach(createAnchorButton);

		// Clean up on unmount
		return () => {
			headerElements?.forEach(header => {
				const button = header.querySelector(".header-anchor-button");
				if (button) {
					header.removeChild(button);
				}
			});
		};
	});
</script>

<style lang="scss">
	:global(.header-anchor-button) {
		position: absolute;
		top: 50%;
		right: -32px;
		transform: translateY(-50%);
		background: transparent;
		border: none;
		cursor: pointer;
		opacity: 0;
		transition: opacity 0.2s ease;
		color: var(--fds-text-tertiary);
		padding: 4px;
		border-radius: var(--fds-control-corner-radius);
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			color: var(--fds-text-primary);
			background-color: var(--fds-subtle-fill-secondary);
		}

		&:active {
			background-color: var(--fds-subtle-fill-tertiary);
		}

		svg {
			width: 16px;
			height: 16px;
		}
	}

	:global(h1:hover .header-anchor-button),
	:global(h2:hover .header-anchor-button),
	:global(h3:hover .header-anchor-button),
	:global(h4:hover .header-anchor-button),
	:global(h5:hover .header-anchor-button),
	:global(h6:hover .header-anchor-button) {
		opacity: 1;
	}

	/* Show on focus for keyboard navigation */
	:global(.header-anchor-button:focus) {
		opacity: 1;
		outline: 2px solid var(--fds-accent-default);
		outline-offset: 2px;
	}

	/* Mobile adjustments */
	@media screen and (width < 768px) {
		:global(.header-anchor-button) {
			right: -28px;
		}
	}
</style>
