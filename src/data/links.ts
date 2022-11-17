import type { DocsTree } from "./docs";

export const links = {
	discord: "files",
	twitter: "FilesForWindows",
	storeId: "9nghp3dx8hdx",
	github: {
		owner: "files-community",
		repo: "files",
		siteRepo: "website"
	}
};

export type NavbarItem = {
	name: string;
	path: string;
	external?: boolean;
	icon: any;
	type?: string;
	sidebarTree?: DocsTree;
};
