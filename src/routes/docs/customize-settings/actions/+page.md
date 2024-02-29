---
title: Actions
---

Actions are commands that you can perform on items, such as files, folders, images, etc. The Command Palette (`Ctrl`+`Shift`+`P`) will show you a list of available actions for the selected item(s), along with their key bindings.


# Customizing Actions

You can customize the key bindings for actions by modifying the settings file. To do that, follow these steps:

1. Open Files > Settings > Advanced > Edit settings file. This will open the settings file in your default text editor.
2. Before editing the settings file, you’ll need to close Files by right-clicking the icon in the system tray and clicking on "Quit".
3. The settings file has a JSON format. You can use any text editor to open and modify it. The file contains a section called "Actions". The "Actions" section is empty by default, but can add any action to this list and change the value of the key binding to any valid key combination.

For example, if you want to change the key binding for the CopyItem action to `Ctrl`+`V`, you can edit the file like this:

```json
"Actions": {
    "CopyItem": "Ctrl+V",
    "PasteItem": "Ctrl+C"
  }
```

For more information about the available actions and their descriptions, please refer to the Actions list section below.


# Actions

This section provides the complete list of actions and their descriptions. The actions are grouped by categories for easier reference.


## Global

### Help

Opens the online documentation in the web browser

**Action name:** `Help`

**Default bindings:**

```json
{ "Help": "F1" }
```


### Toggle FullScreen

Toggles FullScreen mode

**Action name:** `ToggleFullScreen`

**Default bindings:**

```json
{ "ToggleFullScreen": "F11" }
```


### Enter compact overlay

Enters compact overlay

**Action name:** `EnterCompactOverlay`

**Default bindings:**

```json
{ "EnterCompactOverlay": "Ctrl+Alt+Up" }
```


### Exit compact overlay

Exits compact overlay

**Action name:** `ExitCompactOverlay`

**Default bindings:**

```json
{ "ExitCompactOverlay": "Ctrl+Alt+Down" }
```


### Toggle compact overlay

Toggles compact overlay

**Action name:** `ToggleCompactOverlay`

**Default bindings:**

```json
{ "ToggleCompactOverlay": "F12" }
```


### Search

Focuses the search box

**Action name:** `Search`

**Default bindings:**

```json
{ "Search": "Ctrl+F,F3" }
```


### Redo

Redoes the last file operation

**Action name:** `Redo`

**Default bindings:**

```json
{ "Redo": "Ctrl+Y" }
```


### Undo

Undoes the last file operation

**Action name:** `Undo`

**Default bindings:**

```json
{ "Undo": "Ctrl+Z" }
```


### Edit path

Focuses the path bar

**Action name:** `EditPath`

**Default bindings:**

```json
{ "EditPath": "Ctrl+L,Alt+D" }
```

## Show

### Toggle hidden items

Toggles whether to show hidden items

**Action name:** `ToggleShowHiddenItems`

**Default bindings:**

```json
{ "ToggleShowHiddenItems": "Ctrl+H" }
```


### Toggle file extensions

Toggles whether to show file extensions

**Action name:** `ToggleShowFileExtensions`

**Default bindings:**

```json
{ "ToggleShowFileExtensions": "" }
```


### Toggle Preview Pane

Toggles the Preview Pane

**Action name:** `TogglePreviewPane`

**Default bindings:**

```json
{ "TogglePreviewPane": "Ctrl+Alt+P" }
```


### Toggle Details Pane

Toggles the Details Pane

**Action name:** `ToggleDetailsPane`

**Default bindings:**

```json
{ "ToggleDetailsPane": "Ctrl+Alt+D" }
```


### Toggle Info Pane

Toggles the Info Pane

**Action name:** `ToggleInfoPane`

**Default bindings:**

```json
{ "ToggleInfoPane": "Ctrl+Alt+I" }
```


## File System


### Copy item

Copy selected items to the clipboard

**Action name:** `CopyItem`

**Default bindings:**

```json
{ "CopyItem": "Ctrl+C" }
```


### Copy path

Copy paths of selected items to the clipboard

**Action name:** `CopyPath`

**Default bindings:**

```json
{ "CopyPath": "Ctrl+Shift+C" }
```


### Cut item

Cut selected items to the clipboard

**Action name:** `Cut`

**Default bindings:**

```json
{ "Cut": "Ctrl+X" }
```


### Paste item

Pastes items from clipboard to current directory

