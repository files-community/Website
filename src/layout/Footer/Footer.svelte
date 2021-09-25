<script lang="ts">
	import { HyperlinkButton } from "$lib";
</script>

<footer class="footer">
	<div class="info">
		<p>
			Copyright &copy; 2021, The Files Authors
		</p>
		<div class="social-icons">
			<HyperlinkButton href="https://twitter.com/FilesForWindows" target="_blank" rel="nofollow">
				Twitter
			</HyperlinkButton>
		</div>
	</div>
	<div class="become-a-contributor">
		<p>
			Contribute to this website
		</p>
		<HyperlinkButton href="https://github.com/files-community/Website" target="_blank" rel="nofollow">
			Files Website GitHub
		</HyperlinkButton>
		<p>
			Something missing or broken?
		</p>
		<HyperlinkButton href="https://github.com/files-community/Website/issues/new" target="_blank" rel="nofollow">
			Open a new issue
		</HyperlinkButton>
	</div>
	<div class="contributors">
		<p class="lead">
			Built by an amazing team of people
		</p>
		<HyperlinkButton href="https://github.com/Tropix126" target="_blank" rel="nofollow">
			Tropical
		</HyperlinkButton>
		<HyperlinkButton href="https://www.theonlytails.com" target="_blank" rel="nofollow">
			TheOnlyTails
		</HyperlinkButton>
		<HyperlinkButton href="https://github.com/yaichenbaum" target="_blank" rel="nofollow">
			Yair
		</HyperlinkButton>
		<HyperlinkButton href="https://github.com/chingucoding" target="_blank" rel="nofollow">
			Marcel Wagner
		</HyperlinkButton>
		<HyperlinkButton href="https://michaelwe.st/" target="_blank" rel="nofollow">
			Michael West
		</HyperlinkButton>
	</div>
</footer>

<style lang="scss">
	@use "src/styles/mixins" as *;

	.footer {
		@include flex($align: top);
		gap: 4rem;

		position: relative;
		justify-content: space-between;
		padding: 3.5rem;
		background-color: var(--background-base);
		color: var(--text-color-tertiary);
	    border-top: 1px solid var(--divider-color-default);
		overflow: hidden;

		@media only screen and (max-width: 1024px) {
			@include flex($direction: column)
		}
	}

	.info {
		.social-icons {
			@include flex($direction: row);
			margin: auto -11px;
		}
	}

	.contributors {
		@include flex($direction: column);

		.lead {
			font-weight: 450;
		}

		:global {
			.hyperlink-button {
				margin: {
					// this makes WebStorm shut up, auto is a valid value for margin-block
					//noinspection CssInvalidPropertyValue
					block: auto;
					inline: -11px;
				};

				@media only screen and (min-width: 1024px) {
					max-width: fit-content;
				}
			}
		}
	}

	.become-a-contributor {
		@extend .contributors;

		:global(.hyperlink-button) {
			margin: {
				block: unset;
				inline: -11px;
			}

			@media only screen and (min-width: 1024px) {
				max-width: fit-content;
			}
		}
	}
</style>