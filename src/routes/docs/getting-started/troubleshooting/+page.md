---
title: Troubleshooting
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

Every way to install Files is on the [download page](/download). If something goes wrong while installing or updating, the solutions below fix most problems.

<InfoBar title="Note" severity="information">
	The Windows Update and Delivery Optimization services will need to be enabled in order for the installation to work. Modified versions of Windows or running "debloat" scripts/programs are often missing these components and aren't supported.
</InfoBar>

## Cannot open app package

If you see a "Cannot open app package" message when you try to open Files, it means that your device needs an update for the AppInstaller component. You can update it from the Microsoft Store app on your device, or by downloading and running this [installer](https://learn.microsoft.com/en-us/windows/msix/app-installer/install-update-app-installer).

## Updates

Files will automatically check for updates when the app is opened and periodically while it is running. An indicator will be displayed on the toolbar if an update is available. You can also manually check for updates from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or by downloading the classic installer again from the [download page](/download).

<InfoBar title="Note" severity="information">
	Installing an update will automatically restart Files so make sure to save your work before starting an update.
</InfoBar>

If you encounter any problems or errors while updating Files, you can try the following solutions:

1. Make sure you have a stable internet connection and enough disk space for the update.
2. Restart your computer and try to update Files again.

## Unofficial and modified versions of Windows

This includes but is not limited to AtlasOS, ReviOS, disabling Windows update, removing the Microsoft store. Files is not officially supported on devices with these modifications. If you still want to try, turn the required services back on:

1. Type Services in Windows start menu
2. Open the `Windows update` and `Delivery optimization` services properties (Double click)
3. Set startup type to manual and click OK
4. Right click the services
5. Click Start
6. Try installing again.
