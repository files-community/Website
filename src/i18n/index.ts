import { addMessages, init, locale } from "svelte-i18n";

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
	).map(([path, values]) => {
		const name = path.match(/\.\/locales\/([\w-]+)\.json/)?.[1] ?? path;

		return [
			name,
			{
				values,
				dir: ["he-IL", "ar-SA"].includes(name) ? "rtl" : "ltr",
			},
		];
	}),
);

// Match the browser's language preferences against the available locales.
// navigator.language is often a bare language tag ("de") or a different
// region ("de-AT") than the locale files ("de-DE"), neither of which
// svelte-i18n resolves on its own.
const bestMatchingLocale = (): string => {
	if (typeof navigator === "undefined") return "en";

	const available = Object.keys(locales);
	const preferences = navigator.languages?.length
		? navigator.languages
		: [navigator.language];

	for (const preference of preferences) {
		if (!preference) continue;
		const tag = preference.toLowerCase();

		const exact = available.find(l => l.toLowerCase() === tag);
		if (exact) return exact;

		const base = tag.split("-")[0];
		if (base === "zh") return /hant|tw|hk|mo/.test(tag) ? "zh-TW" : "zh-CN";

		const sameLanguage = available.filter(
			l => l.toLowerCase().split("-")[0] === base,
		);
		if (sameLanguage.length !== 0)
			return (
				sameLanguage.find(l => l.toLowerCase() === base) ?? sameLanguage[0]
			);
	}

	return "en";
};

let dirSyncStarted = false;

export default () => {
	for (const [name, localeObject] of Object.entries(locales)) {
		if (Object.keys(localeObject.values).length !== 0)
			addMessages(name, localeObject.values);
	}

	init({
		fallbackLocale: "en",
		initialLocale: bestMatchingLocale(),
	});

	if (!dirSyncStarted && typeof document !== "undefined") {
		dirSyncStarted = true;
		locale.subscribe(name => {
			document.documentElement.dir = (name && locales[name]?.dir) || "ltr";
		});
	}
};
