import type { DocsMetadata, DocsNode, DocsTree } from "$data/docs";
import { error } from "@sveltejs/kit";

const PATH_TRIM = /(?:\.\.\/routes\/docs)((\/[\w-]+)+)\//;

const getPages = () => {
	const rawPages = Object.entries(
		import.meta.glob<{ metadata: DocsMetadata }>(
			["../routes/docs/**/*/+page.md", "../routes/docs/+page.md"], // import all docs pages + base page
			{ eager: true },
		),
	).map(([p, m]) => [p, m.metadata] as const);

	return rawPages.map(([path, node]) => {
		return {
			title: node.title,
			path: path.match(PATH_TRIM)?.[1] ?? "",
		} as DocsNode;
	});
};

const getTree = (pages: DocsNode[]) => {
	const rawCategories = Object.entries(
		import.meta.glob<{ metadata: DocsMetadata }>(
			"../routes/docs/**/*/category.md",
			{ eager: true },
		),
	).map(([p, m]) => [p, m.metadata] as const);

	const categories: DocsTree = rawCategories.map(([path, node]) => {
		const docsPath = path.match(PATH_TRIM)?.[1];
		if (!docsPath) error(500, `this is an invalid docs page path: ${path}`);

		return {
			pages: pages.filter(page => page.path.startsWith(docsPath)),
			path: docsPath,
			...node,
		};
	});

	const topLevelPages = Object.entries(
		import.meta.glob<{ metadata: DocsMetadata }>(
			["../routes/docs/*/+page.md", "../routes/docs/+page.md"],
			{ eager: true },
		),
	).map(([p, m]) => [p, m.metadata] as const);

	const topLevelData: DocsNode[] = topLevelPages.map(([path, data]) => {
		const docsPath = path.match(PATH_TRIM)?.[1] ?? "";

		return {
			path: docsPath,
			...data,
		};
	});

	return [...topLevelData, ...categories];
};

export const docsPages = getPages();
export const docsTree = getTree(docsPages);
