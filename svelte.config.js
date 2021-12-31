import path from "path"
import adapter from "@sveltejs/adapter-auto"
import sveltePreprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import remarkGfm from "remark-gfm"
import remarkA11yEmoji from "@fec/remark-a11y-emoji"
import remarkSlug from "remark-slug"
import remarkGithub from "remark-github"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"

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
				plugins: [autoprefixer, (process.env.NODE_ENV !== "development" && cssnano)],
			}
		})
	]
};

// shut up webstorm
// noinspection JSUnusedGlobalSymbols
export default config;
