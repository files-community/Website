---
title: Announcing Files v4.0
description: We're excited to announce the general availability of Files v4.0 for all users.
thumbnail: /blog-resources/v4/Hero.png
date: 12/4/2025
author: files-community
---

On behalf of the entire Files Community, I'm excited to announce the release of Files v4.0! 🎉

Our mission is to build the best file manager for Windows, and we're proud to do this as an open source project on [GitHub](https://github.com/files-community/Files). A lot of time and effort was put into Files v4, and it wouldn't have been possible without the community's involvement. Over the past year, dozens of contributors worked on design concepts, added new features, fixed bugs, and helped review pull requests on GitHub. Thank you for all your hard work!

An update icon should be displayed in the top right corner of the app for existing users, while new users can get started from our [download](/download/) page. Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or by sponsoring us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.

## Contents

- [What's new in Files v4.0](#whats-new-in-files-v40)
  - [Updated icon](#updated-icon)
  - [Omnibar](#omnibar)
  - [Dual Pane](#dual-pane)
  - [Filtering and search](#filtering-and-search)
  - [Developer tools and git](#developer-tools-and-git)
  - [Cloud drives](#cloud-drives)
  - [Compare hashes](#compare-hashes)
  - [File signatures](#file-signatures)
  - [Columns View](#columns-view)
  - [Status Center](#status-center)
  - [Actions settings page](#actions-settings-page)
  - [Archives](#archives)
  - [Customizable file size units](#customizable-file-size-units)
  - [Sidebar](#sidebar)
  - [Context menu](#context-menu)
  - [Quick access to diagnostics](#quick-access-to-diagnostics)
  - [Other highlights](#other-highlights)
- [Fixes](#fixes)


## What's new in Files v4.0

### Updated icon

Files v4.0 introduces a refreshed logo design with richer color, ensuring it feels right at home with other Fluent designed apps from Microsoft

<figure>
    <img src="/blog-resources/v4/NewIcon.png" alt="Updated icon" />
</figure>

### Omnibar

The Omnibar merges the path bar and search box into a single, streamlined control. You can switch between navigation and search modes by clicking the mode buttons or by using their dedicated keyboard shortcuts.  

<figure>
    <img src="/blog-resources/v4/Omnibar.png" alt="Omnibar" />
</figure>

In Command Palette mode, the Omnibar displays advanced commands and actions. Learn more in our [Omnibar documentation](/docs/features/omnibar/). 

<figure>
    <img src="/blog-resources/v4/OmnibarCommandPalette.png" alt="Search" />
</figure>


### Dual Pane

- You can now toggle Dual Pane mode by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd>.  
- We added a dedicated settings section for Dual Pane under **Settings → Layout → Dual Pane**.  
- New panes now open with the same path you're currently viewing.  
- The "Add pane" option is now labeled "Split pane".

<figure>
    <img src="/blog-resources/v4/SplitPaneMenu.png" alt="Split pane flyout menu" />
</figure>


### Filtering and search

To reduce confusion between filtering and search, we've separated them into two features. Search leverages the Windows Search index for comprehensive queries across all indexed locations. Filter refines the items you see within the current folder.

Search is available by pressing <kbd>Ctrl</kbd>+<kbd>F</kbd> or by clicking the search icon in the Omnibar.

<figure>
    <img src="/blog-resources/v4/SearchHeader.png" alt="Search header" />
</figure>

The filter header can be activated via the toolbar button or the <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> shortcut. It quickly narrows visible items in the open directory without relying on the index, keeping you in context and delivering targeted results in realtime.

<figure>
    <img src="/blog-resources/v4/FilterHeader.png" alt="Filter header" />
</figure>


### Developer tools and git

You can now remap the **Open IDE** command to any editor under **Settings → Developer tools**.  

<figure>
    <img src="/blog-resources/v4/DeveloperTools.png" alt="Developer Settings" />
</figure>

When you drop a GitHub URL into Files, you'll be prompted to clone it. Clone progress is displayed in the Status Center.

<figure>
    <img src="/blog-resources/v4/CloningStatus.png" alt="Clone status" />
</figure>


### Cloud drives

- Files now supports MagentaCLOUD, Sync, and OX Drive integration. The full list of available cloud drives can be viewed on our [cloud drive](/docs/features/cloud-drives) documentation.
- OneDrive storage usage is now displayed in the Properties window on supported versions of Windows (Windows 23H2 and later).


### Compare hashes

The **Hashes** tab in Properties has a new **Compare a file** option that lets you quickly verify a file's hash against a known value or another file.

<figure>
    <img src="/blog-resources/v4/Hashes.png" alt="Hash comparison" />
</figure>


### File signatures

A new **Signatures** tab in Properties shows digital signatures so you can verify a file's authenticity at a glance.

<figure>
  <img src="/blog-resources/v4/Signatures.png" alt="Signatures page" />
</figure>


### Columns View

Columns View now automatically adjusts each column's width to fit its file names. You can also drag the dividers to resize columns or double-click a divider to snap it back to the optimal width.


### Status Center

- You can now control when the Status Center icon is visible under **Settings → Appearance → Toolbars → Status Center**. By default, the icon is always visible, but you can configure it to appear only when tasks are in progress. 
- Notification badges clear automatically when you open the Status Center.  
- Font installation progress is now displayed in the Status Center.

<figure>
  <img src="/blog-resources/v4/StatusCenterIcon.png" alt="Status Center icon" />
</figure>


### Actions settings page

The Actions settings page now adapts to smaller window sizes, and we added a search box so you can quickly filter commands.

<figure>
    <img src="/blog-resources/v4/ActionsSettingsPage.png" alt="Search box on the Actions settings page" />
</figure>


### Archives

- The 7-Zip dependency has been updated to version 25.01.  
- New archives now default to UTF-8 encoding.  
- When extracting archives, Files auto-detects the encoding. You can still choose a different format if needed.


### Customizable file size units

You can now choose whether file size units are shown in binary units (MiB) or decimal units (MB). This setting can be adjusted from **Settings → Files & folders → Size format**.


### Sidebar

- The settings button has been relocated from the address bar to the left‑hand sidebar.
- Right clicking the settings button displays an option to open the raw JSON file.
- If you hide all the sidebar sections, you'll now see helpful placeholder content.


### Context menu

- Access keys are now displayed in the right-click context menu when holding down the 'alt' key.
- We added support for turning off the 'Open in Terminal' option in the right click context menu. This setting can be accessed from **Settings → General → Context menu options** .


### Quick access to diagnostics

You can now open the log file and folder with keyboard shortcuts:

- To open the log file, press <kbd>Ctrl</kbd>+<kbd>.</kbd>  
- To open the log folder, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd>


### Other highlights

- You can now browse all supported image formats when selecting a background in Settings.
- You can now browse all supported icon file formats when selecting an icon in Properties.
- We've expanded our language support to now include Armenian. Our localizations are maintained by our dedicated community members. If you'd like to get involved, we invite you to join us on Crowdin: [https://crowdin.com/project/files-app](https://crowdin.com/project/files-app).
- We've replaced the Release Notes dialog with a dedicated tab that opens automatically after updating Files. This makes it easier to explore what's new and improved in each release.
- We've improved the performance of the Quick Access widget on the Home Page.
- The review prompt in the Store version of Files will now appear only once per user, and only after 30 sessions. Additionally, the prompt no longer blocks user input and is designed to be less disruptive.
- Experimental support for long file paths allows you to work with directories and filenames that exceed traditional Windows limits, opening up more possibilities for complex projects.


## Fixes

### Updates

- Fixed an issue where an error dialog would sometimes appear after updating Files.
- Fixed an issue where the WebView process for the "What's New" dialog would remain open in the background.
- Fixed a crash that would sometimes occur during updates.


### Sidebar

- Fixed an issue where installing more than one instance of Files would unpin Recycle Bin from the sidebar.


### Home Page

- Fixed an issue where the Home Page didn't properly refresh.


### Properties Window

- Fixed an issue where text in the permissions page would wrap incorrectly.
- Fixed an issue where the sidebar would flicker when resizing the properties window.
- Fixed an issue where the Cleanup and Format options were incorrectly displayed for Cloud Drives.


### Run with PowerShell

- Fixed an issue where the "Run with PowerShell" action wouldn't pass the working directory.


### Status Center

- Fixed an issue where the Status Center didn't display the size for some file operations.


### Themes

- Fixed issue where the Release Notes page sometimes used the wrong theme.


### Icons

- Fixed issue where the icon for "developer tools" didn't display properly on Windows 10.


### Toolbar

- Fixed an issue where toolbar buttons sometimes displayed the wrong icon state.
- Fixed an issue where the extract button was sometimes missing from the toolbar.
- Fixed the menu label for overflow items in the toolbar.
- Fixed issue where the 'layout' icon didn't match the select layout.

### File sorting and grouping

- Fixed sorting issues with files containing #-# numbering.
- Fixed an issue where name sorting was case-sensitive.
- Fixed an issue where the group header text was misaligned.


### Git

- Fixed errors that sometimes occurred with shortcuts in Git repositories.


### Background images

- Fixed a crash that would occur when using an invalid background image.


### File shortcuts

- Resolved an issue preventing folders ending in '.url' from opening properly.


### Renaming

- Fixed an issue where the home key wouldn't move focus when renaming items.


### Recycle Bin

- Fixed an issue with deleting items that didn't fit in Recycle Bin.


### Keyboard shortcuts

- Fixed issue where the delete key wouldn't work after removing an item from the selection.
- Fixed issue preventing file selection via keyboard.


### About page

- Fixed issue where the Windows version was copied incorrectly.


### Dual Pane

- Fixed an issue where the inactive pane would steal focus during file changes.
- Resolved a bug where switching layouts incorrectly focused the right pane.


### RTL

- RTL support has been added back to Files. Please note that some areas are still missing support (such as content dialogs).


### Touch

- Fixed issue with clearing selection via touch


### Layouts

- Fixed issue where adaptive layout removed focus from the active pane.