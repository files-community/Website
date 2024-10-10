---
title: Announcing Files v3.7.11
description: Added support for renaming multiple items, improved the Create New Item dialog, copy your User ID from the About page, and more.
thumbnail: /blog-resources/v3-4-1/Hero.png
date: 10/10/2024
author: files-community
---

We're excited to announce that Files v3.7.11 is now available! 🎉 Existing users will receive an update notification in the top right corner of the app, while new users can get started for free from our [download page](/download/). Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsoring us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.

## What's new in v3.7.11

### Added support for renaming multiple items at the same time

We've introduced the ability to rename multiple items simultaneously. To get started, select multiple files or folders and click rename. A rename prompt will be displayed where you can enter the new name. All selected items will be renamed accordingly. If there are any duplicate file types, a number will be automatically appended to the file name.

### Improved UX for the "Create new item" dialog

The "Create New Item" dialog now displays the type of item being created, providing more context for your actions. To try this out, click the "New" button on the toolbar and choose an option (e.g., Folder). The dialog will display a confirmation message, such as "Create new folder."

### Added an option to copy the User ID from the About Page
To enhance the debugging experience, we've added an option to copy your User ID directly from the About page. Your User ID is a random ID generated when you first install Files and can be used to locate crash reports in Sentry.


## Changes and Improvements

- Reduced minimum window dimensions.
- Enabled support for typing custom icon path in the properties window.
- Added Files icon to the process in Windows.
- Fixed window placement.
- Fixed an issue where sorting preferences weren't saved when changed in the Columns Layout.
- Fixed NullReferenceException in BaseTransferItemAction.ExecuteTransferAsync.
- Fixed an issue when dragging & dropping items in the sidebar.
- Fixed an issue where the Start Menu tile didn't specify the branch.
- Fixed an issue with navigating photos on Windows 10.


### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)