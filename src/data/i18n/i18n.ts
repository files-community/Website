import Languages from "./languages";
import en from "./en/en.json";
import ru from "./ru/ru.json";

const defaultLanguage: Languages = Languages.en;
const supportedLanguages: Languages[] = Object.values(Languages) as Languages[];
const data: LanguageData = {
	en: en,
	ru: ru
};

/**
 *
 * @returns language of user if project have it or default language (ex. "en")
 */
export function getLanguage(): Languages {
	if (typeof window !== "undefined") {
		const language =
			window?.navigator.language || window?.navigator?.userLanguage; // returns: en-US

		if (!language) return defaultLanguage;

		const languageSpace = language.split("-")[0] || defaultLanguage; // returns: en

		if (supportedLanguages.includes(languageSpace as unknown as Languages))
			return languageSpace as unknown as Languages;
		else return defaultLanguage;
	} else return defaultLanguage;
}

/**
 * Main function that returns of localized message
 * @param {string} message Message of content in **__language__.json** (ex. "landing.title")
 * @param {LanguageOptions} options Options of current string
 * @returns Localized message
 */
export function t(message: string, options?: LanguageOptions): string {
	const language = options?.language || getLanguage() || defaultLanguage;

	if (!message) return "MISSING TRANSLATION";

	try {
		return (
			(data[language] as any)[message as string] ||
			(data[options?.language || ""] as any)[message] ||
			options?.default ||
			"MISSING TRANSLATION"
		);
	} catch (error) {
		return (
			(data[defaultLanguage] as any)[message as string] || "MISSING TRANSLATION"
		);
	}
}

/**
 * @param default Default message if don't found in language pack (ex. "landing.title")
 * @param language Force language pack (ex. "en")
 */
type LanguageOptions = {
	default?: string;
	language?: string;
};

/**
 * Type of language pack with messages
 */
type LanguageData = { [language: string]: { [message: string]: string } };

export default t;
