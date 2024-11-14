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

Files is a community-driven project that depends on your support to grow and improve. Please consider purchasing Files through the Microsoft Store or supporting us on GitHub if you use the classic installer.

You can also use the preview version alongside the stable release to get early access to new features and improvements.

<InfoBar title="Note" severity="information">
	The Windows Update and Delivery Optimization services will need to be enabled in order for the installation to work. Modified versions of Windows or running "debloat" scripts/programs are often missing these components and aren't supported.
</InfoBar>

### PowerShell

1. Open PowerShell as administrator.
2. Run this command `Add-AppxPackage -AppInstallerFile https://cdn.files.community/files/stable/Files.Package.appinstaller`.


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

## Keep Files up to date

Files will automatically check for updates whenever the app is opened and an indicator will be displayed on the toolbar if an update is available. You can also manually check for updates from the [Microsoft Store](ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite) or by downloading the sideload [installer](/download/).

<InfoBar title="Note" severity="information">
	Installing an update will automatically restart Files so make sure to save your work before starting an update.
</InfoBar>

### Steps required for the "classic installer" version after 3/21/2024

Starting 3/21/2024, users of the sideload version (aka classic installer) will need to reinstall Files in order to continue receiving automatic updates. This is a one time requirement due to changes in the code signing certificate.

<InfoBar title="Note" severity="information">
	This is not required for the Store version of Files.
</InfoBar>

1. Export your settings by going to `Settings > Advanced > Export`. 
2. Uninstall Files and restart Windows
3. [Reinstall](/download/) Files.
4. Import your settings from `Settings > Advanced > Import`.

## Troubleshooting

### Cannot open app package

If you see a "Cannot open app package" message when you try to open Files, it means that your device needs an update for the AppInstaller component. You can update it from the Microsoft Store app on your device, or by downloading and running this [installer](https://learn.microsoft.com/en-us/windows/msix/app-installer/install-update-app-installer).

### Updates

If you encounter any problems or errors while updating Files, you can try the following solutions:
1. Make sure you have a stable internet connection and enough disk space for the update.
2. Restart your computer and try to update Files again.

### Windows cannot install package because a different package with the same name is already installed

If you get this error code, you'll need to uninstall and [reinstall](/download/) Files. You can also export/import the settings file to keep your existing settings.
