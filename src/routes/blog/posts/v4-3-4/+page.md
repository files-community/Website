---
title: Announcing Files v4.3.4
description: Announcing Files Preview v4.3.4 for users of the preview version.
thumbnail: /blog-resources/v4-3-4/Hero.webp
date: 11/23/2026
author: files-community
---

Today we are releasing **Files Preview v4.3.4** for users of the preview version.

An update icon should be displayed in the top right corner of the app for existing users, while new users can get started from our [download](/download/) page. Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or by sponsoring us on [GitHub](/sponsor). Your support is greatly appreciated but entirely optional.

## Contents

- [What's new in Files v4.3.4](#whats-new-in-files-v434)
  - [More columns in the Details layout](#more-columns-in-the-details-layout)
  - [Reordering columns](#reordering-columns)
  - [Sorting and grouping by any column](#sorting-and-grouping-by-any-column)
  - [Options suited to each location](#options-suited-to-each-location)
  - [Peeking with QuickLook](#peeking-with-quicklook)
  - [Updated sidebar design](#updated-sidebar-design)
  - [Updated layout icons](#updated-layout-icons)
  - [Preview pane improvements](#preview-pane-improvements)
- [Fixes](#fixes)

## What's new in Files v4.3.4

### More columns in the Details layout

The Details layout can now show any file property that Windows provides as a column, in addition to the columns that were already available. For example, a music folder can show the artist, album and length of each track, and a photo folder can show the date taken and dimensions of each picture. Columns are added from the new **Choose columns** window, which lists the available columns by category and includes a search box. The columns shown by default can be set in the Layout settings. (Thanks @yair100!)

<figure>
    <img src="/blog-resources/v4-3-4/ChooseColumns.webp" alt="Choose columns window" />
</figure>

### Reordering columns

Columns in the Details layout can now be arranged in any order by dragging a column header to a new position. The order can also be changed from the **Choose columns** window. (Thanks @yair100!)

### Sorting and grouping by any column

Items can now be sorted and grouped by any column, including the Windows property columns. For example, music can be grouped by album and sorted by track number. Date properties can be grouped by day, month or year, and items without a value are placed in their own group. The sort and group menus list the most relevant options, and the remaining ones are available from a window that opens from **More sort options** and **More groups**. (Thanks @yair100!)

### Options suited to each location

The sort and group menus now offer options based on the location being viewed. A folder that mostly contains pictures offers options such as date taken, dimensions and rating, while a music folder offers options such as artist, album and genre. Video folders, libraries and the Recycle Bin have their own options as well. (Thanks @yair100!)

<figure>
    <img src="/blog-resources/v4-3-4/SortOptions.webp" alt="Sort options in a pictures folder" />
</figure>

### Peeking with QuickLook

Holding the preview hotkey now shows the QuickLook preview only for as long as the key is held, and closes it when the key is released. Pressing the key briefly opens the preview as before. (Thanks @yair100!)

### Updated sidebar design

The sidebar has an updated design and is now displayed as a card with rounded corners, matching the rest of the app. (Thanks @yair100 and @mdtauk!)

### Updated layout icons

The icons for the layout options have been updated. (Thanks @mdtauk!)

### Preview pane improvements

Previews in the preview pane now load more quickly and reliably. A loading indicator is displayed while a preview is being prepared, and a message is displayed if a preview isn't available. Rich text documents fall back to the built-in preview if the preview provided by another app fails to load. (Thanks @hez2010!)

## Fixes

- Fixed an issue where pasting text in the Omnibar would sometimes close it.
- Fixed an issue where the Omnibar would sometimes get focus when resizing the window.
- Fixed an issue where the column header in the Details layout would sometimes not stay in place when scrolling.
- Added a tooltip to the clear button in the Omnibar.
- Fixed an issue where the custom font wasn't applied to the Omnibar text and the Status Center.
- Fixed an issue where columns in the Columns View weren't sized to fit item names.
- Fixed crashes that could occur on Windows 10.

## Conclusion

As always, we appreciate your feedback and suggestions on how to improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](/sponsor)
