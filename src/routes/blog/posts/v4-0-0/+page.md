---
title: Announcing Files v4.0
description: We're excited to announce the general availability of Files v4.0 for all users.
thumbnail: /blog-resources/v4/Hero.png
date: 12/4/2025
author: files-community
---

On behalf of the entire Files Community, I'm excited to announce the release of Files v4.0! 🎉 An update icon should be displayed in the top right corner of the app for existing users, while new users can get started for free from our [download page](/download/). Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or by sponsoring us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.

Our mission is to build the best file manager for Windows, and we're proud to do this as an open source project on [GitHub](https://github.com/files-community/Files). Over the past 8 months, dozens of contributors worked on new features, fixed bugs, created design concepts (this update would not have been posible without Martin!), and helped review code.

## What’s new in Files v4.0

### Improved file operations and system integration

We’ve enhanced file handling and system integration to give you more control and better feedback:

- ZIP file handling now supports automatic encoding detection during extraction, ensuring filenames display correctly. If needed, you can manually override the encoding from the extract archive dialog.

  <figure>
    <img src="/blog-resources/v4-preview/ArchiveEncoding.png" alt="Extract archive dialog" />
    <figcaption>Extract archive dialog</figcaption>
  </figure>

- When creating ZIP archives, Files uses UTF-8 encoding by default for improved cross-platform compatibility.

- Experimental support for long file paths allows you to work with directories and filenames that exceed traditional Windows limits, opening up more possibilities for complex projects.

- You can now customize how file sizes are displayed through settings, letting you choose the units that best fit your workflow.

  <figure>
    <img src="/blog-resources/v4-preview/SizeFormatSetting.png" alt="Size format setting" />
    <figcaption>Size format setting</figcaption>
  </figure>

- A new **Signatures** tab in the Properties window makes it easier to view digital signatures associated with files, helping verify authenticity at a glance.

  <figure>
    <img src="/blog-resources/v4-preview/Signatures.png" alt="Signatures page" />
    <figcaption>Signatures page</figcaption>
  </figure>

- OneDrive storage usage is now visible within the Properties window for supported Windows versions (Windows 23H2 and later), giving you quick insight into cloud storage consumption.

- The icon picker now supports browsing all compatible icon file formats, simplifying customization of folder and file icons.

- Columns in the **Columns View** layout are now resizable. You can drag column dividers to adjust widths or double-click to auto-fit columns to their content.

### Settings, sidebar & Status Center enhancements

We’ve made several improvements to streamline access and visibility for key UI elements:

- The settings button has been relocated from the address bar to the left‑hand sidebar.

- When all sidebar sections are hidden, placeholder content now appears to provide helpful guidance and improve usability.

  <figure>
    <img src="/blog-resources/v4-preview/EmptySidebar.png" alt="Sidebar placeholder content" />
    <figcaption>Sidebar placeholder content</figcaption>
  </figure>

- Right‑clicking the settings button in the sidebar opens a context menu with quick access to the raw settings JSON file for advanced customization.

  <figure>
    <img src="/blog-resources/v4-preview/SettingsContextMenu.png" alt="Settings context menu" />
    <figcaption>Settings context menu</figcaption>
  </figure>

- The Status Center now offers a new setting that lets you control its visibility. You can choose to always display the Status Center button or have it show only during active file operations.

  <figure>
    <img src="/blog-resources/v4-preview/StatusCenterButton.png" alt="Always displayed Status Center" />
    <figcaption>Status Center button</figcaption>
  </figure>

- Notification badges in the Status Center clear automatically when you open it, reducing visual clutter.

  <figure>
    <img src="/blog-resources/v4-preview/StatusCenterBadge.png" alt="Status Center badge" />
    <figcaption>Status Center badge</figcaption>
  </figure>

- Font installation progress is now displayed in the Status Center, accompanied by an updated install font icon on the toolbar for better feedback.

  <figure>
    <img src="/blog-resources/v4-preview/InstallFonts.png" alt="Font installation status" />
    <figcaption>Font installation status</figcaption>
  </figure>

### Developer tools and integrations

We've added several improvements to help developers work more efficiently in Files:

- The **Open IDE** feature is no longer limited to Visual Studio Code. You can now choose your preferred editor from the Developer Tools section in Settings.

  <figure>
      <img src="/blog-resources/v4-preview/IDESettings.png" alt="Developer Settings" />
      <figcaption>Choose your default IDE from Developer Tools</figcaption>
  </figure>

