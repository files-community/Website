---
title: Announcing Files v4.3
description: We're excited to announce the general availability of Files v4.3.
thumbnail: /blog-resources/v4-3-0/Hero.webp
date: 9/22/2026
author: files-community
---

Today we are releasing **Files v4.3** for all users. New users can grab it from our [download](/download/) page or the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite). If you'd like to support the project, you can also [sponsor us on GitHub](/sponsor).

## Contents

- [What's new in Files v4.3](#whats-new-in-files-v43)
  - [Faster startup](#faster-startup)
  - [Smaller download size](#smaller-download-size)
  - [Faster navigation](#faster-navigation)
  - [Sharper icons and thumbnails](#sharper-icons-and-thumbnails)
  - [Lower memory usage](#lower-memory-usage)
  - [Git improvements](#git-improvements)
  - [Automatic update checks](#automatic-update-checks)
  - [Improved drop indicators](#improved-drop-indicators)
  - [Natural sorting in the sidebar](#natural-sorting-in-the-sidebar)
- [Fixes](#fixes)

## What's new in Files v4.3

Files v4.3 is all about performance. We've made significant changes under the hood that make the app faster to start, quicker to navigate, and lighter on system resources.

### Faster startup

Files now starts noticeably faster, both when launching the app from scratch and when resuming it from the background. (Thanks @hez2010!)

<figure>
    <video src="/blog-resources/v4-3-0/StartupComparison.mp4" width="1920" height="768" autoplay loop muted playsinline aria-label="Cold start comparison of Files v4.2 and Files v4.3"></video>
</figure>

### Smaller download size

Files is now quicker to download and set up on a new PC. The .NET Desktop Runtime is now included with the app, so it no longer needs to be installed separately. Altogether, the download size has been decreased by over 60%. (Thanks @hez2010!)

### Faster navigation

Navigating between folders is now noticeably quicker and more responsive. Thumbnails and icons also load slightly faster and no longer briefly flash when opening a folder. (Thanks @hez2010 and @yair100!)

<figure class="margin-bottom">
    <video src="/blog-resources/v4-3-0/NavigationComparison.mp4" width="1920" height="768" autoplay loop muted playsinline aria-label="Navigation and scrolling comparison of Files v4.2 and Files v4.3"></video>
    <figcaption>Navigation and scrolling</figcaption>
</figure>

### Sharper icons and thumbnails

Icons and thumbnails in the grid layout are now DPI aware, so they render crisply on high-resolution and scaled displays. (Thanks @yair100!)

### Lower memory usage

Files now uses memory more efficiently while running, reducing memory pressure during everyday browsing. (Thanks @yair100 and @hez2010!)

### Git improvements

Git operations have picked up a few improvements in this release. (Thanks @hez2010!)

- Long-running Git operations now report their progress, so you can see what's happening instead of waiting on an operation with no feedback.
- When a Git operation fails, the actual error message is now shown instead of a generic timeout message.
- Git operations now work with repositories that were cloned over SSH.
- Git repositories are now detected faster when opening a folder.

### Automatic update checks

Files now periodically checks for updates while the app is running, so you'll be notified about new versions without needing to restart the app. (Thanks @yair100!)

### Improved drop indicators

When dragging files and folders over an item in the sidebar or over a tab, the drop target is now highlighted with an accent colored border, making it clearer where your items will be moved or copied. (Thanks @yair100!)

### Natural sorting in the sidebar

Folders in the sidebar and breadcrumb Omnibar are now sorted naturally, so folders like "Folder 2" appear before "Folder 10". (Thanks @yair100!)

## Fixes

- Fixed an issue where the Omnibar regained focus when switching back to the window.
- Fixed a crash when focusing the pane after navigating using the Omnibar.
- Fixed a crash when navigating Columns View with the keyboard.
- Fixed an issue where the Home page didn't update after renaming a drive.
- Fixed an issue where the drive letter was duplicated when renaming a drive with drive letters shown first.
- Fixed an issue where the Omnibar displayed the drive path after renaming a drive from the Home page.
- Fixed an issue where the app would briefly freeze while refreshing the widgets on the Home page.
- Fixed an issue where items on the Home page couldn't be opened with touch.
- Fixed a crash when dropping items onto a folder from another window.
- Fixed an issue where the move operation was offered when dragging items within the root directory of a drive.
- Fixed an issue where sidebar items could be dragged onto themselves.
- Fixed an issue where the app would freeze on startup while loading network drives.
- Fixed an issue where the Release Notes tab would change the order of restored tabs when using [**Continue where you left off**](/docs/customize-settings/general/#startup-settings).
- Fixed an issue where folder names briefly showed the untranslated name on first launch.
- Fixed a crash when creating a new file while using a non-English display language.
- Improved the click to rename behavior.
- Fixed an issue where the Share UI displayed previously shared items instead of the current selection.
- Fixed an issue where shortcuts to Store and shell apps didn't open.
- Fixed an issue where the flatten folder option was shown for archives.
- Fixed an issue where the desktop Recycle Bin icon didn't update after emptying the bin.

## Contributors

Files is made possible through the collaborative efforts of the open-source community on GitHub. The following developers have contributed to this release:

- @0x5bfa
- @hez2010
- @Josh65-2201
- @TRUINGLol
- @yair100

## Conclusion

As always, we appreciate your feedback and suggestions on how to improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) | Sponsor us on [GitHub](/sponsor)
