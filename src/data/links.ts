import type { SvelteComponent } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";
import type { DocsTree } from "./docs";

export const links = {
	discord: "files",
	storeId: "9nghp3dx8hdx",
	storePreviewId: "9NSQD9PKV3SS",
	// Sends each visitor to a random member of sponsorTeam
	sponsor: "/sponsor",
	github: {
		owner: "files-community",
		repo: "files",
		siteRepo: "website",
	},
};

// GitHub usernames with GitHub Sponsors enabled
export const sponsorTeam = ["yair100", "Josh65-2201", "0x5BFA"];

export type NavbarItem = {
	name: string;
	path: string;
	external?: boolean;
	icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>;
	type?: string;
	sidebarTree?: DocsTree;
};
