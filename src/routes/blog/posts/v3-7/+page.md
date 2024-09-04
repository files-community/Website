---
title: Announcing Files v3.7
description: Discover the latest features in Files v3.7, including navigation history for back/forward buttons, folder thumbnails in breadcrumb flyouts, and an option to hide the System Tray icon. 
thumbnail: /blog-resources/v3-7/Hero.png
date: 9/5/2024
author: files-community
---

We're excited to announce that Files v3.7 is now available! 🎉 This update brings a host of new features and improvements designed to enhance your experience. Existing users will receive an update notification in the top right corner of the app, while new users can get started for free from our [download page](/download/). Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsoring us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.

**TL;DR:** The latest update, Files v3.7, introduces navigation history for back/forward buttons, folder thumbnails in breadcrumb flyouts, an option to hide the System Tray icon, a customizable home button, and the ability to set CPU threads for creating archives. Additionally, there's experimental support for flattening folders. Continue reading to learn more about these enhancements.

## What's new in v3.7

### Added a setting to hide the System Tray icon

You can now hide the System Tray icon through a new option in the Advanced settings page.


### Focus existing tab when opening locations from external process

When opening a location from an external process, Files will now switch to the existing tab if the location is already open, instead of creating a duplicate tab.


### View navigation history 

The back and forward toolbar buttons now display a history flyout when right-clicked. On a touchscreen, you can press and hold for a few seconds to display the menu.

<figure>
    <img src="/blog-resources/v3-7/NavigationHistory.png" alt="Navigation history flyout" />
</figure>


### Added thumbnails to the breadcrumb flyouts

We've enhanced the breadcrumb flyouts with folder thumbnails, offering better visual navigation and context.

<figure>
    <img src="/blog-resources/v3-7/BreadcrumbFlyout.png" alt="Breadcrumb flyout" />
</figure>


### Optional toolbar button to navigate home

We've introduced an optional home button in the toolbar. This feature can be enabled from the Appearance settings page.

<figure>
    <img src="/blog-resources/v3-7/HomeButton.png" alt="Toolbar home button" />
</figure>


### Customize CPU threads when creating archives

You can now choose the number of CPU threads used when creating archives. This feature allows you to optimize performance and manage system resources more effectively.

<figure>
    <img src="/blog-resources/v3-7/CpuThreads.png" alt="Create archive modal" />
</figure>


### Added an action to navigate home

You can now assign a keyboard shortcut to navigate home. This enhancement provides a quick and convenient way to open the home page.


### Experimental support for flattening folders

This feature allows you to transfer all files from nested folders into the root directory, simplifying your file tree and making file management more efficient. You can enable this option under the Experimental section in Settings > Advanced.


## Changes and Improvements

- Removed the loading animation from the home page.
- Added an action to open File Explorer's property window. You can also hold the `shift` key while pressing the properties button for the same result.
- Added support for opening the breadcrumb dropdown via keyboard navigation.
- Added support for Infomaniak kDrive.
- Added an option to close the active pane from the right-click context menu.
- Corrected inverted scrolling behavior for icon size adjustment.
- Fixed an issue where shortcuts couldn't be created for commands.
- Fixed an issue where resuming from background didn't bring Files to the foreground.
- Fixed an issue where context menus didn't follow the custom font setting.
- Fixed an issue where a shortcut to a folder couldn't be created.
- Fixed an issue where Google Drive wasn't displayed when mounted as a folder.
- Fixed an issue where layout settings didn't persist across updates.
- Fixed an issue where folders with file extensions were sometimes treated as files.
- Fixed an issue where ejecting drives would sometimes fail.
- Fixed an issue where double-clicking a file would sometimes navigate up.
- Fixed issues with opening certain file formats.


### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)
