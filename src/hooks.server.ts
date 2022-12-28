import type { Handle } from "@sveltejs/kit";
import { unwrapFunctionStore, locale } from "svelte-i18n";
import { derived, type Readable } from "svelte/store";

export const handle: Handle = ({ event, resolve }) => {
	const $locale = derived<
		Readable<string | undefined | null>,
		() => string | undefined | null
	>(locale, $locale => () => $locale);

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace("%lang%", unwrapFunctionStore($locale)() ?? "en")
	});
};
