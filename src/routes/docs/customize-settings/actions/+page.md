---
title: Actions
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

Actions are commands that you can perform on items, such as files, folders, images, etc. The Command Palette (`Ctrl`+`Shift`+`P`) will show you a list of available actions for the selected item(s), along with their key bindings.

![Command palette](/docs-resources/Command-Palette.png)


# Customizing Actions

You can customize the key bindings for actions from the Actions page in Settings (Files > Settings > Actions).

![Actions settings page](/docs-resources/Settings-Actions.png)


## Modifying existing key bindings

The default key bindings in Files are largely based on the common shortcuts that users have come to expect from a file manager. To modify a key binding, follow these steps:

1. Click the edit button next to the action you wish to modify (eg. Help).
2. Input the new key binding using the keyboard (e. F3).
3. Click the save button and test out the new key binding.

![Edit actions](/docs-resources/Settings-Actions-Edit.png)

In addition to modifying key bindings, you can also delete them and free up the keys for other actions. Please note, deleting an action is immediate and no confirmation is displayed.

## Adding additional key bindings

<InfoBar severity="information">
	Support for custom args is not currently available but we're exploring this option for the future.
</InfoBar>

Files has a growing list of actions and as the list continues grows, not all actions come with a default key binding. To assign a key binding, follow these steps:

1. Click the "Add command" button.
2. Select an action from the list (eg. "Pin to start menu").
3. Input the key binding (eg. ctrl + shift + s)
4. Click the save button test out the key binding by selecting a file and using the `ctrl` + `shift` + `s` shortcut.

![Add actions](/docs-resources/Settings-Actions-Add.png)

## Restoring defaults

If you wish to restore the default key key bindings, click the "Restore defaults" button and click on "Yes" to confirm.


# Actions

This section provides the complete list of actions and their descriptions. The actions are grouped by categories for easier reference.

## Global

### Help

Opens the online documentation in the web browser

**Action name:** `Help`

**Default bindings:**

```json
"F1"
```


### Toggle FullScreen

Toggles FullScreen mode

**Action name:** `ToggleFullScreen`

**Default bindings:**

```json
"F11"
```


### Enter compact overlay

Enters compact overlay

**Action name:** `EnterCompactOverlay`

**Default bindings:**

```json
"Ctrl+Alt+Up" 
```


### Exit compact overlay

Exits compact overlay

**Action name:** `ExitCompactOverlay`

**Default bindings:**

```json
"Ctrl+Alt+Down"
```


### Toggle compact overlay

Toggles compact overlay

**Action name:** `ToggleCompactOverlay`

**Default bindings:**

```json
"F12"
```


### Search

Focuses the search box

**Action name:** `Search`

**Default bindings:**

```json
"Ctrl+F"
"F3"
```


### Redo

Redoes the last file operation

**Action name:** `Redo`

**Default bindings:**

```json
"Ctrl+Y"
```


### Undo

Undoes the last file operation

**Action name:** `Undo`

**Default bindings:**

```json
"Ctrl+Z"
```


### Edit path

Focuses the path bar

**Action name:** `EditPath`

**Default bindings:**

```json
"Ctrl+L"
"Alt+D"
```

## Show

### Toggle hidden items

Toggles whether to show hidden items

**Action name:** `ToggleShowHiddenItems`

**Default bindings:**

```json
"Ctrl+H"
```


### Toggle file extensions

Toggles whether to show file extensions

**Action name:** `ToggleShowFileExtensions`


### Toggle Preview Pane

Toggles the Preview Pane

**Action name:** `TogglePreviewPane`

**Default bindings:**

```json
"Ctrl+Alt+P"
```


### Toggle Details Pane

Toggles the Details Pane

**Action name:** `ToggleDetailsPane`

**Default bindings:**

```json
"Ctrl+Alt+D"
```


### Toggle Info Pane

Toggles the Info Pane

