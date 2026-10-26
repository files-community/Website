---
title: Layout
order: 7
---

The layout picker is where you can change the layout type and size for the current directory.

The **Layout** settings page lets you control how items are displayed across folders, offering a range of view modes, sorting behavior, and grouping options. Whether you prefer a Columns View or a Details View, this page helps you build your ideal browsing experience.

## Layout type

Choose from several layout modes based on your workflow or visual preferences:

- **Details**: Presents items in a Data Grid with resizable columns. Ideal for viewing metadata at a glance.  
  _(Note: Column rearrangement is not yet supported.)_
- **List**: A minimalist column layout that shows each file's icon and name. Great for quick navigation through large directories.
- **Cards**: Displays larger icons and additional context such as file type or previews. A more visual and descriptive layout.
- **Grid**: Emphasizes icons and spacing, offering a visual overview that's perfect for images and media-heavy folders.
- **Columns**: Shows files and folders in a cascading column structure, with each directory level displayed in its own vertical pane.
- **Adaptive**: Automatically chooses the most suitable layout based on the folder's content type.

Unless the setting to sync layouts preferences is enabled, changing the layout from the layout picker will only apply to the current directory.

### Adaptive layout

Enabling this option will automatically select the best layout for the folder contents. It's important to note that this option is only available when syncing layouts preferences is off.

## Size

First introduced in v3.3, you can adjust the items to be bigger or smaller by using the size slider. This option isn't available for Tiles, but we're exploring different ideas and hope to add this option in the future.

## Show hidden items

This toggles hidden items on & off, it's worth noting that changing this toggle will also affect the option on the Settings page.

## Show file extensions

This toggles file extensions on & off. Like the option for hidden files, this toggle will also affect the option on the Settings page.

## Sync layout and sorting preferences across directories

Enabling this option ensures consistency across all folders. For example, if you switch one folder to Grid View, all other directories will automatically follow suit.

To customize individual folder views independently, simply toggle this setting off.

## Sorting and grouping

### Sort by

Choose the attribute used to order your items:

- Name
- Date modified
- Date created
- Size
- Type
- Tag

### Sort in descending order

Enable this to reverse the sorting direction (e.g., Z–A or newest first).

### Sort priority

Set the order in which folders and files appear:

- Sort folders before files
- Sort files before folders
- Sort files and folders together

### Group by

Organize your items into groups by:

- None
- Name
- Date modified
- Date created
- Size
- Type
- Tag

### Group in descending order

Groups items in descending order.

### Group by date unit

Customize the time interval used for grouping by date (e.g., day, month, year).

## Details view

When using **Details** layout, you can customize which columns are shown. Support for additional columns is planned, but in the meantime you can toggle the the following columns:

- Tags
- Size
- Type
- Date modified
- Date created

Note: To set different columns per folder, make sure **sync layout and sorting preferences** is turned off.

### Auto size columns to fit

When enabled, columns in **Details** layout are automatically resized to fit their contents so that long file names and other properties are not clipped by the default column widths.
