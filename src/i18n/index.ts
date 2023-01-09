import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";
import en from "./locales/en.json";
import heIL from "./locales/he-IL.json";

type LocaleDictionary = typeof addMessages extends (
	a: any,
	locales: infer T,
	...other: any
) => any
	? T
	: never;

type Locale = {
	readonly values: LocaleDictionary;
	readonly dir: "ltr" | "rtl";
};

export const locales = {
	en: {
		values: en,
		dir: "ltr"
	},
	"he-IL": {
		values: heIL,
		dir: "rtl"
	}
} as const satisfies Record<string, Locale>;

export default () => {
	for (const [locale, localeObject] of Object.entries(locales)) {
		if (Object.keys(localeObject.values).length !== 0)
			addMessages(locale, localeObject.values);
	}

	init({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator()
	});
};
