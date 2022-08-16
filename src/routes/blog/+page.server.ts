import type { PageServerLoad } from "./$types";

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

export const load: PageServerLoad = async () => {
	const modules: Record<string, Post["metadata"]> = import.meta.glob("./posts/*/+page.md", {
		eager: true,
		import: "metadata"
	});

	const posts: Post[] = Object.entries(modules)
		.map(([path, metadata]) => ({
			path: path
				.substring(0, path.lastIndexOf("/+page"))
				.replace(/\.[^/.]+$/, ""), // remove extension
			metadata
		}));

	posts.sort((a, b) => {
		return +new Date(b.metadata.date) - +new Date(a.metadata.date);
	});

	return { posts };
};
