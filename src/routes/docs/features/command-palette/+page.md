---
title: Command Palette
---

The Command Palette is a powerful feature that displays a list of available actions along with their assigned key bindings. Additionally, the Command Palette allows you to search for and access advanced features that aren't displayed in the main interface. You can access the Command Palette by entering `>` in the Address Bar or by using the <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> keyboard shortcut.

Actions are commands that you can perform on items, such as files, folders, images, etc. Files includes support for over 150 actions, many of which have default keyboard shortcuts for easy access. If you're unsure of the keybinding or need to use an action without a keybinding, the Command Palette is a great feature to help you out. For more details on customizing actions and setting up keybindings, check out our documentation on the actions [settings page](/docs/customize-settings/actions/).


![Command palette](/docs-resources/Command-Palette.png)

## Supported actions

| **Action**                             | **Default Bindings**                | **Description**                                      |
|----------------------------------------|-------------------------------------|------------------------------------------------------|
| **Help**                               | <kbd>F1</kbd>                       | Opens the online documentation in the web browser    |
| **Toggle FullScreen**                  | <kbd>F11</kbd>                      | Toggles FullScreen mode                              |
| **Enter compact overlay**              | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Up</kbd>  | Enters compact overlay                               |
| **Exit compact overlay**               | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Down</kbd>  | Exits compact overlay                                |
| **Toggle compact overlay**             | <kbd>F12</kbd>                      | Toggles compact overlay                              |
| **Search**                             | <kbd>Ctrl</kbd>+<kbd>F</kbd>, <kbd>F3</kbd>     | Focuses the search box                               |
| **Redo**                               | <kbd>Ctrl</kbd>+<kbd>Y</kbd>        | Redoes the last file operation                       |
| **Undo**                               | <kbd>Ctrl</kbd>+<kbd>Z</kbd>        | Undoes the last file operation                       |
| **Edit path**                          | <kbd>Ctrl</kbd>+<kbd>L</kbd>, <kbd>Alt</kbd>+<kbd>D</kbd> | Focuses the path bar                                 |
| **Toggle hidden items**                | <kbd>Ctrl</kbd>+<kbd>H</kbd>        | Toggles whether to show hidden items                 |
| **Toggle dot files**                   |                                     | Toggles the setting that controls whether dot files are displayed |
| **Toggle file extensions**             |                                     | Toggles whether to show file extensions              |
| **Toggle Info Pane**                   | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>I</kbd>   | Toggles the Info Pane                                |
| **Toggle Toolbar**                     | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>  | Toggles the Toolbar visibility                       |
| **Copy item**                          | <kbd>Ctrl</kbd>+<kbd>C</kbd>        | Copy selected items to the clipboard                 |
| **Copy item path**                     | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>  | Copy paths of the selected items to the clipboard    |
| **Copy item path with quotes**         | <kbd>Alt</kbd>+<kbd>Ctrl</kbd>+<kbd>C</kbd>    | Copy paths of the selected items with quotes to the clipboard |
| **Copy path**                          |                                     | Copy path of the current directory to the clipboard  |
| **Copy path with quotes**              |                                     | Copy path of the current directory with quotes to the clipboard |
| **Cut item**                           | <kbd>Ctrl</kbd>+<kbd>X</kbd>        | Cut selected items to the clipboard                  |
| **Paste item**                         | <kbd>Ctrl</kbd>+<kbd>V</kbd>        | Pastes items from clipboard to current directory     |
| **Paste item to selected folder**      | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>  | Pastes items from clipboard to the selected folder   |
| **Paste item as shortcut**             |                                     | Pastes items from clipboard to current directory as shortcuts |
| **Delete item**                        | <kbd>Delete</kbd>, <kbd>Ctrl</kbd>+<kbd>D</kbd>  | Deletes selected items                               |
| **Permanently delete item**            | <kbd>Shift</kbd>+<kbd>Delete</kbd>  | Permanently deletes selected items                   |
| **Create folder**                      | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd>  | Creates new folder                                   |
| **Create folder with selection**       |                                     | Creates new folder with the selected items           |
| **Create item**                        | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>  | Creates new item                                     |
| **Create shortcut**                    |                                     | Creates shortcut targeting the selected item         |
| **Create shortcut from dialog**        |                                     | Creates shortcut targeting any item                  |
| **Open item**                          | <kbd>Enter</kbd>                     | Opens selected items                                 |
| **Open item with application picker**  |                                     | Opens items with the selected application            |
| **Open parent folder**                 |                                     | Opens parent folder of searched item                 |
| **Open file location**                 |                                     | Opens location of the selected item                  |
| **Refresh items**                      | <kbd>Ctrl</kbd>+<kbd>R</kbd>, <kbd>F5</kbd>    | Refreshes the items of the current directory         |
| **Rename item**                        | <kbd>F2</kbd>                       | Renames selected item                                |
| **Select all**                         | <kbd>Ctrl</kbd>+<kbd>A</kbd>        | Selects all items                                    |
| **Invert selection**                   |                                     | Inverts the selected items                           |
| **Clear selection**                    |                                     | Clears the selected items                            |
| **Toggle selection**                   | <kbd>Ctrl</kbd>+<kbd>Space</kbd>    | Toggles item selection                               |
| **Share item**                         |                                     | Shares selected items                                |
| **Pin to start**                       |                                     | Pins selected items to the Start Menu                |
| **Unpin from start**                   |                                     | Unpins selected items from the Start Menu            |
| **Pin to sidebar**                     |                                     | Pins selected folders to sidebar                     |
| **Unpin from Sidebar**                 |                                     | Unpins selected folders from Sidebar                 |
| **Set as desktop background**          |                                     | Sets selected picture as the desktop background      |
| **Set as desktop slideshow**           |                                     | Sets selected pictures as the desktop slideshow      |
| **Set as lockscreen slideshow**        |                                     | Sets selected picture as the lockscreen background   |
| **Set as app background**              |                                     | Sets selected picture as the app background          |
| **Install font**                       |                                     | Installs selected fonts                              |
| **Install Inf**                        |                                     | Installs selected Inf files                          |
| **Install certificate**                |                                     | Installs selected certificates                       |
| **Run as admin**                       |                                     | Runs selected items as admin                         |
| **Run as another user**                |                                     | Runs selected items as another user                  |
| **Run with Powershell**                |                                     | Runs selected scripts with Powershell                |
| **View preview popup**                 | <kbd>Space</kbd>                    | Opens preview popup when QuickLook or SeerPro is installed |
| **Create archive**                     |                                     | Prompts to create archive from selected items        |
| **Create 7z archive**                  |                                     | Creates 7z archive with selected items               |
| **Create zip archive**                 |                                     | Creates zip archive with selected items              |
| **Extract archive**                    | <kbd>Ctrl</kbd>+<kbd>E</kbd>        | Prompts to extract items from selected archive       |
| **Extract archive here**               |                                     | Extracts items from selected archive to current folder |
| **Extract archive to new folder**      |                                     | Extracts items from selected archive to a new folder |
| **Smart extract**                      | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>  | Automatically chooses extraction mode based on the selected archives contents |
| **Rotate left**                        |                                     | Rotates selected images left                         |
| **Rotate right**                       |                                     | Rotates selected images right                        |
| **Open in Visual Studio**              |                                     | Opens current folder in Visual Studio                |
| **Open in Visual Studio Code**         |                                     | Opens current folder in Visual Studio Code           |
| **Open properties**                    | <kbd>Alt</kbd>+<kbd>Enter</kbd>     | Opens properties window                              |
| **Open Release Notes**                 |                                     | Opens the Release Notes dialog                       |
| **Cleanup**                            |                                     | Opens the Storage Sense page in Windows Settings     |
| **Open File Explorer properties**      | <kbd>AltShift</kbd>+<kbd>Enter</kbd>  | Opens File Explorer properties window                |
| **Open settings**                      | <kbd>Ctrl</kbd>+<kbd>,</kbd>        | Opens settings                                       |
| **Open Terminal**                      | <kbd>Ctrl</kbd>+<kbd>`</kbd>        | Opens folder in Windows Terminal                     |
| **Open Terminal as admin**             | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>`</kbd>  | Opens folder in Windows Terminal as admin            |
| **Open Command Palette**               | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>  | Opens the Command Palette                            |
| **Edit in Notepad**                    |                                     | Opens the selected file in Notepad. This action is available for the following file extensions: `.ahk`, `.bat`, and `.cmd`. |
| **Details View**                       | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>1</kbd>  | Switches to the Details View                         |
| **List View**                          | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>2</kbd>  | Switches to the List View                            |
| **Tiles View**                         | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>3</kbd>  | Switches to the Tiles View                           |
| **Grid View**                          | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>4</kbd>  | Switches to the Grid View                            |
| **Columns View**                       | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>5</kbd>  | Switches to the Columns View                         |
| **Adaptive Layout**                    | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>6</kbd>  | Switches the layout based on the folder contents     |
| **Increase icon size**                 | <kbd>Ctrl</kbd>+<kbd>+</kbd>        | Increases the icon size                              |
| **Decrease icon size**                 | <kbd>Ctrl</kbd>+<kbd>-</kbd>        | Decreases the icon size                              |
| **Sort by name**                       |                                     | Sorts items alphabetically by their name             |
| **Sort by date modified**              |                                     | Sorts items by the date and time they were last modified |
| **Sort by date created**               |                                     | Sorts items by the date and time they were created   |
| **Sort by size**                       |                                     | Sorts items by their size                            |
| **Sort by type**                       |                                     | Sorts items by their type                            |
| **Sort by sync status**                |                                     | Sorts items by their cloud sync status               |
| **Sort by tags**                       |                                     | Sorts items by the tags assigned to them             |
| **Sort by path**                       |                                     | Sorts items by their in the file system              |
| **Sort by original folder**            |                                     | Sorts items by the original folder they were deleted from |
| **Sort by date deleted**               |                                     | Sorts items by the date and time they were deleted   |
| **Sort items in ascending order**      |                                     | Sorts items in ascending order according to the current sort option |
| **Sort items in descending order**     |                                     | Sorts items in descending order according to the current sort option |
| **Toggle sort direction**              |                                     | Toggles the sort direction between ascending and descending |
| **Sort folders first**                 |                                     | Lists and sorts folders before files                 |
| **Sort files first**                   |                                     | Lists and sorts files before folders                 |
| **Sort folders alongside files**       |                                     | Lists and sorts folders alongside files              |
| **Group by none**                      |                                     | Lists items without grouping them                    |
| **Group by name**                      |                                     | Groups items by name                                 |
| **Group by date modified**             |                                     | Groups items by date modified                        |
| **Group by date created**              |                                     | Groups items by date created                         |
| **Group by size**                      |                                     | Groups items by size                                 |
| **Group by type**                      |                                     | Groups items by type                                 |
| **Group by sync status**               |                                     | Groups items by sync status                          |
| **Group by tags**                      |                                     | Groups items by tags                                 |
| **Group by original folder**           |                                     | Groups items by original folder                      |
| **Group by date deleted**              |                                     | Groups items by date deleted                         |
| **Group by folder path**               |                                     | Groups items by folder path                          |
| **Group by date modified (year)**      |                                     | Groups items by year of date modified                |
| **Group by date modified (month)**     |                                     | Groups items by month of date modified               |
| **Group by date modified (day)**       |                                     | Groups items by day of date modified                 |
| **Group by date created (year)**       |                                     | Groups items by year of date created                 |
| **Group by date created (month)**      |                                     | Groups items by month of date created                |
| **Group by date created (day)**        |                                     | Groups items by day of date created                  |
| **Group by date deleted (year)**       |                                     | Groups items by year of date deleted                 |
| **Group by date deleted (month)**      |                                     | Groups items by month of date deleted                |
| **Group by date deleted (day)**        |                                     | Groups items by day of date deleted                  |
| **Group in ascending order**           |                                     | Sorts groups in ascending order                      |
| **Group in Descending order**          |                                     | Sorts groups in descending order                     |
| **Toggle sort direction**              |                                     | Toggles group sort direction                         |
| **Group by year**                      |                                     | Groups items by year                                 |
| **Group by month**                     |                                     | Groups items by month                                |
| **Toggle grouping unit**               |                                     | Toggles unit for grouping by date                    |
| **New tab**                            | <kbd>Ctrl</kbd>+<kbd>T</kbd>        | Opens a new tab                                      |
| **New Window**                         | <kbd>Ctrl</kbd>+<kbd>N</kbd>        | Opens a new window                                   |
| **Navigate back**                      | <kbd>Alt</kbd>+<kbd>Left</kbd>, <kbd>Backspace</kbd>  | Navigates backward in navigation history             |
| **Navigate forward**                   | <kbd>Alt</kbd>+<kbd>Right</kbd>     | Navigates forward in navigation history              |
| **Navigate up**                        | <kbd>Alt</kbd>+<kbd>Up</kbd>        | Navigates up one directory                           |
| **Navigate home**                      |                                     | Navigates to the home page                           |
| **Duplicate tab**                      | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>  | Duplicates the current tab                           |
| **Close tabs to the left**             |                                     | Closes tabs to the left of the current tab           |
| **Close tabs to the right**            |                                     | Closes tabs to the right of the current tab          |
| **Close other tabs**                   |                                     | Closes other tabs                                    |
| **Close all tabs**                     | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>W</kbd>  | Closes all tabs including the current tab            |
| **Open folder in new pane**            |                                     | Opens selected folder in a new pane                  |
| **Open folder in new tab**             |                                     | Opens selected folder in a new tab                   |
| **Open folder in new window**          |                                     | Opens selected folder in a new window                |
| **Reopen closed tab**                  | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd>  | Reopens the last closed tab                          |
| **Move to the previous tab**           | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Tab</kbd>  | Switches focus to the previous tab                   |
| **Move to the next tab**               | <kbd>Ctrl</kbd>+<kbd>Tab</kbd>      | Switches focus to the next tab                       |
| **Close tab**                          | <kbd>Ctrl</kbd>+<kbd>W</kbd>, <kbd>Ctrl</kbd>+<kbd>F4</kbd>  | Closes the current tab                               |
| **Add horizontal pane**                | <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd>  | Opens a new pane arranged horizontally               |
| **Add vertical pane**                  | <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>  | Opens a new pane arranged vertically                 |
| **Arrange panes horizontally**         |                                     | Arranges open panes horizontally                     |
| **Arrange panes vertically**           |                                     | Arranges open panes vertically                       |
| **Close active pane**                  | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>W</kbd>  | Closes the active new pane                           |
| **Focus other pane**                   | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Right</kbd>  | Switches focus to the non active pane                |
| **Play media files**                   |                                     | Plays the selected media files                       |
| **Fetch**                              |                                     | Runs git fetch                                       |
| **Init**                               |                                     | Initializes the current folder as a Git repository   |
| **Pull**                               |                                     | Runs git pull                                        |
| **Push**                               |                                     | Runs git push                                        |
| **Sync**                               |                                     | Runs git pull and then git push                      |