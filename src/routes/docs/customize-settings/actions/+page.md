---
title: Actions
---

<script>
  import { InfoBar } from "fluent-svelte";
</script>

**Actions** are commands you can perform on items like files, folders, and images. Use the [Command Palette](/docs/features/command-palette/) (`Ctrl`+`Shift`+`P`) to view a searchable list of available actions, along with their current key bindings.

## Customizing actions

You can customize key bindings from the **Actions** page in Settings. Navigate to **Files > Settings > Actions** to get started.

![Actions settings page](/docs-resources/Settings-Actions.png)

### Modifying existing key bindings

1. Click the **edit** button next to the action you'd like to change (e.g. "Help").
2. Enter the new shortcut using your keyboard (e.g. `F3`).
3. Click **Save**, and test it out.

![Edit actions](/docs-resources/Settings-Actions-Edit.png)

You can also **remove** a key binding entirely. This frees up the shortcut for use elsewhere, but note that deletion takes effect immediately and is not confirmed.

### Adding additional key bindings

<InfoBar severity="information">
  Support for custom arguments isn't available yet, but we're exploring it for future releases.
</InfoBar>

Not all actions have default shortcuts, especially as the list continues to grow. To assign a key binding:

1. Click the **Add command** button.
2. Choose an action from the list (e.g. "Pin to Start menu").
3. Enter your desired shortcut (e.g. `Ctrl + Shift + S`).
4. Click **Save**, then test it by selecting an item and using the shortcut.

![Add actions](/docs-resources/Settings-Actions-Add.png)

### Restoring defaults

If you want to revert to the original key bindings:

1. Click the **Restore defaults** button.
2. Confirm the reset by selecting **Yes** in the prompt.