import { docsPages } from "$data/fetchDocsData";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ url, route }) => {

	return {
		pagePath: url.pathname,
		currentPage: docsPages.find(
			p => p.path === route.id.substring(route.id.indexOf("/", 2))
		) ?? { title: "Overview", path: "" },

	};
};
