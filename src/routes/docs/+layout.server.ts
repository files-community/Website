import type { DocsMetadata, DocsNode, DocsTree } from "$data/docs";
import type { LayoutServerLoad } from "./$types";

const getPages = () => {
	const rawPages = import.meta.glob<DocsMetadata>(
		["./**/*/+page.md", "./+page.md"], // import all pages + base page
		{ eager: true, import: "metadata" }
	);

	return Object.entries(rawPages).map(([path, node]) => {
		return {
			title: node.title,
			path: path.match(/(\/[\w-]+)+/)?.[0] ?? ""
		} as DocsNode;
	});
};

const getTree = (pages: DocsNode[]) => {
	const rawCategories = import.meta.glob<DocsMetadata>("./**/*/category.md", {
		eager: true,
		import: "metadata"
	});

	const categories: DocsTree = Object.entries(rawCategories).map(
		([path, node]) => {
			const docsPath =
				path.match(/^(?:\.)(\/[\w-]+)/)?.[1] ?? "this is an invalid path";

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

export const load: LayoutServerLoad = ({ url, route }) => {
	const pages = getPages();
	const tree = getTree(pages);

	return {
		pagePath: url.pathname,
		currentPage: pages.find(
			p => p.path === route.id.substring(route.id.indexOf("/", 2))
		) ?? { title: "Overview", path: "" },
		docsPages: pages,
		docs: tree
	};
};
