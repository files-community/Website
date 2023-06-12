---
title: Announcing Files, version 2.5
description: Acrylic, git integration, preview pane & more
thumbnail: /blog-resources/files2-5/HeroImage.jpg
date: 6/13/2023
author: files-community
---

Today we're excited to announce the next major release of Files, version 2.5. If you already have Files, you'll get a notification in the app to update. Otherwise, you can download Files for free from our [download page](/download/).

**TL;DR:** This update adds back the option for Acrylic, a new Git integration, and improvements to the preview pane. Continue reading to learn more about these changes.


## What's new in v2.5

### Acrylic backdrop material

We heard the feedback loud and clear: users want the option to set the backdrop material to Acrylic. This feature was removed when we migrated from UWP to WinAppSdk but over the last few months these issues have been resolved and we're happy to announce that Acrylic is available again.

<figure>
    <img src="/blog-resources/files2-5/Acrylic.png" alt="Files with Acrylic backdrop." />
</figure>


### Swiping gestures for navigation

Swiping gestures allows users to navigate in Files with ease. Swipe from the left to go back, and swipe from the right to go forward. These gestures are compatible with both touch screens and touch pads.

<figure>
    <img src="/blog-resources/files2-5/SwipeGestures.gif" alt="Swiping gestures." />
</figure>


### Manage repositories natively with Git

We added a couple of Git features to Files that make it easier to work with Git repositories.

- The branch name is now displayed on the status bar
- Checkout remote branches, and switch between local branches from the branches flyout
- Pull commits from remote repositories using the 'Pull' button on the status bar
- Create new branches
- Track changes with the Git columns in the details layout (coming soon)
- We plan to add more Git features in future updates, so stay tuned!

<figure>
    <img src="/blog-resources/files2-5/GitFeatures.png" alt="Git features." />
</figure>

### SeerPro

SeerPro is a popular app for previewing files and documents with a single press of the space bar. We're excited to partner with SeerPro so users with SeerPro can now use this feature from Files. Learn more here http://1218.io/.


## Changes and Improvements

### [Preview and Details pane]

- The preview and detail panes are now separated into two. Users can switch between the two panes using the new pivot control. Additionally, the preview will now stretch to fill the available space in the pane.
- Improved the layout when the preview pane is in the horizontal orientation.


### [Display and edit metadata of multiple files]

Display and edit metadata of multiple files in the properties window. Previously it was only possible to edit metadata for a single file at a time.



## Bug Fixes

Besides these major features and UI improvements, we’ve also fixed some bugs:

- Fixed issue with network locations not appearing on the sidebar
- Fixed crash when previewing large html or svg files
- Fixed crash when previewing PDFs in RTL languages
- Fixed issue where the progress bar overlapped the title in ongoing operations
- Fixed issue where the icons and names of libraries were not displayed in the details layout
- Fixed issue with some date formats not reflecting the language settings
- Fixed issue where the delete confirmation sometimes took a while to open
- Fixed issue where pinned favorites were sometimes displayed twice
- Fixed issue where right clicking an empty space didn't clear the selected files
- Fixed issue where extracting files sometimes failed
- Fixed issue with the focus sometimes flickering in the column layout
- Fixed issue with pasting folders from Remote Desktop
- Fixed issue where the tab sometimes had the wrong icon
- Fixed contrast issues with the preview pane icon
- Fixed issue where the details pane would sometimes fail to load
- Fixed issue where renaming folders in the columns layout would open the folder
- Fixed issue with selecting multiple items in the column layout
- Fixed issue where add item was disabled in column layout
- Fixed position of ongoing operations flyout
- Fixed crash with the properties window


### Conclusion

We hope you enjoy using Files as much as we enjoyed making it.

As always, we appreciate your feedback and suggestions on how we can make Files better for you. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/).
