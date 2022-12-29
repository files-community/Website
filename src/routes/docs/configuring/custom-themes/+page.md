---
title: Customizing colors in Files
---

Files comes with a large collection of custom background colors but additional customization is available for advanced users.

## Advanced themeing
To access theme values that are not exposed in the settings modal
1. Open Files > Settings > About > Open log location. This will open the app data folder for Files.
2. Open the `settings` folder and open the `user_settings.json` file. It's a good idea to close Files while modifying the settings file.

### Available resources for themeing

| Key                                   | Example                       | Default value                                |
| ------------------------------------- | ------------------------------| -------------------------------------------- |
| `AppThemeBackgroundColor`             | `4282795081`                  | `0`                                          |
| `AppThemeAddressBarBackgroundColor`   | `4281873468`                  | `0`                                          |
| `AppThemeSidebarBackgroundColor`      | `4282795081`                  | `0`                                          |
| `AppThemeFileAreaBackgroundColor`     | `4280425768`                  | `0`                                          |
| `AppThemeFontFamily`                  | `Times New Roman`             | `Segoe UI Variable`                          |
