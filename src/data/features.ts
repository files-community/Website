import type { SvelteComponent } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type FeatureCardData = {
	title: string;
	description: string;
	icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>;
};

export type Color = {
	name: string;
	color:
		| `#${number}`
		| `hsl(${number}, ${number}%, ${number}%)`
		| `var(--${string})`;
};
