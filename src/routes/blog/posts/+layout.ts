import type { LayoutLoad } from "./$types";
import { error } from "@sveltejs/kit";
import type { Post } from "src/routes/blog/+page.server";

const slugFromPath = (path: string) =>
	path.match(/^\.\/([\w-]+)\/\+page\.md$/i)?.[1] ?? null;

export const load: LayoutLoad = ({ url }) => {
	const modules: Record<string, Post["metadata"]> =
		import.meta.glob("./*/+page.md", { eager: true, import: "metadata" });

	const slug = url.pathname.replace("/blog/posts", "")
		.match(/\/([\w-]+)\/?$/i)?.[1] ?? null;

	const post = Object.entries(modules)
		.find(([path]) => slugFromPath(path) === slug);

	if (post) {
		return post[1];
	} else throw error(404, "No such blog post was found!");
};
