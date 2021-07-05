<script lang="ts">
    import { docsMap } from "$stores";
    import { TreeView } from "$lib";
</script>

<main class="docs-body">
    <aside class="docs-sidebar">
        <TreeView tree={$docsMap} />
    </aside>
    <article class="docs-page">
        <slot />
    </article>
</main>

<style lang="scss">
    .docs- {
        &body {
            display: flex;
        }
        &sidebar {
            padding: 16px;
            flex: 0 0 auto;
            width: 316px;
        }
        &page {
            padding: 16px;
            flex: 1 1 auto;
        }
    }
</style>