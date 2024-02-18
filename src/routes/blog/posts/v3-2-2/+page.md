---
title: Announcing Files v3.2.2
description: A notification when app is running in the background, prompt when failing to rename items, and improvements to stability.
thumbnail: /blog-resources/v3-2-2/Hero.png
date: 2/19/2024
author: files-community
---

Files v3.2.2 is now available for download, this release contains bug fixes to enhance your file browsing experience. If you already have Files, the toolbar will display a notification to install the update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsor us on [GitHub](https://github.com/sponsors/yaira2) to help support the project.

## Changes in v3.2.2

- Added a notification when the app goes to the background for the first time
- Added a prompt when failing to rename items requiring additional permissions
- Improved performance of Git operations
- Fixed issue where switching the directory while renaming an item wouldn't cancel rename
- Fixed high contrast support in menu flyouts
- Fixed COMException in HandleLocationItemDroppedAsync
- Fixed NullReferenceException in InvertSelectionAction
- Fixed ArgumentException in ContextMenu
- Fixed issue where the path bar on the home page wasn't translated
- Fixed issue where the icons for exe files were very small
- Fixed InvalidOperationException when removing page from BackStack
- Fixed NullReferenceException in Item_Opening
- Fixed crash that would occur when setting invalid background colors
- Fixed NullReferenceException in DirectoryInfoUpdated
- Fixed issue where icon overlays would update when refreshing a directory
- Updated Windows App SDK to 1.4.5
- Fixed InvalidOperationException in ColumnsLayoutPage
- Fixed ArgumentException when wrong color was specified
- Fixed COMException loop due to failure to generate notification
- Fixed crash that would occur when clicking an item in the Tags widget

### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)
