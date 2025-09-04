---
title: General
---

<script>
    import { InfoBar } from "fluent-svelte";
</script>

The **General** settings page gives you control over core aspects of the Files app experience—from choosing your language and customizing startup behavior to tweaking the appearance of context menus and widgets on the Home page. This section walks you through each setting category and what you can expect when enabling specific features.

## Language

Files supports over 40 languages, maintained and [translated](/docs/contributing/translating) by the open-source community on [Crowdin](https://crowdin.com/project/files-app). You can either follow your system's default language or select a specific one from the dropdown list.

## Date format

You can tailor how dates and times are displayed throughout the app. The following formats are available:

- **Application**: Displays dates in a friendly, long-form style (e.g., "Thursday, December 31, 2020").
- **System**: Uses your operating system's default format (e.g., "12/31/2020 2:30 PM").
- **Universal**: Shows dates in a standardized format (e.g., "2020-12-31 14:30:00").

## Startup settings

When launching Files, you have a few choices for how the app behaves on startup:

- **Open a new tab** – A clean slate every time.
- **Continue where you left off** – Reopens the tabs you were using last.
- **Open a specific page or pages** – Jump straight into your most-used folders.

### Open new tab in existing instance when opening Files from another app

When this setting is turned on, launching Files from another program (such as Task Manager) will open a new tab in the existing window.

## Always switch focus to newly created tab

By default, when you open a folder in a new tab, Files will keep your current tab in focus. If you'd prefer to automatically switch to the newly opened tab, you can enable this option.

## Widgets

The Files Home page offers customizable widgets to provide quick access to important data. You can enable or disable them individually via the widget settings. Available widgets include:

- Quick access
- Drives
- Network locations
- Tags
- Recent files

## Open tabs in dual pane mode

If you frequently compare or transfer files between locations, enabling this setting can save time by automatically opening new tabs in [dual pane](/docs/features/dual-pane) mode.

### Default dual pane split direction

Tabs can be set to open with a **horizontal** or **vertical** split.

## Context menu options

The context menu is where many quick actions live. You can choose to hide default options you don't use often, or enable additional ones that are hidden by default.

## Move shell extensions into sub menu

To enhance performance, shell extensions are placed in a submenu by default. However, you can disable this option if you'd prefer to see all items directly in the main context menu.
