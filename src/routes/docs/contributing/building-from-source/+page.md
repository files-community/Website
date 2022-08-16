# Building Files from source

### 1: Prerequisites

- [Git](https://git-scm.com)
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) with the UWP Development Kit, including C++ UWP build tools.
- C++ ATL for UWP build tools

### 2: Clone the repository.

```ps
git clone https://github.com/files-community/Files
```

This will create a local copy of the repository.

### 3: Build the project

To build the app in development mode, open the sln file in Visual Studio (Files.sln) and set the Files.Package project as the startup item by right-clicking on `Files.Package` in the solution explorer & hitting ‘Set as Startup item’.

In the architecture pane, select the correct architecture for your system as `Debug` which should look like this:

![VS Run config: Debug, x64, Files.Package, Local Machine](/docs-resources/vs-architecture-config.png)

You're good to go!
