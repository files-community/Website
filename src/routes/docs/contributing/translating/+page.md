---
title: Translating Files
---

# Translating

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

## Syntax
### Placeholders
Numbers that are curly brackets are placeholder where actual values are set at runtime. Translators may have to consider about contexts of the sentence, therefore we add comments about where sentences are basically shown and what they are for as far as possible.

For example:
```
Are you sure you want to delete {0} from {1}
```
> In this case, first place is for file name that user wants to delete and second one is for folder name that user wants to delete a file from.

### ICU message syntax
You may see some strings that have programmatic syntax. It’s called ICU message syntax, which is official syntax advanced by Unicode.
You might want to change a string below, for example:

```
Copy {0, plural, one {item}, other {items}}
```

> This will be extracted to ‘Copy item’ when placeholder is 1, ‘Copy items’ when placeholder is plural.

In Spanish:
```
Copiar {0, plural, one {artículo}, other {artículos}}
```
