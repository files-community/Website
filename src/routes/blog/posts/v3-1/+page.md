---
title: Announcing Files v3.1
description: System tray icon, open minimized on startup, Smart Extract, prioritize files when sorting, and a new drag & drop gesture.
thumbnail: /blog-resources/v3-1/Hero.png
date: 1/8/2024
author: files-community
---

We're excited to announce that starting today, Files v3.1 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsor us on [GitHub](https://github.com/sponsors/yaira2) to help support the project.

**TL;DR:** Files v3.1 adds an icon to the system tray, support for opening a minimized window on startup, smart extract, an option to prioritize files when sorting, group files by day, and more. Continue reading to learn more about these changes.

## What's new in v3.1

### System tray icon

With the recently added option to keep Files open in the background, a popular request has been to add an icon to the system tray. Besides for indicating when there is an open process, right clicking the icon provides a shortcut to the documentation site and a way to fully close the background process.

<figure>
    <img src="/blog-resources/v3-1/SystemTray.png" alt="System tray icon" />
</figure>

### Open minimized on Windows Startup

Enabling the option to "Open Files on Windows Startup" and the option to "Keep Files running in the background" will now open Files in the background when starting Windows.

### Extract archives with "Smart Extract"

Smart Extract is a new feature that will automatically choose the extraction mode based on the archive contents. If the archive contains a single file or folder, Smart Extract will extract the archive to the current directory, otherwise if there are multiple items, they will be extracted to a new folder. Smart Extract can be accessed via the `ctrl` + `shift` + `e` shortcut as well as the right click context menu.

<figure>
    <img src="/blog-resources/v3-1/SmartExtract.png" alt="Smart Extract" />
</figure>

### Prioritize files when sorting

We added an option to prioritize files when sorting. Enabling this option will sort files and folders separately with files being placed at the top of the list. This feature is an addition to the existing options to "sort folders first" and "sort files and folders together". 

<figure>
    <img src="/blog-resources/v3-1/SortFilesFirst.png" alt="Prioritize files when sorting" />
</figure>

### Drag and drop to open folders in a new tab

Dragging & dropping a folder on the title bar will now open the folder in a new tab. This gesture also works with multiple folders, dragging multiple folders will open each folder in its own tab.

<figure>
    <img src="/blog-resources/v3-1/OpenInNewTab.png" alt="Open folders in new tab" />
</figure>

## Changes and Improvements

- Added a prompt when trying to apply tags on non NTFS drives
- Improved the animation when expanding/collapsing sidebar sections
- Increased the number of suggestion in the search dropdown to 10 items
- Opening libraries in the columns view will treat them as root
- Added a 2gb splitting option when compressing files
- Added support for displaying recently entered paths
- Added an option to group items by day
- Added support for hiding compression options from the context menu
- Added an out-of-proc WinRT server for long-running background tasks
- Fixed an issue where third party licenses weren't displayed
- Fixed crash that could occur when manipulating invalid images
- Fixed issue where options in the conflicts dialog would sometimes change when scrolling
- Fixed crash that could occur when failing to connect to GitHub
- Fixed the date in the file name when pasting clipboard content
- Fixed an issue where the selection would sometimes get reset in the rename text box
- Fixed an issue where resizing the window would reload the preview pane
- Fixed crash when navigating up in the column layout
- Fixed issue where "Reopen closed tab" was always disabled when right-clicking on tabs
- Fixed crash that could occur when trying to open Git settings
- Fixed issue where text was cut off in Tags flyout
- Fixed issue where the column headers weren't always "sticky"
- Fixed issue where it wouldn't work to open Files if a previous instance crashed
- Fixed exception that would sometimes occur when sharing items
- Fixed NullReferenceException when renaming files
- Fixed NullReferenceException in ColumnShellPage.NavigateToPath
- Fixed issue where batch files were opened as system
- Fixed the taskbar behavior in full screen mode
- Fixed COMException when removing focus from the path bar

### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)
