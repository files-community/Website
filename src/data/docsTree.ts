import type { DocsMetadata, DocsNode, DocsTree } from "$data/docs";

const PATH_TRIM = /(?:..\/routes\/docs)((\/[\w-]+)+)\//;

const getPages = () => {
    console.log("SEARH")
    console.trace();
    const rawPages = import.meta.glob<DocsMetadata>(
        ["../routes/docs/**/*/+page.md", "../routes/docs/+page.md"], // import all docs pages + base page
        { eager: true, import: "metadata" }
    );

    return Object.entries(rawPages).map(([path, node]) => {
        return {
            title: node.title,
            path: path.match(PATH_TRIM)?.[1] ?? ""
        } as DocsNode;
    });
};

const getTree = (pages: DocsNode[]) => {
    const rawCategories = import.meta.glob<DocsMetadata>("../routes/docs/**/*/category.md", {
        eager: true,
        import: "metadata"
    });

    const categories: DocsTree = Object.entries(rawCategories).map(
        ([path, node]) => {
            const docsPath =
                path.match(PATH_TRIM)?.[1] ?? "this is an invalid path";
            return {
                pages: pages.filter(page => page.path.startsWith(docsPath)),
                path: docsPath,
                ...node
            };
        }
    );

    return [
        {
            title: pages.find(p => p.path === "")?.title ?? "",
            path: ""
        }
    ].concat(categories);
};


export const docsPages = getPages();
export const docsTree = getTree(docsPages);
