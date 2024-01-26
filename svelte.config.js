import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { mdsvex } from "mdsvex";
import mediaMinMax from "postcss-media-minmax";
import rehypeColorPreview from "rehype-color-preview";
import remarkGfm from "remark-gfm";
import remarkGithub from "remark-github";
import remarkSlug from "remark-slug";

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
			rehypePlugins: [rehypeColorPreview],
		}),
		vitePreprocess({
			postcss: {
				plugins: [autoprefixer(), cssnano(), mediaMinMax()],
			},
		}),
	],
};

// shut up webstorm
// noinspection JSUnusedGlobalSymbols
export default config;