**Action name:** `ToggleInfoPane`

**Default bindings:**

```json
"Ctrl+Alt+I"
```


## File System


### Copy item

Copy selected items to the clipboard

**Action name:** `CopyItem`

**Default bindings:**

```json
"Ctrl+C"
```


### Copy path

Copy paths of selected items to the clipboard

**Action name:** `CopyPath`

**Default bindings:**

```json
"Ctrl+Shift+C"
```


### Cut item

Cut selected items to the clipboard

**Action name:** `Cut`

**Default bindings:**

```json
"Ctrl+X"
```


### Paste item

Pastes items from clipboard to current directory

**Action name:** `PasteItem`

**Default bindings:**

```json
"Ctrl+V"
```


### Paste item to selected folder

Pastes items from clipboard to the selected folder

**Action name:** `PasteItemToSelection`

**Default bindings:**

```json
"Ctrl+Shift+V"
```


### Delete item

Deletes selected items

**Action name:** `DeleteItem`

**Default bindings:**

```json
"Delete"
"Ctrl+D"
```


### Permanently delete item

Permanently deletes selected items

**Action name:** `DeleteItemPermanently`

**Default bindings:**

```json
"Shift+Delete"
```


### Create folder

Creates new folder

**Action name:** `CreateFolder`

**Default bindings:**

```json
"Ctrl+Shift+N"
```


### Create folder with selection

Creates new folder with the selected items

**Action name:** `CreateFolderWithSelection`


### Create item

Creates new item

**Action name:** `AddItem`

**Default bindings:**

```json
"Ctrl+Shift+I"
```


### Create shortcut

Creates shortcut targeting the selected item

**Action name:** `CreateShortcut`


### Create shortcut from dialog

Creates shortcut targeting any item

**Action name:** `CreateShortcutFromDialog`


### Open item

Opens selected items

**Action name:** `OpenItem`

**Default bindings:**

```json
"Enter"
```


### Open item with application picker

Opens items with the selected application

**Action name:** `OpenItemWithApplicationPicker`


### Open parent folder

Opens parent folder of searched item

**Action name:** `OpenParentFolder`


### Open file location

Opens location of the selected item

**Action name:** `OpenFileLocation`


### Refresh items

Refreshes the items of the current directory

**Action name:** `RefreshItems`

**Default bindings:**

```json
"Ctrl+R"
"F5" 
```


### Rename item

Renames selected item

**Action name:** `Rename`

**Default bindings:**

```json
"F2"
```


## Selection

### Select all

Selects all items

**Action name:** `SelectAll`

**Default bindings:**

```json
"Ctrl+A"
```


### Invert selection

Inverts the selected items

**Action name:** `InvertSelection`


### Clear selection

Clears the selected items

**Action name:** `ClearSelection`


### Toggle selection

Toggles item selection

**Action name:** `ToggleSelect`

**Default bindings:**

```json
"Ctrl+Space"
```

## Share

### Share item

Shares selected items

**Action name:** `ShareItem`


## Start

### Pin to start

Pins selected items to the Start Menu

**Action name:** `PinToStart`


### Unpin from start

Unpins selected items from the Start Menu

**Action name:** `UnpinFromStart`


## Sidebar

### Pin to sidebar

Pins selected folders to sidebar

**Action name:** `PinFolderToSidebar`


### Unpin from Sidebar

Unpins selected folders from Sidebar

**Action name:** `UnpinFolderFromSidebar`


## Backgrounds

### Set as desktop background

Sets selected picture as the desktop background

**Action name:** `SetAsWallpaperBackground`


### Set as desktop slideshow

Sets selected pictures as the desktop slideshow

**Action name:** `SetAsSlideshowBackground`


### Set as lockscreen slideshow

Sets selected picture as the lockscreen background

**Action name:** `SetAsLockscreenBackground`


### Set as app background

Sets selected picture as the app background

**Action name:** `SetAsAppBackground`


