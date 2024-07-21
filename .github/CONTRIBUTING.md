# Contributing to Files Website

Files Website also thrives off of the contributions and input from users. There are several ways you can get involved.

## Set up

### On GitHub Codespaces

Run the command below in the terminal, then you're ready.

```console
pnpm dev
```

### On your local

<details><summary>Open to see instructions</summary><p>

#### 1. Prerequisites

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) with `npm`.
- [pnpm](https://pnpm.io)
- Shell of your choice.

#### 2. Run commands

Clone, install dependencies and build:
```console
git clone https://github.com/files-community/Website
cd Website
pnpm i
pnpm run dev
```

</p></details>


## Codebase Structure

```
.
├──static                 // Contains static assets including branding, images, fonts, etc...
|  ├──branding            // Branding media (logos, banners, etc...)
|  ├──fonts               // Static font files loaded by the website.
|  ├──preview-samples     // Sample files used in the preview pane in the features section.
|  ├──screenshots         // Screenshots and renders of the app used in the website.
|  └──ui                  // Images other than branding used in the website's user interface.
└──src                    // The website's source code.
   ├──lib                 // Re-usable Svelte components used within the website.
   ├──layout              // Components responsible for defining page layout, such as headers, footers, page sections, etc...
   ├──routes              // SvelteKit's filesystem-based routes. Anything in the folder is registered as a URL on build time.
   |  ├──docs             // Documentation and associated files.
   |  └──blog             // Blog page and associated files.
   |     └──posts         // Folder containing blog posts in Markdown format.
   ├──data                // Data storage used across various components and routes. NOT stores, just exported variables.
   └──styles              // SCSS styles that are NOT tied to components in /lib.
```

---
