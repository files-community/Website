---
title: Introducing the next major release of Files - v2.3
description: version 2.3 is now availible to download as a free update.
thumbnail: /blog-resources/filesv2-3/HeroImage.jpg
date: 2022-7-5
author: yaichenbaum
---

Today we're excited to introduce the next major release of Files. Building on the sucsess of v2, we're confident that this update will enable you to be more productive and inspire you to do more. In addition to all the changes in v2.3, we also put a lot of work into improving the code base. This will enable us to iterate faster and in the long term, it will pave the way for performance improvments.

## Giving back to the community

We're pleased to announce that we relicened the Files repositroy under the MIT licence. This means that other projects can now take advantage of the innovation in Files even if they happen to be closed source.


## Default file manager

As many of you have noticed, we removed the option to set Files as the default file manager in order comply with the Microsoft Store Policy. We're hoping to bring this option back in the future but in the meantime, this option is still availbile in the sideload version (https://files.community/download/stable). Please note that this feature is experimental and can have unexpected side affects.

<figure class="margin-bottom">
    <img src="/blog-resources/filesv2-3/Settings-Dialog-Experimental.png" alt="A screenshot of the settings dialog in v2.3" />
    <figcaption>Experimental settings page</figcaption>
</figure>


## Drag and drop

Drag and drop is an integral part of the file manager expereince. We listend to your feedback and we put a lot of time into improving support for this feature in Files. Dragging items is not only more reliable but it's faster as well.

## Sidebar

- The issue where expanding sidebar sections would sometimes require two clicks has been resolved
- The issue where the sidebar state would sometimes get reset has been fixed

## Changes

