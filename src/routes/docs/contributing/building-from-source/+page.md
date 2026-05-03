---
title: Compiling the source code
---

### 1: Prerequisites

- [Visual Studio 2022 17.13 or later](https://visualstudio.microsoft.com/vs/) with the following individual components:
  - WinUI application development workload
  - Windows 11 SDK (10.0.26100.0)
  - .NET 10 SDK (version 10.0.102)
  - MSVC Build tools for x64/x86 or Arm64 (v145 or Latest if not shown)
  - C++ ATL for latest v145 build tools (x86 & x64 or ARM64)
  - Git for Windows
- [Windows App SDK 2.0.1](https://learn.microsoft.com/windows/apps/windows-app-sdk/downloads#current-releases)

### 2: Clone the Git repository

```ps
git clone https://github.com/files-community/Files
```

This will create a local copy of the repository.

### 3: Deploy the project in Visual Studio

To build the app in development mode, open the slnx file in Visual Studio (Files.slnx) and set the Files.App project as the startup item by right-clicking on `Files.App` in the solution explorer & hitting ‘Set as Startup item’.

In the architecture pane, select the correct architecture for your system as `Debug` which should look like this:

![VS Run config: Debug, x64, Files.App, Local Machine](/docs-resources/vs-architecture-config.webp)

You're good to go!
