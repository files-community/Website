---
title: Custom themes in Files
---

Files has a number of options for customizing the theme.

## Theming

### Backdrop Material
The backdrop is set to Mica Alt by default, but it can be changed to Acrylic from Settings > Appearance > Backdrop Material.

### Custom Fonts
Files has built-in support for custom fonts, to apply a custom font start by opening the settings file from Settings > Advanced > Edit settings file.
1. Close the Files app before continuing.
2. Edit the value for `AppThemeFontFamily`

### Advanced themes

1. Open the settings file from Settings > Advanced > Edit settings file.
2. Close the Files app before continuing.
3. Edit these values as desired

| Key                                 | Default value       |
| ----------------------------------- | ------------------- |
| `AppThemeBackgroundColor`           | `#00000000`         |
| `AppThemeAddressBarBackgroundColor` | `#00000000`         |
| `AppThemeSidebarBackgroundColor`    | `#00000000`         |
| `AppThemeFileAreaBackgroundColor`   | `#00000000`         |

### Sample themes

**Glass (requires Windows 11)**

| Key                                 | Value       |
| ----------------------------------- | ----------- |
| `AppThemeBackgroundColor`           | `#00000000` |
| `AppThemeAddressBarBackgroundColor` | `#00000001` |
| `AppThemeSidebarBackgroundColor`    | `#00000001` |
| `AppThemeFileAreaBackgroundColor`   | `#00000001` |

**Finder**

| Key                                 | Value     |
| ----------------------------------- | --------- |
| `AppThemeBackgroundColor`           | `#221d28` |
| `AppThemeAddressBarBackgroundColor` | `#38343c` |
| `AppThemeSidebarBackgroundColor`    | `#464449` |
| `AppThemeFileAreaBackgroundColor`   | `#221d28` |

**Nord**

| Key                                 | Value       |
| ----------------------------------- | ----------- |
| `AppThemeBackgroundColor`           | `#FF1B1F26` |
| `AppThemeAddressBarBackgroundColor` | `#2E3440`   |
| `AppThemeSidebarBackgroundColor`    | `#2E3440`   |
| `AppThemeFileAreaBackgroundColor`   | `#2E3440`   |
