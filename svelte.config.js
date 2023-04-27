import adapter from "@sveltejs/adapter-cloudflare";
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkGfm from "remark-gfm";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkSlug from "remark-slug";
import remarkGithub from "remark-github";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import mediaMinMax from "postcss-media-minmax";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ".md"],
	kit: {
		alias: {
			$data: "src/data",
			$layout: "src/layout",
			$i18n: "src/i18n",
		},
		adapter: adapter(),
	},
	preprocess: [
		mdsvex({
			extensions: [".md"],

			smartypants: {
				dashes: "oldschool",
			},

			remarkPlugins: [remarkA11yEmoji, remarkSlug, remarkGfm, remarkGithub],
		}),
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer(), cssnano(), mediaMinMax()],
			},
		}),
	],
};

// shut up webstorm
// noinspection JSUnusedGlobalSymbols
export default config;
