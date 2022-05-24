import { i18nObject } from 'typesafe-i18n'
import { loadLocale } from './i18n-util.sync';
import { baseLocale, locales, loadedLocales } from './i18n-util';

const getLocale = () =>
{
    if (typeof window !== 'undefined')
    {
        const hostname = window.location.hostname;
        for (let locale of locales)
        {
            if (hostname.startsWith(locale + '.'))
            {
                return locale;
            }
        }
    }
    return baseLocale;
};

const selectedLocale = getLocale();
loadLocale(selectedLocale);

export const text = i18nObject(selectedLocale, loadedLocales[selectedLocale], {});