## Install

### Install font

Installs selected fonts

**Action name:** `InstallFont`


### Install Inf

Installs selected Inf files

**Action name:** `InstallInfDriver`


### Install certificate

Installs selected certificates

**Action name:** `InstallCertificate`


## Run

### Run as admin

Runs selected items as admin

**Action name:** `RunAsAdmin`


### Run as another user

Runs selected items as another user

**Action name:** `RunAsAnotherUser`


### Run with Powershell

Runs selected scripts with Powershell

**Action name:** `RunWithPowershell`


## Preview popups

### View preview popup

Opens preview popup when QuickLook or SeerPro is installed

**Action name:** `LaunchPreviewPopup`

**Default bindings:**

```json
"Space"
```

## Archives

### Create archive

Prompts to create archive from selected items

**Action name:** `CompressIntoArchive`


### Create 7z archive

Creates 7z archive with selected items

**Action name:** `CompressIntoSevenZip`


### Create zip archive

Creates zip archive with selected items

**Action name:** `CompressIntoZip`


### Extract archive

Prompts to extract items from selected archive

**Action name:** `DecompressArchive`

**Default bindings:**

```json
"Ctrl+E"
```


### Extract archive here

Extracts items from selected archive to current folder

**Action name:** `DecompressArchiveHere`


### Extract archive to new folder

Extracts items from selected archive to a new folder

**Action name:** `DecompressArchiveToChildFolder`


### Smart extract

Automatically chooses extraction mode based on the selected archives contents

**Action name:** `DecompressArchiveHereSmart`

**Default bindings:**

```json
"Ctrl+Shift+E"
```


## Image Manipulation

### Rotate left

Rotates selected images left

**Action name:** `RotateLeft`


### Rotate right

Rotates selected images right

**Action name:** `RotateRight`


## Open

### Open in Visual Studio

Opens current folder in Visual Studio

**Action name:** `OpenInVS`


### Open in Visual Studio Code

Opens current folder in Visual Studio Code

**Action name:** `OpenInVSCode`


### Open properties

Opens properties window

**Action name:** `OpenProperties`

**Default bindings:**

```json
"Alt+Enter"
```


### Open settings

Opens settings

**Action name:** `OpenSettings`

**Default bindings:**

```json
"Ctrl+,"
```


### Open Terminal

Opens folder in Windows Terminal 

**Action name:** `OpenTerminal`

**Default bindings:**

