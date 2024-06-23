---
title: Announcing Files v3.5
description: Enjoy an updated design, network drive widget, enhanced dual-pane functionality, and improvements to crash analytics.
thumbnail: /blog-resources/v3-5/Hero.png
date: 6/24/2024
author: files-community
---

We're excited to announce that starting today, Files v3.5 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our [download page](/download/). You can also purchase Files on the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or sponsor us on [GitHub](https://github.com/sponsors/yaira2) to help support the project.

**TL;DR:** The latest update, Files v3.5, introduces a refreshed design, a new widget for network drives, improved multitasking with dual-pane enhancements, and better crash reports to help us improve stability, among others. Continue reading to learn more about these enhancements.

## What's new in v3.5

### Updated the design with rounded corners

We’ve enhanced Files aesthetics by applying rounded corners to additional UI surfaces, including the toolbar, content area, and preview pane. This refinement improves the overall consistency and visual flow throughout the app.

<figure>
    <img src="/blog-resources/v3-5/UpdatedDesign.png" alt="Updated design with rounded corners" />
</figure>

Additionally, Dual Pane mode now features a more pronounced shadow on the active pane and expanded spacing between panes. These enhancements ensure that the active pane is more visually prominent.

<figure>
    <img src="/blog-resources/v3-5/UpdatedDualPaneDesign.png" alt="Updated design for Dual Pane" />
</figure>


### View dimensions when hovering over images

When you hover over images, a tooltip will now conveniently show the dimensions. This enhancement greatly improves user experience by providing quick and easy access to size information.

<figure>
    <img src="/blog-resources/v3-5/ImageSizeTooltip.png" alt="Images tooltip" />
</figure>


### Open batch files in Notepad directly from the toolbar

Upon selecting a batch (.bat) file, the toolbar will now present an Edit in Notepad option, streamlining the process of modifying your batch files directly without the need to dig through context menus.

<figure>
    <img src="/blog-resources/v3-5/EditInNotepad.png" alt="Edit in notepad toolbar button" />
</figure>


### Explore network locations on the Home Page

We added a "Network Locations" widget on the home page. This feature is designed to help you navigate and organize network locations with greater efficiency.

<figure>
    <img src="/blog-resources/v3-5/NetworkLocations.png" alt="Home page widget for network locations" />
</figure>


### Added support for closing the left pane in Dual Pane mode

We’ve added the ability to close the left pane in Dual Pane mode, overcoming previous technical limitations that only allowed closing the right pane. This improvements provides a more versatile and user-friendly experience.


### OneDrive sync status indicator

Experience enhanced clarity when you hover over a file in OneDrive locations. The sync icon will now display a tooltip detailing the file’s current sync status, offering a more direct and informative snapshot of your data synchronization.


### View duration for selected video files

When selecting multiple video files, the Details Pane will now display the total duration.


### New localizations added

We’ve expanded our language support to now include Belarusian.  Our localizations are largely maintained by our dedicated community members. If you'd like to get involved, we invite you to join us on Crowdin https://crowdin.com/project/files-app.


### Improvements to crash reporting and metrics 

While enhancements in performance and stability typically occur behind the scenes, we often get a lot of questions about our work in this area and we wanted to share some highlights.

- We've adopted Sentry for more robust crash reporting (shoutout to Sentry for their support of open-source projects), and we aim to extend its use to monitor performance metrics, ensuring Files gets faster with each update. 
- Our main challenge with startup speed has been the absence of Native AOT in WinAppSdk. Fortunately, Microsoft is working to address this, and we hope to integrate these advancements later in the year.
- We recently started a new effort to eliminate unnecessary dependencies and streamline app resources, effectively shrinking the app’s footprint on your device.


## Changes and Improvements

- Added an action to switch focus between panes
- Added an "Edit in notepad" option to the right click context menu
- Added a setting to configure the "Open in ide" button on the status bar
- Added support for "Thin acrylic" system backdrop
- Added support for running AHK files as admin
- Added support for hiding the toolbar
- Opening the log location will now close the Settings Dialog when Files is the default file manager
- Fixed crash that would occur when two paths were entered from the command line
- Fixed crash that would occur when ungrouping from zoomed out view
- Fixed an issue where a resize cursor was incorrectly shown at titlebar edges when Files was maximized
- Fixed an issue where empty folders could not be compressed into an archive
- Fixed an issue where it didn't work to switch between panes using a touch screen
- Fixed an issue where text on the Actions page wasn't responsive on smaller screens
- Fixed an issue where the focus was changed when quickly switching between tabs
- Fixed an issue with launching programs from the Address Bar
- Fixed an issue where search results would stop loading after switching between tabs
- Fixed an issue where the Toolbar didn't display properly in High Contrast
- Fixed an issue in Column View where the chevron didn't support High Contrast
- Fixed an issue where the Files logo was displayed incorrectly in High Contrast
- Fixed an issue where the app could crash when changing the theme
- Fixed an issue where entering certain commands into the Address Bar would change the format
- Fixed an issue with Nutstore cloud drive detection
- Fixed an issue where certain keys couldn't be mapped to Actions
- Fixed an issue where setting the desktop wallpaper didn't work on multiple monitors
- Fixed an issue where changing icons didn't work when admin access was required
- Fixed an issue with deleting items from zip files
- Fixed a potential crash when trying to locate the Libraries folder
- Fixed a potential crash when clicking items in the Quick Access widget
- Fixed a potential crash from occuring when deleting items


### Conclusion

As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/) | Sponsor us on [GitHub](https://github.com/sponsors/yaira2)
