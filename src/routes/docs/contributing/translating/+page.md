---
title: Translating Files
---

Translations for Files are done through the popular cloud based platform Crowdin. Anyone with a Crowdin account can translate strings and help improve existing strings.

## Getting started with Crowdin

- Any browser that work on Windows with the latest version
- [Crowdin account](https://accounts.crowdin.com/register)

Once you translate a string, proofreaders or maintainers rarely requests changes, but if you notice an issue with an approved translation, you can use the Comments section in Crowdin Editor with the Issue check box marked.

## Proofread

If you translate Files on a regular basis and would like to have access to proofread your language, please start a discussion on Crowdin and we'll review your request at the earliest convenience.

## Screenshots

A number of screenshots have been uploaded where possible to provide more context on how strings are being used. Please note, Files is actively updated and it's possible that some screenshots are out of date.```

## Including updated strings in Files

Your translations will usually be synced with the main Files project shortly before we release an updated version of Files to the stable branch.

## Placeholders

Numbers that are surrounded by curly brackets are the placeholder where actual values are set at runtime. Translators may have to consider under what context string are used, and so we sometimes add comments about at which sentences are basically shown and what they are for as long as possible.

For example:

```
Are you sure you want to delete {0} from {1}?
```

In this case, the first placeholder is for file name that user wants to delete and second one is for folder name that user wants to delete a file from.

## ICU message syntax

You may see some strings that have programmatic syntax.
It’s called [ICU message syntax](https://support.crowdin.com/icu-message-syntax), which is the standard syntax advanced by Unicode (and the parallel ISO 10646 standard) for efficiently processing text in any language and for maintaining text data integrity

### Pluralization

Plural type is used to handle plural category variations, as each language has its own set of plural categories (for example, English has “one” and “other”, while Ukrainian has “one”, “few”, “many”, and “other”).

The following short tags are used to determine the plural categories:

- zero
- one (singular)
- two (dual)
- few (paucal)
- many (also used for fractions if they have a separate class)
- other (required—general plural form—also used if the language only has a single form)

In the Editor, you don’t have to manually add or delete plural categories to the translations you are making. Just click `Copy Source`, and the source string will be copied to the translation field with the number of plural categories right for the current target language.

![image](https://github.com/files-community/Website/tree/main/static/docs-resources/Crowdin-OnlineEditorToolButtons.jpeg)

For complete list of languages with Language Plural Rules, visit [Unicode Org web page](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).

Please do care about:

- `other` tag has always to be defined in any languages.
- If there're tags that have the same value as `other` tag, they can be omitted.
- In case of a specific translation for a learned value, you can use "=NUMBER {TEXT}". Use only for values that are not specified using predefined tags in source language (`en-US`). This is most commonly used to define for the value `0`.

For example, Japanese doesn't have plural but `other` tag has to be defined though `one` and `other` tag have the same value in Japanese.

### Number

The purpose of the number type is to display different number values such as percentage, currency, and decimal numbers independently from the locale conventions for those. This enables adjustment of the message output to the number formats used in different locales.

The placeholder `{0, number}` only specifies the resulting number format, this is never translated, it must always be kept in the same form, but can be moved to positions that require translation.

Please do care about:

- The placeholder `#` indicates where the value will be inserted. This allows you to define a future position according to your translation.

### Remarks

If you're not sure what tags should be added, don't worry. Click `i` button and see available tags, or click 'generate skelton' to see preview.

![image](https://github.com/files-community/Website/tree/main/static/docs-resources/Crowdin-OnlineEditorSupportedPluralCategoryTooltip.jpeg)

![image](https://github.com/files-community/Website/tree/main/static/docs-resources/Crowdin-OnlineEditorGeneratePreviewInfoBar.jpeg)

Also, Crowdin shows an error message if your translation is incorrectly formatted or translated.

## Discussions

If you have conprehensive questions about Files translation, please use [Crowdin Discussions](https://crowdin.com/project/files-app/discussions). Note that when you post a discussion please describe what you'd like to discussion **in English**; otherwise it would be likely to be closed.

For questions regarding single translation, please use Comments area of each translation in Crowdin Editor. You can mark your comment as Issue and choose a reason why you want bring your issue to us. Once your issue is marked as Issue, others can pay attension since the comment will be colored to red.

## Develop with translated strings in the app

We have our own extension to handle ICU message syntax.
`public static Strings.ToLocalized(this source, param parameters);`

```cs
"ItemsCount".ToLocalized(itemsCount);
```

```cs
var localized = "DeleteConfirmation".ToLocalized(fileName, parentFolderName);
```
