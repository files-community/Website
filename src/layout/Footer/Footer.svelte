<script lang="ts">
	import { PageSection, HyperlinkButton } from "$lib";
</script>

<PageSection type="footer" id="page-footer">
	<div class="column">
		<p>Copyright &copy; 2021, The Files Authors</p>
		<HyperlinkButton
			href="https://twitter.com/FilesForWindows"
			target="_blank"
			rel="nofollow"
		>
			Twitter
		</HyperlinkButton>
	</div>
	<div class="column">
		<p>Contribute to this website</p>
		<HyperlinkButton
			href="https://github.com/files-community/Website"
			target="_blank"
			rel="nofollow"
		>
			Files Website GitHub
		</HyperlinkButton>
		<p>Something missing or broken?</p>
		<HyperlinkButton
			href="https://github.com/files-community/Website/issues/new"
			target="_blank"
			rel="nofollow"
		>
			Open a new issue
		</HyperlinkButton>
	</div>
	<div class="column">
		<p>Built by an amazing team of people</p>
		<HyperlinkButton
			href="https://github.com/Tropix126"
			target="_blank"
			rel="nofollow"
		>
			Tropical
		</HyperlinkButton>
		<HyperlinkButton
			href="https://www.theonlytails.com"
			target="_blank"
			rel="nofollow"
		>
			TheOnlyTails
		</HyperlinkButton>
		<HyperlinkButton
			href="https://github.com/yaichenbaum"
			target="_blank"
			rel="nofollow"
		>
			Yair
		</HyperlinkButton>
		<HyperlinkButton
			href="https://github.com/chingucoding"
			target="_blank"
			rel="nofollow"
		>
			Marcel Wagner
		</HyperlinkButton>
		<HyperlinkButton
			href="https://michaelwe.st/"
			target="_blank"
			rel="nofollow"
		>
			Michael West
		</HyperlinkButton>
	</div>
</PageSection>

<style lang="scss">
	@use "src/styles/mixins" as *;

	:global {
		#page-footer {
			background-color: var(--background-base);
			border-top: 1px solid var(--divider-color-default);

			.page-section-inner {
				@include flex($align: top, $justify: between, $gap: 48px);
				@media only screen and (max-width: 1024px) {
					flex-direction: column;
				}
			}

			p {
				margin: 12px 0;
			}

			.hyperlink-button {
				margin: {
					inline: -11px;
					bottom: 8px;
				}
			}
		}
	}

	.column {
		@include flex($direction: column);
	}
</style>
