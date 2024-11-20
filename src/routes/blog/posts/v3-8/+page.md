---
title: Announcing Files v3.8
description: Manage tags from the sidebar, open Storage Sense, create alternate data streams, paste as shortcuts, and remember archive settings across sessions..
thumbnail: /blog-resources/v3-8/Hero.png
date: 11/24/2024
author: files-community
---

I'm excited to announce that Files v3.8 is now available! 🎉 Existing users will receive an update notification in the top right corner of the app, while new users can get started for free from our [download page](/download/). Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsoring us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.

## What's new in v3.8

### Manage tags from the sidebar

Users can now create and manage their tags more efficiently by quickly opening the tag settings page directly from the sidebar context menu. To get started, right-click on the tags section in the sidebar and select 'Manage tags'.

### Free up space with the Storage Sense action

We've added a new action to open the Storage Sense feature in Windows, helping you free up space on your drives. As part of our robust [actions](/docs/customize-settings/actions/) feature, you can access it from the Command Palette, assign a custom keyboard shortcut, and, if that's not enough, you can also access this action by right-clicking drives in the sidebar or home page.

<figure>
    <img src="/blog-resources/v3-8/StorageSense.png" alt="Storage sense action in the Command Palette" />
</figure>

### Create alternate data streams

Alternate data streams are a feature on NTFS file systems that allow files to contain multiple streams of data without affecting their primary content. This is an advanced feature, and while most users creating alternate data streams likely do so via the command line, we've made it directly accessible from Files. Not only does Files already support viewing alternate data streams, but we've also added a new [action](/docs/customize-settings/actions/) to create new data streams for the selected items. This action can be accessed from the Command Palette, assigned a keyboard shortcut, and for even easier access, added to the context menu from Settings > Context menu options.

<figure>
    <img src="/blog-resources/v3-8/DataStreams.png" alt="Context menu option to create alternate data streams" />
</figure>

### Copy the path of the current tab

We've added a new [action](/docs/customize-settings/actions/) that copies the path of the current tab. You can access this action from the Command Palette, and for even easier access, you can assign it a keyboard shortcut.

### Close all tabs

We've also added an [action](/docs/customize-settings/actions/) that allows you to close all open tabs, providing a clean start the next time you open Files. You can access this action using the `Ctrl+Shift+W` keyboard shortcut or via the Command Palette.

### Paste items from the clipboard as shortcuts

We've added a new [action](/docs/customize-settings/actions/) that lets you paste items from the clipboard as shortcuts. You can access this feature via the right click context menu, the Command Palette, and for even quicker access, you can assign it a custom keyboard shortcut.

### Archive creation settings are now stored across sessions

Archive creation settings are now stored across sessions. This means you won't need to reconfigure your preferences each time you create an archive, leading to a smoother and more efficient workflow.

<figure>
    <img src="/blog-resources/v3-8/ArchiveSettings.png" alt="Create archive dialog" />
</figure>

## Changes and Improvements

- Updated the privacy policy URL.
- Improved responsiveness of the cards in the drives widget.
- Fixed an issue where a WSL prompt would sometimes display on startup.
- Fixed an issue where canceling drag & drop cleared the selected items.
- Fixed an issue where bulk rename didn't follow the sort order.
- Fixed the context menu placement on the home page.

### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2/)