<script lang="ts">
	import { externalLink, Metadata } from "$lib";
	import { TextBlock } from "fluent-svelte";
	import { onMount } from "svelte";

	import Heart from "~icons/fluent/heart-24-regular";

	const sponsors = [
		{
			name: "Yair",
			username: "yair100",
		},
		{
			name: "Josh",
			username: "Josh65-2201",
		},
		{
			name: "Tera",
			username: "0x5bfa",
		},
	];

	let bios: Record<string, string> = {};

	onMount(() => {
		for (const sponsor of sponsors) {
			fetch(`https://api.github.com/users/${sponsor.username}`)
				.then(response => (response.ok ? response.json() : null))
				.then(user => {
					if (user?.bio) bios = { ...bios, [sponsor.username]: user.bio };
				})
				.catch(() => {});
		}
	});
</script>

<Metadata title="Files • Sponsor" />

<main class="sponsor-page">
	<header class="page-header">
		<TextBlock variant="titleLarge">Support Files</TextBlock>
		<TextBlock class="page-subtitle">
			Files is a community-driven project that depends on your support to grow
			and improve. Sponsoring the team on GitHub helps keep the project going.
		</TextBlock>
	</header>
	<section class="sponsor-cards">
		{#each sponsors as sponsor (sponsor.username)}
			<a
				class="sponsor-card"
				href="https://github.com/sponsors/{sponsor.username}"
				{...externalLink}
			>
				<img
					class="sponsor-avatar"
					src="https://github.com/{sponsor.username}.png?size=160"
					alt="{sponsor.name}'s avatar"
					width="64"
					height="64"
					loading="lazy"
				/>
				<div class="label-container">
					<div class="title-row">
						<TextBlock variant="subtitle">{sponsor.name}</TextBlock>
						<TextBlock class="sponsor-username">@{sponsor.username}</TextBlock>
					</div>
					{#if bios[sponsor.username]}
						<TextBlock class="sponsor-bio">
							{bios[sponsor.username]}
						</TextBlock>
					{/if}
				</div>
				<span class="sponsor-button">
					<Heart aria-hidden="true" />
					Sponsor
				</span>
			</a>
		{/each}
	</section>
</main>

<style lang="scss">
	.sponsor-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		gap: 1.5rem;
		padding: 2rem;
		max-width: 900px;
		margin-inline: auto;

		min-block-size: calc(100vh - 58px);

		.page-header {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
			text-align: center;

			:global(.page-subtitle) {
				color: var(--fds-text-secondary);
				max-inline-size: 600px;
			}
		}

		.sponsor-cards {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: 1rem;
		}

		.sponsor-card {
			border-radius: var(--fds-control-corner-radius);
			border: 1px solid var(--fds-card-stroke-default);
			box-shadow: var(--fds-card-shadow);
			transition: var(--fds-control-normal-duration) ease;
			background: var(--fds-card-background-default);
			cursor: pointer;
			color: inherit;
			text-decoration: none;

			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1.5rem;
			padding: 1.25rem 1.5rem;

			@media (prefers-reduced-motion: no-preference) {
				&:hover {
					box-shadow: var(--fds-flyout-shadow);
					transform: translateY(-2px);
				}
			}

			:global {
				.sponsor-username {
					color: var(--fds-text-secondary);
				}

				.sponsor-bio {
					text-align: left;
					max-width: 50rem;
				}
			}

			.sponsor-avatar {
				inline-size: 4rem;
				block-size: 4rem;
				border-radius: 50%;
				flex-shrink: 0;
			}

			.label-container {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 0.25rem;
				flex-grow: 1;
			}

			.title-row {
				display: flex;
				align-items: baseline;
				flex-wrap: wrap;
				gap: 0.5rem;
			}

			.sponsor-button {
				display: inline-flex;
				align-items: center;
				gap: 0.5rem;
				flex-shrink: 0;
				padding: 0.5rem 1.25rem;
				border-radius: var(--fds-control-corner-radius);
				background: var(--fds-accent-default);
				color: var(--fds-text-on-accent-primary);
				font-size: 14px;
				font-weight: 600;
				line-height: 20px;

				:global(svg) {
					inline-size: 1rem;
					block-size: 1rem;
				}
			}

			@media (max-width: 648px) {
				flex-direction: column;
				gap: 1rem;
				padding: 1.5rem 1.25rem;

				:global(.sponsor-bio) {
					text-align: center;
				}

				.label-container {
					align-items: center;
				}

				.title-row {
					justify-content: center;
				}
			}
		}
	}
</style>
