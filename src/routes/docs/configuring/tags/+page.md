---
title: Organize files and folders with tags
---

Tags are a way to organize your files and folders. You can assign one or more tags to any file or folder, and then use the tags to filter and sort your files. You can also use tags to search for your files.

## How to assign tags

To assign a tag to a file or folder, follow these steps:

- Right-click the file or folder you want to tag.
- Click on the "edit tags" menu that appears.
- Select a tag from the list.

You can also assign tags by dragging and dropping files or folders onto existing tags in the sidebar.

## How to view and filter by tags

To view and filter your files by tags, follow these steps:

- You will see a list of your tags on the bottom of the left-hand sidebar
- Tap on a tag to see all the files or folders with that tag.

You can also click tags in the details layout to start a search. To do that, follow these steps:

- Switch to the details layout, there will be a tag column where you can see tags assigned to your files and folder
- Tap on the tag you want to search for
- You will see a list of all the files or folders with that tag.

## How to search for tags

To search for tags, follow these steps:

- Tap on the search box and type in `tag:` followed by the name of the tag, for example `tag:Photos`
- You can search for multiple tags at once by separating tag names with a comma. For example `tag:Photos,Important`

## How to edit or delete tags

You can create and edit tags from the advanced page in the settings. To do that, follow these steps:

- Tap on the "Settings" icon in the top right corner of the screen.
- Tap on "Advanced" in the menu that appears.
- Tap on "Tags".
- You will see a list of all the tags you have created.
- You can tap on the "new tag" button to create a new tag, or the "edit" and "delete" buttons on existing tags to edit or delete them.
- If you choose to edit, you can change the name or color of the tag.

Note that deleting a tag will not delete the files or folders with that tag but it will remove the tag from those items.

## Tags widget

The Tags widget on the home page helps you organize and access your tagged files and folders. This widget shows you all the tags you have created and the files and folders that have those tags. To enable or disable the Tags widget, go to the preferences page in settings, and toggle the switch under the widgets section.

## How do tags work behind the scenes?

Instead of creating a database with a list of files and tags, we store the tag information in the file itself using alternate data streams. This allows:

- Users to move files around without losing their tags.
- It decouples the tags feature from Files and allows other apps using the same system to support this feature.
