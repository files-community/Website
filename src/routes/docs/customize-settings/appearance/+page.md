---
title: Appearance
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

The Appearance page in settings allows you to personalize your Files experience with a variety of aesthetic options. For those who love to tinker, we’ll even show you how to manually adjust the settings file for additional background colors and fonts.

## Theme customization

Toggle effortlessly between dark and light mode to match your style or ambient lighting. The "Default" setting syncs with your Windows system theme, ensuring a cohesive visual experience.

![Light and dark mode split view](/docs-resources/Dark-Light-Mode.png)


## Transparency effects

<InfoBar severity="information">
  Please note that a completely transparent window isn't available right now.
</InfoBar>

Choose your preferred backdrop material to add a layer of transparency to your window background. Opt for Mica Alt for a subtle effect (note: Mica requires Windows 11) or Acrylic for a frosted appearance. To fully appreciate these effects, ensure your background color is set to transparent.


## Background color

Personalize the background color of your window from a spectrum of pre-selected shades. For a unique touch, use the color picker to input a custom color or adjust transparency to your liking.

![Settings dialog](/docs-resources/Settings-Appearance.png)


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
| `AppThemeToolbarBackgroundColor`    | `#00000000`   |
| `AppThemeSidebarBackgroundColor`    | `#00000000`   |
| `AppThemeFileAreaBackgroundColor`   | `#00000000`   |
| `AppThemeInfoBackgroundColor`       | `#00000000`   |

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
| `AppThemeToolbarBackgroundColor`    | `#00000001` |
| `AppThemeSidebarBackgroundColor`    | `#00000001` |
| `AppThemeFileAreaBackgroundColor`   | `#00000001` |
| `AppThemeInfoPaneBackgroundColor`   | `#00000001` |

### Finder

The finder theme is based on the color scheme in Finder.

| Key                                 | Value     |
| ----------------------------------- | --------- |
| `AppThemeBackgroundColor`           | `#221d28` |
| `AppThemeAddressBarBackgroundColor` | `#38343c` |
| `AppThemeToolbarBackgroundColor`    | `#38343c` |
| `AppThemeSidebarBackgroundColor`    | `#464449` |
| `AppThemeFileAreaBackgroundColor`   | `#221d28` |
| `AppThemeInfoPaneBackgroundColor`   | `#38343c` |

### Nord

| Key                                 | Value       |
| ----------------------------------- | ----------- |
| `AppThemeBackgroundColor`           | `#FF1B1F26` |
| `AppThemeAddressBarBackgroundColor` | `#2E3440`   |
| `AppThemeToolbarBackgroundColor`    | `#2E3440`   |
| `AppThemeSidebarBackgroundColor`    | `#2E3440`   |
| `AppThemeFileAreaBackgroundColor`   | `#2E3440`   |
| `AppThemeInfoPaneBackgroundColor`   | `#2E3440`   |

## Background image

Files allows you to configure a custom background image or gif using the settings UI. Once selected, Files will update to display your image as a beautiful background, adding a distinctive touch to your workspace. Additionally, you can adjust the image’s opacity and display settings for a truly customized look.

![Custom background image](/docs-resources/Background-Image.png)


### Setting a custom background image

1. Open Files > Settings > Appearance, and scroll down to the "Background image" section.
2. Click on "Browse" and select the image or gif you wish to use.

![Custom background image](/docs-resources/Settings-Appearance-Background-Image.png)

