<script lang="ts">
    import Question from "@fluentui/svg-icons/icons/question_24_regular.svg?raw";

    export let description: string = "";
    export let selected: boolean = false;
</script>

<style lang="scss" src="./FeatureCard.scss"></style>

<div class="feature-card" on:click class:selected {...$$restProps}>
    <slot name="icon">
        {@html Question}
    </slot>
    <h4>
        <slot>Unknown</slot>
    </h4>
    <p>{description}</p>
</div>