# Updates

### How updates work

Files has multiple download options with each option having a unique package identity, this allows users to have different versions installed side by side. In order to enable auto updates for the sideload versions, we make use of the `packageManagement` capability. This capability is removed from the store build in order to prevent certification issues.

## Dev
This is installed when building the app from the source code.
- Display Name: `Files - Dev`
- Publisher Name: `Yair A`
- Package Name: `FilesDev`
- Package Family Name: `FilesDev_ykqwq8d6ps0ag`
- Auto updates: `False`

## Store
This is installed from the store and uses the store assigned identity.
- Display Name: `Files`
- Publisher Name: `Yair A`
- Package Name: `49306atecsolution.FilesUWP`
- Package Family Name: `49306atecsolution.FilesUWP_et10x9a9vyk8t`
- Auto updates: `True`

## Sideload
This is installed from our website and is signed by the Files organization. 
- Display Name: `Files`
- Publisher Name: `Files`
- Package Name: `Files`
- Package Family Name: `Files_1y0xx7n9077q4`
- Auto updates: `True`

## Sideload Preview
This is installed from our website and is signed by the Files organization. 
- Display Name: `Files - Preview`
- Publisher Name: `Files`
- Package Name: `FilesPreview`
- Package Family Name: `FilesPreview_wvne1zexy08sa`
- Auto updates: `True`
