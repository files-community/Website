<script lang="ts">
    import { docsMap } from "$stores";
    import { TreeView, TextBox } from "$lib";
</script>

<main class="docs-body">
    <aside class="docs-sidebar">
        <div class="docs-search-container">
            <TextBox type="search" placeholder="Search Documentation"/>
        </div>
        <div class="divider" role="separator"></div>
        <TreeView tree={$docsMap} />
    </aside>
    <article class="docs-page">
        <slot />
    </article>
</main>

<style lang="scss">
    .docs- {
        &body {
            flex: 1 1 auto;
            display: flex;
            background-color: var(--background-base);
            overflow: auto;
        }
        &search-container {
            padding: 0 8px;
        }
        &sidebar {
            flex: 0 0 auto;
            width: 316px;
            padding: 8px;
            position: sticky;
            top: 0;
        }
        &page {
            padding: 16px;
            flex: 1 1 auto;
            height: fit-content;
            min-height: 100%;
            background-clip: padding-box;
            background-color: var(--background-tertiary);
            border-top-left-radius: var(--overlay-corner-radius);
            border: 1px solid var(--CardStrokeColorDefault);
        }
    }

    .divider {
        width: 100%;
        border-top: 1px solid var(--DividerStrokeColorDefault);
        margin: 12px 0;
    }
</style>