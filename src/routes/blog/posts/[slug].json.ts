import type { RequestHandler } from "@sveltejs/kit";
import type { Post } from "..";

const slugFromPath = (path: string) =>
	path.match(/([\w-]+)\.(md|svx)/i)?.[1] ?? null;

export const GET: RequestHandler = async ({ params }) => {
	const modules: Record<string, Post["metadata"]> = import.meta.glob("./*.md", { eager: true, import: "metadata" });

	for (const [path, post] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			return { body: post };
		}
	}

	return { status: 404 };
};
