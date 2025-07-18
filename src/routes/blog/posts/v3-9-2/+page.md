---
title: Announcing Files Preview v3.9.2
description: Announcing Files Preview v3.9.2 for users of the preview version.
thumbnail: /blog-resources/preview/Hero.png
date: 3/3/2025
author: files-community
---

Today we are releasing **Files Preview v3.9.2** for users of the preview version. New users can get started from our [download page](/download/). Additionally, you can help support the project by purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) or sponsoring us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.

## Changes

### Code Quality

- Replaced the Visual Studio .sln file with the new .slnx format.
- Updated to .NET 9
- Updated to WASDK 1.6
- Updated to CommunityToolkit.WinUI 8.2
- Updated to CsWinRT 2.2

### Added an option to change the default IDE

We've added a new option to change the default IDE. Previously, this feature was hardcoded to Visual Studio Code, but now you can set your preferred IDE from Developer Tools in settings.

<figure>
    <img src="/blog-resources/v4-preview/IDESettings.png" alt="Developer Settings" />
    <figcaption>Developer Settings</figcaption>
</figure>

### New localizations added

We've expanded our language support to now include Armenian. Our localizations are maintained by our dedicated community members. If you'd like to get involved, we invite you to join us on Crowdin: [https://crowdin.com/project/files-app](https://crowdin.com/project/files-app).

## Fixes

### Updates

- Fixed an issue where an error dialog would sometimes appear after updating Files.
- Fixed an issue where the WebView process for the "What's New" dialog would remain open in the background.

### Sidebar

- Fixed an issue where installing more than one instance of Files would unpin Recycle Bin from the sidebar.

### Home Page

- Fixed an issue where the Home Page didn't properly refresh.

### Properties Window

- Fixed an issue where text in the permissions page would wrap incorrectly.

### Run with PowerShell

- Fixed an issue where the "Run with PowerShell" action wouldn't pass the working directory.

### Status Center

- Fixed an issue where the Status Center didn't display the size for some file operations.

## Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2/)
