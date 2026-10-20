---
title: Announcing Files v4.3.1
description: Announcing Files Preview v4.3.1 for users of the preview version.
thumbnail: /blog-resources/v4-3-1/Hero.webp
date: 10/20/2026
author: files-community
---

Today we are releasing **Files Preview v4.3.1** for users of the preview version.

An update icon should be displayed in the top right corner of the app for existing users, while new users can get started from our [download](/download/) page. Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or by sponsoring us on [GitHub](/sponsor). Your support is greatly appreciated but entirely optional.

## Contents

- [What's new in Files v4.3.1](#whats-new-in-files-v431)
  - [Faster startup](#faster-startup)
  - [Omnibar suggestions](#omnibar-suggestions)
  - [Separate file and folder counts](#separate-file-and-folder-counts)
- [Fixes](#fixes)

## What's new in Files v4.3.1

### Faster startup

Files now starts faster. Cloud drives, libraries, WSL distributions, and the items in the New menu are now prepared in the background ahead of time. (Thanks @hez2010!)

### Omnibar suggestions

The first suggestion in the Omnibar is now selected automatically, so pressing Enter opens it without needing to select it first. (Thanks @yair100!)

### Separate file and folder counts

A new setting in **Appearance** allows the status bar to show the number of files and folders separately instead of a single total item count. (Thanks @yair100!)

## Fixes

- Fixed a potential race condition during launch.
- Fixed an issue where credentials included in FTP addresses weren't used when connecting.
- Fixed an issue where reading folder details could block the app.
- Fixed an issue where hidden progress indicators were still animating.

## Conclusion

As always, we appreciate your feedback and suggestions on how to improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](/sponsor)
