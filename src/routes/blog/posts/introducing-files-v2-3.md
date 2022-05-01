---
title: Introducing the next major release of Files - v2.3
description: version 2.3 is now availible to download as a free update.
thumbnail: /blog-resources/filesv2-3/HeroImage.jpg
date: 2022-7-5
author: yaichenbaum
---

Today we're excited to introduce the next major release of Files. Building on the sucsess of v2, we're confident that this update will enable you to be more productive and inspire you to do more. In addition to all the changes in v2.3, we also put a lot of work into improving the code base. This will enable us to iterate faster and in the long term, it will pave the way for performance improvments.

## Giving back to the community

We're pleased to announce that we relicened the Files repositroy under the MIT licence. This means that other projects can now take advantage of the innovation in Files even if they happen to be closed source.


## Default file manager

As many of you have noticed, we removed the option to set Files as the default file manager in order comply with the Microsoft Store Policy. We're hoping to bring this option back in the future but in the meantime, this option is still availbile in the sideload version (https://files.community/download/stable). Please note that this feature is experimental and can have unexpected side affects.

<figure class="margin-bottom">
    <img src="/blog-resources/filesv2-3/Settings-Dialog-Experimental.png" alt="A screenshot of the settings dialog in v2.3" />
    <figcaption>Experimental settings page</figcaption>
</figure>

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
- Adding a tag to a file no longers changes the date modified property
- Added a shortcut to open folders in the default terminal `ctrl` + `shift` + `'`
- Added a shortcut to play and pause media in the preview pane `ctrl` + `space`
- Reduced the height of items in the sidebar to allow more items to be displayed at once
- Invalid favorites and network shares are no longer removed the sidebar
- Added a context menu to hide sections when right clicking on the sidebar
- Added support for renaming items in the conflicts dialog
- Network shares will automaticlly refresh when their content changes
- Auto select first item in user list for permissions
- Auto select the primary button in the empty recycle bin dialog
- Deleting an item will automaticlly move the focus to the next item in the list
- Resizing the window no longer changes the width of columns in the details layout
- Added examples to the date format setting
- Improved behavior when trying to name an item with invalid characters
- Added a notifcation when copying or moving an item fails

## Bug fixes
- Fixed an issue where the adress toolbar height would sometimes change when clicking on the search box
- Fixed an issue that would cause the app window to close when dragging a tab to a new window
- Fixed a crash that would sometimes occur when deleting files
- Fixed an issue where expanding the sidebar sections would sometimes require two clicks
- Fixed an issue where the sidebar state would sometimes get reset
- Fixed an issue where duplicate drives were sometimes added to the sidebar
- Fixed a crash that would sometimes occur when the favorites section was hidden
- Fixed an issue where the UI didn't display correctly in compact overlay mode
- Fixed an issue where the close pane button had the wrong icon
- Fixed a crash that would sometimes occur when "show folder sizes" was enabled
- Fixed an issue where the properties window sometimes used the wrong theme
- Fixed a crash that would sometimes occur when previewing XML files
- Fixed an issue that sometimes prevented drag and drop from working
- Fixed an issue where the clear all properties button didn't have any text
- Fixed an issue where the import settings option didn't import all the settings
- Fixed an issue where rotating an image multiple times would sometimes crash the app
- Fixed an issue where the app would sometimes hang on startup


## Changes

Improve JumpString behavior by @gave92 in #8324
Fix wrong foreground text color in zoomed-out Group headers by @gave92 in #8457
Fixed tags section in the context menu by @oleklukasiewicz in #8460
Toolbar buttons in recycle bin by @puppetsw in #8545
Use external launcher to set Files as default explorer by @gave92 in #8684
Notify when pinned items config changes by @jiejasonliu in #8712
Fix new/rename dialog processing stale text by @jiejasonliu in #8783
Fix box drive by @gave92 in #8808
Fix crash when using "apply to all" menu item in conflicts dialog by @gave92 in #8836
Show which process is locking a file by @gave92 in #8809
Fix for pasting in search box by @puppetsw in #8811
Fixed Disconnect Drive Icon by @esibruti in #8854
Fix Ctrl+L on homepage by @gave92 in #8861
Add archive name when extracting by @itsWindows11 in #8900
Fix create folder with selection by @gave92 in #8929
Fix copy/move to zip file by @gave92 in #8930
Fixes for item context menu in search page by @gave92 in #8987

## Feedback

Files thrives off community feedback because it helps shape the features we work on and makes the app better for
everyone. We invite you to submit your feedback through our GitHub repository.

– Yair

Download from
the [Microsoft Store]({'https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-3'})
|| See Files on [GitHub](https://github.com/files-community/Files)
