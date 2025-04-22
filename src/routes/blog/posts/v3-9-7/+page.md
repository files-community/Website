---
title: Announcing Files Preview v3.9.7
description: Announcing Files Preview v3.9.7 for users of the preview version.
thumbnail: /blog-resources/preview/Hero.png
date: 4/22/2025
author: files-community
---

Today we are releasing **Files Preview v3.9.7** for users of the preview version. New users can get started from our [download page](/download/). If you'd like to support the project, consider purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or sponsoring us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.

## Changes

### Refreshed Release Notes experience

We've replaced the Release Notes dialog with a dedicated tab that opens automatically after updating Files. This makes it easier to explore what's new and improved in each release.

### Placeholder content for an empty sidebar

When all sidebar sections are hidden, placeholder content is now displayed to improve usability and provide helpful context.

<figure>
    <img src="/blog-resources/v4/EmptySidebar.png" alt="Sidebar placeholder content" />
    <figcaption>Sidebar placeholder content</figcaption>
</figure>

### Settings context menu

Right-clicking the settings button now opens a context menu with an option to directly access the settings JSON file.

<figure>
    <img src="/blog-resources/v4/SettingsContextMenu.png" alt="Settings context menu" />
    <figcaption>Settings context menu</figcaption>
</figure>

### Customizable size formats

You can now customize how file size units are displayed. This setting is available on the [Files & folders](/docs/customize-settings/files-and-folders/) settings page, giving you more control over how information is presented.

<figure>
    <img src="/blog-resources/v4/SizeFormatSetting.png" alt="Size format setting" />
    <figcaption>Size format setting</figcaption>
</figure>

### Automatic encoding detection for ZIP files

We've added support for automatic encoding detection when extracting ZIP files. If needed, you can override the encoding manually from the extract archive dialog.

<figure>
    <img src="/blog-resources/v4/ArchiveEncoding.png" alt="Extract archive dialog" />
    <figcaption>Extract archive dialog</figcaption>
</figure>

### UTF-8 encoding for ZIP creation

When creating ZIP archives, Files now uses UTF-8 encoding by default, ensuring better compatibility across different systems.

## Fixes

### Updates

- Fixed a crash that would sometimes occur durring updates.

### Toolbar

- Fixed an issue where toolbar buttons sometimes displayed the wrong icon state.
- Fixed an issue where the extract button was sometimes missing from the toolbar.
- Fixed the menu label for overflow items in the toolbar.

### File sorting

- Fixed sorting issues with files containing #-# numbering.
- Fixed an issue where name sorting was case-sensitive.

### Git

- Fixed errors that sometimes occurred with shortcuts in Git repositories.

### Properties

- Fixed an issue where **Cleanup** and **Format** options were incorrectly displayed for Cloud Drives.

## Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2/)
