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

interface Document {
	startViewTransition(updateCallback?: () => Promise<void>): ViewTransition;
}

interface ViewTransition {
	readonly finished: Promise<boolean>;
	readonly ready: Promise<boolean>;
	readonly updateCallbackDone: Promise<boolean>;
	skipTransition(): void;
}
