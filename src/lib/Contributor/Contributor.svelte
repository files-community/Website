<script lang="ts">
    export let html_url: string = undefined;
    export let avatar_url: string = undefined;
    export let type = "User";
    export let login = "Unknown";
    export let contributions = 0;
</script>

<style lang="scss" src="./Contributor.scss"></style>

{#if type === "User"}
    <a tabindex="-1" class="contributor" href={html_url} target="_blank" rel="noreferrer noopener">
        <img src={avatar_url} width="32" height="32" alt="{login}'s avatar" loading="lazy" />
        <div class="info">
            <h5>{login}</h5>
            <span>{contributions} contributions</span>
        </div>
    </a>
{/if}