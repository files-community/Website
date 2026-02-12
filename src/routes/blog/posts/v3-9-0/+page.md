---
title: Announcing General Availability of Files v3.9
description: Today, we're excited to announce the release of Files v3.9 for all users.
thumbnail: /blog-resources/v3-9/Hero.png
date: 1/29/2025
author: files-community
---

I'm excited to announce that Files v3.9 is now available! 🎉 Existing users will receive an update notification in the top right corner of the app, while new users can get started for free from our [download page](/download/). Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsoring us on [GitHub](https://github.com/sponsors/yair100). Your support is greatly appreciated but entirely optional.

## Changes

### Introducing the Cards View layout

We've added a new **Cards View** layout that includes standard metadata like the item thumbnail, name, type, and size, along with context specific properties. For instance, images display their dimensions, media files show their duration, and phones and tablets show their storage details. File tags and sync status for cloud drives are also displayed. This new view replaces the former Tiles View.

<figure>
    <img src="/blog-resources/v3-9/CardsViewMedium.png" alt="Medium cards" />
    <figcaption>Medium Cards</figcaption>
</figure>

<figure>
    <img src="/blog-resources/v3-9/CardsViewSmall.png" alt="Small cards" />
    <figcaption>Small Cards</figcaption>
</figure>

### Improved contrast in the Grid View layout

The **Grid View** layout now features an accent colored border around selected items, improving visibility and contrast.

<figure>
    <img src="/blog-resources/v3-9/GridViewContrast.png" alt="Improved contrast in Grid View layout" />
    <figcaption>Selected item in the Grid View layout</figcaption>
</figure>

### Thumbnail sizes

Icon and thumbnail sizes in the Details View, List View, Columns View, and Cards View are now synchronized with the selected layout size.

<figure>
    <img src="/blog-resources/v3-8-13/DetailsViewIconSizes.png" alt="Large icons in the Details View layout" />
    <figcaption>Large icons in the Details View layout</figcaption>
</figure>

### Storage information in the Details Pane

We've added a new section to the **Details Pane** that displays drive storage details, giving you quick access to this information.

<figure>
    <img src="/blog-resources/v3-9/DriveDetails.png" alt="Storage information in the Details Pane" />
    <figcaption>Storage information in the Details Pane</figcaption>
</figure>

### Custom shortcut names

You can now assign custom names directly from the **Create New Shortcut** dialog. Previously, shortcut names were automatically assigned and could only be renamed after creation.

<figure>
    <img src="/blog-resources/v3-9/ShortcutDialog.png" alt="Create shortcut dialog" />
    <figcaption>Create New Shortcut dialog</figcaption>
</figure>

### Revamped Release Notes experience

We've revamped the **Release Notes** experience. The toolbar button that appears after an update now features a fresh new icon. We've also added a new [action](/docs/customize-settings/actions/) that lets you access the Release Notes dialog anytime, not just after an update. Finally, the Release Notes dialog now directly displays changelogs from the Files website.

<figure>
    <img src="/blog-resources/v3-9/ReleaseNotesIcon.png" alt="What's New toolbar button" />
    <figcaption>Open Release Notes button</figcaption>
</figure>

### Redesigned Update Files button

The **Update Files** toolbar button, which appears when an update is available, has been redesigned with a new accent colored icon. It's now more noticeable, helping you update Files more easily.

<figure>
    <img src="/blog-resources/v3-9/UpdateFilesIcon.png" alt="Update Files button" />
    <figcaption>Update Files button</figcaption>
</figure>

### DPI awareness improvements

Icons and thumbnails are now **DPI aware** in the Details View, List View, Columns View, Cards View, the search suggestion flyout, and the Tags Widget, ensuring clarity on all displays.

### Updated Tags Widget

The **Tags Widget** has been refreshed to align with the overall UI design. We've also added a new feature allowing you to apply tags by dragging and dropping files or folders onto tags in the sidebar, making organization even easier.

### Enhanced support for image files

You can now rotate JPEG-XR images using the toolbar or right click context menu. Additionally, you can now set JPEG-XR images as your desktop or lockscreen background directly from Files.

### Auto focus new tabs

We've added a new setting to automatically switch to newly created tabs. This option is available on the General Settings page.

<figure>
    <img src="/blog-resources/v3-9/AlwaysSwitchTabs.png" alt="Settings dialog" />
    <figcaption>Auto focus tabs setting</figcaption>
