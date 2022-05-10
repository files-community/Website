---
title: Introducing the next major release of Files - v2.3
description: version 2.3 is now available to download as a free update.
thumbnail: /blog-resources/filesv2-3/HeroImage.jpg
date: 2022-7-5
author: yaichenbaum
---

Today we're excited to introduce the next major release of Files. This milestone marks the beginning of our efforts to modernize the Files codebase. A better codebase will enable us to iterate faster and will accelerate our transition to WinApp SDK in 2023. Switching to WinApp SDK will remove the limitations that are present in UWP and will enable us to improve the performance.

As part of our mission to create a stable and fully featured file manager, we worked on improving the behavior in a number of existing features. Features are the most useful when they perform as expected and we hope these improvements enhance your experience. We addressed some of the top requested features, adding a compact spacing feature, bulk actions in the conflicts dialog and a double click gesture to go up one directory.

## Giving back to the community
We're pleased to announce that we relicensed the Files repository under the MIT license. This means that other projects can now take advantage of the innovation in Files even if they happen to be closed source.

## New Features

**Compact sizing** allows users to view more items on the screen
(insert photo)

The **tab control** was redesigned to better connect with the rest of the app
(insert photo)

We added an option to display **tags** on the sidebar
(insert photo)

Added support for applying bulk actions in the **conflicts dialog**
(insert photo)

### Other changes:
- Improved the reliability and speed of drag and drop
- Added a pull to refresh gesture
- Removed the minimize and maximize buttons from the properties window
- Added an animation when clicking on the setting and search buttons
- Added an option to always show icons instead of thumbnails
- Improved the spacing in the pathbar
- Added a chevron to the pathbar to better indicate that there is a flyout menu
- Reduced the spacing between widgets on the home page
- Double clicking the grid splitter will now reset panes in the dual pane layout to the default width
- More file types are now displayed in the "new" item context menu
- Double clicking in a blank space will now go up one directory in the file tree
- Adding a tag to a file no longer changes the date modified property
- Added a shortcut to open folders in the default terminal `ctrl` + `shift` + `'`
- Added a shortcut to play and pause media in the preview pane `ctrl` + `space`
- Reduced the height of items in the sidebar to allow more items to be displayed at once
- Invalid favorites and network shares are no longer removed the sidebar
- Added a context menu to hide sections when right clicking on the sidebar
- Added support for renaming items in the conflicts dialog
- Network shares will automatically refresh when their content changes
- Auto select first item in user list for permissions
- Auto select the primary button in the empty recycle bin dialog
- Deleting an item will automatically move the focus to the next item in the list
- Resizing the window no longer changes the width of columns in the details layout
- Added examples to the date format setting
- Improved behavior when trying to name an item with invalid characters
- Added a notification when copying or moving an item fails
- Added the archive name to the extract archive dialog
- Added support for adding tags to items in the search results page
- Show which process is locking a file

## Bug fixes
- Fixed an issue where the address toolbar height would sometimes change when clicking on the search box
- Fixed an issue that would cause the app window to close when dragging a tab to a new window
- Fixed a crash that would sometimes occur when deleting files
- Fixed an issue where expanding the sidebar sections would sometimes require two clicks
- Fixed an issue where the sidebar state would sometimes get reset
- Fixed an issue where duplicate drives were sometimes added to the sidebar
- Fixed a crash that would sometimes occur when the favorites section was hidden
- Fixed an issue where the UI didn't display correctly in compact overlay mode
- Fixed an issue where the close pane button had the wrong icon
- Fixed an issue where the disconnect drive option had the wrong icon
- Fixed a crash that would sometimes occur when "show folder sizes" was enabled
- Fixed an issue where the properties window sometimes used the wrong theme
- Fixed a crash that would sometimes occur when previewing XML files
- Fixed an issue that would sometimes prevent drag and drop from working
- Fixed an issue where the clear all properties option didn't have any text
- Fixed an issue where the import settings option didn't import all the settings
- Fixed an issue where rotating an image multiple times would sometimes crash the app
- Fixed an issue where the app would sometimes hang on startup
- Fixed an issue where Box cloud drives didn't properly display files
- Fixed an issue where the `ctrl` + `l` and `alt` + `d` shortcuts didn't set the focus to the address bar on the home page
- Fixed an issue where pasting text in the search box would paste the clipboard content into the current directory
- Fixed an issue where the overflow options weren't shown when right clicking on search results
- Fixed an issue that prevented adding items into archives
- Fixed an issue where extra toolbar buttons were visible in recycle bin
- Fixed an issue where the tags section was sometimes visible in the context menu even after turning off the experimental setting
- Fixed an issue where switching the app theme would make the group headers unreadable until restarting the app
- Fixed an issue where the option to show dot files didn't work in WSL and network folders
- Fixed an issue where the confirm delete dialog didn't display when dragging an item to recycle bin

## Feedback

Files thrives off community feedback because it helps shape the features we work on and makes the app better for
everyone. We invite you to submit your feedback through our GitHub repository.

– Yair

Download from
the [Microsoft Store]({'https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-3'})
|| See Files on [GitHub](https://github.com/files-community/Files)


