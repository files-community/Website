import path from "path";

import adapter from "@sveltejs/adapter-node";

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
        vite: {
            resolve: {
                alias: {
                    "$stores": path.resolve(__dirname, "./src/stores"),
                    "$types": path.resolve(__dirname, "./src/types"),
                }
            }
        },
        adapter: adapter({
			out: "build",
			precompress: false,
			env: {
				host: "0.0.0.0",
				port: "PORT",
			},
		}),
	},
    preprocess: [
        mdsvex({}),
        sveltePreprocess({
            defaults: {
                style: "scss"
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