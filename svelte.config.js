import path from "path";

import adapter from '@sveltejs/adapter-netlify';

import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { mdsvex } from "mdsvex";

const __dirname = path.resolve();

/** @type {import("@sveltejs/kit").Config} */
const config = {
    extensions: [
        ".svelte",
        ".svx"
    ],
	kit: {
		target: "body",
        router: true,
        vite: {
            resolve: {
                alias: {
                    "$routes": path.resolve(__dirname, "./src/routes"),
                    "$stores": path.resolve(__dirname, "./src/stores"),
                    "$types": path.resolve(__dirname, "./src/types"),
                    "$static": path.resolve(__dirname, "./static")
                }
            }
        },
        adapter: adapter()
	},
    preprocess: [
        mdsvex({}),
        sveltePreprocess({
            defaults: {
                style: "scss",
                script: "ts"
            },
            postcss: {
                plugins: [
                    autoprefixer()
                ]
            }
        })
    ]
};

export default config;