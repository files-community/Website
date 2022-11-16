export type DocsMetadata = { title: string };

export type DocsNode = DocsMetadata & {
	path: string;
	icon?: string;
};

export type DocsCategory = DocsNode & { pages: DocsTree };

export type DocsTree = (DocsNode | DocsCategory)[];