Added a shortcut to open folders in Terminal by @puppetsw in #8268
Removed the minimize and maximize buttons from the Properties window when using AppWindow by @ahmed605 in #8245
Fixed duplicate drives added to the sidebar by @gave92 in #8325
Improve JumpString behavior by @gave92 in #8324
Fixed an issue where the toolbar height would sometimes change by @yaichenbaum in #8404
Show error banner if copy or move fails by @gave92 in #8322
Fixed crash that would occur when scrolling down in the properties window by @yaichenbaum in #8403
Added animated visuals by @yaichenbaum in #8402
Fix crash when deleting files by @gave92 in #8438
Added tags section to the sidebar by @gave92 in #8435
Fixed issue that causes a window to close when a tab is torn off by @manfromarce in #8433
Added context menu to hide sidebar sections by @oleklukasiewicz in #8317
Auto select primary button in empty recycle bin dialog by @mafra99 in #8442
Fix SearchBox height by @cinqmilleans in #8452
Improves MultiPanes by @cinqmilleans in #8321
Properly dispose event in FolderSizeProvider by @yaichenbaum in #8454
Fix wrong foreground text color in zoomed-out Group headers by @gave92 in #8457
Fixed tags section in the context menu by @oleklukasiewicz in #8460
Removed unused resources by @yaichenbaum in #8456
Removed set as default option from store version by @yaichenbaum in #8474
Moved settings services to Files.Backend by @d2dyno1 in #8479
Added required individual components of VS to readme by @konradsikorski in #8480
Toolbar buttons in recycle bin by @puppetsw in #8545
Select next item after deletion and reduce code complexity by @jiejasonliu in #8503
Updated appinstaller url to point to the new cdn by @yaichenbaum in #8558
Removed behavior of auto resizing columns by @yaichenbaum in #8589
Added ILogger interface by @cinqmilleans in #8594
chore: Remove, ungroup various enums by @lukeblevins in #8580
Fixed the close pane icon by @bebeyaco in #8513
Fix FilesystemTasks error code by @cinqmilleans in #8604
Bump Microsoft.Data.Sqlite.Core from 6.0.2 to 6.0.3 by @dependabot in #8608
Added pull to refresh gesture by @yaichenbaum in #8600
Update Id-ID by @shiazza in #8611
Bump CommunityToolkit.Mvvm from 8.0.0-preview1 to 8.0.0-preview2 by @dependabot in #8629
Bump Vanara.PInvoke.Mpr from 3.3.15 to 3.4.0 by @dependabot in #8665
Update Chinese language by @SudaCat in #8666
Added a debounce for image rotation command. by @devovercome in #8682
Show more file types in "New" context menu by @manfromarce in #8598
Fix broken ta translation by @onein528 in #8710
Use external launcher to set Files as default explorer by @gave92 in #8684
Improved behavior when entering restricted characters by @szabolcstarnai in #8204
Copy launcher to output directory by @gave92 in #8717
Fixed release pipeline by @yaichenbaum in #8718
Update id-ID by @shiazza in #8723
Notify when pinned items config changes by @jiejasonliu in #8712
Reduced sidebar items height to match default ListViewItem by @yaichenbaum in #8745
Implemented connected tab styles by @yaichenbaum in #8740
Compact spacing for the details layout by @yaichenbaum in #8751
Increased padding on Pathbar by @puppetsw in #8758
Added chevron to pathbar to match design spec by @yaichenbaum in #8764
Moved Linq extensions to Files.Shared by @cinqmilleans in #8761
Update Files.de-DE.xlf by @R3voA3 in #8773
Fix MainPage adaptive triggers by @gave92 in #8778
Fix crash when "show folder sizes" is enabled by @gave92 in #8716
Fix default & build in case of usernames with spaces by @gave92 in #8779
Updated themes to work with new tab design by @yaichenbaum in #8782
Fix new/rename dialog processing stale text by @jiejasonliu in #8783
Remove each x:uid by @cinqmilleans in #8792
Update pt-PT language by @esibruti in #8790
Auto select first item in user list for permissions by @yaichenbaum in #8794
Add support for creating google docs files from the "new" menu by @gave92 in #8784
Reset dual pane layout when double clicking the grid splitter by @puppetsw in #8801
Update Files.pt-BR.xlf by @marciozomb13 in #8804
Fix box drive by @gave92 in #8808
Codebase: Fixing UpdateService by @puppetsw in #8812
Added compact mode support to the sidebar by @yaichenbaum in #8820
Invalid favorites are no longer removed from the sidebar by @AaronKatzin in #8767
Moved Sidebar item context menu options from SidebarControl.xaml.cs into INavigationControlItem by @oleklukasiewicz in #8506
Fix crash when using "apply to all" menu item in conflicts dialog by @gave92 in #8836
Fixed an issue where the properties window used the wrong theme by @CarJem in #8837
Fix crash when favorites section is hidden by @gave92 in #8833
Statically link VC runtime by @gave92 in #8829
Fix crash when previewing XML files by @gave92 in #8828
Show which process is locking a file by @gave92 in #8809
Possibly fix app hung on start by @gave92 in #8847
Fix for pasting in search box by @puppetsw in #8811
feat(widgets): Reduce default padding by @lukeblevins in #8851
Fixed Disconnect Drive Icon by @esibruti in #8854
Fix Ctrl+L on homepage by @gave92 in #8861
Moved FileSystemDialog to Files.Backend by @d2dyno1 in #8857
Avoid throwing NRE when getting path suggestions on Home by @gave92 in #8871
Fixed conflicts dialog by @d2dyno1 in #8876
Add double click to go up gesture by @gave92 in #8878
Auto refresh file list in network shares by @gave92 in #8831
Bump CommunityToolkit.Mvvm from 8.0.0-preview2 to 8.0.0-preview3 by @dependabot in #8879
Improves Setting DateFormat by @cinqmilleans in #8875
Remember sidebar items state when sidebar is collapsed/extended by @gave92 in #8886
Clean IStorageItemWithPath by @cinqmilleans in #8889
Change preview pane play media toggle to 'ctrl + space' by @jiejasonliu in #8893
Bump MSTest.TestAdapter from 2.2.8 to 2.2.9 by @dependabot in #8895
Bump MSTest.TestFramework from 2.2.8 to 2.2.9 by @dependabot in #8894
Setting Show the thumbnails for media files by @cinqmilleans in #8888
MVVM: Changed namespace Files to Files.Uwp in Files.Uwp.csproj by @devovercome in #8898
Fix refresh in mapped network drives by @gave92 in #8897
Fixed an issue preventing drag and drop from working by @devovercome in #8891
Add archive name when extracting by @itsWindows11 in #8900
Bump Microsoft.Data.Sqlite.Core from 6.0.3 to 6.0.4 by @dependabot in #8901
Bump Microsoft.UI.Xaml from 2.8.0-prerelease.220118001 to 2.8.0-prerelease.220413001 by @dependabot in #8921
Fix crash when setting compact style on app start by @gave92 in #8923
Fix issue where clear all properties button wouldn't show any text by @winston-de in #8931
Improves storage (next) by @cinqmilleans in #8928
CleanUp of BaseStorageItem by @cinqmilleans in #8919
Use correct resource for "show item type column" menu item in Details view by @gave92 in #8927
Fr-fr update by @cinqmilleans in #8945
Disable Move operation on folders when using StorageFile APIs by @gave92 in #8960
Fix create folder with selection by @gave92 in #8929
Codebase: Rename NavigationToolbar to AddressToolbar by @puppetsw in #8903
Do not change file date modified when setting tag by @gave92 in #8967
Refactor FtpStorage by @cinqmilleans in #8958
Refactor Storage History by @cinqmilleans in #8959
Fixed an issue where the tab control had the wrong color by @yaichenbaum in #8971
"File in use" dialog improvements by @gave92 in #8925
Fixes an issue for which settings are not imported by @gave92 in #8970
[Refactor] Decouple *Manager classes from the Sidebar by @gave92 in #8952
Fix copy/move to zip file by @gave92 in #8930
Fixes for item context menu in search page by @gave92 in #8987
Fix spacing in status bar by @gave92 in #8999
Eureka? by @gave92 in #9004

## Feedback

Files thrives off community feedback because it helps shape the features we work on and makes the app better for
everyone. We invite you to submit your feedback through our GitHub repository.

– Yair

Download from
the [Microsoft Store]({'https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-3'})
|| See Files on [GitHub](https://github.com/files-community/Files)