- Drag and drop a GitHub URL into Files to clone the repository to your device. A confirmation prompt is shown before cloning, and progress can be viewed in the Status Center. This action is also available via the [Command Palette](/docs/features/command-palette/) and can also be assigned a keyboard shortcut in [settings](/docs/customize-settings/actions).

  <figure>
      <img src="/blog-resources/v4-preview/CloneRepoPrompt.png" alt="Clone repo confirmation" />
      <figcaption>Clone repo confirmation</figcaption>
  </figure>

  <figure>
      <img src="/blog-resources/v4-preview/CloneRepoStatus.png" alt="Clone status" />
      <figcaption>Cloning progress shown in Status Center</figcaption>
  </figure>

- You can now compare the hash of a selected file with a known hash or another file. Use the **Compare a file** button in the Hashes page to quickly verify file integrity.

  <figure>
      <img src="/blog-resources/v4-preview/CompareHashes.png" alt="Hash comparison" />
      <figcaption>Hash comparison in Properties</figcaption>
  </figure>


### Updated app icon

We're excited to introduce a refreshed icon for Files!

<figure>
    <img src="/blog-resources/v3-9-9/PreviewIcon.png" alt="Updated icon for Files" />
    <figcaption>Updated icon for Files</figcaption>
</figure>

### Redesigned address bar with the new Omnibar

We’re excited to unveil a redesigned Address Bar that combines the breadcrumb path and search box into a unified, intuitive interface that we call the **Omnibar**. This isn’t just a visual refresh, it brings enhanced functionality while preserving the precision and flexibility Files users love.

<figure>
    <img src="/blog-resources/v4-preview/Omnibar.png" alt="Omnibar" />
    <figcaption>Default view in the Omnibar</figcaption>
</figure>

**Breadcrumb bar:** The default Omnibar view shows the current path using a familiar breadcrumb layout. Breadcrumbs can be expanded to reveal subfolders via the chevron icon. The breadcrumb flyouts now display the icon for each folder. Additionally, a new home button and flyout menu provide quick access to pinned and frequently used folders.

<figure>
    <img src="/blog-resources/v4-preview/OmnibarQuickAccess.png" alt="Quick Access flyout" />
    <figcaption>Quick Access flyout menu</figcaption>
</figure>

**Edit path:** Switch to edit path mode by clicking an empty space in the breadcrumb bar (as before), or by using the `Ctrl + L` keyboard shortcut. When activated, the current path is automatically selected, making it easy to copy, overwrite, or modify without extra clicks.

<figure>
    <img src="/blog-resources/v4-preview/OmnibarPathMode.png" alt="Edit path" />
    <figcaption>Edit path in the Omnibar</figcaption>
</figure>

**Command Palette:** Access [Command Palette](/docs/features/command-palette/) mode by clicking the command button or using the `Ctrl + Shift + P` keyboard shortcut. While the Command Palette was previously accessible via a keyboard shortcut, many users were unaware of it. Now, this feature has a dedicated button in the UI, making advanced commands easier to discover and use.

<figure>
    <img src="/blog-resources/v4-preview/OmnibarCommandMode.png" alt="Command Palette" />
    <figcaption>Command Palette in the Omnibar</figcaption>
</figure>

**Search:** Search mode is accessed by clicking the search icon or using the `Ctrl + F` keyboard shortcut. When opened, the search box is automatically focused so you can start typing immediately. Suggestions appear in a flyout, and pressing 'Enter' takes you to the dedicated search results page.

In earlier versions, typing a query in the search box without pressing 'Enter' filtered items in the current directory instead of performing a full indexed search. This caused confusion for some users. To improve clarity, filtering has been moved to a dedicated header (more on that below).

<figure>
    <img src="/blog-resources/v4-preview/OmnibarSearchMode.png" alt="Search" />
    <figcaption>Search mode in the Omnibar</figcaption>
</figure>

### New filter header for quick directory filtering

To reduce confusion between search and filtering, we’ve added a dedicated filter header within the file area. This header provides quick, lightweight filtering of the current directory without invoking the search index. You can toggle it on or off via the toolbar, and when enabled, the text box is automatically focused so you can start typing right away. Currently, filtering applies to file names only, delivering fast and predictable results.

For even faster access, users can assign a custom keyboard shortcut on the [actions](/docs/customize-settings/actions) settings page. This makes it easy to integrate filtering seamlessly into your workflow.

<figure>
    <img src="/blog-resources/v4-preview/FilterHeader.png" alt="Filter header" />
    <figcaption>Filter header</figcaption>
