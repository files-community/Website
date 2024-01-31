import type { DocsMetadata, DocsNode, DocsTree } from "$data/docs";
import { error } from "@sveltejs/kit";

const PATH_TRIM = /(?:\.\.\/routes\/docs)((\/[\w-]+)+)\//;

const getPages = () => {
	const rawPages = import.meta.glob<DocsMetadata>(
		["../routes/docs/**/*/+page.md", "../routes/docs/+page.md"], // import all docs pages + base page
		{ eager: true, import: "metadata" },
	);

	return Object.entries(rawPages).map(([path, node]) => {
		return {
			title: node.title,
			path: path.match(PATH_TRIM)?.[1] ?? "",
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

			return {
				pages: pages.filter(page => page.path.startsWith(docsPath)),
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

	return [...topLevelData, ...categories];
};

export const docsPages = getPages();
export const docsTree = getTree(docsPages);
