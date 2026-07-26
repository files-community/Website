/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
/// <reference types="vite/client" />

declare namespace App {
	// interface Locals {}
	interface PageData {
		docs?: import("$data/docs").DocsTree;
	}
	// interface Error {}
	// interface Platform {}
}
