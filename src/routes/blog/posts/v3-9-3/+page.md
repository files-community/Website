---
title: Announcing Files Preview v3.9.3
description: Announcing Files Preview v3.9.3 for users of the preview version.
thumbnail: /blog-resources/preview/Hero.png
date: 3/23/2025
author: files-community
---

Today we are releasing **Files Preview v3.9.3** for users of the preview version. New users can get started from our [download page](/download/). Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or sponsoring us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.

## Changes

### Drag & drop to clone git repositories

We've added a new feature that lets users drag and drop GitHub URLs directly into Files. Upon dropping a URL, a confirmation prompt is displayed asking if the user wants to clone the repository to their device. The cloning progress can be tracked in the Status Center. This feature is also available as a standalone action in the [Command Palette](/docs/features/command-palette/) and can also assigned a custom keyboard shortcut in [settings](/docs/customize-settings/actions).

<figure>
    <img src="/blog-resources/v4-preview/CloneRepoPrompt.png" alt="Clone repo confirmation" />
    <figcaption>Clone repo confirmation</figcaption>
</figure>

<figure>
    <img src="/blog-resources/v4-preview/CloneRepoStatus.png" alt="Clone status" />
    <figcaption>Clone status</figcaption>
</figure>

### Compare file hashes

Support for comparing hashes has been added to the Hashes Properties page. Users can now paste known hashes or use the "Compare File" button to quickly calculate and compare the hash of another file with the currently selected file.

<figure>
    <img src="/blog-resources/v4-preview/CompareHashes.png" alt="Hash comparison feature" />
    <figcaption>Hash comparison feature</figcaption>
</figure>

### Moved settings button to the left hand sidebar

We moved the settings button from the address bar to the left-hand sidebar. We recognize that this change may take some time for users to get used to, however this change is necessary to prepare for upcoming design updates.

### OneDrive storage details

OneDrive storage details are now available in the Properties window within Files. Please note, this feature is currently supported only on Windows 23H2.

### View status while installing fonts

We added an indicator to the Status Center that's displayed while installing fonts. We also updated the icon for the install font action on the toolbar.

<figure>
    <img src="/blog-resources/v4-preview/InstallFonts.png" alt="Font installation status" />
    <figcaption>Font installation status</figcaption>
</figure>

## Fixes

### Themes

- Fixed issue where the "What's new" dialog sometimes used the wrong theme.

### Icons

- Fixed issue where the icon for "developer tools" didn't display properly on Windows 10.

## Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2/)