**Action name:** `PasteItem`

**Default bindings:**

```json
{ "PasteItem": "Ctrl+V" }
```


### Paste item to selected folder

Pastes items from clipboard to the selected folder

**Action name:** `PasteItemToSelection`

**Default bindings:**

```json
{ "PasteItemToSelection": "Ctrl+Shift+V" }
```


### Delete item

Deletes selected items

**Action name:** `DeleteItem`

**Default bindings:**

```json
{ "DeleteItem": "Delete,Ctrl+D" }
```


### Permanently delete item

Permanently deletes selected items

**Action name:** `DeleteItemPermanently`

**Default bindings:**

```json
{ "DeleteItemPermanently": "Shift+Delete" }
```


### Create folder

Creates new folder

**Action name:** `CreateFolder`

**Default bindings:**

```json
{ "CreateFolder": "Ctrl+Shift+N" }
```


### Create folder with selection

Creates new folder with the selected items

**Action name:** `CreateFolderWithSelection`

**Default bindings:**

```json
{ "CreateFolderWithSelection": "" }
```


### Create item

Creates new item

**Action name:** `AddItem`

**Default bindings:**

```json
{ "AddItem": "Ctrl+Shift+I" }
```


### Create shortcut

Creates shortcut targeting the selected item

**Action name:** `CreateShortcut`

**Default bindings:**

```json
{ "CreateShortcut": "" }
```


### Create shortcut from dialog

Creates shortcut targeting any item

**Action name:** `CreateShortcutFromDialog`

**Default bindings:**

```json
{ "CreateShortcutFromDialog": "" }
```


### Open item

Opens selected items

**Action name:** `OpenItem`

**Default bindings:**

```json
{ "OpenItem": "Enter" }
```


### Open item with application picker

Opens items with the selected application

**Action name:** `OpenItemWithApplicationPicker`

**Default bindings:**

```json
{ "OpenItemWithApplicationPicker": "" }
```


### Open parent folder

Opens parent folder of searched item

**Action name:** `OpenParentFolder`

**Default bindings:**

```json
{ "OpenParentFolder": "" }
```


### Open file location

Opens location of the selected item

**Action name:** `OpenFileLocation`

**Default bindings:**

```json
{ "OpenFileLocation": "" }
```


### Refresh items

Refreshes the items of the current directory

**Action name:** `RefreshItems`

**Default bindings:**

```json
{ "RefreshItems": "Ctrl+R,F5" }
```


### Rename item

Renames selected item

**Action name:** `Rename`

**Default bindings:**

```json
{ "Rename": "F2" }
```


## Selection

### Select all

Selects all items

**Action name:** `SelectAll`

**Default bindings:**

```json
{ "SelectAll": "Ctrl+A" }
```


### Invert selection

Inverts the selected items

**Action name:** `InvertSelection`

**Default bindings:**

```json
{ "InvertSelection": "" }
```


### Clear selection

Clears the selected items

**Action name:** `ClearSelection`

**Default bindings:**

```json
{ "ClearSelection": "" }
```


### Toggle selection

Toggles item selection

**Action name:** `ToggleSelect`

**Default bindings:**

```json
{ "ToggleSelect": "Ctrl+Space" }
```

## Share

### Share item

Shares selected items

**Action name:** `ShareItem`

**Default bindings:**

```json
{ "ShareItem": "" }
```

## Start

### Pin to start

Pins selected items to the Start Menu

**Action name:** `PinToStart`

**Default bindings:**

```json
{ "PinToStart": "" }
```


### Unpin from start

Unpins selected items from the Start Menu

**Action name:** `UnpinFromStart`

**Default bindings:**

```json
{ "UnpinFromStart": "" }
```

## Sidebar

### Pin to sidebar

Pins selected folders to sidebar

**Action name:** `PinFolderToSidebar`

**Default bindings:**

```json
{ "PinFolderToSidebar": "" }
```


### Unpin from Sidebar

Unpins selected folders from Sidebar

**Action name:** `UnpinFolderFromSidebar`

**Default bindings:**

```json
{ "UnpinFolderFromSidebar": "" }
```

## Backgrounds

### Set as desktop background

Sets selected picture as the desktop background

**Action name:** `SetAsWallpaperBackground`

**Default bindings:**

```json
{ "SetAsWallpaperBackground": "" }
```


### Set as desktop slideshow

Sets selected pictures as the desktop slideshow

**Action name:** `SetAsSlideshowBackground`

