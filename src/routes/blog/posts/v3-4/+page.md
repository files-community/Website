---
title: Announcing Files v3.4
description: Enhance your Files experience with new features that allow you to filter file names, customize keyboard shortcuts, set a unique background image, and integrate with the powerful search utility, Listary.
thumbnail: /blog-resources/v3-4/Hero.png
date: 5/8/2024
author: files-community
---

We're excited to announce that starting today, Files v3.4 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsor us on [GitHub](https://github.com/sponsors/yaira2) to help support the project.

**TL;DR:** The latest update, Files v3.4, introduces new features including file name filtering, customizable keyboard shortcuts, personal background images, and a Listary integration, among others. Continue reading to learn more about these enhancements.

## What's new in v3.4

### Personalize Files with a custom background image

We added a new theming feature that allows you to add a personal touch to Files by setting a custom background image. Simply go to Settings > Appearance, locate the "Background Image" section, and click "Browse" to choose your preferred image.

In addition to the Settings page, you can also change the background directly by right-clicking on an image and selecting "Set as app background".

<figure>
    <img src="/blog-resources/v3-4/BackgroundImageContextMenu.png" alt="Set as application background context menu" />
</figure>

Once selected, Files will update to display your image as a beautiful background, adding a distinctive touch to your workspace. Additionally, you can adjust the image’s opacity and display settings for a truly customized look.

<figure>
    <img src="/blog-resources/v3-4/BackgroundImage.png" alt="Custom background image" />
</figure>


### Remap keyboard shortcuts

We added a new settings page for Actions that enables you to personalize keyboard shortcuts. This feature lets you assign shortcuts to any action and offers the flexibility to modify existing key bindings. Customize your keyboard layout to enhance your workflow efficiency.

<figure>
    <img src="/blog-resources/v3-4/Actions.png" alt="Actions settings page" />
</figure>


### Filter file names in real-time

We’ve enhanced our search functionality to allow for more efficient file management within the current directory. With the new filtering feature, inputting a query into the search bar instantly filters the directory, displaying only the files that match your criteria.

This real-time filtering saves time and is particularly beneficial for users who work with large numbers of files and require quick access to specific documents.

<figure>
    <img src="/blog-resources/v3-4/Filter.png" alt="Filter file names" />
</figure>


### Added an integration with Listary

We're excited to announce a new integration with [Listary](https://www.listary.com/) - a powerful search utility renowned for its rapid retrieval of files and folders. This integration can be enabled from the "Integrations" page within Listary’s settings. This integration includes the following features:

**Instant search results**: A double tap of the `ctrl` key brings up the search bar, delivering immediate access to your files.

<figure>
    <img src="/blog-resources/v3-4/Listary.png" alt="Listary search box" />
</figure>

**Contextual power**: Engage with Listary’s rich context menu by right-clicking any search result, unlocking a vast array of actions right where you need them.

<figure>
    <img src="/blog-resources/v3-4/ListaryMenu.png" alt="Listary context menu" />
</figure>

**Quick switch**: Seamlessly transition to the active folder in Files when opening or saving documents via another application. Additionally, once the file dialog appears, you can also switch to Files, navigate to your desired folder—such as a pinned location—and upon returning to the dialog, it will automatically update to reflect your chosen folder.

<figure>
    <img src="/blog-resources/v3-4/ListaryQuickSwitch.png" alt="Listary Quick Switch feature" />
</figure>

**Folder navigation**: Discover the ease of navigating to folders; a single click on any folder in the search results instantly opens it in the current tab or pane of Files.

For additional details and support regarding Listary, you can visit their website https://help.listary.com/options-integration#third-party-software-adapted-by-listary.

### New localizations added

Responding to user requests, we’ve expanded our language support to include Albanian, Khmer, Kurdish, and Lithuanian.  Our localizations are largely maintained by our dedicated community members. If you'd like to get involved, we invite you to join us on Crowdin https://crowdin.com/project/files-app.


## Changes and Improvements

- The Recent Files widget now respects the setting for displaying file extensions
- Improved the display of keyboard shortcuts in the Command Palette
- Added support to the sidebar for multiple SharePoint drives 
- Added an integration for the Lucid Link cloud provider
- Added audio bitrate, and video to the list of properties in the Details Pane
- Fixed an issue where pinned items weren't displayed in the sidebar
- Fixed an issue clicking the header in the details view wouldn't change the sort direction
- Fixed an issue where the adaptive layout option wasn't disabled when syncing layout settings
- Fixed an issue where changing the sort preferences didn't work properly when syncing layout settings
- Fixed an issue where existing tabs would duplicate when opening a folder from outside of Files
- Fixed an issue where the Properties Window wouldn't navigate between pages after returning from advanced settings
- Fixed an issue where the app would sometimes crash when entering characters into the Address Bar
- Fixed the alignment of the add tab button
- Fixed an issue where the Git submenu was sometimes shown for non-GitHub repos
- Fixed a crash that would sometimes occur when closing the GitHub login modal
- Fixed an issue where Recycle Bin wasn't pinned to the Sidebar by default
- Fixed an issue where the View More and Open All options where disabled in the Tags widget
- Fixed an issue where the scroll position was sometimes incorrect
- Fixed an issue where "Scroll to previous folder" didn't work in some folders
- Fixed an issue where HWiNFO64.exe wouldn't open
- Fixed an issue where changing the focus in columns view caused an extra animation
- Fixed an issue where the app window wasn't refocused if minimized on launch
- Fixed an issue where the conflicts dialog didn't append numbers when pasting files
- Fixed an issue where renaming an item in the conflict dialog would leave the copy status in process
- Fixed an issue where the setting control margin was misaligned
- Fixed an issue with exporting tags
- Fixed an issue where certain drive icons didn't load on the Drive Widget
- Fixed an issue where ftp addresses were not displayed in the Address Bar
- Fixed an issue where coping or moving a folder would cause the contents of the destination folder to be empty
- Fixed an issue where there wasn't enough space to right click folders in columns view
- Fixed an issue where the wrong item was shown as active in the sidebar
- Fixed an issue where holding the arrow key would cause the Preview Pane to freeze
- Fixed an issue with editing properties of multiple items at the same time
- Fixed a conflict with svg thumbnails generated by PowerToys
- Fixed an issue of overlapping brushes leaving a gap in the columns view

### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)
