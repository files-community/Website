---
title: Advanced
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

The **Advanced** settings page offers power-user tools and experimental features. From exporting preferences to editing the settings file directly, this section gives you deeper control over how Files behaves.

## Export settings

Prompts you to choose a location to save your current configuration as an archive, making it useful for migrating settings between devices or creating backups.

<InfoBar severity="information">
  The exported archive includes a file named `filetags`, but this file only contains GUIDs used for tagging metadata. It does not contain a list of tagged files.
</InfoBar>

## Import settings

Lets you load previously exported settings to restore preferences.

## Edit settings file

Opens the configuration file in your default text editor. Before making changes, be sure to close Files by right-clicking the system tray icon and selecting **Quit**. This gives you full access to advanced customization options like colors, fonts, and layout preferences.

## Open Files on Windows startup

Enables Files to start automatically when you log in to Windows

## Leave app running in the background

Keeps Files running even after the window is closed. This reduces startup time but may use slightly more system resources.

## Experimental feature flags

### Set Files as the default file manager

By default, Windows doesn't allow changing the system file manager. Files includes an **optional workaround** that intercepts system calls to File Explorer and reroutes them to Files. This feature supports common actions like the `Win + E` shortcut and opening folders from other apps.

<InfoBar severity="caution">
  This feature modifies the Windows registry. While stable in most cases, it can introduce issues. The Files team assumes no responsibility for problems that may arise. We strongly recommend backing up your registry before enabling this option.
</InfoBar>

<br/>

![Settings dialog](/docs-resources/Settings-Dialog-Advanced.png)