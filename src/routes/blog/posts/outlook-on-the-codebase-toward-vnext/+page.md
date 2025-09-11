---
title: Outlook on the Files Codebase Toward vNext
description: An inside look at how we are preparing its codebase for vNext—addressing a bunch of technical debt, redesigning architecture, and laying the foundation for future development and community growth.
thumbnail: /blog-resources/v4/Hero.webp
date: 2025-09-05
author: "0x5BFA"
---

# Introduction

Files has grown into one of the most popular open-source file managers for Windows. With each release, we’ve added features, polished the user experience, and heard feedback from both users and contributors. However, as the project has matured, the challenges of the codebase maintenance also have piled up.

While we have discussed these challenges internally and created some proofs of concept in the v4 update, the next major update (vNext) is a prime opportunity to reshape the project’s foundation. This will allow Files to scale with future requirements, improve stability, and enable faster, more sustainable development.

Many users have wondered why the most requested features like Tree View are not yet implemented, whether the app will ever feel faster, and how we plan to achieve our long-term goals. We'd like to dig deeper in this blog and help readers understand what issues we have and how we can resolve them.

# Root causes

Over time, numerous large and small issues have accumulated in the Files codebase. The most significant are outlined below.

### Having been a UWP application

Files began as a UWP application before migrating to a Win32 desktop app with the Windows App SDK. Because UWP apps in AppContainer come with significant limitations, we introduced [a full-trust process](https://github.com/files-community/Files/tree/bf912962458d8cd0d3861cc98f1bdfb6212d2963/src/Files.FullTrust) to handle critical features, exposing them through a brokered IPC powered by [App Service](https://learn.microsoft.com/windows/uwp/launch-resume/app-services) (in hindsight, this was not the best choice at that time since a COM server would have offered better performance and richer IPC experience). In this IPC model, the data that could be passed between the main process and a full-trust process was `ValueSet : IDictionary<string, object>`—essentially a dictionary of keys and values—which did not support complex object exchange unless you serialize and deserialize as a JSON, for example. This limitation constrained the development experience and restricted the extensibility of the app.

Though we have already removed roughly a half of the leftovers, there're still some in the core functionalities; the paramount example of this is [the storage operations helper powered by the Win32 Shell APIs](https://github.com/files-community/Files/blob/a3f7fcdbe2131ff846cd55b04c594247fc18e1a5/src/Files.App/Utils/Storage/Operations/ShellFilesystemOperations.cs).

### Being a community project

The project began as a personal endeavor and later evolved into a community project, with so many contributors joining along the way. However, since the lead team does not receive any external support (expect for donations) and only participates in their free time at their own pace, there has never been an opportunity to plan, discuss, and carry out a full-scale refactoring and we simply have not had the resources to tackle such large-scale issues.

# Codebase Issues and Solutions

We don't have specific issue trackers in GitHub for each issue but we are aware of these codebase issues below.

### Violation of the SRP from SOLID and non-abstraction culture

> A class or module should have one, and only one, reason to change.

In object-oriented programming, application developers are encouraged to design the codebase with SOLID principles. However, in Files, the core browsing logic violates the Single Responsibility Principle, SRP. One of the central classes exceeds 2,800 lines and mixes unrelated responsibilities:

- [ShellViewModel.cs](https://github.com/files-community/Files/blob/ed76489c48322d4f330ca33c1150a9b347eee445/src/Files.App/ViewModels/ShellViewModel.cs)

In addition, the logic for the Home view is hardcoded rather than abstracted along with the folder browsing logic, meaning that although Home has its own separate logic, it still has to reach into the core browser logic to update relevant controls (e.g., SidebarView, Omnibar, Toolbar):

- [HomePage.xaml.cs](https://github.com/files-community/Files/blob/ed76489c48322d4f330ca33c1150a9b347eee445/src/Files.App/Views/HomePage.xaml.cs)

This situation is essentially the consequence of Files being a community project, where does not have enough resources to perform large-scale refactoring. The next section outlines our solutions.

### Frame-based UI architecture

In WinUI, the standard navigation pattern is to use `Frame` and `Page` and Files also currently uses these controls to switch folder contents. However, this navigation model has proven error-prone and unsuitable for passing data between a parent control and its pages, since navigation requires serializing and deserializing data (`Frame.Navigate(Type sourcePageType, object parameter)`).

As part of our refactoring, we plan to replace `Frame`-based navigation with `UserControl` views hosted in a `ContentPresenter`.

A conceptual outline of the refactored UI structure:

- RootView (formally MainPage)
  - TabView (formally TabBar)
  - NavigationToolbar
  - SidebarView
    - SidebarView.Content
      - Toolbar
      - MainContent (`ContentPresenter`)
        - MainContent.Content
          - ... (FolderBrowser, SettingsView, or WebBrowser)
      - TerminalView
      - InfoPane
      - ShelfPane

Within the folder browser:

- FolderBrowser
  - HomeView
  - DetailsView
  - ListView
  - GridView
  - CardView
  - ColumnsView
  - etc.

This architecture allows us to use Dependency Properties and XAML bindings to propagate state from parent controls without serialization.

### Reliance on old and slow APIs

Almost all core functionality currently relies on the brokered Win32 storage APIs (e.g., `CreateFileFromApp`, `DeleteFileFromApp`) and partially on the WinRT storage APIs (e.g., `GetFileFromPathAsync`, `StorageFile`). These APIs are either slower or less feature-rich than the Shell storage APIs (e.g., `IShellItem`, `IFileOperation`) and therefore do not fully support the shell-based storage namespace that Explorer provides. This limitation stems from UWP, which restricted access to these APIs and prevented us from leveraging the full capabilities available to Win32 desktop applications.

We are gradually implementing wrappers and helpers for the Shell storage API using an RAII model and introducing them in a couple of areas of the app, such as the root item dropdown in the Omnibar and Quick Access in Home (you should be able to feel the fast loading). Since we are carefully redesigning the backend architecture, progress is slow but steady.

Here's the issue tracker:
https://github.com/files-community/Files/issues/15000

### Native AoT incompatibility

When Files was a UWP application, .NET Native generated native code at compile time, unlike JIT compilers, and supported CLR native interop marshaling (e.g., P/Invoke, COM interop) because it generated IL stubs at compilation and linked them directly to the assembly. After migrating to a Win32 desktop application with the Windows App SDK, we switched to JIT compilation, which generates marshaling stubs and compiles to native code at runtime. This approach was significantly slower, especially at startup, and also increased the deployment binary size compared to .NET Native.

With .NET 7, CsWinRT 2.0, and Windows App SDK 1.2, we can now leverage Native AoT compilation and IL Trimming to improve startup performance and reduce binary size. However, since parts of the app still rely on runtime marshaling and reflection, which are incompatible with IL Trimming, attempting to run the app built with Native AoT would immediately crash. While we have already replaced roughly 80% of the code with native interop that avoids runtime marshaling, several dozens of it still remain as-are.

Here's the issue tracker:
https://github.com/files-community/Files/issues/15000

### WinUI being unstable

WinUI 3, as part of the Windows App SDK, has historically been prone to exceptions (e.g., TabView crashes). While Microsoft has mitigated many of these issues and we have maintained more than 99% crash-free sessions since the v3 release, occasional crashes caused by WinUI controls still occur.

To improve stability and protect user's personal data, we plan to introduce an out-of-process WinRT server to handle critical and long-running operations such as file operations and tasks that require long-awaited async execution.

# Blocked Requests

These issues below are long requested but blocked by the aforementioned reasons unfortunately.

- [Feature: Add TreeView](https://github.com/files-community/Files/issues/1928)
- [Feature: Add support for SFTP](https://github.com/files-community/Files/issues/2407)
- [Feature: Use the registered copy handler for copy/move operations](https://github.com/files-community/Files/issues/7518)
- [Feature: Implement UI for using Files as open file dialog](https://github.com/files-community/Files/issues/6314)
- [Feature: Ability to reorder columns in the details layout by drag/drop](https://github.com/files-community/Files/issues/8385)
- [Feature: Add support for WebDAV network drives](https://github.com/files-community/Files/issues/3917)

# Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us on [Discord](https://discord.gg/files) and on [GitHub](https://github.com/files-community/Files/).

Thank you for using Files! 😊

---

Download Files from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2/)
