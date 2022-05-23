# Updates

### How updates work

Files has multiple download options with each option having a unique package identity, this allows users to have the different versions installed side by side.

- The **Dev** version is what's installed when building the app from the source code. It has it's own icon and name (Files - Dev) in the start menu.
- The **Store** version is what's installed from the store, it has the identity assigned by the store uses the standard Files icon and name in the start menu. This icon is added in as part of the Azure Dev Ops build process and replaces the dev icon that's used when building from source.
- The **Sideload Stable** version uses a similar build step to replace the dev icon with the regular version. There is an additional build step that sets up auto update.
- The **Sideload Preview** version follows the same build process as the stable version with the exception being the app identity and auto update url.

In order to enable auto updates for the sideload versions, we make use of the `packageManagement` capability. This capability is removed from the store build in order to prevent certification issues.
