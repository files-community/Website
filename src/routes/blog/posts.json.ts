import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
    const imports = import.meta.glob("./posts/*.svx");
    let body = [];

    for (const path in imports) {
        body.push(
            imports[path]().then(({ metadata }) => {
                return {
                    metadata,
                    path
                };
            })
        );
    }

    const posts = await Promise.all(body);

    return { body: posts }
}