/// <reference types="@sveltejs/kit" />

declare namespace App {
	// interface Locals {}
	interface PageData {
		docs?: import("$data/docs").DocsTree
	}
	// interface Error {}
	// interface Platform {}
}

// gives us highlighting on ?raw imports
declare module "*?raw" {
	const src: string
	export default src
}