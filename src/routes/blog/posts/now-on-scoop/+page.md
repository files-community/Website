---
title: Introducing Scoop Integration for Files
description: I'm excited to announce that Files is now available for installation via Scoop! This new integration makes it easier than ever to sideload Files and enjoy its features without any hassle.
thumbnail: /blog-resources/now-on-scoop/Hero.png
date: 11/10/2024
author: Lamparter
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

Hello Files Community!

I am thrilled to share some exciting news with you. As part of the ongoing efforts to make Files more accessible and convenient, the team has integrated Scoop as a new installation method.
This means you can now install Files using Scoop, a command-line installer for Windows, known well for its simplicity and efficiency. 🚀

### Why Scoop?

Scoop is a popular package manager for Windows that allows you to install and manage software directly from the command line. It simplifies the installation process and ensures that you always have the latest version of your favourite apps.
By adding Scoop to the app's list of installation methods, the aim is to provide you with more flexibility and convenience.

### How to Install Files via Scoop

Installing Files via Scoop is straightforward. Just follow these simple steps:

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

And that's it! Files is installed and ready to use. 🎉

### Other Installation Methods

In addition to Scoop, you can still install Files using the classic installer or via Chocolatey:

- **Classic Installer**:

  1. Open PowerShell as administrator.
  2. Run this command `Add-AppxPackage -AppInstallerFile https://cdn.files.community/files/stable/Files.Package.appinstaller`.

<InfoBar severity="attention">
  You can also <a href="/appinstallers/Files.stable.appinstaller">download</a> the classic installer and install it via the built-in App Installer.
</InfoBar>

<br />

- **Chocolatey**:

  ```powershell
  choco install files
  ```

Thank you for being a part of the app's journey to success. I hope you enjoy the new Scoop integration and find it useful. Happy file managing! 🙂

---

### Support Files

If you enjoy using Files via Scoop, I implore that you consider purchasing the app on the Microsoft Store. Your support aids the development of the app directly and allows the continuation of improvement and development of new features for Files.
Even if you don't have access to the Store, you can show your gratitude by [sponsoring the lead developer](https://github.com/sponsors/yaira2).
