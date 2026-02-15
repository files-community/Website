import type { DocsMetadata, DocsNode, DocsTree } from "$data/docs";
import { error } from "@sveltejs/kit";

const PATH_TRIM = /(?:\.\.\/routes\/docs)((\/[\w-]+)+)\//;
const PRIORITY_CATEGORY = "Getting Started";
const PRIORITY_PAGES = ["Overview", "Install"];

const getPages = () => {
    const rawPages = import.meta.glob<DocsMetadata>(
        ["../routes/docs/**/*/+page.md", "../routes/docs/+page.md"],
        { eager: true, import: "metadata" },
    );

    // Import raw markdown for searching page contents
    const rawContents = import.meta.glob(
        ["../routes/docs/**/*/+page.md", "../routes/docs/+page.md"],
        { eager: true, as: "raw" },
    ) as Record<string, string>;

    return Object.entries(rawPages).map(([path, node]) => {
        const content = rawContents[path] ?? "";

        return {
            title: node.title,
            path: path.match(PATH_TRIM)?.[1] ?? "",
            content,
        } as DocsNode;
    });
};

const getTree = (pages: DocsNode[]) => {
    const rawCategories = import.meta.glob<DocsMetadata>(
        "../routes/docs/**/*/category.md",
        {
            eager: true,
            import: "metadata",
        },
    );

    const categories: DocsTree = Object.entries(rawCategories).map(
        ([path, node]) => {
            const docsPath = path.match(PATH_TRIM)?.[1];
            if (!docsPath) error(500, `this is an invalid docs page path: ${path}`);

            const categoryPages = pages
                .filter(page => page.path.startsWith(docsPath))
                .sort((a, b) => {
                    const aIndex = PRIORITY_PAGES.indexOf(a.title);
                    const bIndex = PRIORITY_PAGES.indexOf(b.title);

                    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
                    if (aIndex !== -1) return -1;
                    if (bIndex !== -1) return 1;

                    return a.title.localeCompare(b.title);
                });

            return {
                pages: categoryPages,
                path: docsPath,
                ...node,
            };
        },
    );

    const topLevelPages = import.meta.glob<DocsMetadata>(
        ["../routes/docs/*/+page.md", "../routes/docs/+page.md"],
        {
            eager: true,
            import: "metadata",
        },
    );

    const topLevelData: DocsNode[] = Object.entries(topLevelPages).map(
        ([path, data]) => {
            const docsPath = path.match(PATH_TRIM)?.[1] ?? "";

            return {
                path: docsPath,
                ...data,
            };
        },
    );

    // Combine and apply category-level sort
    return [...topLevelData, ...categories].sort((a, b) => {
        if (a.title === PRIORITY_CATEGORY) return -1;
        if (b.title === PRIORITY_CATEGORY) return 1;
        return a.title.localeCompare(b.title);
    });
};

export const docsPages = getPages();
export const docsTree = getTree(docsPages);