---
title: Announcing Files v3.6
description: Enhance your productivity with Dual Pane's arrangement options, the new "Actions" menu, personalized folder backgrounds, and significant performance improvements.
thumbnail: /blog-resources/v3-6/Hero.png
date: 8/6/2024
author: files-community
---

We're excited to announce that starting today, Files v3.6 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsor us on [GitHub](https://github.com/sponsors/yaira2) to help support the project.

**TL;DR:** The latest update, Files v3.6, introduces support for changing the pane arrangement in Dual Pane mode, a new "Actions" menu, custom background images for folders, improved performance, and more. Continue reading to learn more about these enhancements.

## What's new in v3.6

### Added support for changing the pane orientation in Dual Pane mode 

When adding a second pane, you now have the option to choose its orientation. Additionally, when Dual Pane is already in use, you can adjust the pane arrangement to suit your preferences.

<figure>
    <img src="/blog-resources/v3-6/VerticalArrangedPane.png" alt="Vertical pane orientation in Dual Pane mode" />
</figure>


### Added an "Actions" menu to the title bar

We've added a new "Actions" menu in the title bar. This menu provides options to open a new window, toggle compact overlay, and manage panes in Dual Pane mode.

<figure>
    <img src="/blog-resources/v3-6/TabActions.png" alt="Tab Actions flyout menu" />
</figure>


### Customize folder locations with unique background images 

We're excited to introduce support for customizing locations with unique background images. By assigning images to different paths, you can quickly identify and access your work, personal, and project directories. Additionally, you can adjust the image opacity and alignment to suit your preferences, ensuring a personalized expereince. You can learn how to get started with folder backgrounds on our [documentation page](/docs/features/folder-config).

<figure>
    <img src="/blog-resources/v3-6/BackgroundImage.png" alt="Custom background image" />
</figure>


### New localizations added

We’ve expanded our language support to now include Malay.  Our localizations are largely maintained by our dedicated community members. If you'd like to get involved, we invite you to join us on Crowdin https://crowdin.com/project/files-app.


### Optimized sorting performance when loading large folders 

Thanks to optimizations in the sorting code, large folders should now load faster. In our own tests, we observed a 167% increase in performance when loading 40,000 items. Please note that performance can vary based on factors such as device specifications and other running processes.


## Changes and Improvements

- Moved the sidebar toggle button to the address toolbar
- Added a keyboard shortcut to toggle the toolbar visibility `Ctrl+Shift+B`
- Added a keyboard shortcut to move focus between panes in Dual Pane mode `Ctrl+Shift+Right`
- Added support for clicking links when previewing markdown files
- Added an action to toggle the dot files setting
- Fixed an issue where the tab title was empty when opening a folder in a new tab 
- Fixed an issue where dragging or opening multiple items would use the wrong sort mode
- Fixed an issue where Run with PowerShell didn't display a window
- Fixed an issue where the Home Page was opened when Files was launched with custom args
- Fixed an issue where changing the layout size didn't work when adaptive layout was enabled
- Fixed an issue where quick search filtering wasn't cleared when navigating to another folder
- Fixed an issue where non-cached windows sometimes had the wrong theme
- Fixed an issue where settings weren't exported in the correct format
- Fixed an issue where double tap to rename was too sensitive
- Fixed an issue where hover to open was too sensitive
- Fixed an issue where the cursor wasn't inline when resizing columns in the Details View
- Fixed an issue where online files were downloaded when loading tooltips
- Fixed an issue where navigation button had the wrong foreground in the disabled state
- Fixed an issue where arguments weren’t passed when running shortcuts as admin
- Fixed an issue with compressing and extracting archives on ARM64 devices
- Fixed an issue where a warning about WSL would display on startup
- Fixed the position of the "New item" flyout
- Fixed a crash that would sometimes occur when updating Files
- Fixed a crash that would occur when entering invalid parameters via command line
- Fixed crash that would sometimes occur when adding items to the jumplist
- Fixed ArgumentNullException in DefaultSettingsSerializer.ReadFromFile
- Fixed ArgumentNullException in SortingHelper.OrderFileList
- Fixed ArgumentException in PinnedFoldersManager
- Fixed ArgumentException in PathNormalization.NormalizePath
- Fixed TypeInitializationException in UIHelpers
- Fixed DirectoryNotFoundException when pinning items to the start menu
- Fixed FileNotFoundException in Recycle Bin watcher
- Fixed NullReferenceException in DriveItem.LoadThumbnailAsync
- Fixed NullReferenceException in SystemTrayIcon.OnQuitClicked
- Fixed NullReferenceException in RecycleBinLocationItem.RefreshSpaceUsed
- Fixed NullReferenceException in DrivesWidgetViewModel.NavigateToPath
- Fixed InvalidOperationException in SideloadUpdateService.CheckForUpdatesAsync
- Fixed COMException in MainWindow.EnsureWindowIsInitialized
- Fixed COMException in SidebarItem.ItemGrid_Drop


### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)
