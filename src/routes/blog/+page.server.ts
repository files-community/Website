import type { PageServerLoad } from "./$types";

export type Post = {
	slug: string;
	metadata: {
		title: string;
		description: string;
		author: string;
		thumbnail: string;
		date: string;
	};
};

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob<Post["metadata"]>("./posts/*/+page.md", {
		eager: true,
		import: "metadata"
	});

	const posts = Object.entries(modules).map(
		([path, metadata]) =>
			({
				slug: path.match(/\.\/posts\/([\w-]+)\/\+page\.md$/)?.[1],
				metadata
			} as Post)
	);

	posts.sort((a, b) => {
		return +new Date(b.metadata.date) - +new Date(a.metadata.date);
	});

	return { posts };
};
