import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import Fonts from "unplugin-fonts/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
	plugins: [
		sveltekit(),
		Fonts({
			google: {
				families: [
					{
						name: "Inter",
						styles: "wght@100..900",
					},
					{
						name: "Open+Sans",
						styles: "ital,wght@0..1,100..900",
					},
				],
			},
		}),
		Icons({
			compiler: "svelte",
			defaultClass: "fluent-icon",
		}),
	],
};

export default config;
