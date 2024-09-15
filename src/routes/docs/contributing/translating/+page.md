---
title: Translating Files
---

Translations for Files are done through the popular cloud based platform Crowdin. Anyone with a Crowdin account can translate strings and help improve existing strings.

## Getting started with Crowdin

- A suitable web browser
- An account with [Crowdin](https://accounts.crowdin.com/register)

## Proofreading

Proofreading and approving strings is done by active community members; if you would like to proofread your language please start a discussion on Crowdin and we'll review your request at the earliest convenience.

## Screenshots

Where possible, screenshots have been added to provide more context on how strings are being used. Please note, Files is actively updated and it's possible that some screenshots are out of date.

## Syncing changes with the Files app

Translations are usually synced with the main Files project shortly before releasing an update to the stable branch.

## Placeholders

Numbers that are surrounded by curly brackets are the placeholder where actual values are set at runtime. Translators may have to consider under what context string are used, and so we sometimes add comments about at which sentences are basically shown and what they are for as long as possible.

For example:

```
Are you sure you want to delete {0} from {1}?
```

In this case, the first placeholder is for the file name that the user wants to delete and the second one is for the folder name that user wants to delete a file from.

## ICU message syntax

You may see some strings that have programmatic syntax.
It’s called [ICU message syntax](https://support.crowdin.com/icu-message-syntax), which is the standard syntax advanced by Unicode (and the parallel ISO 10646 standard) for efficiently processing text in any language and for maintaining text data integrity.

### Pluralization

Plural type is used to handle plural category variations, as each language has its own set of plural categories (for example, English has “one” and “other”, while Ukrainian has “one”, “few”, “many”, and “other”).

The following short tags are used to determine the plural categories:

- zero
- one (singular)
- two (dual)
- few (paucal)
- many (also used for fractions if they have a separate class)
- other (required: general plural form — also used if the language only has a single form)

In the Crowdin editor, you don’t have to manually add or delete plural categories to the translations you are making. Just click `Copy Source`, and the source string will be copied to the translation field with the number of plural categories right for the current target language.

<img src="/docs-resources/Crowdin-EditorCommandButtons.png" alt="Editor command buttons" />

For a complete list of languages with Language Plural Rules, visit [Unicode web page](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).

Please do care about:

- `other` tag must always be defined in any languages.
- If there are tags that have the same value as the `other` tag, they can be omitted.
- In the case of a specific translation for a learned value, you can use `=NUMBER {TEXT}`.You should only use this for values that are not specified using predefined tags in source language (`en-US`). This is most commonly used to define for the value `0`.

For example: there are no plurals in Japanese, so the `other` tag has to be defined despite the `one` and `other` tags having the same value in Japanese.

### Number

The purpose of the number type is to display different number values such as percentage, currency, and decimal numbers independently from the locale conventions for those. This enables adjustment of the message output to the number formats used in different locales.

The placeholder `{0, number}` only specifies the resulting number format. This is _never_ translated and must always be kept in the same form, but obviously can be moved to positions that require translation.

Please mind:

- The placeholder `#` indicates where the value will be inserted. This allows you to define a future position according to your translation.

### Remarks

If you're not sure which tags should be added, you can click the `i` button to see available tags. You can also click the 'generate skelton' button to see a preview.

<img src="/docs-resources/Crowdin-PreviewGenTip.png" alt="Generate skeleton to see preview" />

<img src="/docs-resources/Crowdin-AvailablePluralTypesTip.png" alt="See what kinds of plurals are permitted in this language" />

Also, Crowdin shows an error message if your translation is incorrectly formatted or translated.

## Discussions

If you have conprehensive questions about Files translation, please use [Crowdin Discussions](https://crowdin.com/project/files-app/discussions). We require that all discussions via Crowdin are **in English**; if otherwise they will be closed at our discretion.

For questions regarding a single translation please use the Comments area of each translation in Crowdin Editor. You can mark your comment as an Issue and choose a reason for why you want bring your issue to us. Once your discussion is marked as an issue by an administrator, your discussion will be highlighted in red so others can chip in.

## Localizing the code

We have our own extension to handle ICU message syntax.
`public static Strings.ToLocalized(this source, param parameters);`

```cs
"ItemsCount".ToLocalized(itemsCount);
```

```cs
var localized = "DeleteConfirmation".ToLocalized(fileName, parentFolderName);
```