</figure>

### Clearer search results with a new header

Search results now include a header that clearly displays your current query.

<figure>
    <img src="/blog-resources/v4-preview/SearchHeader.png" alt="Search header" />
    <figcaption>Search header</figcaption>
</figure>

### Expanded language support

We've expanded our language support to now include Armenian. Our localizations are maintained by our dedicated community members. If you'd like to get involved, we invite you to join us on Crowdin: [https://crowdin.com/project/files-app](https://crowdin.com/project/files-app).

### New experience for release notes

We've replaced the Release Notes dialog with a dedicated tab that opens automatically after updating Files. This makes it easier to explore what's new and improved in each release.

### Improved performance on the Home Page

We've optimized the Quick Access widget on the Home Page to improve performance.

### Support for more cloud storage providers

Files now supports additional [cloud drive](/docs/features/cloud-drives) providers, including Magenta, Sync, and OX Drive integration. The full list of available providers can be viewed on our [cloud drive](/docs/features/cloud-drives) documentation.

### Improved responsive layout on the actions page

We've enhanced the responsive design of the actions settings page. On smaller screens, text now wraps correctly, and buttons adjust dynamically to remain visible.

### Search and filter commands in actions settings

We added a search box to the actions settings page, allowing users to quickly filter and find commands with ease.

<figure>
    <img src="/blog-resources/v4-preview/FilterActions.png" alt="Search box on the actions page" />
    <figcaption>Search box on the actions page</figcaption>
</figure>

### Access keys in context menus

Access keys are now displayed in the right click context menu when holding down the 'alt' key.

### Smarter review prompt behavior

The review prompt in the Store version of Files will now appear only once per user, and only after 30 sessions. Additionally, the prompt no longer blocks user input and is designed to be less disruptive.

### Option to remove "Open in Terminal" from context menu

We added support for turning off the 'Open in Terminal' option in the right click context menu. This setting can be accessed from the [general](/docs/customize-settings/general) settings page.

### Enhancements to Dual Pane mode

The Dual Pane feature has been refined to feel more intuitive:

- **Add pane** is now labeled **Split pane** for clarity
- Added an [action](/docs/customize-settings/actions/) that lets you quickly toggle Dual Pane mode on or off
- Dual Pane settings now have a dedicated section in the [general](/docs/customize-settings/general) settings page

<figure>
    <img src="/blog-resources/v4-preview/DualPaneSettings.png" alt="Dual pane settings" />
    <figcaption>Dual pane settings</figcaption>
</figure>


### Code Quality

- Replaced the Visual Studio .sln file with the new .slnx format.
- Updated to .NET 9
- Updated to WASDK 1.6
- Updated to CommunityToolkit.WinUI 8.2
- Updated to CsWinRT 2.2


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
- Fixed an issue where **Cleanup** and **Format** options were incorrectly displayed for Cloud Drives.

### Run with PowerShell

- Fixed an issue where the "Run with PowerShell" action wouldn't pass the working directory.

### Status Center

- Fixed an issue where the Status Center didn't display the size for some file operations.

### Themes

- Fixed issue where the "What's new" dialog sometimes used the wrong theme.

### Icons

- Fixed issue where the icon for "developer tools" didn't display properly on Windows 10.

### Toolbar

- Fixed an issue where toolbar buttons sometimes displayed the wrong icon state.
- Fixed an issue where the extract button was sometimes missing from the toolbar.
- Fixed the menu label for overflow items in the toolbar.

### File sorting

- Fixed sorting issues with files containing #-# numbering.
- Fixed an issue where name sorting was case-sensitive.

### Git

- Fixed errors that sometimes occurred with shortcuts in Git repositories.

### Background images

- Fixed a crash that would occur when using an invalid background image.

### Shortcuts

- Resolved an issue preventing folders ending in '.url' from opening properly.

### Start Menu tile

- Fixed the display name for the 'Files - Preview' tile in the Start Menu.

### Renaming

- Fixed an issue where the home key wouldn't move focus when renaming items.

### Recycle Bin

- Fixed an issue with deleting items that don't fit in Recycle Bin.

### Grouping

- Fixed an issue where the group header text was misaligned.

### Keyboard shortcuts

- Fixed issue where the delete key wouldn't work after removing an item from the selection.
- Fixed issue preventing file selection via keyboard.

### About page

- Fixed issue where the Windows version was copied incorrectly.

### RTL

- RTL support has been added back to Files. Please note that some areas are still missing support (such as content dialogs).