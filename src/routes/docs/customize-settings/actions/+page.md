---
title: Actions
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

Actions are commands that you can perform on items, such as files, folders, images, etc. The [Command Palette](/docs/features/command-palette/)  (`Ctrl`+`Shift`+`P`) will show you a list of available actions for the selected item(s), along with their key bindings.


# Customizing Actions

You can customize the key bindings for actions from the Actions page in Settings (Files > Settings > Actions).

![Actions settings page](/docs-resources/Settings-Actions.png)


## Modifying existing key bindings

The default key bindings in Files are largely based on the common shortcuts that users have come to expect from a file manager. To modify a key binding, follow these steps:

1. Click the edit button next to the action you wish to modify (eg. Help).
2. Input the new key binding using the keyboard (e. F3).
3. Click the save button and test out the new key binding.

![Edit actions](/docs-resources/Settings-Actions-Edit.png)

In addition to modifying key bindings, you can also delete them and free up the keys for other actions. Please note, deleting an action is immediate and no confirmation is displayed.

## Adding additional key bindings

<InfoBar severity="information">
	Support for custom args is not currently available but we're exploring this option for the future.
</InfoBar>

Files has a growing list of actions and as the list continues grows, not all actions come with a default key binding. To assign a key binding, follow these steps:

1. Click the "Add command" button.
2. Select an action from the list (eg. "Pin to start menu").
3. Input the key binding (eg. ctrl + shift + s)
4. Click the save button test out the key binding by selecting a file and using the `ctrl` + `shift` + `s` shortcut.

![Add actions](/docs-resources/Settings-Actions-Add.png)

## Restoring defaults

If you wish to restore the default key key bindings, click the "Restore defaults" button and click on "Yes" to confirm.