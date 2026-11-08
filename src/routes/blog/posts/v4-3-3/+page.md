---
title: Announcing Files v4.3.3
description: Announcing Files Preview v4.3.3 for users of the preview version.
thumbnail: /blog-resources/v4-3-3/Hero.webp
date: 11/8/2026
author: files-community
---

Today we are releasing **Files Preview v4.3.3** for users of the preview version.

An update icon should be displayed in the top right corner of the app for existing users, while new users can get started from our [download](/download/) page. Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or by sponsoring us on [GitHub](/sponsor). Your support is greatly appreciated but entirely optional.

## Contents

- [What's new in Files v4.3.3](#whats-new-in-files-v433)
  - [Folder aliases](#folder-aliases)
  - [Windows 11 context menu items](#windows-11-context-menu-items)
  - [Smaller download size](#smaller-download-size)
- [Fixes](#fixes)

## What's new in Files v4.3.3

### Folder aliases

Folder aliases provide a quick way to jump to frequently used folders. Any folder can be assigned an alias, which is a short name that opens the folder from anywhere in Files when typed after **@** in the Omnibar. For example, assigning the alias `work` to a project folder means `@work` opens that folder. Aliases are created and managed under **Folder aliases** in the Folders settings, which includes a few built-in aliases for common folders, such as `@documents` and `@downloads`, to start with. (Thanks @yair100!)

### Windows 11 context menu items

Context menu items added by apps such as Windows Terminal and PowerToys, and by cloud providers such as OneDrive, are now shown in the context menu, grouped by app. Items from the classic context menu remain under **Show more options**. (Thanks @hez2010!)

### Smaller download size

The download size has been decreased. The app now uses the SQLite library included with Windows instead of bundling its own copy, and the web view used for previews and release notes no longer downloads optional browser components. (Thanks @yair100!)

## Fixes

- Fixed an issue where tooltips covered the caption buttons.
- Tooltips in the sidebar are now only shown when the item name is hidden.

## Conclusion

As always, we appreciate your feedback and suggestions on how to improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](/sponsor)
