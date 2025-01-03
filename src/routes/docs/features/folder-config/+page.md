---
title: Folder backgrounds
---

In addition to setting a custom [background](/docs/customize-settings/appearance) image for the entire window, Files allows you to assign unique background images for different folders. You can also set the image alignment, such as positioning it in a corner of the file area. This feature is perfect for displaying watermarks to easily differentiate between folders.

## Set a custom background image for a folder

1. Navigate to the folder where you want to set a custom background image.
2. Open the `desktop.ini` file using a text editor (e.g., Notepad).
3. Add the following to the `desktop.ini` file, replacing `C:\Image.png` with the actual path to your desired image file:
    ```ini
    [FilesApp]
    Files_BackgroundImage=C:\\Image.png
    ```
4. Save the `desktop.ini` file.
5. Refresh the folder (you can press F5 or right-click and choose "Refresh").
6. Enjoy your custom background!

![Folder background image](/docs-resources/Folder-Background-Image.png)

## Additional options

You can enhance your background image further by adding the following properties to the `desktop.ini` file.

### Opacity

The opacity property accepts values between `0.0` and `1`. Lower values make the image more transparent, while higher values make it more opaque. Adjust this setting to achieve the desired effect.

```ini
Files_BackgroundOpacity=0.4
```

### Fit

The `Files_BackgroundFit` property accepts values between `0` and `3`, corresponding to the behaviors listed in the table below.

| Value | Behavior       |
|-------|----------------|
| 0     | Fill           |
| 1     | None           |
| 2     | Uniform        |
| 3     | UniformToFill  |

### Vertical alignment

The `Files_BackgroundVerticalAlignment` property accepts values between `0` and `3`, corresponding to the behaviors listed in the table below.

| Value | Behavior  |
|-------|-----------|
| 0     | Top       |
| 1     | Center    |
| 2     | Bottom    |
| 3     | Stretch   |

### Horizontal alignment

The `Files_BackgroundHorizontalAlignment` property accepts values between `0` and `3`, corresponding to the behaviors listed in the table below.

| Value | Behavior  |
|-------|-----------|
| 0     | Center    |
| 1     | Left      |
| 2     | Right     |
| 3     | Stretch   |