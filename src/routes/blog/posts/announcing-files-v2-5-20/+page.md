---
title: Announcing Files, version 2.5.20
description: Push Git commits to remote repositories, splash screen, updated icons, support for ownCloud.
thumbnail: /blog-resources/files2-5-20/HeroImage.jpg
date: 7/24/2023
author: files-community
---

We're excited to announce that version 2.5.20 is now available. If you already have Files, you'll get a notification in the app to update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) as a way to support the project.

**TL;DR:** This update adds support for pushing Git commits, an improved startup experience, updated toolbar and status icons, support for editing tags from the Details pane, and more. Continue reading to learn more about these changes.

## What's new in v2.5.20

### Push Git commits to remote repositories

To further improve our integration with Git, we're excited to be adding support for pushing commits to remote repos. The Status Bar will display you how many local and remote commits you have, and you can click on it to access the sync, pull, and push options. We hope this feature makes it easier for you to collaborate with other developers and keep your code up to date.

<figure>
    <img src="/blog-resources/files2-5-20/GitPush.png" alt="Push commits to remote repos." />
</figure>

### Improvements to the startup experience

Startup performance is one of our highest priorities and something we're working on improving. We'd like the progress to be faster but unfortunately there are some limitations in the WinAppSdk framework. We hope these limitations will be resolved in future versions of WinAppSdk, but in the meantime, we've been working on a lot of smaller optimizations that we hope will add up over time. We're also adding a splash screen when the app is opened to indicate that the app is loading.  

<figure>
    <img src="/blog-resources/files2-5-20/SplashScreen.png" alt="Splash screen." />
</figure>

### Redesigned layout icons

We redesigned the icons in the layout flyout to be more consistent with the design language in Files. Additionally, the icon on the toolbar now changes to match the selected layout.

<figure>
    <img src="/blog-resources/files2-5-20/ToolbarIcon.png" alt="Toolbar icon." />
</figure>

### Edit tags and open Properties from the Details Pane

- Added support for editing file tags from the Details Pane
- Added a button to open the Properties window from the Details Pane
- Updated font styles to better utilize the space

<figure>
    <img src="/blog-resources/files2-5-20/EditTags.png" alt="Details Pane." />
</figure>

### Added support for ownCloud

Files will now detect and display ownCloud in the sidebar when the ownCloud client is installed.

### Change the behavior of actions using modifier keys

Holding down modifier keys when pressing on certain toolbar buttons will now change to behavior. For example, holding down `shift` while pressing the `delete` button on the toolbar will permanently delete the selected items.

### Added a path column when viewing search results in the Details layout

We added a path column to the Details layout when viewing the results of a search. This feature also enables you to also sort and group the search results by path.

### Added "Size on disk" property to the Properties window

We added a "Size on disk" property when viewing the properties of cloud folders.

### Added support for opening all tagged items from the Tags widget

We added a button to the Tags widget for opening all the items with that tag.

## Changes and Improvements

### Status Bar design

We added lines to divide the different sections in the Status Bar.

### Readme files are no longer automatically selected

Opening a folder with a `readme.md` file will no longer select the readme file.

### Improved quality of the icons in the pinned favorites section

We made several enhancements to improve the quality of icons in the pinned favorites section.

### Updated the Tag icon used throughout the app

The tag icon in the sidebar, right click context menu, and Tags widget was updated to have better contrast.

### Updated the Toolbar icons

We updated a number of toolbars icons, we also updated the icons for the cloud status, and Git status columns in the Details layout.

### Updated the DataGrid in the Details layout

We redesigned the DataGrid headers in the Details layout to better match the design language in Windows 11.

### Increased the maximum volume label length to 128 characters for UDF images

Based on user feedback, we increased the maximum volume label length to 128 characters for UDF images.

## Bug Fixes

- Fixed issue where part of the path in properties was incorrectly localized
- Fixed crash that would occur when navigating to Home from the Column layout
- Fixed issue where `%temp%` and `%tmp%` were not replaced with the correct path when entered from the Address Bar
- Fixed crash that would occur when trying to display tags
- Fixed crash that would occur when copying a files path
- Fixed issue where the options to Sort and Group by original folder were disabled in Recycle Bin
- Fixed alignment issues on the Status Bar
- Fixed issue where the System version of VS Code wasn't detected
- Fixed issue where long tag names weren't trimmed
- Fixed issue where checking out a Git branch would sometimes crash the app
- Fixed crash that would occur when pressing Ctrl+E on the Home page
- Fixed issue where the columns were misaligned in Recycle Bin
- Fixed issue where Status Center didn't update when archives were finished being extracted
- Fixed crash that would occur when enabling the Tags widget
- Fixed issue where "Open in new window" followed the startup settings
- Fixed high contrast support in the Properties window
- Fixed issue where folder names were sometimes not localized in the Details Pane
- Fixed issue where long strings in the Details Pane were cropped
- Fixed an issue that sometimes prevented dropping dragged items
- Fixed crash that would occur when an Inf file installation timed out
- Fixed an issue where it didn't work to open password protected archives
- Fixed issue where some options were missing in the Google Drive context menu
- Fixed issue that prevented using dual pane in the Column layout

### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/).
