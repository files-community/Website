---
title: Announcing Files v4.1.5
description: Announcing Files Preview v4.1.5 for users of the preview version.
thumbnail: /blog-resources/v4-1-5/Hero.webp
date: 6/22/2026
author: files-community
---

Today we are releasing **Files Preview v4.1.5** for users of the preview version.

An update icon should be displayed in the top right corner of the app for existing users, while new users can get started from our [download](/download/) page. Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or by sponsoring us on [GitHub](https://github.com/sponsors/yair100). Your support is greatly appreciated but entirely optional.

## What's New in Files v4.1.5

### Always show file extensions when renaming

When you rename a file, the file extension is now always shown even when [**Show file extensions**](/docs/customize-settings/files-and-folders/#show-file-extensions) is turned off in Settings. This allows users to easily edit file extensions, while at the same time keeping them hidden in the main file area.

<figure>
    <img src="/blog-resources/v4-1-5/FileExtensions.webp" alt="File extensions" />
</figure>

### Add metadata to media files

Editing media file metadata such as title, artists, album, year, and genre has been supported for a while, but until now you could only modify existing metadata. Starting with this release, you can also add metadata to fields that were previously empty.

### Remove album covers from media files

Modifying album covers has been supported for a while. Starting with this release, we added support for removing existing album covers. To remove an album cover, click the thumbnail preview in the Details page in Properties and click **Remove album cover**.

### Open folders in the other pane

A new **Open in other pane** action lets you open the currently selected folder in the other pane. This action is available when multiple panes are open in [dual pane](/docs/features/dual-pane/) mode and can be accessed from the right-click context menu and [Command Palette](/docs/features/command-palette/). You can assign it a keyboard shortcut from the [Actions](/docs/customize-settings/actions/) page in Settings.

<figure>
    <img src="/blog-resources/v4-1-5/OpenInOtherPane.webp" alt="Open in other pane" />
</figure>

### Open in new pane improvements

The [**Open in new pane**](/docs/features/dual-pane/) context menu entry has been reorganized to let you choose the arrangement of the new pane. This action is available when there is a single pane and can be accessed from the right-click menu and [Command Palette](/docs/features/command-palette/). You can assign it a keyboard shortcut from the [Actions](/docs/customize-settings/actions/) page in Settings.

<figure>
    <img src="/blog-resources/v4-1-5/OpenInNewPane.webp" alt="Open in new pane" />
</figure>

### Reverse tab scroll direction

A new setting under [**General > Scrolling**](/docs/customize-settings/general/#scrolling) lets you **reverse the tab scroll direction** when using the mouse wheel over the tab bar.

<figure>
    <img src="/blog-resources/v4-1-5/ScrollDirection.webp" alt="Tab scroll direction" />
</figure>

### Breadcrumb bar improvements

The breadcrumb bar has picked up a few refinements in this release:

- A chevron is now shown after the last item in the breadcrumb bar for a more consistent look.
- Right-clicking a breadcrumb now shows context menu options to open the folder in a new tab, new window, or new pane.

<figure>
    <img src="/blog-resources/v4-1-5/OmnibarContextMenu.webp" alt="Breadcrumb context menu" />
</figure>

### Archive selection

Creating a new archive now automatically selects it.

## Fixes

- Fixed an issue where the [Command Palette](/docs/features/command-palette/) would sometimes show duplicate entries.
- Fixed an issue where focusing a pane via the [Command Palette](/docs/features/command-palette/) didn't work as expected.
- Fixed an issue where drag and hover behavior didn't work correctly in the sidebar.
- Fixed an issue where the shortcut overlay icon was rendered too large.
- Fixed an issue where the **Open with** option appeared in the context menu when multiple items were selected.
- Fixed an issue where right-clicking a folder in Columns View would open it.
- Fixed an issue where opening shell flyouts sometimes closed the context menu.
- Fixed an issue where the Omnibar would sometimes lose focus.

## Conclusion

As always, we appreciate your feedback and suggestions on how to improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yair100/)
