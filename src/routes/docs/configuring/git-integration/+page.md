---
title: Manage repositories with Git
---

Integration with Git allows you to work more easily with your projects. You can create and manage branches directly from Files. You can pull and push changes to remote repos, and open them in VS Code.```

## Using Git in Files

No additional setup is required, opening a Git folder in Files will automatically detect and display the branch name on the Status Bar.

## Connecting Files to Github

Connecting Files to Github allows you to push and sync changes with a remote repositories.
To do this, follow these steps:

- Click the Push button to try to push changes to the remote repository.
  If you are not connected to Github, a dialog with instructions will appear.
- Copy the access code from the dialog.
- Open the link shown in the dialog in your browser.
- Paste the access code in the input field and click the "Authorise" button.

### Switching branches

Clicking the branch name will open a flyout with the list of available branches, you'll also be able to create a new branch from this flyout.

### How to create a new branch

To create a new branch, follow these steps:

- Navigate to the folder containing the repository.
- Click the name of the current branch in the bottom right corner.
- Click the "Create branch" button in the menu that appears.
- Enter the name of the new branch, select the base of the new branch and choose whether you want to switch to the new branch after creation.
- Click the "Create" button.

## How to pull changes from a remote repository

To pull changes from a remote repository, follow these steps:

- Navigate to the folder containing the repository.
- You will see the number of incoming commits in the bottom right corner next to the branch button.
- Click the Pull button to pull changes from the remote repository.

## How to push changes to a remote repository

To push changes to a remote repository, follow these steps:

- Navigate to the folder containing the repository.
- You will see the number of outgoing commints in the bottom right corner next to the branch button.
- Click the Push button to push changes to the remote repository.

Before pushing changes to the remote repository, you must connect Files to Github. To do this, see the section above.

## How to sync changes with a remote repository

To sync changes with a remote repository, follow these steps:

- Navigate to the folder containing the repository.
- You will see the number of incoming and outgoing commits in the bottom right corner next to the branch button.
- Click the Sync button to pull changes from the remote repository and push changes to the remote repository.

_To push changes to the remote repository, you must firstly add the Files app to the list of authorised apps on Github. To do this, see the section above._

## Git columns in the Details layout

Opening a Git repository in the Details layout displays additional columns for Git status, last commit, commit hash, and commit author. These columns can be toggled by right-clicking the column headers.

## Git details in the Details pane

You can see repository and branch of directory in the Details pane.
To do this, follow these steps:

- Navigate to the folder in your repository.
- Open the Details pane.

### Opening a Git repository in VS Code

When browsing a Git repository, the status bar shows a button that allows you to open a folder in VS Code. Opening a folder with a Visual Studio solution file will display an option to open the solution in Visual Studio.
