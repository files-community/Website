---
title: Announcing Files v4.1.2
description: Announcing Files Preview v4.1.2 for users of the preview version.
thumbnail: /blog-resources/v4-1-2/Hero.webp
date: 6/7/2026
author: files-community
---

Today we are releasing **Files Preview v4.1.2** for users of the preview version.

An update icon should be displayed in the top right corner of the app for existing users, while new users can get started from our [download](/download/) page. Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or by sponsoring us on [GitHub](https://github.com/sponsors/yair100). Your support is greatly appreciated but entirely optional.

## What's New in Files v4.1.2

### Retain selection across layouts

When switching between layouts, the previously selected item now stays selected, so you don't lose your place when changing layouts.

### Remove all tags from a file

You can now quickly clear every tag assigned to one or more files. There are a few ways to use the new action:

- **From the context menu** — right-click an item, open the **Tags** submenu, and choose **Remove tags**.
- **From the toolbar** — when the **Edit Tags** button is pinned to the toolbar, the same option appears in its menu.
- **From the Command Palette** — open the Command Palette and search for **Remove tags**. You can also assign your own keyboard shortcut to it from Settings.

If you haven't pinned the **Edit Tags** button to the toolbar, you can add it in a few steps:

1. Right-click the toolbar and select **Customize toolbar**.
2. Expand the **File System** group on the left.
3. Drag **Edit Tags...** to the list of added toolbar items.

<figure>
    <img src="/blog-resources/v4-1-2/RemoveTags.webp" alt="Remove tags menu option" />
</figure>

### Updated OneDrive icon

The OneDrive icon has been updated to the latest version. Files now loads it directly from the OneDrive executable, so it always matches the icon used by OneDrive itself.

## Fixes

- Fixed an issue where the Signatures page would occasionally cause a crash.
- Fixed an issue where the Play action wasn't available when a single media file was selected.
- Fixed an issue where Smart Extract would extract archives to the wrong location when switching tabs.
- Fixed an issue where tag search excluded folders when grouping by type.
- Fixed an issue where thumbnails would sometimes fail to refresh after a file was modified.
- Fixed an issue where a BitLocker locked drive wasn't displayed.

## Conclusion

As always, we appreciate your feedback and suggestions on how to improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yair100/)