```json
"Ctrl+`"
```


### Open Terminal as admin

Opens folder in Windows Terminal as admin

**Action name:** `OpenTerminalAsAdmin`

**Default bindings:**

```json
"Ctrl+Shift+`"
```


### Open Command Palette

Opens the Command Palette

**Action name:** `OpenCommandPalette`

**Default bindings:**

```json
"Ctrl+Shift+P"
```


### Edit in Notepad

Opens the selected file in Notepad. This action is available for the following file extensions: `.ahk`, `.bat`, and `.cmd`.

**Action name:** `EditInNotepad`


## Layouts

### Details View

Switches to the Details View

**Action name:** `LayoutDetails`

**Default bindings:**

```json
"Ctrl+Shift+1"
```


### List View

Switches to the List View

**Action name:** `LayoutList`

**Default bindings:**

```json
"Ctrl+Shift+2"
```


### Tiles View

Switches to the Tiles View

**Action name:** `LayoutTiles`

**Default bindings:**

```json
"Ctrl+Shift+3"
```


### Grid View

Switches to the Grid View

**Action name:** `LayoutGrid`

**Default bindings:**

```json
"Ctrl+Shift+4"
```


### Columns View

Switches to the Columns View

**Action name:** `LayoutColumns`

**Default bindings:**

```json
"Ctrl+Shift+5"
```


### Adaptive Layout

Switches the layout based on the folder contents

**Action name:** `LayoutAdaptive`

**Default bindings:**

```json
"Ctrl+Shift+6"
```


### Increase icon size

Increases the icon size

**Action name:** `LayoutIncreaseSize`

**Default bindings:**

```json
"Ctrl++"
```


### Decrease icon size

Decreases the icon size

**Action name:** `LayoutDecreaseSize`

**Default bindings:**

```json
"Ctrl+-"
```

## Sorting

### Sort by name

Sorts items alphabetically by their name

**Action name:** `SortByName`


### Sort by date modified

Sorts items by the date and time they were last modified

**Action name:** `SortByDateModified`


### Sort by date created

Sorts items by the date and time they were created

**Action name:** `SortByDateCreated`


### Sort by size

Sorts items by their size

**Action name:** `SortBySize`


### Sort by type

Sorts items by their type

**Action name:** `SortByType`


### Sort by sync status

Sorts items by their cloud sync status

**Action name:** `SortBySyncStatus`


### Sort by tags

Sorts items by the tags assigned to them

**Action name:** `SortByTag`


### Sort by path

Sorts items by their in the file system

**Action name:** `SortByPath`


### Sort by original folder

Sorts items by the original folder they were deleted from

**Action name:** `SortByOriginalFolder`


### Sort by date deleted

Sorts items by the date and time they were deleted

**Action name:** `SortByDateDeleted`


### Sort items in ascending order

Sorts items in ascending order according to the current sort option

**Action name:** `SortAscending`


### Sort items in descending order

Sorts items in descending order according to the current sort option

**Action name:** `SortDescending`


### Toggle sort direction

Toggles the sort direction between ascending and descending

**Action name:** `ToggleSortDirection`


### Sort folders first

Lists and sorts folders before files

**Action name:** `SortFoldersFirst`


### Sort files first

Lists and sorts files before folders

**Action name:** `SortFilesFirst`


### Sort folders alongside files

Lists and sorts folders alongside files

**Action name:** `ToggleSortDirectoriesAlongsideFiles`


## Grouping

### Group by none

Lists items without grouping them

**Action name:** `GroupByNone`


### Group by name

Groups items by name

**Action name:** `GroupByName`


### Group by date modified

Groups items by date modified

**Action name:** `GroupByDateModified`


### Group by date created

Groups items by date created

**Action name:** `GroupByDateCreated`


### Group by size

Groups items by size

**Action name:** `GroupBySize`


### Group by type

Groups items by type

**Action name:** `GroupByType`


### Group by sync status

Groups items by sync status

**Action name:** `GroupBySyncStatus`


### Group by tags

Groups items by tags

**Action name:** `GroupByTag`


### Group by original folder

Groups items by original folder

**Action name:** `GroupByOriginalFolder`


### Group by date deleted

Groups items by date deleted

**Action name:** `GroupByDateDeleted`


### Group by folder path

Groups items by folder path

**Action name:** `GroupByFolderPath`


### Group by date modified (year)

Groups items by year of date modified

**Action name:** `GroupByDateModifiedYear`


### Group by date modified (month)

Groups items by month of date modified

**Action name:** `GroupByDateModifiedMonth`


### Group by date modified (day)

Groups items by day of date modified

**Action name:** `GroupByDateModifiedDay`


### Group by date created (year)

Groups items by year of date created

**Action name:** `GroupByDateCreatedYear`


### Group by date created (month)

Groups items by month of date created

**Action name:** `GroupByDateCreatedMonth`


### Group by date created (day)

Groups items by day of date created

**Action name:** `GroupByDateCreatedDay`


### Group by date deleted (year)

Groups items by year of date deleted

**Action name:** `GroupByDateDeletedYear`


### Group by date deleted (month)

Groups items by month of date deleted

**Action name:** `GroupByDateDeletedMonth`


### Group by date deleted (day)

Groups items by day of date deleted

**Action name:** `GroupByDateDeletedDay`


### Group in ascending order

Sorts groups in ascending order

**Action name:** `GroupAscending`


### Group in Descending order

Sorts groups in descending order

**Action name:** `GroupDescending`


### Toggle sort direction

Toggles group sort direction

**Action name:** `ToggleGroupDirection`


### Group by year

Groups items by year

**Action name:** `GroupByYear`


### Group by month

Groups items by month

**Action name:** `GroupByMonth`


### Toggle grouping unit

Toggles unit for grouping by date

**Action name:** `ToggleGroupByDateUnit`


## Navigation

### New tab

Opens a new tab

**Action name:** `NewTab`

**Default bindings:**

```json
"Ctrl+T"
```


### New tab

Opens a new tab

**Action name:** `NewTab`

**Default bindings:**

```json
"Ctrl+T"
```


### New Window

Opens a new window

**Action name:** `NewWindow`

**Default bindings:**

```json
"Ctrl+N"
```


### Navigate back

Navigates backward in navigation history	

**Action name:** `NavigateBack`

**Default bindings:**

```json
"Alt+Left"
"Backspace"
```


### Navigate forward

Navigates forward in navigation history	

**Action name:** `NavigateForward`

**Default bindings:**

```json
"Alt+Right"
```


### Navigate up

Navigates up one directory

**Action name:** `NavigateUp`

**Default bindings:**

```json
"Alt+Up"
```

## Other


### Duplicate tab

Duplicates the current tab

**Action name:** `DuplicateCurrentTab`

**Default bindings:**

```json
"Ctrl+Shift+K"
```


### Close tabs to the left

Closes tabs to the left of the current tab

**Action name:** `CloseTabsToTheLeftCurrent`


### Close tabs to the right

Closes tabs to the right of the current tab

**Action name:** `CloseTabsToTheRightCurrent`


### Close other tabs

Closes other tabs

**Action name:** `CloseOtherTabsCurrent`


### Open folder in new pane

Opens selected folder in a new pane

**Action name:** `OpenDirectoryInNewPane`


### Open folder in new tab

Opens selected folder in a new tab

**Action name:** `OpenDirectoryInNewTab`


### Open folder in new window

Opens selected folder in a new window

**Action name:** `OpenInNewWindowItem`


### Reopen closed tab

Reopens the last closed tab

**Action name:** `ReopenClosedTab`

**Default bindings:**

```json
"Ctrl+Shift+T"
```


### Move to the previous tab

Switches focus to the previous tab

**Action name:** `PreviousTab`

**Default bindings:**

```json
"Ctrl+Shift+Tab"
```


### Move to the next tab

Switches focus to the next tab

**Action name:** `NextTab`

**Default bindings:**

```json
"Ctrl+Tab"
```


### Close tab

Closes the current tab

**Action name:** `CloseSelectedTab`

**Default bindings:**

```json
"Ctrl+W"
"Ctrl+F4"
```


### New pane

Opens a new pane

**Action name:** `OpenNewPane`

**Default bindings:**

```json
"Alt+Shift++"
```


### Close pane

Closes the right new pane

**Action name:** `ClosePane`

**Default bindings:**

```json
"Ctrl+Shift+W"
```


### Focus left pane

Switches focus to the left pane

**Action name:** `FocusLeftPane`

**Default bindings:**

```json
"Ctrl+Shift+Left"
```


### Focus right pane

Switches focus to the right pane

**Action name:** `FocusRightPane`

**Default bindings:**

```json
"Ctrl+Shift+Right"
```


## Play

### Play media files

Plays the selected media files

**Action name:** `PlayAll`


## Git

### Fetch

Runs git fetch

**Action name:** `GitFetch`


### Init

Initializes the current folder as a Git repository

**Action name:** `GitInit`


### Pull

Runs git pull

**Action name:** `GitPull`


### Push

Runs git push

**Action name:** `GitPush`


### Sync

Runs git pull and then git push

**Action name:** `GitSync`