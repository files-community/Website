---
title: Files & folders
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

The **Files & folders** settings page lets you fine-tune how Files handles visibility, interactions, and file behavior. From showing hidden content and file extensions to adjusting how items open or display, these options give you full control over your browsing experience.

## Hidden items

- **Show hidden files and folders**: Displays hidden items when enabled.
- **Show dot files**: Shows files and folders starting with a dot (`.`).
- **Show protected system files**: Reveals protected system files when enabled.
- **Show alternate data streams**: Displays alternate data streams attached to files.

## Show file extensions

Displays file extensions (e.g., `.txt`, `.jpg`) in the file list.

## Show thumbnails

Enables thumbnails for supported file types. Turning this off displays generic file icons, which may improve performance.

## Show checkboxes when selecting items

Displays checkboxes for selected files and folders.

## Opening items

- **Open files with a single click**: Allows opening files with one click instead of double-clicking.
- **Open folders with a single click**: Allows opening folders with one click instead of double-clicking. This option can also be enabled for just the Columns View.
- **Open folders in a new tab**: Opens folders in a new tab instead of the current one.

## Show confirmation dialog when deleting items

Choose when to display a confirmation prompt:
  - Always
  - Permanent deletion only
  - Never

## Show warning when changing file extensions

Prompts you before changing a file extension to help avoid accidental type changes.

## Select files and folders when hovering over them

Automatically selects items as you hover over them.

## Double click on a blank space to go up one directory

Navigates to the parent directory when you double-click empty space in a folder view.

## Scroll to previous folder when navigating up

When navigating up one level, automatically scrolls to the folder you just came from.

## Size format

Choose how file sizes are displayed:
  - Binary
  - Decimal

## Calculate folder sizes

When enabled, Files calculates and displays the total size of folders.

<InfoBar severity="caution">
  Calculating folder sizes is resource intensive and may increase CPU usage.
</InfoBar>