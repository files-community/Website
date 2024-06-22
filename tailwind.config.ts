import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Segoe UI", "Inter", "Open Sans", ...fontFamily.sans],
				mono: ["Cascadia Code", "Fira Code", "Consolas", ...fontFamily.mono],
			},
		},
	},

	plugins: [],
} satisfies Config;
