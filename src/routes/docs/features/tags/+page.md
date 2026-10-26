---
title: Tags
order: 8
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

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

### Using the toolbar

You can add an **Edit Tags** button to the toolbar for quick access:

1. Right-click any toolbar item and select **Customize toolbar**.
2. Expand the **File System** group on the left.
3. Drag **Edit Tags...** to the list of added toolbar items.

### Using drag and drop

- Select the items you wish to tag
- Drag and drop the items onto an existing tag in the sidebar

## Removing tags

### Toggling individual tags

To remove specific tags, follow the same steps used for assigning tags (via the context menu, Details Pane, or toolbar button) and toggle the tag off.

### Removing all tags at once

To clear every tag from one or more items in a single step:

- Select the items you wish to clear
- Right-click the selection and expand the "edit tags" menu
- Click **Remove tags**

The **Remove tags** action is also available in the Command Palette and can be assigned a custom keyboard shortcut from `Settings > Actions`.

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

Files includes a couple of default tags but you can edit or create your own from the Settings page. To do that, follow these steps:

- Open Settings using the toolbar button or with the `ctrl` + `,` keyboard shortcut
- Navigate to the "Tags" settings page

### Creating new tags

Create tags that reflect your workflow:

1. Click the **New tag** button.
2. Type in a name that describes your tag.
3. Choose a color—or stick with the randomly selected one.
4. Click **Create** to save it.

You'll now see the tag available when tagging files and folders throughout the app.

### Editing existing tags

Fine-tune your tags as your needs evolve:

1. Click the **Edit** button beside the tag you'd like to change.
2. Update the name to better reflect its purpose.
3. Select a new color, if desired.
4. Click **Save** to apply your changes.

<InfoBar severity="information">
  Tag changes will reflect across existing items with those tags.
</InfoBar>

### Deleting existing tags

Clean up old or unused tags:

1. Click the **Delete** button next to the tag you want to remove.
2. Confirm the deletion in the prompt.

<InfoBar severity="information">
  Deleting a tag removes it from all associated files and folders, but don't worry, the items themselves will not be deleted.
</InfoBar>

## Viewing tags on other devices

In order for the list of tags to be displayed on other devices, you'll need to export the tags definitions file and import it on the other device. This can be done from the Settings page:

1. Export your settings by going to `Settings > Advanced > Export`
2. Import your settings on the second device `Settings > Advanced > Import`

## Known limitations

Tags are saved using alternate data streams (and not in a database). We found that alternate data streams is the best approach because it allows items to be transferred between locations (even without using Files) without losing their tags. However, this system has some limitations:

- Tags only work on drives formatted as NTFS
- Tags may not work with all cloud storage providers
