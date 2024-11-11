---
title: Introducing Scoop installation for Files
description: Files is now available on Scoop! We are thrilled to announce that Files can now be easily installed via Scoop.
thumbnail: /blog-resources/now-on-scoop/Hero.png
date: 11/10/2024
author: Lamparter
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

Hello Files Community!

I am thrilled to share some exciting news with you. As part of the ongoing efforts to make Files more accessible, the team has introduced Scoop as an additional method to install Files on your device. 🚀

### Why Scoop?

Scoop is a popular package manager for Windows that allows you to install and manage software directly from the command line. It simplifies the installation process and ensures that you always have the latest version of your favourite apps.
By adding Scoop to the app's list of installation methods, the aim is to provide you with more flexibility and convenience.

## How to install Files via Scoop

<InfoBar severity="information">
  Please note that while we accommodate Scoop due to popular request, it's not officially endorsed by our team. We advise users to research Scoop to confirm it meets your individual standards and requirements.
</InfoBar>

Installing Files via Scoop is straightforward:

1. **Open PowerShell**: Launch PowerShell with administrative privileges.
2. **Install Scoop**: If you haven't already installed Scoop, you can do so by running the following command:

   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
   ```

3. **Install Files**: Once Scoop is installed, you can install Files by running:

   ```powershell
   scoop install nonportable/files-np
   ```

And that's it! Files should be installed and ready to use. 🎉

We hope you find the option to install Files via Scoop useful. Happy file managing! 🙂

---

## Support Files

If you enjoy using Files, please consider purchasing Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or supporting us on [GitHub](https://github.com/sponsors/yaira2). Your support is greatly appreciated but entirely optional.
