---
title: Introducing Files, version 2.4.40
description: Manage your files with tags
thumbnail: /blog-resources/files2-4-40/HeroImage.webp
date: 2/20/2023
author: files-community
---

Files is a modern file manager app for Windows that offers a sleek and intuitive user interface with powerful features. In this post, we’ll take a look at some of the new features and improvements that we’ve added in version 2.4.40.

### Tagging System 🏷️

One of the most requested features from our users was the ability to add tags to files and folders. Tags are labels that help you categorize and find your files faster. You can use tags to group files by project, priority, status or any other criteria that suits your needs.

In Files v2.4.40, we added a new settings page for editing tags allowing you to create, rename or delete tags as well as change their colors.

To add or remove tags from files or folders, simply right click them and use the "edit tags" menu.

<figure>
    <img src="/blog-resources/files2-4-40/TagsMenu.webp" alt="Tags menu." />
</figure>

You can also remove tags from files or folders by clicking on the remove tag icon in the details layout.

To view all files with a specific tag, you can use the search box in Files and type `tag:` followed by the tag name. For example, `tag:important` will show all files tagged as important.

There is also an optional widget for the home page that will list your tagged files and folders.

We hope you’ll find this feature useful and we’d love to hear your feedback on how we can improve it further.

<figure>
    <img src="/blog-resources/files2-4-40/EditTags.webp" alt="Edit tags." />
</figure>

### Right click Context Menu 📎

We’ve also made some UI improvements to the context menu starting with the size. In previous versions of Files, the menu height would change when the shell extensions finished loading. This behavior was confusing and made the menu frustrating to use.

In v2.4.40, we added an indicator that displays when shell extensions are still loading, this helps the user know when shell extensions are ready to use and it fixes the issue with the menu height.

Also new in v2.4.40, we added support for shell extensions on the home page widgets.

We also added some context menu settings to the preferences page allowing you to hide options such as “Open in new tab” and “Open in new window” if you don’t use them often.

<figure>
    <img src="/blog-resources/files2-4-40/EditContextMenu.webp" alt="Edit context menu." />
</figure>

### Other Fixes and Enhancements 🛠️

Besides these major features and UI improvements, we’ve also fixed some bugs and added some enhancements:

- Added keyboard shortcut (Ctrl+Shift+`) to open Windows Terminal as administrator
- Fixed issue where items would sometimes be selected when they shouldn’t have been
- Fixed issue where shell extensions wouldn’t show when right clicking in archives
- Fixed issue where tab icons weren’t showing
- Fixed an issue with resizing columns in the details layout

### Conclusion 🙌

That’s all for this update! We hope you enjoy using Files v2.4.40 as much as we enjoyed making it.

As always, we appreciate your feedback and suggestions on how we can make Files better for you. You can reach us through our GitHub issues page: https://github.com/files-community/Files/issues.

Thank you for using Files! 😊

---

Download Files from our [download page](/download/).
