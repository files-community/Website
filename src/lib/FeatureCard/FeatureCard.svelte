<script>
	import Question from "@fluentui/svg-icons/icons/question_24_regular.svg?raw";

	export let description: string = "";
	export let selected: boolean = false;
	export let icon = Question;
</script>

<style src="./FeatureCard.scss"></style>

<div class="feature-card" on:click class:selected {...$$restProps}>
	{@html icon}
	<h4>
		<slot>Unknown</slot>
	</h4>
	<p>{description}</p>
</div>