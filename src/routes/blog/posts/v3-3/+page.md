---
title: Announcing Files v3.3
description: Redesigned layout picker, additional spacing options, thumbnail improvements.
thumbnail: /blog-resources/v3-3/Hero.png
date: 3/19/2024
author: files-community
---

We're excited to announce that starting today, Files v3.3 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsor us on [GitHub](https://github.com/sponsors/yaira2) to help support the project.

**TL;DR:** Files v3.3 has a refreshed layout picker, additional spacing options for the layouts, more reliable thumbnails, improvements to continue where you left off, and more. Continue reading to learn more about these changes.

## What's new in v3.3

### Redesigned layout picker

We refreshed the layout picker with a cleaner and more functional design. The layout options are now displayed in a single row with large buttons, and the selected layout is highlighted using the system accent color.

Beneath the the layout section, we added a slider to control the item sizes of the various views including Details, List, Grid, & Columns. Whether you prefer larger or smaller items, there is an option for your personal preference.

<figure>
    <img src="/blog-resources/v3-3/LayoutPicker.png" alt="Layout picker flyout" />
</figure>


### Thumbnail performance and DPI support

In v3.3, we continued working on thumbnail handling. While there is always room for improvement, you can anticipate a more reliable experience with fewer overall issues related to thumbnails.

When a thumbnail takes longer to load, a shimmer animation will be displayed to indicate that the content is loading. Additionally, we added DPI support for icons on the home page, tabs, and left-hand sidebar.

<figure>
    <img src="/blog-resources/v3-3/SidebarIcons.png" alt="DPI aware sidebar icons" />
</figure>


### Added a settings page to manage layout preferences

We added a new settings page to simplify the management of your layout preferences. These options, formerly nested within submenus on the "Folders" settings page, are now more accessible and easier to locate. Additionally, the "Folders" page was renamed to "Files & folders".

<figure>
    <img src="/blog-resources/v3-3/LayoutSettings.png" alt="Layout settings page" />
</figure>


### Continue where you left off when restarting Windows

Continue where you left off now works when Windows is restarted. Previously this feature only worked if you closed Files before restarting Windows.


## Changes and Improvements

- Updated the project to WinAppSdk 1.5
- Renamed the "Favorites" section on the sidebar to "Pinned"
- Added a header to the home page
- Replaced the string 'Layout mode' with the simplified term 'Layout'
- Added a link to our Discord server on the about page
- A prompt for credentials will now be displayed when access is denied to a network share
- Added support for opening and extracting mrpack files
- Removed the icon placeholder for web shortcuts in favor of the new shimmer animation
- Removed the transition when loading items in the Grid View and List View layouts
- Fixed issue where item selection wasn't working properly the List View layout
- Fixed issue where the "Open with" and "Send to" submenus didn't appear properly in Widgets
- Fixed issue where copying an item from an archive didn't work
- Fixed issue where hashes weren't able to calculate
- Fixed issue where some files failed to load properties
- Fixed icon overlay alignment in the Details View layout
- Fixed issue where items couldn't be dropped from 7-zip
- Fixed issue where drag and drop from Edge didn't work
- Fixed issue where video bitrate was displayed in plain text
- Fixed issue where the window wasn't always brought to the foreground
- Fixed issue where focus would incorrectly switch to new tab
- Fixed issue with drag and dropping items onto .ahk files
- Fixed SocketException in GitHelpers.RequireGitAuthenticationAsync
- Fixed NullReferenceException in Item_Opening
- Fixed NullReferenceException in CloseTab
- Fixed NullReferenceException in ShareItemsAsync
- Fixed NullReferenceException in DuplicateSelectedTabAction.ExecuteAsync

### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)
