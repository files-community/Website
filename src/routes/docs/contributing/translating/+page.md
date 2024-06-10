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

We add some screenshots where possible to help translators understand better under what context strings are used.
When you're translating a string in Crowdin Editor, Crowdin automatically shows screenshots and highlightes target.

## See in Files

Maintainers often merge all translations that are approved right before a preview release or stable release published. Once gets merged and gets new release published, you can see translated words on your Windows.

## Placeholders

Numbers that are surrounded by curly brackets are the placeholder where actual values are set at runtime. Translators may have to consider under what context string are used, and so we sometimes add comments about at which sentences are basically shown and what they are for as long as possible.

For example:

```
Are you sure you want to delete {0} from {1}?
```

In this case, the first placeholder is for file name that user wants to delete and second one is for folder name that user wants to delete a file from.

## ICU message syntax

You may see some strings that have programmatic syntax.
It’s called ICU message syntax, which is the standard syntax advanced by Unicode (and the parallel ISO 10646 standard) for efficiently processing text in any language and for maintaining text data integrity

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

![image](https://github.com/0x5bfa/Website/assets/62196528/830ef3f0-945b-4dae-8381-00805c7bd590)

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

![image](https://github.com/0x5bfa/Website/assets/62196528/a66edfbc-1bc1-42d0-8843-76af330fc861)

![image](https://private-user-images.githubusercontent.com/84145589/336040857-ee954a9b-ef7b-4cf5-8e5e-a6394ebabb1c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc1ODY1ODIsIm5iZiI6MTcxNzU4NjI4MiwicGF0aCI6Ii84NDE0NTU4OS8zMzYwNDA4NTctZWU5NTRhOWItZWY3Yi00Y2Y1LThlNWUtYTYzOTRlYmFiYjFjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA1VDExMTgwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA2ZTJkYThiYzQzM2Q4YzQwOTY5OTY1ZmM1Njc2Mjk1OWRlNzkxNmY5NThkZDU3MjU4MTQxNGI2NTAzNzNiNDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.jUppxsC03mbEii6T4l8s7_IHB6vtvCs8nyhNLFuoCvM)

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
