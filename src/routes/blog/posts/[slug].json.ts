import type { RequestHandler } from "@sveltejs/kit";

const slugFromPath = (path: string) =>
	path.match(/([\w-]+)\.(md|svx)/i)?.[1] ?? null;

export const get: RequestHandler = async ({ params }) => {
	const modules = import.meta.glob("./*.md");

	type Resolver = () => Promise<{[p: string]: any}>

	let match: [string, Resolver];
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = [path, resolver];
			break;
		}
	}

	if (!match) return { status: 404 };

	const post = await match[1]();

	return { body: post };
};
