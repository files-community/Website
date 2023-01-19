import { locales } from "$i18n";
import type { Handle } from "@sveltejs/kit";
import { locale, unwrapFunctionStore } from "svelte-i18n";
import { derived, type Readable } from "svelte/store";

export const handle: Handle = ({ event, resolve }) => {
	const $locale = derived<
		Readable<string | undefined | null>,
		() => string | undefined | null
	>(locale, $locale => () => $locale);

	const localeKey = (unwrapFunctionStore($locale)() ?? "en") as keyof typeof locales;

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace("%lang%", localeKey).replace("%dir%", locales[localeKey].dir)
	});
};
