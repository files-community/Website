---
title: Create a custom theme
---

Files comes with a number of built-in themes for you to use, but you can also create a custom theme the way you like.

## Create a custom theme

1. Open Files and click on the settings icon.
2. Click on the information icon by the custom theme section.
3. Open the themes folder.
4. Create a new file with the `xaml` extension
5. Open the file in the text editor of your choice.
6. Copy and paste the following template, you can include and override most XAML resources inside the ResourceDictionary. You can use the sample resources for ideas. The WinUI repository is also a good way to find resources that you can override. 

Default template
```xml
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:BelowWindows10version1809="http://schemas.microsoft.com/winfx/2006/xaml/presentation?IsApiContractNotPresent(Windows.Foundation.UniversalApiContract, 7)"
    xmlns:Windows10version1809="http://schemas.microsoft.com/winfx/2006/xaml/presentation?IsApiContractPresent(Windows.Foundation.UniversalApiContract, 7)">
    <ResourceDictionary.ThemeDictionaries>
        <ResourceDictionary x:Key="Default">
        </ResourceDictionary>
        <ResourceDictionary x:Key="Light">
        </ResourceDictionary>
    </ResourceDictionary.ThemeDictionaries>
</ResourceDictionary>
```

## Sample resources

| Key                                   | Example                                                                        | Default value                                |
| ------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- |
| `ContentControlThemeFontFamily`       | `<FontFamily x:Key="ContentControlThemeFontFamily">Comic Sans</FontFamily>`    | `Segoe UI Variable`                          |
| `RootBackgroundBrush`                 | `<SolidColorBrush x:Key="RootBackgroundBrush" Color="#AA845a2b" />`            | `Transparent`                                |
| `SolidBackgroundFillColorBase`        | `<Color x:Key="SolidBackgroundFillColorBase">#A26829</Color>`                  |                                              |
| `SolidBackgroundFillColorSecondary`   | `<Color x:Key="SolidBackgroundFillColorSecondary">#845a2b</Color>`             |                                              |
| `SolidBackgroundFillColorTertiary`    | `<Color x:Key="SolidBackgroundFillColorTertiary">#A26829</Color>`              |                                              |
| `SolidBackgroundFillColorQuarternary` | `<Color x:Key="SolidBackgroundFillColorQuarternary">#A26829</Color>`           |                                              |
| `SolidBackgroundAcrylic`              | `<Color x:Key="SolidBackgroundAcrylic">#A26829</Color>`                        | Light theme: `#FFFFFF` Dark theme: `#2C2C2C` |
| `NavigationToolbarBackgroundBrush`    | `<SolidColorBrush x:Key="NavigationToolbarBackgroundBrush" Color="#A26829" />` | `#00000000`                                  |
| `TitlebarContentBackgroundBrush`      | `<SolidColorBrush x:Key="TitlebarContentBackgroundBrush" Color="#A26829" />`   | `Transparent`                                |
