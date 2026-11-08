---
title: Omnibar
order: 1
---

The Omnibar is a unified interface that combines the breadcrumb path and search box into a single control. Users can switch between breadcrumb modes as desired.

## Modes

### Breadcrumb bar

By default, the Omnibar displays the current folder path using a breadcrumb layout.

- Breadcrumbs can be expanded using the chevron icon to reveal subfolders.
- Folder icons are shown in breadcrumb flyouts for easier identification.
- A home button and flyout menu provide quick access to pinned and frequently used folders.

![Omnibar](/blog-resources/v4-preview/Omnibar.webp)
_Default view in the Omnibar_

![Quick Access flyout](/blog-resources/v4-preview/OmnibarQuickAccess.webp)
_Quick Access flyout menu_

### Edit path

Edit path mode allows manual editing of the current folder path.

- Activate by clicking an empty space in the breadcrumb bar.
- Or use the `Ctrl + L` keyboard shortcut.

When activated, the full path is selected automatically, making it easy to copy, overwrite, or modify.

![Edit path](/blog-resources/v4-preview/OmnibarPathMode.webp)
_Edit path in the Omnibar_

#### Folder aliases

Folder aliases provide a quick way to jump to frequently used folders. Any folder can be assigned an alias, which is a short name that opens the folder from anywhere in Files when typed after `@` in the Omnibar. For example, assigning the alias `work` to a project folder means `@work` opens that folder.

Typing `@` on its own lists every alias, and the list narrows as you type. Pressing `Enter` opens the selected alias.

Aliases are created and managed under **Folder aliases** in the [Files & folders](/docs/customize-settings/files-and-folders#folder-aliases) settings. A few built-in aliases for common folders, such as `@documents` and `@downloads`, are included to start with.

### Command Palette

The Command Palette provides access to over 150 actions, many of which have default keyboard shortcuts for quick access.

- Activate by clicking the command button in the Omnibar.
- Or use the `Ctrl + Shift + P` keyboard shortcut.

The first matching action is selected automatically as you type, so pressing `Enter` runs it. Use the arrow keys to select a different action.

![Command Palette](/blog-resources/v4-preview/OmnibarCommandMode.webp)
_Command Palette in the Omnibar_

For more information, see the documentation on the [Command Palette](/docs/features/command-palette/).

### Search

Search mode allows users to search within the current directory or across indexed content.

- Activate by clicking the search icon.
- Or use the `Ctrl + F` keyboard shortcut.

The search box is automatically focused when opened. Suggestions appear in a flyout, with the first suggestion selected automatically as you type. The first suggestion is a **Search for** entry for the text you've typed, so pressing `Enter` opens the full search results page. Use the arrow keys to select a different suggestion.

When you're on the Settings page, search mode switches to searching settings instead of files — type a setting name and pick it from the suggestions to jump straight to that location.

![Search](/blog-resources/v4-preview/OmnibarSearchMode.webp)
_Search mode in the Omnibar_
