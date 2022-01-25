# Custom Themes

Files comes with a built in selection of custom themes, but it also allows you to create your own themes by modifying xaml resource dictionaries.

Themes are located inside the `Themes` folder in the app's `LocalState` folder. You can select a custom theme from the appearance page in the settings dialog.

## How to create a custom theme

1. Open your text editor of choice, and paste in the template located below. Then, save the file (with a name of your choice)
   in `%localappdata%\Packages\49306atecsolution.FilesUWP_et10x9a9vyk8t\LocalStateThemes\`.

2. Adjust the colors until satisfied.

3. Select the theme from the appearance page in the settings dialog.

Note: Applications - such as the Fluent XAML Theme Editor - allow the creation of themes in a simpler way than editing XAML.
These are good ways to edit themes, especially if it's your first time.

## Contributing Themes

You can also contibute already existing themes to the repository.

1. Open `https://github.com/files-community/Custom-themes/tree/main/Themes` and click 'Add File', then 'Upload Files'

2. Select your theme (.xaml file) and click 'Open'

3. Now go through the process of creating a pull-request, which you should be familiar with. Any problems regarding the creation of a PR - it is rather simple - refer
to GitHub's own documentation.

<details>
<summary>
Default template
</summary>

```xml
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:BelowWindows10version1809="http://schemas.microsoft.com/winfx/2006/xaml/presentation?IsApiContractNotPresent(Windows.Foundation.UniversalApiContract, 7)"
    xmlns:Windows10version1809="http://schemas.microsoft.com/winfx/2006/xaml/presentation?IsApiContractPresent(Windows.Foundation.UniversalApiContract, 7)">
    <ResourceDictionary.ThemeDictionaries>
        <ResourceDictionary x:Key="Default">
            <!-- Background Resources -->
            <SolidColorBrush x:Key="RootBackgroundBrush" Color="#AA7F3C4E" />
            <Color x:Key="SolidBackgroundFillColorBase">#97475C</Color>
            <Color x:Key="SolidBackgroundFillColorSecondary">#7F3C4E</Color>
            <Color x:Key="SolidBackgroundFillColorTertiary">#763B4A</Color>
            <Color x:Key="SolidBackgroundFillColorQuarternary">#592A37</Color>
            <SolidColorBrush x:Key="SolidBackgroundFillColorBaseBrush" Color="{ThemeResource SolidBackgroundFillColorBase}" />
            <SolidColorBrush x:Key="SolidBackgroundFillColorSecondaryBrush" Color="{ThemeResource SolidBackgroundFillColorSecondary}" />
            <SolidColorBrush x:Key="SolidBackgroundFillColorTertiaryBrush" Color="{ThemeResource SolidBackgroundFillColorTertiary}" />
            <SolidColorBrush x:Key="SolidBackgroundFillColorQuarternaryBrush" Color="{ThemeResource SolidBackgroundFillColorQuarternary}" />
            <!-- Acrylic Resources -->
            <Color x:Key="SolidBackgroundAcrylic">#592A37</Color>
            <!-- Accent Color -->
            <Color x:Key="SystemAccentColor">#CB607C</Color>
            <Color x:Key="SystemAccentColorDark1">#CB607C</Color>
            <Color x:Key="SystemAccentColorDark2">#CB607C</Color>
            <Color x:Key="SystemAccentColorDark3">#CB607C</Color>
            <Color x:Key="SystemAccentColorLight1">#CB607C</Color>
            <Color x:Key="SystemAccentColorLight2">#CB607C</Color>
            <Color x:Key="SystemAccentColorLight3">#CB607C</Color>
        </ResourceDictionary>
        <ResourceDictionary x:Key="Light">
            <!-- Background Resources -->
            <SolidColorBrush x:Key="RootBackgroundBrush" Color="#AAF17293" />
            <Color x:Key="SolidBackgroundFillColorBase">#97475C</Color>
            <Color x:Key="SolidBackgroundFillColorSecondary">#F17293</Color>
            <Color x:Key="SolidBackgroundFillColorTertiary">#E87490</Color>
            <Color x:Key="SolidBackgroundFillColorQuarternary">#CB607C</Color>
            <SolidColorBrush x:Key="SolidBackgroundFillColorBaseBrush" Color="{ThemeResource SolidBackgroundFillColorBase}" />
            <SolidColorBrush x:Key="SolidBackgroundFillColorSecondaryBrush" Color="{ThemeResource SolidBackgroundFillColorSecondary}" />
            <SolidColorBrush x:Key="SolidBackgroundFillColorTertiaryBrush" Color="{ThemeResource SolidBackgroundFillColorTertiary}" />
            <SolidColorBrush x:Key="SolidBackgroundFillColorQuarternaryBrush" Color="{ThemeResource SolidBackgroundFillColorQuarternary}" />
            <!-- Acrylic Resources -->
            <Color x:Key="SolidBackgroundAcrylic">#CB607C</Color>
            <!-- Accent Color -->
            <Color x:Key="SystemAccentColor">#97475C</Color>
            <Color x:Key="SystemAccentColorDark1">#97475C</Color>
            <Color x:Key="SystemAccentColorDark2">#97475C</Color>
            <Color x:Key="SystemAccentColorDark3">#97475C</Color>
            <Color x:Key="SystemAccentColorLight1">#97475C</Color>
            <Color x:Key="SystemAccentColorLight2">#97475C</Color>
            <Color x:Key="SystemAccentColorLight3">#97475C</Color>
        </ResourceDictionary>
    </ResourceDictionary.ThemeDictionaries>
</ResourceDictionary>
```

</details> 
