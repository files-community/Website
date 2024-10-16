---
title: Compiling the source code
---

### 1: Prerequisites

- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) with the following individual components:
  - Windows 11 SDK (10.0.22621.0)
  - .NET 8 SDK (version 8.0.303)
  - MSVC v143 - VS 2022 C++ x64/x86 or ARM64 build tools (latest)
  - C++ ATL for latest v143 build tools (x86 & x64 or ARM64)
  - Git for Windows
- [Windows App SDK 1.5](https://learn.microsoft.com/windows/apps/windows-app-sdk/downloads#current-releases)

### 2: Clone the Git repository

```ps
git clone https://github.com/files-community/Files
```

This will create a local copy of the repository.

### 3: Deploy the project in Visual Studio

To build the app in development mode, open the sln file in Visual Studio (Files.sln) and set the Files.Package project as the startup item by right-clicking on `Files.Package` in the solution explorer & hitting ‘Set as Startup item’.

In the architecture pane, select the correct architecture for your system as `Debug` which should look like this:

![VS Run config: Debug, x64, Files.Package, Local Machine](/docs-resources/vs-architecture-config.png)

You're good to go!
