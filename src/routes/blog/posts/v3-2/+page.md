---
title: Announcing Files v3.2
description: List View layout, edit album covers, higher quality thumbnails.
thumbnail: /blog-resources/v3-2/Hero.png
date: 2/12/2024
author: files-community
---

We're excited to announce that starting today, Files v3.2 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsor us on [GitHub](https://github.com/sponsors/yaira2) to help support the project.

**TL;DR:** Files v3.2 adds a List View layout, support for editing album covers from the properties window, higher quality thumbnails, and more. Continue reading to learn more about these changes.

## What's new in v3.2

### Browse large folders with confidence

We know how frustrating it can be when Files crashes or freezes while browsing large folders. That’s why we’ve made significant improvements to enhance stability. Our team has worked hard to reduce crashes when browsing large folders and when adding and deleting items. We believe these improvements will make your experience smoother and more enjoyable.

### Display more items with List View

List View is a new layout option that lets you display more items while taking up less space. It only shows the icons and file names of your items, without any extra details. This is perfect for when you want to quickly scan through a large number of files or folders. To use List View, click on the layout icon on the toolbar and choose List View from the flyout menu.

<figure>
    <img src="/blog-resources/v3-2/ListView.png" alt="List View layout" />
</figure>

### Customize your album covers

You can now change the album covers on media files directly from Files. This is a great way to personalize your music collection and make it easier to find your favorite albums. To do this, right-click on any media file and choose Properties. Click on the preview of the current cover and select a new image when prompted.

<figure>
    <img src="/blog-resources/v3-2/AlbumCovers.png" alt="Album cover preview" />
</figure>

### Enhanced thumbnails for your files

We’ve enhanced the resolution and contrast of our thumbnail previews to make them more visually appealing and easy to identify. We also fixed a bug where thumbnails would sometimes fail to load in OneDrive.

<figure>
    <img src="/blog-resources/v3-2/ThumbnailsOne.png" alt="Thumbnail comparison" />
</figure>

<figure>
    <img src="/blog-resources/v3-2/ThumbnailsTwo.png" alt="Thumbnail comparison" />
</figure>


## Changes and Improvements

- Added options to hide the built-in items from the right click context menu
- Added an option to disable auto scroll when navigating up the file tree
- Updated the search query to include unindexed items by default
- Creating a new file now adds it to the Recent Files list
- Creating a shortcut will now use the naming preferences from File Explorer
- Clicking a tag in the Details Pane will now start a search for other tagged items
- Added support for setting jfif files as the desktop & lockscreen background
- Improved the performance when launching Files in the background at Windows startup
- Improved support for high contrast themes
- Updated the cloud status icon in the Columns View
- Added support for pinning executable shortcuts to the Start Menu
- Fixed issue where updating the default layout wouldn't refresh open tabs
- Fixed issue where renaming a tag wouldn't save the new name
- Fixed issue where certain changes in the Properties Window couldn't be canceled
- Fixed issue where switching from Details to Tiles would sometimes result in blurry icons
- Fixed issue where thumbnails would sometimes fail to load for OneDrive items 
- Fixed issue where folder thumbnails wouldn't display a preview of the contents
- Fixed issue where the Properties window was missing its icon
- Fixed issue where search results would sometimes use the Columns View
- Fixed issue where opening tags from the sidebar would default to the Details View
- Fixed issue where renaming items on a search page wouldn't update the file list
- Fixed issue where the privacy policy link was broken
- Fixed issue where OneDrive files would automatically download
- Fixed issue where pinned applications were executed in `%windir%\System32`
- Fixed issue where smart extraction didn't work correctly for a single folder
- Fixed issue where the path bar didn't use localized name for system folders
- Fixed issue where directly opening a library would invoke explorer.exe
- Fixed environment variables expansion for shortcuts
- Fixed issue where folders sizes weren't calculated when opening Properties from the sidebar
- Fixed issue where modified date was missing from the Properties window
- Fixed issue where it didn't work to target files when creating new shortcuts
- Fixed issue where exiting from the system tray icon didn't save the open tabs
- Fixed issue where a new tab would open when trying to open a new window
- Fixed issue where batch files couldn't be previewed inside archives
- Fixed issue where installing multiple fonts would trigger multiple UAC prompts
- Fixed issue where refocusing Details View would sometimes scroll
- Fixed crash that would occur when displaying a large number of items at the same time
- Fixed crash that would occur when items were added from an external app
- Fixed crash that would occur when opening Properties for certain items in the Recent Files list
- Fixed crash that would occur when the app failed to update
- Fixed crash that would occur when renaming items in the Grid View layout
- Fixed crash that would occur when selecting the address bar via `Shift` + `Tab`
- Fixed crash that would occur when Git path contained an emoji
- Fixed crash that could occur when dragging in grouped grid layout


### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)
