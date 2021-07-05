import path from "path";

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
                    "$types": path.resolve(__dirname, "./src/types")
                }
            }
        }
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