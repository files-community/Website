---
title: Appearance
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

The **Appearance** page in settings gives you full control over the look and feel of the Files interface. Whether you're syncing with your system theme or crafting your own custom setup, this page guides you through everything from light/dark mode and transparency to fonts, backgrounds, and themes.

For power users, we'll even walk through advanced customization using the settings file.

## Theme customization

Toggle effortlessly between **light** and **dark** mode to match your personal style or environment. Selecting "Default" will sync Files with your Windows system theme for a consistent appearance across apps.

![Light and dark mode split view](/docs-resources/Dark-Light-Mode.png)

## Transparency effects

<InfoBar severity="information">
  A fully transparent window isn't available at this time.
</InfoBar>

You can adjust the visual flair by choosing a backdrop material:

- **Mica** – A soft, dynamic material that subtly incorporates the desktop wallpaper and theme color. Requires Windows 11.
- **Mica Alt** – A higher-contrast version of Mica for increased visual distinction. Requires Windows 11.
- **Acrylic** – A frosted, blurred transparency effect that creates a glass-like appearance. Supported on Windows 10 and 11.

Tip: For these effects to shine, be sure the app background includes some level of transparency.

## Background color

Pick from a curated palette or use the color picker to select a custom color—fully opaque or semi-transparent. You control the vibe.

![Settings dialog](/docs-resources/Settings-Appearance.png)

### Additional background colors (advanced)

Want to go further? You can modify areas like the address bar and file pane by editing the settings file directly:

1. Open **Settings > Advanced > Edit settings file**.
2. Close Files completely via the system tray ("Quit") before making edits.
3. Use a text editor to find and adjust any of the keys below.

| Key                                 | Default value |
| ----------------------------------- | ------------- |
| `AppThemeBackgroundColor`           | `#00000000`   |
| `AppThemeAddressBarBackgroundColor` | `#00000000`   |
| `AppThemeToolbarBackgroundColor`    | `#00000000`   |
| `AppThemeSidebarBackgroundColor`    | `#00000000`   |
| `AppThemeFileAreaBackgroundColor`   | `#00000000`   |
| `AppThemeInfoBackgroundColor`       | `#00000000`   |

## Custom fonts

While not exposed in the settings UI, you can change the font by modifying the `AppThemeFontFamily` value in the settings file.

## Popular themes

Here are a few hand-crafted themes to get you started:

### Glass

Pairs beautifully with Acrylic for that translucent, glass-like finish.

| Key                                 | Value       |
| ----------------------------------- | ----------- |
| `AppThemeBackgroundColor`           | `#00000000` |
| `AppThemeAddressBarBackgroundColor` | `#00000001` |
| `AppThemeToolbarBackgroundColor`    | `#00000001` |
| `AppThemeSidebarBackgroundColor`    | `#00000001` |
| `AppThemeFileAreaBackgroundColor`   | `#00000001` |
| `AppThemeInfoPaneBackgroundColor`   | `#00000001` |

### Finder

Inspired by macOS's Finder.

| Key                                 | Value     |
| ----------------------------------- | --------- |
| `AppThemeBackgroundColor`           | `#221d28` |
| `AppThemeAddressBarBackgroundColor` | `#38343c` |
| `AppThemeToolbarBackgroundColor`    | `#38343c` |
| `AppThemeSidebarBackgroundColor`    | `#464449` |
| `AppThemeFileAreaBackgroundColor`   | `#221d28` |
| `AppThemeInfoPaneBackgroundColor`   | `#38343c` |

### Nord

A modern and moody Arctic-inspired color scheme.

| Key                                 | Value       |
| ----------------------------------- | ----------- |
| `AppThemeBackgroundColor`           | `#FF1B1F26` |
| `AppThemeAddressBarBackgroundColor` | `#2E3440`   |
| `AppThemeToolbarBackgroundColor`    | `#2E3440`   |
| `AppThemeSidebarBackgroundColor`    | `#2E3440`   |
| `AppThemeFileAreaBackgroundColor`   | `#2E3440`   |
| `AppThemeInfoPaneBackgroundColor`   | `#2E3440`   |

### Dracula

Bold, vibrant, and perfect for dark-mode enthusiasts.

| Key                                 | Value       |
| ----------------------------------- | ----------- |
| `AppThemeBackgroundColor`           | `#282A36`   |
| `AppThemeAddressBarBackgroundColor` | `#393d4e`   |
| `AppThemeToolbarBackgroundColor`    | `#282A36`   |
| `AppThemeSidebarBackgroundColor`    | `#393d4e`   |
| `AppThemeFileAreaBackgroundColor`   | `#282A36`   |
| `AppThemeInfoPaneBackgroundColor`   | `#282A36`   |

## Background image

You can personalize Files even further by setting a custom background image—or even a GIF.

Once added, Files will use it as your backdrop, allowing additional tweaks to opacity and scaling.

![Custom background image](/docs-resources/Background-Image.png)

### Setting a custom background image

1. Go to **Settings > Appearance**, then scroll to **Background image**.
2. Click **Browse**, then pick your image or GIF file.

![Custom background image](/docs-resources/Settings-Appearance-Background-Image.png)

## Tab actions

You can choose whether to show or hide the **actions button** in the top-left corner of the title bar. This button provides quick access to tab-related actions and can be toggled on or off depending on your preference.

## Toolbars

### Show toolbar

The toolbar can be turned on or off to maximize screen real estate.

### Status center button

You can configure the status center visibility to **always** display or only **during file operations**, keeping your interface clean when idle.