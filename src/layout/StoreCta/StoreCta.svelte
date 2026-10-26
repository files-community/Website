<script lang="ts">
	import {
		defaultI18nValues,
		externalLink,
		openWithStoreProtocol,
		storeHref,
		storeProtocolHref,
	} from "$lib";
	import { links } from "$data/links";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import StoreLogo from "./StoreLogo.svelte";

	const href = storeHref(links.storeId);
	const protocolHref = storeProtocolHref(links.storeId);
</script>

<div class="store-cta">
	<Button
		{href}
		class="store-cta-button"
		variant="accent"
		{...externalLink}
		on:click={e => openWithStoreProtocol(e, protocolHref, href)}
	>
		<StoreLogo />
		{$_("home.cta.get_files", defaultI18nValues)}
	</Button>
</div>

<style lang="scss">
	@use "StoreCta";
</style>
