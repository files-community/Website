---
title: Frequently Asked Questions
---

## How to Locate the Log File

If Files launches successfully, the easiest way to access its log file is directly from **Settings → About → Open log location**. If you're unable to open the UI, you can locate the log manually using File Explorer. The path varies depending on which version of Files is installed:

### Files Stable (Microsoft Store)

```text
%LocalAppData%\\Packages\\49306atecsolution.FilesUWP_et10x9a9vyk8t\\LocalState
```

### Files Stable (Sideload)

```text
%LocalAppData%\\Packages\\Files_1y0xx7n9077q4\\LocalState
```

### Files Preview (Microsoft Store)

```text
%LocalAppData%\\Packages\\49306atecsolution.FilesPreview_et10x9a9vyk8t\\LocalState
```

### Files Preview (Sideload)

```text
%LocalAppData%\\Packages\\FilesPreview_1y0xx7n9077q4\\LocalState
```

## How to Improve Performance

The default settings are designed to deliver the best performance across different environments. We've identified several areas with potential for further optimization and are actively working on improvements behind the scenes.

## How to Reduce Memory Usage

Resource consumption naturally increases when opening new tabs or navigating to different locations. However, we're aware of several memory leaks that can cause usage to accumulate over extended sessions.

To mitigate this, consider disabling the option to keep Files in the background from **Settings → Advanced → Leave app running in the background when the window is closed**. Note that turning this off may result in slower launch times for Files. We're investigating these leaks and looking for a long-term solution.

## How to open Files from command line
Use `files-<branch>.exe <folder path (optional)>` replacing `<branch>` with stable, preview or dev depending on what version you have installed.
