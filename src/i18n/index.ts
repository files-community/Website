import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";
import en from "./locales/en.json";
import he from "./locales/he.json";

type LocalesDictionary = typeof addMessages extends (
	a: any,
	locales: infer T,
	...other: any
) => any
	? T
	: never;

export const locales = {
	en: en,
	he: he,
} as const satisfies Record<string, Readonly<LocalesDictionary>>;

export default () => {
	for (const [locale, localeObject] of Object.entries(locales)) {
		if (Object.keys(localeObject).length !== 0)
			addMessages(locale, localeObject);
	}

	init({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator()
	});
};
