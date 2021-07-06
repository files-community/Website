<script lang="ts">
    import { page } from "$app/stores";

    import { docsMap } from "$stores";
    import { TreeView, TextBox } from "$lib";
</script>

<section class="docs">
    <aside class="sidebar">
        <div class="search">
            <TextBox type="search" placeholder="Search Documentation"/>
        </div>
        <div class="divider" role="separator"></div>
        <TreeView tree={$docsMap} />
    </aside>
    <article class="page markdown-body">
        <slot />
    </article>
</section>

<style lang="scss">
    .page {
        padding: 48px;
        flex: 1 1 auto;
        overflow: auto;
        background-clip: padding-box;
        background-color: var(--background-tertiary);
        border-top-left-radius: var(--overlay-corner-radius);
        border: 1px solid var(--CardStrokeColorDefault);
    }

    .docs {
        overflow: hidden;
        flex: 1 1 auto;
        display: flex;
        background-color: var(--background-base);
    }

    .sidebar {
        flex: 0 0 auto;
        width: 316px;
        padding: 8px;
    }

    .search {
        padding: 0 8px;
    }

    .divider {
        width: 100%;
        border-top: 1px solid var(--DividerStrokeColorDefault);
        margin: 12px 0;
    }
</style>