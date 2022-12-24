---
title: Создание пользовательской темы
---

Files поставляются с некоторым количеством встроенных тем, которые вы можете использовать, но вы также можете создать собственную тему по своему усмотрению.

## Создание пользовательской темы

1. Откройте Files и нажмите на иконку настроек.
2. Нажмите на значок информации в разделе пользовательской темы.
3. Откройте папку с темами themes.
4. Создайте новый файл с расширение `xaml`.
5. Откройте данный файл в любом текстовом редакторе на ваш выбор.
6. Скопируйте и вставьте ниже приведенный шаблон в файл, вы можете переопределить многие поля ресурсов XAML внутри ResourceDictionary. Вы можете использовать примеры ResourceDictionary для идей. WinUI репозиторий так же хороший путь найти варианты для идей.

Стандартный шаблон

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

## Примеры ресурсов

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
