---
title: Announcing Files v4.2.1
description: Announcing Files Preview v4.2.1 for users of the preview version.
thumbnail: /blog-resources/v4-2-1/Hero.webp
date: 7/26/2026
author: files-community
---

Today we are releasing **Files Preview v4.2.1** for users of the preview version.

An update icon should be displayed in the top right corner of the app for existing users, while new users can get started from our [download](/download/) page. Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or by sponsoring us on [GitHub](https://github.com/sponsors/yair100). Your support is greatly appreciated but entirely optional.

## What's New in Files v4.2.1

### Updated sidebar icons

The icons in the sidebar have been updated for a cleaner and more consistent look across the app.

### Auto size columns to fit

A new setting lets columns in [Details View](/docs/features/layout-modes/#details-view) automatically resize to fit their contents, so long file names and other properties are no longer clipped by the default column widths.

### Improved behavior when opening encrypted archives

Opening password-protected archives is now more reliable. The password prompt and follow-up actions have been improved, whether you're browsing, extracting, or opening a file from within an encrypted archive.

### Improved messaging when failing to pull from Git

When a Git pull fails, Files now displays a clearer message explaining what went wrong, making it easier to understand why the operation didn't complete.

### Inline 'folder not found' message

The **folder not found** dialog has been replaced with an inline message shown directly in the file area, so navigating to a missing location no longer interrupts your workflow with a modal.

### Prompt when compressing fails

When Files can't compress one or more items, a prompt now appears with details about the problem so you can decide how to proceed.

### Improved folder loading performance

Folder listings, particularly for locations with a large number of items, now load faster.

## Fixes

- Fixed an issue where the **Customize** tab was shown in Properties for folders that don't support custom icons.
- Fixed an issue with Git repository status not updating correctly.
- Fixed an issue with opening archives from network locations.
- Fixed an issue where folder sizes weren't calculated in network share listings.
- Fixed an issue where drives were duplicated on the Home page after changing the drive letter.
- Fixed an issue where the failed status wasn't reported when copying or moving items that no longer exist.
- Fixed reading `.gz` archives that don't store the original file name.
- Fixed an issue where no warning was shown when moving an open file.
- Fixed an issue where the "This app can't run on your PC" dialog was displayed inappropriately.
- Fixed an issue where folder related actions were enabled for archives.
- Fixed an issue where Windows Terminal wouldn't open when launched from Files.
- Fixed an issue where extracted files were not grouped correctly.
- Fixed an issue where the **Give access** menu option was missing.
- Fixed an issue where no error was displayed when opening a corrupted executable.
- Fixed an issue where the Properties window sometimes opened in the background.
- Fixed an issue where clicking a selected file would switch focus to the main window.
- Fixed an issue where search continued running after navigating away or closing a tab.

## Conclusion

As always, we appreciate your feedback and suggestions on how to improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yair100/)
