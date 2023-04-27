import type { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type DocsMetadata = { title: string };

export type DocsNode = DocsMetadata & {
	path: string;
	icon?: SvelteComponentTyped<SvelteHTMLElements["svg"]>;
};

export type DocsCategory = DocsNode & { pages: DocsTree };

export type DocsTree = (DocsNode | DocsCategory)[];
