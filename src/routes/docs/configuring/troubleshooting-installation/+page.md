# Troubleshooting installation issues

The installation process for Files relies on appinstaller and msix. While the installation process usually works as expected, it occasionally fails so we put together a list of issues and solutions.

### App installation failed with error message: error 0xC00CEE23 The XML in the .appinstaller file is not valid: Line 33, Column 5, Reason: '>' expected. (Oxc00cee23)
This issue can usually be  by restarting Windows and running the appinstaller again.

### An error occurred while accessing the file from the web. Please try downloading and opening the file locally.
There aren't any known solution for this issue.

### Windows can't open this type of file (.appinstaller)
This occurs when the appinstaller component is missing from Windows and can be resolved by running the Store reset command `wsreset -i` in PowerShell or Command Prompt.
