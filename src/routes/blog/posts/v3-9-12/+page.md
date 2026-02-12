---
title: Announcing Files Preview v3.9.12
description: Announcing Files Preview v3.9.12 for users of the preview version.
thumbnail: /blog-resources/v4-preview/3-9-12.png
date: 7/20/2025
author: files-community
---

Today we are releasing **Files Preview v3.9.12** for users of the preview version. New users can get started from our [download page](/download/). If you'd like to support the project, consider purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or sponsoring us on [GitHub](https://github.com/sponsors/yair100). Your support is greatly appreciated but entirely optional.

## Changes

### Introducing the Omnibar

We're excited to announce the new Omnibar control, a new design that merges the breadcrumb path and search box into a unified interface. The Omnibar isn't just a visual refresh. It introduces new functility while maintaining the precision and flexibility users expect.

<figure>
    <img src="/blog-resources/v4-preview/Omnibar.png" alt="Omnibar" />
    <figcaption>Default view in the new Omnibar</figcaption>
</figure>

**Breadcrumb bar:** The default Omnibar view shows the current path using a familiar breadcrumb layout. Breadcrumbs can be expanded to reveal subfolders via the chevron icon. The breadcrumb flyouts have also been updated to display the icon for each folder. Additionally, we added a new home button and flyout menu, providing quick access to pinned and frequently used folders.

<figure>
    <img src="/blog-resources/v4-preview/OmnibarQuickAccess.png" alt="Quick Access flyout" />
    <figcaption>Quick Access flyout menu</figcaption>
</figure>

**Edit path:** Switching to edit path mode is done by clicking an empty space in the breadcrumb bar (as before), or by using the `Ctrl + L` keyboard shortcut. When activated, the current path is automatically selected making it easy to copy, overwrite, or modify without extra clicks.

<figure>
    <img src="/blog-resources/v4-preview/OmnibarPathMode.png" alt="Edit path" />
    <figcaption>Edit path in the Omnibar</figcaption>
</figure>

**Command Palette:** [Command Palette](/docs/features/command-palette/) mode is accessed by clicking the command button or by using the `Ctrl + Shift + P` keyboard shortcut. While the Command Palette was previously available via keyboard shortcuts, many users were unaware and therefore unable to take advantage. Now, this feature has a dedicated button in the UI making advanced commands easier to discover and use.

<figure>
    <img src="/blog-resources/v4-preview/OmnibarCommandMode.png" alt="Command Palette" />
    <figcaption>Command Palette in the Omnibar</figcaption>
</figure>

**Search:** Search mode is accessed by clicking the search icon or using the `Ctrl + F` keyboard shortcut. When opened, the search box is automatically focused so users can start typing immediately. Suggestions appear in a flyout, and pressing 'Enter' takes you to the dedicated search results page.

In earlier versions, typing a query in the search box without pressing 'Enter' would filter items in the current directory rather than performing a full indexed search. We found this behavior was causing confusion. To improve clarity, the filtering functionality has now been moved to a dedicated header (more on that below).

<figure>
    <img src="/blog-resources/v4-preview/OmnibarSearchMode.png" alt="Search" />
    <figcaption>Search mode in the Omnibar</figcaption>
</figure>

### Added a dedicated filter header

To reduce confusion between the search and filter functionality, we added a dedicated filter header within the file area. This header offers quick, lightweight filtering of the current directory without invoking the search index. It can be toggled on or off via the toolbar, and when enabled, the text box is automatically focused, making it easy to start typing without an extra click. Filtering is currently limited to file names only, providing fast and predictable results.

For even faster access, users can assign a custom keyboard shortcut from the [actions](/docs/customize-settings/actions) settings page. This makes it easy to integrate filtering into your workflow.

<figure>
    <img src="/blog-resources/v4-preview/FilterHeader.png" alt="Search" />
    <figcaption>Filter header</figcaption>
</figure>


### Expanded cloud provider support  

Files now supports OX Drive integration, the full list of available providers can be viewed on our [cloud drive](/docs/features/cloud-drives) documentation.

## Fixes

### RTL

- RTL support has been added back to Files. Please note that some areas are still missing support (such as content dialogs).

## Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yair100/)
