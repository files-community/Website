---
title: Announcing Files Preview v3.8.5
description: Announcing Files Preview v3.8.5 for users of the preview version.
thumbnail: /blog-resources/v3-8-5/Hero.png
date: 12/19/2024
author: files-community
---

Today we are releasing **Files Preview v3.8.5** for users of the [preview](/download/) version.

## Changes

### Tabs

- Added an option to always switch to newly created tabs. This option can be enabled from the general page in settings.

<figure>
    <img src="/blog-resources/v3-8-5/AlwaysSwitchTabs.png" alt="Settings dialog" />
</figure>

### Home Page

- Removed the empty toolbar area from the Home Page for a cleaner look.

### Archives

- Updated 7zip dependencies.

### Cloud drives

- Removed unsupported Amazon Drive from the list of [cloud providers](/docs/features/cloud-drives/).

### Launch protocols

- Added individual launch protocols for each branch of Files.

|Branch|Alias|URI scheme|
|---|---|---|
|Dev|files-dev.exe|files-dev:|
|Preview|files-preview.exe|files-preview:|
|Stable|files-stable.exe|files-stable:|

## Fixes

### Startup

- Fixed a crash that would occur when starting Files from WSL directories.
- Resolved startup freeze caused by a heavily populated Recycle Bin.
- Fixed an issue where the previous sessions tabs were briefly displayed when the startup setting was set to 'open new tab'.

### Tags

- Fixed an issue where tags would sometimes display with the wrong color.

### Columns View

- Fixed a crash that would occur when opening the context menu in the Columns View.

### Actions

- Fixed a crash that would occur when using the 'Storage Sense' [action](/docs/customize-settings/actions/).

### Title Bar

- Fixed an issue where the title bar drag region was sometimes missing.

## Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files Preview from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2/)