**Default bindings:**

```json
{ "SetAsSlideshowBackground": "" }
```


### Set as lockscreen slideshow

Sets selected picture as the lockscreen background

**Action name:** `SetAsLockscreenBackground`

**Default bindings:**

```json
{ "SetAsLockscreenBackground": "" }
```

## Install

### Install font

Installs selected fonts

**Action name:** `InstallFont`

**Default bindings:**

```json
{ "InstallFont": "" }
```


### Install Inf

Installs selected Inf files

**Action name:** `InstallInfDriver`

**Default bindings:**

```json
{ "InstallInfDriver": "" }
```


### Install certificate

Installs selected certificates

**Action name:** `InstallCertificate`

**Default bindings:**

```json
{ "InstallCertificate": "" }
```

## Run

### Run as admin

Runs selected items as admin

**Action name:** `RunAsAdmin`

**Default bindings:**

```json
{ "RunAsAdmin": "" }
```


### Run as another user

Runs selected items as another user

**Action name:** `RunAsAnotherUser`

**Default bindings:**

```json
{ "RunAsAnotherUser": "" }
```


### Run with Powershell

Runs selected scripts with Powershell

**Action name:** `RunWithPowershell`

**Default bindings:**

```json
{ "RunWithPowershell": "" }
```

## Preview popups

### View preview popup

Opens preview popup when QuickLook or SeerPro is installed

**Action name:** `LaunchPreviewPopup`

**Default bindings:**

```json
{ "LaunchPreviewPopup": "Space" }
```

## Archives

### Create archive

Prompts to create archive from selected items

**Action name:** `CompressIntoArchive`

**Default bindings:**

```json
{ "CompressIntoArchive": "" }
```


### Create 7z archive

Creates 7z archive with selected items

**Action name:** `CompressIntoSevenZip`

**Default bindings:**

```json
{ "CompressIntoSevenZip": "" }
```


### Create zip archive

Creates zip archive with selected items

**Action name:** `CompressIntoZip`

**Default bindings:**

```json
{ "CompressIntoZip": "" }
```


### Extract archive

Prompts to extract items from selected archive

**Action name:** `DecompressArchive`

**Default bindings:**

```json
{ "DecompressArchive": "Ctrl+E" }
```


### Extract archive here

Extracts items from selected archive to current folder

**Action name:** `DecompressArchiveHere`

**Default bindings:**

```json
{ "DecompressArchiveHere": "" }
```


### Extract archive to new folder

Extracts items from selected archive to a new folder

**Action name:** `DecompressArchiveToChildFolder`

**Default bindings:**

```json
{ "DecompressArchiveToChildFolder": "" }
```


### Smart extract

Automatically chooses extraction mode based on the selected archives contents

**Action name:** `DecompressArchiveHereSmart`

**Default bindings:**

```json
{ "DecompressArchiveHereSmart": "Ctrl+Shift+E" }
```

## Image Manipulation

### Rotate left

Rotates selected images left

**Action name:** `RotateLeft`

**Default bindings:**

```json
{ "RotateLeft": "" }
```


### Rotate right

Rotates selected images right

**Action name:** `RotateRight`

**Default bindings:**

```json
{ "RotateRight": "" }
```

## Open

### Open in Visual Studio

Opens current folder in Visual Studio

**Action name:** `OpenInVS`

**Default bindings:**

```json
{ "OpenInVS": "" }
```


### Open in Visual Studio Code

Opens current folder in Visual Studio Code

**Action name:** `OpenInVSCode`

**Default bindings:**

```json
{ "OpenInVSCode": "" }
```


### Open properties

Opens properties window

**Action name:** `OpenProperties`

**Default bindings:**

```json
{ "OpenProperties": "Alt+Enter" }
```


### Open settings

Opens settings

**Action name:** `OpenSettings`

**Default bindings:**

```json
{ "OpenSettings": "Ctrl+," }
```


### Open Terminal

Opens folder in Windows Terminal 

**Action name:** `OpenTerminal`

**Default bindings:**

