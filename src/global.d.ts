/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

declare namespace App {
	// interface Locals {}
	interface PageData {
		docs?: import("$data/docs").DocsTree;
	}
	// interface Error {}
	// interface Platform {}
}
