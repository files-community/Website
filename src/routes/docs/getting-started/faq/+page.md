---
title: Frequently Asked Questions
order: 3
---

## How to Improve Performance

The default settings are designed to deliver the best performance across different environments. We've identified several areas with potential for further optimization and are actively working on improvements behind the scenes.

## How to Reduce Memory Usage

Resource consumption naturally increases when opening new tabs or navigating to different locations. Memory usage should drop again after letting Files sit idle for a little while.

## How to Open Files from Command Line

To open Files from command line, run the following command: `files-<branch>.exe`, replacing `<branch>` with the version of Files you have installed:

- `stable`: Production build
- `preview`: Beta/preview build
- `dev`: Development build

You can also use the path parameter to open a folder inside of Files, for example: `files-stable.exe "C:\Users\YourName\Documents"`.

## Is it possible to use other context menus (Nilesoft, File Explorer etc)

While it's technically possible for us to support the File Explorer context menu, it wouldn't provide the best experience. For example, menu options like changing the layout, copying, pasting, creating new files, viewing properties, and sorting are all linked to File Explorer and wouldn't work if invoked from Files. Additionally, there are many unique features in the Files context menu that you won't find in File Explorer. Support for third party context menus can be added provided the third party makes the necessary changes to integrate with Files. If there's a specific feature you're missing, please feel free to open a feature request, and we'll be happy to take a look!
