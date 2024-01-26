import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";

type LocaleDictionary = typeof addMessages extends (
	locale: string,
	locales: infer T,
	...other: any
) => any
	? T
	: never;

type Locale = {
	readonly values: LocaleDictionary;
	readonly dir: "ltr" | "rtl";
};

export const locales: Record<string, Locale> = Object.fromEntries(
	Object.entries(
		import.meta.glob<LocaleDictionary>("./locales/*.json", {
			import: "default",
			eager: true,
		}),
	).map(([locale, values]) => [
		locale.match(/\.\/locales\/([\w-]+)\.json/)?.[1],
		{
			values,
			dir: ["he-IL", "ar-SA"].includes(locale) ? "rtl" : "ltr",
		},
	]),
);

export default () => {
	for (const [locale, localeObject] of Object.entries(locales)) {
		if (Object.keys(localeObject.values).length !== 0)
			addMessages(locale, localeObject.values);
	}

	init({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator(),
	});
};
