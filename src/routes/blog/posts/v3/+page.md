---
title: Announcing Files v3
description: A design refresh, faster startup performance, support for previewing Office documents, & and speed graph for file operations.
thumbnail: /blog-resources/v3/Hero.jpg
date: 11/8/2023
author: yaira2
---

It's just a little over two years since the launch of v2, and the feedback from the community has encouraged us to keep on improving. Our mission with Files is to build the best file manager for Windows, and we're proud to be building it out in the open so everyone can participate and provide feedback. We're keenly aware that we wouldn't have gotten to this point without the support of our dedicated users and the open source community, and we want to extend a thank you to everyone who's been involved with the project until this point.

We're excited to announce that starting today, v3 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) to help support the project.

**TL;DR:** Files v3 includes a refreshed design, faster startup performance, a command palette, support for previewing Offices documents, a speed graph for file operations, and more. Continue reading to learn more about these changes.

## What's new in v3

### Design updates

When we set out to update the design, we wanted to ensure users would feel at home with the app they love. We were careful not to move the options and commands users are familiar with, whilst modernizing and refreshing core parts of the UI.

- With v3 being one of the larger releases to date, we decided it was a good time to refresh the logo. After exploring a number of ideas and color combinations, we asked the community to help choose a color. It's probably no surprise, but the community overwhelmingly opted in favor of the familiar yellow color. We also updated the icons for the developer and preview versions of Files (purple & blue) to make it easier to identify the different variants of the app.

<figure>
    <img src="/blog-resources/v3/NewIcon.jpg" alt="Updated Files Icon for all branches" />
</figure>

- We redesigned the sidebar from the ground up, removing the icons from headers and the indentations from child items. We also added icons to highlight pinned folders.
- We rounded the corners on the file area and adjusted the background opacity to provide more distinction between the sidebar.

<figure>
    <img src="/blog-resources/v3/Sidebar.jpg" alt="Redesigned sidebar" />
</figure>

### Improved experience for file operations

You can now track the progress and speed of file operations in the Status Center with the new graph feature.

<figure>
    <img src="/blog-resources/v3/StatusCenter.jpg" alt="Updated status center with the speed graph" />
</figure>

### Rich previews for your Office documents

In addition to support for previewing Office documents, we added support for previewing file formats with a registered shell preview handler.

<figure>
    <img src="/blog-resources/v3/OfficePreview.jpg" alt="Updated preview pane" />
</figure>

### Added a Command Palette

We're excited to introduce a Command Palette that lets you search and execute commands quickly and easily. You can access the Command Palette by pressing `ctrl` + `shift` + `p` on your keyboard, or by typing `>` into the address bar. The Command Palette will show you a list of available commands, or you can type in your own query to find the command you need.

<figure>
    <img src="/blog-resources/v3/CommandPalette.jpg" alt="Command Palette" />
</figure>

### Keep Files in the background

We added an option to keep Files open in the background when closing the last window. This option is designed to improve the startup performance but can be turned on/off from the advanced settings page. Please be advised the using this option will use system resources even when the app is in the background.

## Changes and Improvements

- Added support for renaming network drives
- Theme names are now localized in the settings dialog
- Keyboard shortcuts are now displayed in the right click menu
- Added support for opening shortcut files as another user
- Added support for additional archive formats including `gz`, `mcpack`, `mcworld`, `jar`, `lzh`, and `appxbundle`
- Added support for elevated file operations
- Folders in special locations that don't have a directory watcher will now refresh when changes are made
- Display error message when transferring files that are too large for FAT32
- Removed the margin when using the compact spacing option
- Added a "What's new" popup that can be viewed after an update
- Files will now display a custom thumbnail when it's the registered handler for viewing archives.
- Automatically update items when the date changes
- Added support for canceling tab tear off by pressing the esc key
- Added support for copying the paths of multiple items together
- Improved the design and performance of the startup options in settings
- Added `ctrl` + `shift` + `n` shortcut to create a new folder
- Added support for unblocking downloaded folders from the properties window
- Improved the icon resolution on tabs
- Added support for Proton Drive
- Added file operation support for FTP
- Added support for formatting drives from the properties window
- Added support to switch between items using arrow keys in the conflicts dialog

### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/).
