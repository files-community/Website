import type { RequestHandler } from "./__types";

export type Post = {
	path: string;
	metadata: {
		title: string;
		description: string;
		author: string;
		thumbnail: string;
		date: string;
	};
}

export const GET: RequestHandler = async () => {
	const modules: Record<string, Post["metadata"]> = import.meta.glob("./posts/*.md", {
		eager: true,
		import: "metadata"
	});

	const posts: Post[] = Object.entries(modules)
		.map(([path, metadata]) => ({ path, metadata }));

	posts.sort((a, b) => {
		return +new Date(b.metadata.date) - +new Date(a.metadata.date);
	});

	return {
		body: { posts }
	};
};
