---
title: Announcing Files v4.2
description: We're excited to announce the general availability of Files v4.2.
thumbnail: /blog-resources/v4-2-0/Hero.webp
date: 7/5/2026
author: files-community
---

Today we are releasing **Files v4.2** for all users. Existing users will see an update icon in the top-right of the app. New users can grab it from our [download](/download/) page or the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite). If you'd like to support the project, you can also [sponsor us on GitHub](/sponsor).

## Contents

- [What's new in Files v4.2](#whats-new-in-files-v42)
  - [Tree View sidebar](#tree-view-sidebar)
  - [Open With toolbar flyout](#open-with-toolbar-flyout)
  - [Drag a tab to create a new pane](#drag-a-tab-to-create-a-new-pane)
  - [Open folders in the other pane](#open-folders-in-the-other-pane)
  - [Open in new pane improvements](#open-in-new-pane-improvements)
  - [Always show file extensions when renaming](#always-show-file-extensions-when-renaming)
  - [Media file metadata improvements](#media-file-metadata-improvements)
  - [Breadcrumb bar improvements](#breadcrumb-bar-improvements)
  - [Search in Toolbar Customization](#search-in-toolbar-customization)
  - [Cycle layouts with the scroll wheel](#cycle-layouts-with-the-scroll-wheel)
  - [Reverse tab scroll direction](#reverse-tab-scroll-direction)
  - [Improved tab tear off](#improved-tab-tear-off)
  - [Improved continue where you left off](#improved-continue-where-you-left-off)
  - [Network Discovery banner](#network-discovery-banner)
  - [Other highlights](#other-highlights)
- [Fixes](#fixes)

## What's new in Files v4.2

### Tree View sidebar

The sidebar now includes a new **Tree View** that displays your folders in an expandable hierarchy, making it easier to navigate deeply nested directories without leaving the current location.

<figure>
    <img src="/blog-resources/v4-2-0/TreeViewSidebar.webp" alt="Tree View sidebar" />
</figure>

### Open With toolbar flyout

A new **Open With** flyout has been added to the toolbar, giving you quick access to the apps that can open the currently selected file.

To enable the **Open with...** button:

1. Right-click the toolbar and select **Customize toolbar**.
2. Expand the **Open** group on the left.
3. Drag **Open With...** to the list of added toolbar items.

<figure>
    <img src="/blog-resources/v4-2-0/OpenWith.webp" alt="Open With toolbar flyout" />
</figure>

### Drag a tab to create a new pane

You can now open a second pane by dragging a tab. Drop the tab on the left or right side of the file area for a vertical split, or on the top or bottom for a horizontal split, making it even easier to work with multiple locations at once.

<figure>
    <img src="/blog-resources/v4-2-0/DragPane.webp" alt="Drag a tab to create a new pane" />
</figure>

### Open folders in the other pane

A new **Open in other pane** action lets you open the currently selected folder in the other pane. This action is available when multiple panes are open in [dual pane](/docs/features/dual-pane/) mode and can be accessed from the right-click context menu and [Command Palette](/docs/features/command-palette/). You can also assign it a keyboard shortcut from the [Actions](/docs/customize-settings/actions/) page in Settings.

<figure>
    <img src="/blog-resources/v4-2-0/OpenInOtherPane.webp" alt="Open in other pane" />
</figure>

### Open in new pane improvements

The [**Open in new pane**](/docs/features/dual-pane/) context menu entry has been reorganized to let you choose the arrangement of the new pane. This action is available when there is a single pane and can be accessed from the right-click menu and [Command Palette](/docs/features/command-palette/). You can also assign it a keyboard shortcut from the [Actions](/docs/customize-settings/actions/) page in Settings.

<figure>
    <img src="/blog-resources/v4-2-0/OpenInNewPane.webp" alt="Open in new pane" />
</figure>

### Always show file extensions when renaming

When you rename a file, the file extension is now always shown even when [**Show file extensions**](/docs/customize-settings/files-and-folders/#show-file-extensions) is turned off in Settings. This allows users to easily edit file extensions, while at the same time keeping them hidden in the main file area.

<figure>
    <img src="/blog-resources/v4-2-0/FileExtensions.webp" alt="File extensions" />
</figure>

### Media file metadata improvements

Editing media file metadata such as title, artists, album, year, and genre has been supported for a while, but until now you could only modify existing metadata. Starting with this release, you can also add metadata to fields that were previously empty.

Modifying album covers has been supported for a while as well. Starting with this release, we added support for removing existing album covers. To remove an album cover, click the thumbnail preview in the Details page in Properties and click **Remove album cover**.

### Breadcrumb bar improvements

The breadcrumb bar has picked up a few refinements in this release:

- A chevron is now shown after the last item in the breadcrumb bar for a more consistent look.
- Right-clicking a breadcrumb now shows context menu options to open the folder in a new tab, new window, or new pane.

<figure>
    <img src="/blog-resources/v4-2-0/OmnibarContextMenu.webp" alt="Breadcrumb context menu" />
</figure>

### Search in Toolbar Customization

The **Toolbar Customization** window now includes a search box that filters the list of available items as you type, making it easier to find a specific action when you are customizing the toolbar.

To open Toolbar Customization, right-click the toolbar and select **Customize toolbar**.

### Cycle layouts with the scroll wheel

**Ctrl** + scroll on the file area already resizes items within the current layout. Starting with this release, once you reach the smallest or largest size, continuing to scroll now advances to the next [layout mode](/docs/features/layout-modes/) instead of stopping, letting you move between all layouts.

### Reverse tab scroll direction

A new setting under [**General > Scrolling**](/docs/customize-settings/general/#scrolling) lets you **reverse the tab scroll direction** when using the mouse wheel over the tab bar.

<figure>
    <img src="/blog-resources/v4-2-0/ScrollDirection.webp" alt="Tab scroll direction" />
</figure>

### Improved tab tear off

When you drag a tab out of the tab bar to create a new window, the new window now opens at the position where you dropped the tab.

### Improved continue where you left off

The startup behavior for [**Continue where you left off**](/docs/customize-settings/general/#startup-settings) has been improved so that previously opened tabs are restored more reliably and in the correct order across sessions.

### Network Discovery banner

When Network Discovery is turned off in Windows, Files now displays a banner in the Network page letting you know that some network locations may not appear.

<figure>
    <img src="/blog-resources/v4-2-0/NetworkBanner.webp" alt="Network Discovery banner" />
</figure>

### Other highlights

- Items inside the Windows Fonts folder now show proper thumbnails, so you can preview a font's appearance directly from the file list.
- Creating a new archive now automatically selects it.
- The File In Use dialog now includes a **Skip** button.

## Fixes

- Fixed an issue where the [Command Palette](/docs/features/command-palette/) would sometimes show duplicate entries.
- Fixed an issue where focusing a pane via the [Command Palette](/docs/features/command-palette/) didn't work as expected.
- Fixed an issue where drag and hover behavior didn't work correctly in the sidebar.
- Fixed an issue where the shortcut overlay icon was rendered too large.
- Fixed an issue where the **Open with** option appeared in the context menu when multiple items were selected.
- Fixed an issue where right-clicking a folder in Columns View would open it.
- Fixed an issue where opening shell flyouts sometimes closed the context menu.
- Fixed an issue where the Omnibar would sometimes lose focus.
- Fixed an issue where launching Files from the command line didn't work correctly in some scenarios.
- Fixed an issue where keyboard shortcuts didn't work on the Release Notes page.
- Fixed an issue where toolbar buttons were sometimes missing.
- Fixed an issue with keyboard focus in [Columns View](/docs/features/layout-modes/#columns-view).
- Fixed an issue where archives weren't displayed in the Recent Files widget.
- Fixed an issue where a pinned library didn't display correctly in the sidebar.
- Fixed an issue where shortcuts weren't displayed in search results.

## Conclusion

As always, we appreciate your feedback and suggestions on how to improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! :)

---

Download Files from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) | Sponsor us on [GitHub](/sponsor)
