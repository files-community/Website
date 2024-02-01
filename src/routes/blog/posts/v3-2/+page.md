---
title: Announcing Files v3.2
description: List View layout, thumbnail improvements, and edit album covers from the properties window.
thumbnail: /blog-resources/v3-2/Hero.png
date: 1/8/2024
author: files-community
---

We're excited to announce that starting today, Files v3.2 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsor us on [GitHub](https://github.com/sponsors/yaira2) to help support the project.

**TL;DR:** Files v3.2 adds a List View layout, higher quality thumbnails, support for editing album covers from the properties window, and more. Continue reading to learn more about these changes.

## What's new in v3.2

### List View layout

We added List View, a new layout option that lets you see more items in less space. It only shows the icons and file names of your items, without any extra details. To use List View, click on the layout icon on the toolbar and choose List View from the flyout menu.

<figure>
    <img src="/blog-resources/v3-2/ListView.png" alt="List View layout" />
</figure>

### Higher quality thumbnails

We enhanced the thumbnails that represent your files and folders to give you a better preview of their content. Whether you have photos, videos, documents, or any other type of file, you can enjoy browsing them with enhanced thumbnails.

<figure>
    <img src="/blog-resources/v3-2/ThumbnailsOne.png" alt="Thumbnail comparison" />
</figure>

<figure>
    <img src="/blog-resources/v3-2/ThumbnailsTwo.png" alt="Thumbnail comparison" />
</figure>


### Edit album covers

You can now modify ablum covers directly from the properties window.


## Changes and Improvements

- Added support for hiding more options from the context menu
- Added an option to disable auto scroll when navigating up
- Updated search query to include unindexed items in results
- Add newly created items to the Recent Files list
- Added support for starting tag search from the Details Pane
- Use File Explorer naming preferences when creating shortcuts
- Improved high contrast support
- Added support for setting jfif files as the wallpaper
- Improved performance when launching in the background at Windows startup
- Updated the cloud status icon in the Columns Layout
- Fixed issue where thumbnails would sometimes fail to load in OneDrive
- Fixed issue where search results would sometimes use the Columns View
- Fixed issue where the app would crash when displaying a large number of items
- Fixed issue where the app could crash when adding items from external apps
- Fixed issue where the Properties window had the wrong icon
- Fixed issue where file names wouldn't update in the search results page
- Fixed issue where the privacy policy link was broken
- Fixed issue where some OneDrive files were automatically downloaded
- Fixed potential crash when opening properties for recent files
- Fixed IOException in QuickLookProvider
- Fixed issue where pinned applications were executed in `%windir%\System32`
- Fixed issue where smart extraction didn't work correctly for a single folder
- Fixed issue where opening tags from the sidebar would default to the Details View
- Fixed issue where the path bar didn't use localized name for system folders
- Fixed issue where directly opening a library would invoke explorer.exe
- Fixed issue where it didn't work to pick files when creating new shortcuts
- Fixed an issue where folder thumbnails weren't displaying image previews
- Fixed environment variables expansion for shortcuts
- Fixed InvalidOperationException in RunPowershellCommandAsync
- Fixed null ref exceptions when renaming items in the Grid layouts
- Fixed issue where folders sizes weren't calculated when opening Properties from the sidebar
- Fixed issue where modified date was missing from the properties window
- Fixed issue where exiting from the system tray icon didn't save the open tabs
- Fixed crash when selecting the address bar with `Shift` + `Tab`
- Fixed issue where a new tab would open when trying to open a new window
- Fixed issue where switching from Details to Tiles didn't reload thumbnails
- Fixed FileLoadException when failing to update the app
- Fixed issue where batch files couldn't be previewed inside archives
- Fixed crash that would occur when Git path contained an emoji


### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)
