import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: "svelte",
			defaultClass: "fluent-icon",
		}),
	],
};

export default config;
