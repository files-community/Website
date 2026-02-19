---
title: Install
---

<script>
  import { Button, InfoBar } from "fluent-svelte";
</script>

## Install and get started with Files

<Button href="/download/" variant="accent">
	Install Files
</Button>

Files is a community-driven project that depends on your support to grow and improve. Please consider purchasing Files through the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or supporting us on [GitHub](https://github.com/sponsors/yair100) if you install the free version.

You can also use the [preview version](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite) alongside the stable release to get early access to new features and improvements.

<InfoBar title="Note" severity="information">
	The Windows Update and Delivery Optimization services will need to be enabled in order for the installation to work. Modified versions of Windows or running "debloat" scripts/programs are often missing these components and aren't supported.
</InfoBar>

### Microsoft Store

- [Stable branch](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite)
- [Preview branch](ms-windows-store://pdp/?ProductId=9NSQD9PKV3SS&cid=FilesWebsite)

### Classic Installer

- [Stable branch](/appinstallers/Files.stable.appinstaller)
- [Preview branch](/appinstallers/Files.preview.appinstaller)

### PowerShell

1. Open the default version of PowerShell as administrator (Powershell 7 will **not** work).
2. For the stable branch, use the following command
   ```
   Add-AppxPackage -AppInstallerFile https://cdn.files.community/files/stable/Files.Package.appinstaller
   ```
   For the preview branch, use the following command
   ```
   Add-AppxPackage -AppInstallerFile https://cdn.files.community/files/preview/Files.Package.appinstaller
   ```
3. Wait until the blue bar at the top of the window disappears.
4. Files should be installed and available in the Start Menu.

### Winget

```
winget install -e --id FilesCommunity.Files
```

### Chocolatey

The [Chocolatey](https://community.chocolatey.org/packages/files) package is maintained by a third party.

```
choco install files
```

### Scoop

The [Scoop](https://scoop.sh) package is maintained by a third party.

```
scoop install nonportable/files-np
```

### Offline install

<InfoBar title="Note" severity="information">
	The installation files will need to be installed in the same order as listed below.
</InfoBar>


<details>
<summary>x64 (AMD and Intel)</summary>

https://cdn.files.community/files/stable/Files.Package/Dependencies/x64/Microsoft.VCLibs.x64.14.00.Desktop.appx

https://cdn.files.community/files/stable/Files.Package/Dependencies/x64/Microsoft.VCLibs.x64.14.00.appx

https://cdn.files.community/files/stable/Files.Package/Dependencies/x64/Microsoft.WindowsAppRuntime.1.8.msix

https://cdn.files.community/files/stable/Files.Package/Files.Package_x64_arm64.msixbundle

</details>

<details>
<summary>ARM64</summary>

https://cdn.files.community/files/stable/Files.Package/Dependencies/ARM64/Microsoft.VCLibs.ARM64.14.00.Desktop.appx

https://cdn.files.community/files/stable/Files.Package/Dependencies/ARM64/Microsoft.VCLibs.ARM64.14.00.appx

https://cdn.files.community/files/stable/Files.Package/Dependencies/ARM64/Microsoft.WindowsAppRuntime.1.8.msix

https://cdn.files.community/files/stable/Files.Package/Files.Package_x64_arm64.msixbundle

</details>

## Keep Files up to date

Files will automatically check for updates whenever the app is opened and an indicator will be displayed on the toolbar if an update is available. You can also manually check for updates from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or by downloading the classic installer.

<InfoBar title="Note" severity="information">
	Installing an update will automatically restart Files so make sure to save your work before starting an update.
</InfoBar>


## Troubleshooting

### Cannot open app package

If you see a "Cannot open app package" message when you try to open Files, it means that your device needs an update for the AppInstaller component. You can update it from the Microsoft Store app on your device, or by downloading and running this [installer](https://learn.microsoft.com/en-us/windows/msix/app-installer/install-update-app-installer).

### Updates

If you encounter any problems or errors while updating Files, you can try the following solutions:
1. Make sure you have a stable internet connection and enough disk space for the update.
2. Restart your computer and try to update Files again.

### Unofficial and modified versions of Windows

This includes but is not limited to AtlasOS, ReviOS, disabling Windows update, removing the Microsoft store. Files is not officially supported on devices with these modifications.

1. Type Services in Windows start menu
2. Open the `Windows update` and `Delivery optimization` services properties (Double click)
3. Set startup type to manual and click OK
4. Right click the services
5. Click Start
6. Try installing again.
