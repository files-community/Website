import type { SvelteComponent } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";
import type { DocsTree } from "./docs";

export const links = {
	discord: "files",
	storeId: "9nghp3dx8hdx",
	github: {
		owner: "files-community",
		repo: "files",
		siteRepo: "website",
	},
};

export type NavbarItem = {
	name: string;
	path: string;
	external?: boolean;
	icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>;
	type?: string;
	sidebarTree?: DocsTree;
};
