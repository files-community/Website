<script lang="ts">
	import { _ } from "svelte-i18n";
	import { defaultI18nValues } from "$lib";
	import Question from "~icons/fluent/question-24-regular";

	export let description: string = "";
	export let clickable = false;
	export let selected = false;
</script>

<svelte:element
	this={clickable ? "button" : "div"}
	class="feature-card"
	on:click
	class:selected
	{...$$restProps}
>
	<slot name="icon">
		<Question />
	</slot>
	<h4>
		<slot>{$_("home.features.unknown", defaultI18nValues)}</slot>
	</h4>
	<p>{description}</p>
</svelte:element>

<style lang="scss">
	@use "./FeatureCard";
</style>
