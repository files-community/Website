---
title: Folder backgrounds
---

In addition to supporting custom [background](/docs/customize-settings/appearance) images in Files, you can also apply images and watermarks to individual folder locations.

## Set a custom background image for a folder

1. Navigate to the folder where you want to set a custom background image.
2. Open the `desktop.ini` file using a text editor (such as Notepad).
3. Add the following line to the `desktop.ini` file, replacing `C:\Image.png` with the actual path to your desired image file:
```
[FilesApp]
Files_BackgroundImage=C:\\Image.png
```
4. Save the `desktop.ini` file.
5. Refresh the folder (you can press F5 or right-click and choose "Refresh").
6. Enjoy the custom background!

![Folder background image](/docs-resources/Folder-Background-Image.png)

## Image properties

You can enhance your folder customization by adding optional properties to the `desktop.ini` file. These properties allow further fine-tuning of your folder background.

### Opacity

**Property:** `Files_BackgroundOpacity`

**Values:**

The opacity property accepts values between `0.0` and `1`, allowing you to control the transparency of the image. Lower values make the image more transparent, while higher values make it more opaque. Adjust this setting to achieve the desired effect.


### Fit

**Property:** `Files_BackgroundFit`

| Value | Behavior |
| --- | ------------- |
| 0   | Fill          |
| 1   | None          |
| 2   | Uniform       |
| 3   | UniformToFill |

### Vertical alignment

**Property:** `Files_BackgroundVerticalAlignment`

| Value | Behavior  |
|-----|--------|
| 0   | Top    |
| 1   | Center |
| 2   | Bottom |
| 3   | Stretch|


### Horizontal alignment

**Property:** `Files_BackgroundHorizontalAlignment`

| Value | Behavior |
|-----|--------|
| 0   | Center |
| 1   | Left   |
| 2   | Right  |
| 3   | Stretch|