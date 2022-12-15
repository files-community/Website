import type { Post } from "../+page.server";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
	const modules = import.meta.glob<Post["metadata"]>("../posts/*/+page.md", {
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

	return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="https://${
		url.hostname
	}/blog/rss" rel="self" type="application/rss+xml" />
<title>Files News</title>
<link>https://${url.hostname}/blog</link>
<description>News about Files, the modern file explorer for Windows</description>
<image>
<url>
https://${url.hostname}/branding/logo-light.svg
</url>
<title>Files News</title>
<link>
https://${url.hostname}/blog
</link>
</image>
${posts
	.map(
		post => `<item>
<guid>${post.slug}</guid>
<title>${post.metadata.title}</title>
<link>https://${url.hostname}/blog/posts/${post.slug}</link>
<description>${post.metadata.description}</description>
<pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
<dc:creator>${post.metadata.author}</dc:creator>
<enclosure url="https://${url.hostname}${
			post.metadata.thumbnail
		}	" length="0" type="image/jpeg"/>
<media:content medium="image" url="https://${url.hostname}${
			post.metadata.thumbnail
		}"/>
</item>`
	)
	.join("")}
</channel>
</rss>
  `);
};
