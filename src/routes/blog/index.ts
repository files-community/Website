import type { RequestHandler } from "@sveltejs/kit";

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

export const get: RequestHandler = async () => {
	const modules = import.meta.glob("./posts/*.md");
	let body = [];

	for (const path in modules) {
		body.push(
			modules[path]().then(({ metadata }) => {
				return {
					metadata,
					path
				};
			})
		);
	}

	const posts: Post[] = await Promise.all(body);

	posts.sort((a, b) => {
		return +new Date(b.metadata.date) - +new Date(a.metadata.date);
	});

	return {
		body: { posts }
	};
};