</figure>

### Improved Properties Window

You can now browse for `.icl` files on the customize page in the **Properties Window**. We've also added support for modifying the 'compress contents' attribute, and the shortcut page now allows you to adjust the window size for opening shortcut files.

<figure>
    <img src="/blog-resources/v3-9/CompressAttribute.png" alt="Compress attribute" />
    <figcaption>Compress contents attribute</figcaption>
</figure>

<figure>
    <img src="/blog-resources/v3-9/ShortcutWindowArgs.png" alt="Shortcut window option" />
    <figcaption>Shortcut window options</figcaption>
</figure>

### New launch protocols

We've added individual launch protocols for each branch of Files, making it easier to work with different versions.

| Branch  | Alias             | URI Scheme      |
|---------|-------------------|-----------------|
| Dev     | files-dev.exe     | files-dev:      |
| Preview | files-preview.exe | files-preview:  |
| Stable  | files-stable.exe  | files-stable:   |

### Performance enhancements

Items in the breadcrumb flyout now begin loading as soon as the flyout starts to open, rather than waiting for it to fully open. We've also removed the open and close animations from the breadcrumb, back button, and forward button flyouts. Additionally, thumbnails within these flyouts are now loaded lazily, reducing initial load times and improving overall responsiveness.

### Improved Drag & Drop functionality

The Files window now stays in the background when you drag items to other applications. Additionally, you can now drag files directly from the Recent Files widget into other applications.

### Archive support

You can set Files as the default application for opening `.gz` archives, streamlining access to compressed files. We've also updated our 7zip dependencies to leverage the latest improvements.

### Details View settings

Toggling columns via the Settings Dialog now updates all existing tabs. Previously, changes only affected new tabs opened after the change.

### Updated Home Page

We've improved the Home Page by removing the empty toolbar area, providing a cleaner look.

### Address Bar keyboard navigation

We've added support for opening breadcrumb flyouts using the `Space` and `Enter` keys, improving keyboard navigation.

### Taskbar

The number of open tabs is no longer displayed in the Windows Taskbar.

### Cloud Drive support

Added support for Lucid Link v3.


## Fixes

### Actions

- Fixed a crash that would occur when using the 'Storage Sense' [action](/docs/customize-settings/actions/).
- Resolved an issue with the 'Run with PowerShell' action not working for files with spaces in their names.

### Address Bar

- Fixed keyboard navigation in the address path bar.
- Resolved an issue where the address bar flyouts sometimes displayed duplicate items.

### Archives

- Fixed an issue where the size wasn't displayed after creating a new archive.

### Cloud Drives

- Addressed various issues with Google Drive support.

### Columns View

- Fixed an issue that caused unexpected scrolling in the Columns View layout.
- Resolved a crash that would occur when opening the context menu in the Columns View layout.

### Drag & Drop

- Resolved multiple issues with drag & drop support between Files and other applications.

### Git Repos

- Fixed an issue where soft link details were misaligned in Git repositories.

### Group By and Sort By

- Resolved an issue where changing the grouping and sorting preferences would only update the current tab.

### Right Click Context Menu

- Fixed an issue where right-clicking a file would display the option to open in a new tab.

### Startup

- Fixed a crash that would occur when starting Files from WSL directories.
- Resolved startup freeze caused by a heavily populated Recycle Bin.
- Fixed an issue where the previous session's tabs were briefly displayed when the startup setting was set to 'open new tab'.
- Fixed an issue where launching Files from Terminal didn't use the correct path.

### Tabs

- Resolved an issue where tabs weren't placed in the correct order when dragged from other windows.

### Tags

- Resolved an issue with displaying properties for tagged items.
- Fixed an issue where tags sometimes displayed with the wrong color.

### Title Bar

- Fixed an issue where the title bar drag region was sometimes missing.


## Contributors

Files is made possible through the collaborative efforts of the open-source community on GitHub. The following developers have contributed to this release:

- @0x5bfa
- @andreistaravoitau
- @ashrafmansuri
- @d2dyno1
- @el-ev
- @ferrariofilippo
- @gave92
- @Jack251970
- @Lamparter
- @marcofranzen99
- @mdtauk
- @Roilin-Lab
- @viruseg
- @wharvex
- @XTorLukas


## Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yair100/)