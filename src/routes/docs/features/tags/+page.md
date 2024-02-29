---
title: Organize files and folders with tags
---

Tags are a way to organize your files and folders. You can assign one or more tags to any file or folder, and then use the tags to filter and sort your files. You can also use tags to search for your files.

## Assigning tags

### Using the context menu

- Right-click a file or folder (you can also tag multiple items at the same time)
- Expand the "edit tags" menu
- Toggle a tag from the menu

### Using the Details Pane

- Select the items you wish to edit
- Enable the Details Pane using the toolbar button or the `ctrl` + `alt` + `d` keyboard shortcut
- Click the "edit tags" button
- Toggle a tag from the menu

### Using drag and drop

- Select the items you wish to tag
- Drag and drop the items onto an existing tag in the sidebar

## Viewing and filtering tagged items

There are multiple ways to view or filter previously tagged items

### Using the sidebar

- Locate an existing tag in the sidebar
- Click the tag and it should start a global search for items containing that tag

### Using the Details Pane

- Enable the Details Pane using the toolbar button or the `ctrl` + `alt` + `d` keyboard shortcut
- Selecting an item with tags will display the list of tags in the Details Pane
- Click the tag you wish to filter by

### Using the Details View

- Locate the tag column
- This column will display a list of all the assigned tags
- Click on the tag you want to filter by

### Using search

- Select the search box in the address bar or use the `ctrl` + `f` keyboard shortcut
- Type `tag:` followed by the name of the tag, for example `tag:Photos`
- To search for multiple tags, separate the tag names with a comma, for example `tag:Photos,Important`

### Using the Tags widget

Available as an option, the Tags widget provides a small preview of your existing tags and the items it's assigned to. You can enable the Tags widget by navigating to `Settings > General > Widgets` and toggling the option for "Tags".


## Creating and editing tags

Files includes a couple of default tags but you can edit or create your own from the settings menu. To do that, follow these steps:

- Open Settings using the toolbar button or with the `ctrl` + `,` keyboard shortcut
- Navigate to the "Tags" settings page

### Creating new tags

- Click the "New tag" button
- Type the name you wish to use for the new tag
- A random color is selected by default but you can change it to your preference
- Click "Create" to complete the action

### Editing existing tags

- Click the "Edit tag" button
- Type the new name you wish to use for the tag
- Click "Save" to complete the action

### Deleting existing tags

Please note that deleting a tag will remove the tag from any items that it was assigned to.

- Click the "Delete" button
- A confirmation menu will appear
- Click "Delete" to confirm and delete the tag

## Viewing tags on other devices

In order for the list of tags to be displayed on other devices, you'll need to export the tags definitions file and import it on the other device. This can be done from the settings menu:

1. Export your settings by going to `Settings > Advanced > Export`
2. Import your settings on the second device `Settings > Advanced > Import`

## Known limitations

Tags are saved using alternate data streams (and not in a database). We found that alternate data streams is the best approach because it allows items to be transferred between locations (even without using Files) without losing their tags. However, this system has some limitations:

- Tags only work on drives formatted as NTFS
- Tags may not work with all cloud storage providers