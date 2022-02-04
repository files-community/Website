---
title: How to set a custom background in Files
description: There are a number of ways for users to personalize Files, today we're going to look at setting a custom background
thumbnail: /blog-resources/setting-custom-background/HeroImage.jpg
date: 2022-2-3
author: yaichenbaum
---

There are a number of ways for users to personalize Files, today we're going to look at setting a custom background.
1. The first step is to navigate to the themes folder. The easiest way to locate this folder is by opening the settings dialog in Files, clicking the information icon by the custom themes section and clicking on the "Open themes folder" button. 
2.  Create a new file with the `xaml` extenion and place this template in the file.

```xml
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:BelowWindows10version1809="http://schemas.microsoft.com/winfx/2006/xaml/presentation?IsApiContractNotPresent(Windows.Foundation.UniversalApiContract, 7)"
    xmlns:Windows10version1809="http://schemas.microsoft.com/winfx/2006/xaml/presentation?IsApiContractPresent(Windows.Foundation.UniversalApiContract, 7)">
    <ResourceDictionary.ThemeDictionaries>
        <ResourceDictionary x:Key="Default">
            <ImageBrush x:Key="RootBackgroundBrush" Stretch="UniformToFill" Opacity="1" ImageSource="" />
        </ResourceDictionary>
        <ResourceDictionary x:Key="Light">
            <ImageBrush x:Key="RootBackgroundBrush" Stretch="UniformToFill" Opacity="1" ImageSource="" />
        </ResourceDictionary>
    </ResourceDictionary.ThemeDictionaries>
</ResourceDictionary>
```

3. Copy the background image or gif to the themes directory and set the `ImageSource` value to the files path. The `Stretch` value can be changed to `Uniform` and `None`.
