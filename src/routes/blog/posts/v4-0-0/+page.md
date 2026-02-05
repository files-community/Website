---
title: Announcing Files v4.0
description: We're excited to announce the general availability of Files v4.0.
thumbnail: /blog-resources/v4/Hero.webp
date: 9/3/2025
author: files-community
---

On behalf of the entire Files Community, I'm excited to announce the release of Files v4.0! 🎉

Our mission is to build the best file manager for Windows, and we're proud to do this as an open source project on [GitHub](https://github.com/files-community/Files). A lot of time and effort was put into Files v4, and it wouldn't have been possible without the community's involvement. Over the past year, dozens of contributors worked on design concepts, added new features, fixed bugs, and helped review pull requests on GitHub. Thank you for all your hard work!

An update icon should be displayed in the top right corner of the app for existing users, while new users can get started from our [download](/download/) page. Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or by sponsoring us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.

## Contents

- [What's new in Files v4.0](#whats-new-in-files-v40)
  - [Updated icon](#updated-icon)
  - [Omnibar](#omnibar)
  - [Improved Dual Pane](#dual-pane)
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

Files v4.0 introduces a refreshed logo design with richer color, ensuring it feels right at home with other Fluent designed apps from Microsoft.

<figure>
    <img src="/blog-resources/v4/NewIcon.webp" alt="Updated Files icon" />
</figure>

### Omnibar

The Omnibar is a major design update in Files v4.0, replacing the traditional Address Bar with a brand new control that merges the path bar and search box into a single, intuitive interface. You can switch between navigation and search modes by clicking the mode buttons or by using their dedicated keyboard shortcuts.

<figure>
    <img src="/blog-resources/v4/Omnibar.webp" alt="Omnibar" />
</figure>

A powerful Command Palette mode provides access to advanced commands and actions. Learn more in our [Omnibar documentation](/docs/features/omnibar/). 

<figure>
    <img src="/blog-resources/v4/OmnibarCommandPalette.webp" alt="Command Palette" />
</figure>


### Dual Pane

Dual Pane mode lets you view and manage two folders side-by-side, perfect for dragging files between locations without switching tabs. We made a number of enhancements to Dual Pane mode to improve your experience.

- You can now toggle Dual Pane mode by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd>.  
- We added a dedicated settings section for Dual Pane under **Settings → Layout → Dual Pane**.
- New panes now open with the same path you're currently viewing.  
- The "Add pane" option is now labeled "Split pane".

<figure>
    <img src="/blog-resources/v4/SplitPaneMenu.webp" alt="Split pane flyout menu" />
</figure>


### Filtering and search

To reduce confusion between filtering and search, we've separated them into two features. Search leverages the Windows Search index for comprehensive queries across all indexed locations. Filter refines the items you see within the current folder.

Search is available by pressing <kbd>Ctrl</kbd>+<kbd>F</kbd> or by clicking the search icon in the Omnibar.

<figure>
    <img src="/blog-resources/v4/SearchHeader.webp" alt="Search header" />
</figure>

The filter header can be activated via the toolbar button or the <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> shortcut. It filters items in the open directory without relying on the index, keeping you in context and displaying results in real time.

<figure>
    <img src="/blog-resources/v4/FilterHeader.webp" alt="Filter header" />
</figure>


### Developer tools and git

You can now remap the **Open IDE** command to any editor under **Settings → Developer tools**, giving you flexibility to integrate your preferred coding environment.

<figure>
    <img src="/blog-resources/v4/DeveloperTools.webp" alt="Developer Settings" />
</figure>

When you drop a GitHub URL into Files, you'll be prompted to clone it. Clone progress is displayed in the Status Center.

<figure>
    <img src="/blog-resources/v4/CloningStatus.webp" alt="Clone status" />
</figure>


### Cloud drives

- Files now supports MagentaCLOUD, Sync, and OX Drive integration, expanding your options for cloud storage access directly in the app. The full list of available cloud drives can be viewed on our [cloud drive](/docs/features/cloud-drives) documentation.
- OneDrive storage usage is now displayed in the Properties window on Windows 11.


### Compare hashes

The **Hashes** tab in Properties has a new **Compare a file** option that lets you quickly verify a file's hash against a known value or another file.

<figure>
    <img src="/blog-resources/v4/Hashes.webp" alt="Hash comparison" />
</figure>


### File signatures

A new **Signatures** tab in Properties shows digital signatures so you can verify a file's authenticity at a glance.

<figure>
  <img src="/blog-resources/v4/Signatures.webp" alt="Signatures page" />
</figure>


### Columns View

Columns View now automatically adjusts each column's width to fit its file names. You can also drag the dividers to resize columns or double-click a divider to snap it back to the optimal width.

<figure>
    <img src="/blog-resources/v4/Columns.gif" alt="Columns View" />
</figure>

### Status Center

- You can now control when the Status Center icon is visible under **Settings → Appearance → Toolbars → Status Center**. By default, the icon is always visible, but you can configure it to appear only when tasks are in progress. 
- Notification badges clear automatically when you open the Status Center.  
- Font installation progress is now displayed in the Status Center.

<figure>
  <img src="/blog-resources/v4/StatusCenterIcon.webp" alt="Status Center icon" />
</figure>


### Actions settings page

The Actions settings page now adapts to smaller window sizes, and we added a search box so you can quickly filter commands.

<figure>
    <img src="/blog-resources/v4/ActionsSettingsPage.webp" alt="Search box on the Actions settings page" />
</figure>


### Archives

- The 7-Zip dependency has been updated to version 25.01.  
- New archives now default to UTF-8 encoding.  
- When extracting archives, Files auto-detects the encoding. You can still choose a different format if needed.


### Customizable file size units

You can now choose whether file size units are shown in binary units (MiB) or decimal units (MB). This setting can be adjusted from **Settings → Files & folders → Size format**.


### Sidebar

- The settings button has been relocated from the address bar to the left-hand sidebar.
- Right clicking the settings button displays an option to open the raw JSON file.
- If you hide all the sidebar sections, you'll now see helpful placeholder content.


### Context menu

- Access keys are now displayed in the right-click context menu when holding down the 'alt' key.
- We added support for turning off the 'Open in Terminal' option in the right click context menu. This setting can be accessed from **Settings → General → Context menu options** .


### Quick access to diagnostics

You can now open the log file and folder with keyboard shortcuts:

- To open the log file, press <kbd>Ctrl</kbd>+<kbd>.</kbd>  
- To open the log folder, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd>


### Localization

We've expanded our language support to now include Armenian, broadening accessibility for global users. Our localizations are maintained by our dedicated community members. If you'd like to get involved, we invite you to join us on Crowdin: [https://crowdin.com/project/files-app](https://crowdin.com/project/files-app).


### Other highlights

- You can now browse all supported image formats when selecting a background in Settings.
- You can now browse all supported icon file formats when selecting an icon in Properties.
- We've replaced the Release Notes dialog with a dedicated tab that opens automatically after updating Files. This makes it easier to explore what's new and improved in each release.
- We've improved the performance of the Quick Access widget on the Home Page.
- The review prompt in the Store version of Files will now appear only once per user, and only after 30 sessions. Additionally, the prompt no longer blocks user input and is designed to be less disruptive.


## Fixes

### Updates and release notes

- Fixed an issue where an error dialog would sometimes appear after updating Files.
- Fixed a crash that would sometimes occur during updates.
- Fixed an issue where the WebView process for the Release Notes page would remain open in the background.
- Fixed an issue where the Release Notes page sometimes used the wrong theme.


### Settings dialog

- Fixed an issue where the Windows version was copied incorrectly.
- Fixed an issue where the icon for "developer tools" didn't display properly on Windows 10.


### Sorting and grouping

- Fixed sorting issues with files containing #-# numbering.
- Fixed an issue where name sorting was case-sensitive.
- Fixed misaligned group header text.


### Shortcuts and commands

- Fixed an issue where the "Run with PowerShell" action didn't pass the working directory.
- Fixed an issue where the delete key didn't work after removing an item from the selection.
- Fixed an issue preventing file selection via keyboard.
- Fixed an issue where the <kbd>Home</kbd> key didn't move focus while renaming items.

### Navigation and layout

- Fixed an issue where the Home Page didn't properly refresh.
- Fixed an issue where adaptive layout removed focus from the active pane.
- Fixed an issue where the inactive pane would steal focus during file changes.
- Fixed an issue where switching layouts incorrectly focused the right-hand pane.
- Fixed an issue where the 'layout' icon didn't match the selected layout.
- Fixed RTL support (please note that some areas are still missing support).
- Fixed an issue where the Cleanup and Format options were incorrectly displayed for Cloud Drives.
- Fixed an issue where the Status Center didn't display file-operation sizes.
- Fixed an issue with deleting items that didn't fit in Recycle Bin.
- Fixed an issue preventing folders ending in `.url` from opening properly.
- Fixed errors that sometimes occurred with shortcuts in Git repositories.
- Fixed a crash that would occur when using an invalid background image.
- Fixed an issue where text in the permissions page wrapped incorrectly.
- Fixed an issue where the sidebar flickered when resizing the properties window.
- Fixed an issue where installing multiple instances of Files (e.g. Files - Preview) would unpin Recycle Bin from the sidebar.
- Fixed an issue with clearing selection via touch.

### Toolbar

- Fixed an issue where toolbar buttons sometimes displayed the wrong icon state.
- Fixed an issue where the extract button was sometimes missing from the toolbar.
- Fixed the menu label for overflow items in the toolbar.


## Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2/)
