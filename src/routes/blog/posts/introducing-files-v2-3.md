---
title: Introducing the next major release of Files - v2.3
description: We're excited to not only introduce the next major release of Files, but also a series of future changes to sustain contributor momentum into 2023. 
thumbnail: /blog-resources/filesv2-3/HeroImage.jpg
date: 2022-7-5
author: files-community
---

The astounding growth of the project over the last three years serves to motivate our journey to build the best file manager, alongside the community. More than ever, Files plays an important role in demonstrating how impactful the latest user experience improvements in WinUI can be. A notable experience we can reflect on was fixing an issue with screen reader accessibility reported by a blind user. More recently, we were delighted to hear from a seventy-seven-year-old "non-geek" who was impressed that we made file discovery "much easier" compared to the first party solution. Both of these stories highlight the inadvertent achievements that come from engaging the broader community.

Today we're excited to not only introduce the next major release of Files, but also a series of future changes to sustain contributor momentum into 2023. 

## Files v2.3

As part of our mission to create a stable and fully-featured file manager, we added a compact spacing feature, bulk actions experience in the conflicts dialog, and a double click gesture to navigate up one directory. Additionally, we focused on improving the behavior of existing features with the understanding that they're most useful when they perform as expected.

**Compact sizing** allows users to view more items on the screen
<figure class="margin-bottom">
    <img src="/blog-resources/filesv2-3/CompactSpacing.png" alt="A screenshot of the new compact spacing option in Files v2.3." />
</figure>

The **tab control** was redesigned to follow our design language
<figure class="margin-bottom">
    <img src="/blog-resources/filesv2-3/Tabs.png" alt="A screenshot of the new tab design in Files v2.3." />
</figure>

We added an option to display **tags** on the sidebar
<figure class="margin-bottom">
    <img src="/blog-resources/filesv2-3/Tags.png" alt="A screenshot of the new tags section on the sidebar in Files v2.3." />
</figure>

Added support for applying bulk actions in the **conflicts dialog**
<figure class="margin-bottom">
    <img src="/blog-resources/filesv2-3/BulkActions.png" alt="A screenshot of the redesigned conflicts dialog in Files v2.3." />
</figure>

## Other changes
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

The full list of improvements and bug fixes can be found [here](https://github.com/files-community/Files/releases)

## The next generation of Files

This milestone marks the beginning of a reinvigorated effort to modernize and improve the architecture of the Files codebase. A well-architected, testable codebase will not only attract new contributors, but enables us to offer platform specific benefits in the long run. Further, we will be able to iterate faster, accelerating our transition to the Windows App SDK. Switching will remove longstanding limitations in the present app model and will enable us to deliver improvements in net performance and reliability.

We hope to share more about this effort in the coming months.

We view these steps as critical to continuing the great work on Files. The best way for you to support current and future efforts is to [sponsor](https://github.com/sponsors/yaichenbaum) us on GitHub.

### Giving back to the community

The Files contributors are pleased to announce that the main application repository has been relicensed under the MIT license. This means that other projects can now take advantage of our innovation even if they happen to be closed source.

Over the next year, you'll start to see us doing our part to expand the number of Windows developers. Offering a helpful onboarding guide annotated by core Files contributors best embodies this vision. We anticipate this information will be a valuable resource for anyone studying native Windows APIs, packaged apps, and UI design practices.

## Feedback

Files thrives off community feedback because it helps shape the features worked on and makes the app better for
everyone. We invite you to submit your feedback through our GitHub repository.


Download from
the [Microsoft Store]({'https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-3'})
|| See Files on [GitHub](https://github.com/files-community/Files)


