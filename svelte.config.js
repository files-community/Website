import path from "path";
import adapter from "@sveltejs/adapter-netlify";
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkGfm from "remark-gfm";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkSlug from "remark-slug";
import remarkGithub from "remark-github";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const postCssPlugins = [autoprefixer()]
// enable cssnano in production
if (process.env.NODE_ENV !== "development") postCssPlugins.push(cssnano({ preset: "default" }))

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ".svx"],
	kit: {
		target: "body",
		router: true,
		vite: {
			resolve: {
				alias: {
					$static: path.resolve("./static"),
					$data: path.resolve("./src/data"),
					$layout: path.resolve("./src/layout")
				}
			}
		},
		adapter: adapter()
	},
	preprocess: [
		mdsvex({
			extensions: [".svx"],

			smartypants: {
				dashes: "oldschool"
			},

			remarkPlugins: [remarkA11yEmoji, remarkSlug, remarkGfm, remarkGithub],
		}),
		sveltePreprocess({
			postcss: {
				plugins: postCssPlugins,
			}
		})
	]
};

export default config;
