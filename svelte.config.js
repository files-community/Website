import path from "path";
import adapter from "@sveltejs/adapter-netlify";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { mdsvex } from "mdsvex";
import remarkGfm from "remark-gfm";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkSlug from "remark-slug";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ".svx"],
	kit: {
		target: "body",
		router: true,
		vite: {
			resolve: {
				alias: {
					"$routes": path.resolve("./src/routes"),
					"$data": path.resolve("./src/data"),
					"$page-sections": path.resolve("./src/page-sections"),
					"$static": path.resolve("./static")
				}
			}
		},
		adapter: adapter()
	},
	preprocess: [
		mdsvex({
			extensions: [".svx"],

			smartypants: {
				dashes: "oldschool",
			},

			remarkPlugins: [remarkA11yEmoji, remarkSlug, remarkGfm],
		}),
		sveltePreprocess({
			defaults: {
				style: "scss",
				script: "typescript"
			},
			postcss: {
				plugins: [
					autoprefixer()
				]
			}
		})
	]
}

export default config;