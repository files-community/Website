---
title: Announcing Files, version 2.5.10
description: Details pane, Git columns, open in VS Code & more
thumbnail: /blog-resources/files2-5-10/HeroImage.jpg
date: 6/27/2023
author: files-community
---

We're excited to announce that version 2.5.10 is now available. If you already have Files, you'll get a notification in the app to update. Otherwise, you can download Files for free from our [download page](/download/).

**TL;DR:** This update adds Git columns to the details layout, an open VS Code button in Git repos, and improvements to the details pane. Continue reading to learn more about these changes.


## What's new in v2.5.10

### Git columns in the details layout

Opening a Git repo in the details layout will now display additional columns with information about the Git status, last commit, commit hash, and commit author. These columns can be turned on or off by right clicking the column headers.

<figure>
    <img src="/blog-resources/files2-5-10/GitColumns.png" alt="Git columns in the details layout." />
</figure>


### Open Git repo in VS Code

When viewing a Git repo, the status bar will now show a button to open the folder in VS Code. Support for additional applications is being considered.

<figure>
    <img src="/blog-resources/files2-5-10/OpenVSCode.png" alt="Details pane." />
</figure>


### Show details about the current directory when no items are selected

The details pane will show information about the current directory when no items are currently selected. In the future, we have plans to show storage details when viewing drives.

<figure>
    <img src="/blog-resources/files2-5-10/DetailsPane.png" alt="Details pane." />
</figure>



## Changes and Improvements

### [Removed the Bundles widget]

Earlier this year, we announced plans to replace the Bundles widget with the Tags widget. Starting in v2.5.10, the Bundles widget is no longer available.


### [Auto-Populate version information when submitting feedback]

Submitting feedback from the About page will automatically fill out the version information on the GitHub issue.


### [Separated the archive options in the right click menu]

The menu items for compressing and extracting files has been separated into two separate menus. Previously the items were grouped together under "Archive".


### [Added an option to hide the Send To menu]

Users looking to customize the right click menu can now hide the Send To menu.


## Bug Fixes

- Fixed crash that would sometimes occur when switching away from Git repos
- Fixed crash when that would occur when the Git branch tip was null
- Fixed issue where folder sizes weren't shown in Recycle Bin
- Fixed issue where column layout items remained selected on certain startup settings
- Fixed issue where the scrollbar wasn't visible when reordering pinned favorites
- Fixed issue where tooltips in the details layout was displaying the wrong data
- Fixed issue where archive files were counted as folders
- Fixed issue where navigating away from a search wouldn't show the folders items
- Fixed issue where item names in the Tags widget didn't have ellipsis
- Fixed tab navigation when middle-clicking a sidebar item
- Fixed issue where middle clicking selected folders would cause a crash
- Fixed issue where the icon was missing from the "new shortcut" option in the right click menu


### Conclusion

We hope you enjoy using Files as much as we enjoyed making it.

As always, we appreciate your feedback and suggestions on how we can make Files better for you. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/).
