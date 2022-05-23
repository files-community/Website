import { i18nObject } from 'typesafe-i18n'
import { detectLocale, queryStringDetector } from 'typesafe-i18n/detectors';
import { loadLocale } from './i18n-util.sync';
import { baseLocale, loadedLocales, locales } from './i18n-util';

const selectedLocale = detectLocale(baseLocale, locales, queryStringDetector); 

loadLocale(selectedLocale);

export const text = i18nObject(selectedLocale, loadedLocales[selectedLocale], {});
