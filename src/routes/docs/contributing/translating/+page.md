---
title: Translating Files
---

Files uses Crowding for translation, which is cloud based SaaS supports globalization of any application on any platform.

## Requirements

- Any browser that is the latest version.
- Crowdin account

## Usage

Files supports many languages and you can choose whatever language(s) you’d happy to translate. Crowdin has the same folder structure as Files source code and so you can go to resources.resw file and open Crowdin editor.
Once you translate a sentence shown, you can go to the next sentences by clicking Next button.

## Proofread

If you translate Files on a daily basis and want to proofread your language resources, we’ll verify and give you the role, so you can proofread and approve other’s translations in language(s) you proofread. That role can be re-verified sometimes.
 
## See in Files

Maintainer often merges all translations that are approved right before a preview release or stable release. Once gets merged and gets new release published, we can see translated words.

## Placeholders

Numbers that are curly brackets are placeholder where actual values are set at runtime. Translators may have to consider about contexts of the sentence, therefore we add comments about where sentences are basically shown and what they are for as far as possible.

For example:
```
Are you sure you want to delete {0} from {1}
```

In this case, the first placeholder is for file name that user wants to delete and second one is for folder name that user wants to delete a file from.

## ICU message syntax

You may see some strings that have programmatic syntax. It’s called ICU message syntax, which is official syntax advanced by Unicode.
You might want to change a string below, for example:

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
- The placeholder `#` indicates where the value will be inserted. This allows you to define a future position according to your translation.

For example, Japanese doesn't have plural but `other` tag has to be defined though source language (`en-US`) ans in Japanese `one` and `other` tag have the same value.

### Number

The placeholder "{0, number}" only specifies the resulting number format, this is never translated, it must always be kept in the same form, but can be moved to positions that require translation.

### Remarks
If you're not sure what tags should be added, don't worry. Click `i` button and see available tags, or use 'generate skelton' to see preview.

![image](https://github.com/0x5bfa/Website/assets/62196528/a66edfbc-1bc1-42d0-8843-76af330fc861)

![image](https://private-user-images.githubusercontent.com/84145589/336040857-ee954a9b-ef7b-4cf5-8e5e-a6394ebabb1c.png)

Also, Crowdin shows an error message if your translation is incorrectly formatted or translated.

## Using translated strings in the app