```json
{ "OpenTerminal": "Ctrl+`" }
```


### Open Terminal as admin

Opens folder in Windows Terminal as admin

**Action name:** `OpenTerminalAsAdmin`

**Default bindings:**

```json
{ "OpenTerminalAsAdmin": "Ctrl+Shift+`" }
```


### Open Command Palette

Opens the Command Palette

**Action name:** `OpenCommandPalette`

**Default bindings:**

```json
{ "OpenCommandPalette": "Ctrl+Shift+P" }
```

## Layouts

### Details View

Switches to the Details View

**Action name:** `LayoutDetails`

**Default bindings:**

```json
{ "LayoutDetails": "Ctrl+Shift+1" }
```


### List View

Switches to the List View

**Action name:** `LayoutList`

**Default bindings:**

```json
{ "LayoutList": "Ctrl+Shift+2" }
```


### Tiles View

Switches to the Tiles View

**Action name:** `LayoutTiles`

**Default bindings:**

```json
{ "LayoutTiles": "Ctrl+Shift+3" }
```


### Grid View

Switches to the Grid View

**Action name:** `LayoutGrid`

**Default bindings:**

```json
{ "LayoutGrid": "Ctrl+Shift+4" }
```


### Columns View

Switches to the Columns View

**Action name:** `LayoutColumns`

**Default bindings:**

```json
{ "LayoutColumns": "Ctrl+Shift+5" }
```


### Adaptive Layout

Switches the layout based on the folder contents

**Action name:** `LayoutAdaptive`

**Default bindings:**

```json
{ "LayoutAdaptive": "Ctrl+Shift+6" }
```


### Increase icon size

Increases the icon size

**Action name:** `LayoutIncreaseSize`

**Default bindings:**

```json
{ "LayoutIncreaseSize": "Ctrl++" }
```


### Decrease icon size

Decreases the icon size

**Action name:** `LayoutDecreaseSize`

**Default bindings:**

```json
{ "LayoutDecreaseSize": "Ctrl+-" }
```

## Sorting

### Sort by name

Sorts items alphabetically by their name

**Action name:** `SortByName`

**Default bindings:**

```json
{ "SortByName": "" }
```


### Sort by date modified

Sorts items by the date and time they were last modified

**Action name:** `SortByDateModified`

**Default bindings:**

```json
{ "SortByDateModified": "" }
```


### Sort by date created

Sorts items by the date and time they were created

**Action name:** `SortByDateCreated`

**Default bindings:**

```json
{ "SortByDateCreated": "" }
```


### Sort by size

Sorts items by their size

**Action name:** `SortBySize`

**Default bindings:**

```json
{ "SortBySize": "" }
```


### Sort by type

Sorts items by their type

**Action name:** `SortByType`

**Default bindings:**

```json
{ "SortByType": "" }
```


### Sort by sync status

Sorts items by their cloud sync status

**Action name:** `SortBySyncStatus`

**Default bindings:**

```json
{ "SortBySyncStatus": "" }
```


### Sort by tags

Sorts items by the tags assigned to them

**Action name:** `SortByTag`

**Default bindings:**

```json
{ "SortByTag": "" }
```


### Sort by path

Sorts items by their in the file system

**Action name:** `SortByPath`

**Default bindings:**

```json
{ "SortByPath": "" }
```


### Sort by original folder

Sorts items by the original folder they were deleted from

**Action name:** `SortByOriginalFolder`

**Default bindings:**

```json
{ "SortByOriginalFolder": "" }
```


### Sort by date deleted

Sorts items by the date and time they were deleted

**Action name:** `SortByDateDeleted`

**Default bindings:**

```json
{ "SortByDateDeleted": "" }
```


### Sort items in ascending order

Sorts items in ascending order according to the current sort option

**Action name:** `SortAscending`

**Default bindings:**

```json
{ "SortAscending": "" }
```


### Sort items in descending order

Sorts items in descending order according to the current sort option

**Action name:** `SortDescending`

**Default bindings:**

```json
{ "SortDescending": "" }
```


### Toggle sort direction

Toggles the sort direction between ascending and descending

**Action name:** `ToggleSortDirection`

**Default bindings:**

```json
{ "ToggleSortDirection": "" }
```


### Sort folders first

Lists and sorts folders before files

**Action name:** `SortFoldersFirst`

**Default bindings:**

```json
{ "SortFoldersFirst": "" }
```


### Sort files first

Lists and sorts files before folders

**Action name:** `SortFilesFirst`

**Default bindings:**

```json
{ "SortFilesFirst": "" }
```


### Sort folders alongside files

Lists and sorts folders alongside files

**Action name:** `ToggleSortDirectoriesAlongsideFiles`

**Default bindings:**

```json
{ "ToggleSortDirectoriesAlongsideFiles": "" }
```

## Grouping

### Group by none

Lists items without grouping them

**Action name:** `GroupByNone`

**Default bindings:**

```json
{ "GroupByNone": "" }
```


### Group by name

Groups items by name

**Action name:** `GroupByName`

**Default bindings:**

```json
{ "GroupByName": "" }
```


### Group by date modified

Groups items by date modified

**Action name:** `GroupByDateModified`

**Default bindings:**

```json
{ "GroupByDateModified": "" }
```


### Group by date created

Groups items by date created

**Action name:** `GroupByDateCreated`

**Default bindings:**

```json
{ "GroupByDateCreated": "" }
```


### Group by size

Groups items by size

**Action name:** `GroupBySize`

**Default bindings:**

```json
{ "GroupBySize": "" }
```


### Group by type

Groups items by type

**Action name:** `GroupByType`

**Default bindings:**

```json
{ "GroupByType": "" }
```


### Group by sync status

Groups items by sync status

**Action name:** `GroupBySyncStatus`

**Default bindings:**

```json
{ "GroupBySyncStatus": "" }
```


### Group by tags

Groups items by tags

**Action name:** `GroupByTag`

**Default bindings:**

```json
{ "GroupByTag": "" }
```


### Group by original folder

Groups items by original folder

**Action name:** `GroupByOriginalFolder`

**Default bindings:**

```json
{ "GroupByOriginalFolder": "" }
```


### Group by date deleted

Groups items by date deleted

**Action name:** `GroupByDateDeleted`

**Default bindings:**

```json
{ "GroupByDateDeleted": "" }
```


### Group by folder path

Groups items by folder path

**Action name:** `GroupByFolderPath`

**Default bindings:**

```json
{ "GroupByFolderPath": "" }
```


### Group by date modified (year)

Groups items by year of date modified

**Action name:** `GroupByDateModifiedYear`

**Default bindings:**

```json
{ "GroupByDateModifiedYear": "" }
```


### Group by date modified (month)

Groups items by month of date modified

**Action name:** `GroupByDateModifiedMonth`

**Default bindings:**

```json
{ "GroupByDateModifiedMonth": "" }
```


### Group by date modified (day)

Groups items by day of date modified

**Action name:** `GroupByDateModifiedDay`

**Default bindings:**

```json
{ "GroupByDateModifiedDay": "" }
```


### Group by date created (year)

Groups items by year of date created

**Action name:** `GroupByDateCreatedYear`

**Default bindings:**

```json
{ "GroupByDateCreatedYear": "" }
```


### Group by date created (month)

Groups items by month of date created

**Action name:** `GroupByDateCreatedMonth`

**Default bindings:**

```json
{ "GroupByDateCreatedMonth": "" }
```


### Group by date created (day)

Groups items by day of date created

**Action name:** `GroupByDateCreatedDay`

**Default bindings:**

```json
{ "GroupByDateCreatedDay": "" }
```


### Group by date deleted (year)

Groups items by year of date deleted

**Action name:** `GroupByDateDeletedYear`

**Default bindings:**

```json
{ "GroupByDateDeletedYear": "" }
```


### Group by date deleted (month)

Groups items by month of date deleted

**Action name:** `GroupByDateDeletedMonth`

**Default bindings:**

```json
{ "GroupByDateDeletedMonth": "" }
```


### Group by date deleted (day)

Groups items by day of date deleted

**Action name:** `GroupByDateDeletedDay`

**Default bindings:**

```json
{ "GroupByDateDeletedDay": "" }
```


### Group in ascending order

Sorts groups in ascending order

**Action name:** `GroupAscending`

**Default bindings:**

```json
{ "GroupAscending": "" }
```


### Group in Descending order

Sorts groups in descending order

**Action name:** `GroupDescending`

**Default bindings:**

```json
{ "GroupDescending": "" }
```


### Toggle sort direction

Toggles group sort direction

**Action name:** `ToggleGroupDirection`

**Default bindings:**

```json
{ "ToggleGroupDirection": "" }
```


### Group by year

Groups items by year

**Action name:** `GroupByYear`

**Default bindings:**

```json
{ "GroupByYear": "" }
```


### Group by month

Groups items by month

**Action name:** `GroupByMonth`

**Default bindings:**

```json
{ "GroupByMonth": "" }
```


### Toggle grouping unit

Toggles unit for grouping by date

**Action name:** `ToggleGroupByDateUnit`

**Default bindings:**

```json
{ "ToggleGroupByDateUnit": "" }
```

## Navigation

### New tab

Opens a new tab

**Action name:** `NewTab`

**Default bindings:**

```json
{ "NewTab": "Ctrl+T" }
```


### New tab

Opens a new tab

**Action name:** `NewTab`

**Default bindings:**

```json
{ "NewTab": "Ctrl+T" }
```


### New Window

Opens a new window

**Action name:** `NewWindow`

**Default bindings:**

```json
{ "NewWindow": "Ctrl+N" }
```


### Navigate back

Navigates backward in navigation history	

**Action name:** `NavigateBack`

**Default bindings:**

```json
{ "NavigateBack": "Alt+Left,Backspace" }
```


### Navigate forward

Navigates forward in navigation history	

**Action name:** `NavigateForward`

**Default bindings:**

```json
{ "NavigateForward": "Alt+Right" }
```


### Navigate up

Navigates up one directory

**Action name:** `NavigateUp`

**Default bindings:**

```json
{ "NavigateUp": "Alt+Up" }
```

## Other


### Duplicate tab

Duplicates the current tab

**Action name:** `DuplicateCurrentTab`

**Default bindings:**

```json
{ "DuplicateCurrentTab": "Ctrl+Shift+K" }
```


### Close tabs to the left

Closes tabs to the left of the current tab

**Action name:** `CloseTabsToTheLeftCurrent`

**Default bindings:**

```json
{ "CloseTabsToTheLeftCurrent": "" }
```


### Close tabs to the right

Closes tabs to the right of the current tab

**Action name:** `CloseTabsToTheRightCurrent`

**Default bindings:**

```json
{ "CloseTabsToTheRightCurrent": "" }
```


### Close other tabs

Closes other tabs

**Action name:** `CloseOtherTabsCurrent`

**Default bindings:**

```json
{ "CloseOtherTabsCurrent": "" }
```


### Open folder in new pane

Opens selected folder in a new pane

**Action name:** `OpenDirectoryInNewPane`

**Default bindings:**

```json
{ "OpenDirectoryInNewPane": "" }
```


### Open folder in new tab

Opens selected folder in a new tab

**Action name:** `OpenDirectoryInNewTab`

**Default bindings:**

```json
{ "OpenDirectoryInNewTab": "" }
```


### Open folder in new window

Opens selected folder in a new window

**Action name:** `OpenInNewWindowItem`

**Default bindings:**

```json
{ "OpenInNewWindowItem": "" }
```


### Reopen closed tab

Reopens the last closed tab

**Action name:** `ReopenClosedTab`

**Default bindings:**

```json
{ "ReopenClosedTab": "Ctrl+Shift+T" }
```


### Move to the previous tab

Switches focus to the previous tab

**Action name:** `PreviousTab`

**Default bindings:**

```json
{ "PreviousTab": "Ctrl+Shift+Tab" }
```


### Move to the next tab

Switches focus to the next tab

**Action name:** `NextTab`

**Default bindings:**

```json
{ "NextTab": "Ctrl+Tab" }
```


### Close tab

Closes the current tab

**Action name:** `CloseSelectedTab`

**Default bindings:**

```json
{ "CloseSelectedTab": "Ctrl+W,Ctrl+F4" }
```


### New pane

Opens a new pane

**Action name:** `OpenNewPane`

**Default bindings:**

```json
{ "OpenNewPane": "Alt+Shift++" }
```


### Close pane

Closes the right new pane

**Action name:** `ClosePane`

**Default bindings:**

```json
{ "ClosePane": "Ctrl+Shift+W" }
```

## Play

### Play media files

Plays the selected media files

**Action name:** `PlayAll`

**Default bindings:**

```json
{ "PlayAll": "" }
```

## Git

### Fetch

Runs git fetch

**Action name:** `GitFetch`

**Default bindings:**

```json
{ "GitFetch": "" }
```


### Init

Initializes the current folder as a Git repository

**Action name:** `GitInit`

**Default bindings:**

```json
{ "GitInit": "" }
```


### Pull

Runs git pull

**Action name:** `GitPull`

**Default bindings:**

```json
{ "GitPull": "" }
```


### Push

Runs git push

**Action name:** `GitPush`

**Default bindings:**

```json
{ "GitPush": "" }
```


### Sync

Runs git pull and then git push

**Action name:** `GitSync`

**Default bindings:**

```json
{ "GitSync": "" }
```
