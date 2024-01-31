---
title: Advanced
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

## Export settings

Located on the advanced settings page, this will prompt you to choose a location to export the settings to.

<InfoBar severity="information">
	Although the exported archive includes a file called "filetags", it doesn't actually contain a list of tagged files. This file only contains the guids that get embedded into the metadata of tagged items.
</InfoBar>

## Import settings

Prompts to import an archive file containing exported settings.

## Edit settings file

Opens the settings file in the default text editor. Before editing the settings file, you’ll need to close Files by right-clicking the icon in the system tray and clicking on "Quit".

## Open Files on Windows startup

Creates task to start Files when logging into Windows.

## Leave app running in the background

This option will keep Files running in the background even when the window is closed. This helps reduce the startup but it may cause Files to use more system resources.

## Experimental feature flags

### Set Files as the default file manager

Windows doesn't have an official method for changing the default file manager. In order to still provide this option, we developed a workaround that intercepts calls to launch File Explorer and redirect the call to Files instead. This workaround has some limitations but it works for most scenarios including the `win` + `e` shortcut. 

<InfoBar severity="caution">
	This option involves modifying the system registry and while it's been tested and improved over time, the Files team takes no responsibility if something goes wrong. If you decide to proceed, we recommend creating a backup of the system registry beforehand.
</InfoBar>

<br/>

![Settings dialog](/docs-resources/Settings-Dialog-Advanced.png)