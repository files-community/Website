---
title: Appearance
---

![Settings dialog](/docs-resources/Settings-Appearance.png)

## Theme

This allows you to switch between dark and light mode. "Default" uses the system theme in Windows.

## Backdrop material

The backdrop material is what makes the window background transparent. You can choose between Mica Alt (Mica requires Windows 11) and Acrylic. In order for the backdrop to be visible, the background color needs to be transparent.

## Background color

This allows you to change the background color of the window. There is a large selection of pre-selected colors but you can also enter a custom value or change the transparency using the color picker.

### Additional background colors

While there isn't an option in the settings UI, you can change the address bar, sidebar, and file area backgrounds by manually editing the settings file:

1. Open Files > Settings > Advanced > Edit settings file. This will open the settings file in your default text editor.
2. Before editing the settings file, you’ll need to close Files by right-clicking the icon in the system tray and clicking on "Quit".
3. The settings file has a JSON format. You can use any text editor to open and modify it.
4. Search for any of the keys listed below and edit the value as desired.

| Key                                 | Default value |
| ----------------------------------- | ------------- |
| `AppThemeBackgroundColor`           | `#00000000`   |
| `AppThemeAddressBarBackgroundColor` | `#00000000`   |
| `AppThemeSidebarBackgroundColor`    | `#00000000`   |
| `AppThemeFileAreaBackgroundColor`   | `#00000000`   |

## Custom fonts

There isn't an option in the settings UI but you can change the default font by manually editing the value for `AppThemeFontFamily` in the settings file.

## Popular themes

We put together some popular color combinations to help users create custom themes.

### Glass

The glass theme is best paired with the Acrylic backdrop material.

| Key                                 | Value       |
| ----------------------------------- | ----------- |
| `AppThemeBackgroundColor`           | `#00000000` |
| `AppThemeAddressBarBackgroundColor` | `#00000001` |
| `AppThemeSidebarBackgroundColor`    | `#00000001` |
| `AppThemeFileAreaBackgroundColor`   | `#00000001` |

### Finder

The finder theme is based on the color scheme in Finder.

| Key                                 | Value     |
| ----------------------------------- | --------- |
| `AppThemeBackgroundColor`           | `#221d28` |
| `AppThemeAddressBarBackgroundColor` | `#38343c` |
| `AppThemeSidebarBackgroundColor`    | `#464449` |
| `AppThemeFileAreaBackgroundColor`   | `#221d28` |

### Nord

| Key                                 | Value       |
| ----------------------------------- | ----------- |
| `AppThemeBackgroundColor`           | `#FF1B1F26` |
| `AppThemeAddressBarBackgroundColor` | `#2E3440`   |
| `AppThemeSidebarBackgroundColor`    | `#2E3440`   |
| `AppThemeFileAreaBackgroundColor`   | `#2E3440`   |


## Background image

Files allows you to configure a custom background image or gif using the settings UI.

![Custom background image](/docs-resources/Background-Image.png)

### Setting a custom background image

1. Open Files > Settings > Appearance, and scroll down to the "Background image" section.
2. Click on "Browse" and select the image or gif you wish to use.

![Custom background image](/docs-resources/Settings-Appearance-Background-Image.png)

