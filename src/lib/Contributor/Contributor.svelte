<script lang="ts">
    export let html_url: string = undefined;
    export let avatar_url: string = undefined;
    export let type: string = "User";
    export let login: string = "Unknown";
    export let contributions: number = 0;
</script>

<style lang="scss" src="./Contributor.scss"></style>

{#if type === "User"}
    <a class="contributor" href={html_url} target="_blank" rel="noreferrer noopener">
        <img src={avatar_url} width="32" height="32" alt="{login}'s avatar" loading="lazy" />
        <div class="info">
            <h5>{login}</h5>
            <span>{contributions} contributions</span>
        </div>
    </a>
{/if}