<script lang="ts">
	import { _ } from "svelte-i18n";
	import { defaultI18nValues } from "$lib";
	import Question from "~icons/fluent/question-24-regular";

	export let description: string = "";
</script>

<article class="feature-card" {...$$restProps}>
	<slot name="icon">
		<Question />
	</slot>
	<h3>
		<slot>{$_("home.features.unknown", defaultI18nValues)}</slot>
	</h3>
	<p>{description}</p>
</article>

<style lang="scss">
	@use "./FeatureCard";
</style>
