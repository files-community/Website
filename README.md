<h1 align="center">Files Website - <a href="https://files.community">files.community</a></h1>

<p align="center">
    <a href="#overview">Overview</a> |
    <a href="#development">Development</a> |
    <a href="#contributors">Contributors</a>
</p>

<p align="center">  
    <img alt="Files website preview" src="https://i.imgur.com/lf3n86K.png"/>
    <br/>
    The starting page for everything related to <a href="https://github.com/files-community/files">Files</a> — documentation and themes included!
    <br/>
    <br/>
    <a href="https://discord.com/invite/files/" target="_blank">
        <img src="https://img.shields.io/discord/725513575971684472?label=Discord&labelColor=202225&color=5865f2&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIj4NCjxwYXRoIGQ9Ik0xNi41MzUzIDUuNDUwNTNDMzMuODIzMyAtMS40NjgwOSA1MC44ODE1IDE2Ljg4NjMgNDEuNTkyNSAzMy42MDY2QzM3LjM3MzIgNDEuMjAxMiAyNi44OTA0IDQ3LjMxNyAxNC42ODQyIDQxLjUzMjZMNi4xOTk5IDQzLjk1NjdDNC44ODM0NiA0NC4zMzI4IDMuNjY2OTMgNDMuMTIxMiA0LjAzNjM0IDQxLjgwMzdDNC41NDI3MiAzOS45OTc2IDUuNzQyNTcgMzUuNzM5OCA2LjQ0NDEgMzMuNDMyM0MxLjE4Mjc5IDI0LjA0NCA0LjczMDUgMTAuMTc0OCAxNi41MzUzIDUuNDUwNTNaTTE1Ljk5NTQgMjAuMjQ5NkMxNS45OTU0IDIwLjkzOTkgMTYuNTU1IDIxLjQ5OTYgMTcuMjQ1NCAyMS40OTk2SDMwLjc0OThDMzEuNDQwMSAyMS40OTk2IDMxLjk5OTggMjAuOTM5OSAzMS45OTk4IDIwLjI0OTZDMzEuOTk5OCAxOS41NTkyIDMxLjQ0MDEgMTguOTk5NiAzMC43NDk4IDE4Ljk5OTZIMTcuMjQ1NEMxNi41NTUgMTguOTk5NiAxNS45OTU0IDE5LjU1OTIgMTUuOTk1NCAyMC4yNDk2Wk0xNy4yNDk4IDI2LjQ3NDZDMTYuNTU5NCAyNi40NzQ2IDE1Ljk5OTggMjcuMDM0MiAxNS45OTk4IDI3LjcyNDZDMTUuOTk5OCAyOC40MTQ5IDE2LjU1OTQgMjguOTc0NiAxNy4yNDk4IDI4Ljk3NDZIMjYuNzQ5OEMyNy40NDAxIDI4Ljk3NDYgMjcuOTk5OCAyOC40MTQ5IDI3Ljk5OTggMjcuNzI0NkMyNy45OTk4IDI3LjAzNDIgMjcuNDQwMSAyNi40NzQ2IDI2Ljc0OTggMjYuNDc0NkgxNy4yNDk4WiIgZmlsbD0iIzU4NjVGMiIvPg0KPC9zdmc+" alt="Chat"/>
    </a>
    <a href="https://files.community/" target="_blank">
        <img src="https://img.shields.io/netlify/3e8c6a3e-57bb-4fdd-94c7-b54b04f1dc4e?logo=netlify&logoColor=00AD9F&labelColor=0E1E25&color=00AD9F&style=for-the-badge" alt="Netlify deployment status"/>
    </a>
    <a href="https://github.com/files-community/Website/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/files-community/website?labelColor=040f17&color=09b59e&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjk2ODQgMi4zMjQ2NUMxMS41ODMgMS44NzYxNiAxMi40MTcgMS44NzYxNiAxMy4wMzE2IDIuMzI0NjVMMjAuNDUzNCA3Ljc0MDZDMjEuNDI5OSA4LjQ1MzE1IDIwLjkyNjggOS45OTgzNSAxOS43MTg5IDEwLjAwMDNINC4yODEwOEMzLjA3MzE4IDkuOTk4MzUgMi41NzAxMSA4LjQ1MzE1IDMuNTQ2NTcgNy43NDA2TDEwLjk2ODQgMi4zMjQ2NVpNMTMgNi4yNTAzNEMxMyA1LjY5ODA1IDEyLjU1MjMgNS4yNTAzNCAxMiA1LjI1MDM0QzExLjQ0NzcgNS4yNTAzNCAxMSA1LjY5ODA1IDExIDYuMjUwMzRDMTEgNi44MDI2MiAxMS40NDc3IDcuMjUwMzQgMTIgNy4yNTAzNEMxMi41NTIzIDcuMjUwMzQgMTMgNi44MDI2MiAxMyA2LjI1MDM0WiIgZmlsbD0iIzAwNjJiOCIvPgo8cGF0aCBkPSJNMTEuMjUgMTYuMDAwM0g5LjI1VjExLjAwMDNIMTEuMjVWMTYuMDAwM1oiIGZpbGw9IiMwMDYyYjgiLz4KPHBhdGggZD0iTTE0Ljc1IDE2LjAwMDNIMTIuNzVWMTEuMDAwM0gxNC43NVYxNi4wMDAzWiIgZmlsbD0iIzAwNjJiOCIvPgo8cGF0aCBkPSJNMTguNSAxNi4wMDAzSDE2LjI1VjExLjAwMDNIMTguNVYxNi4wMDAzWiIgZmlsbD0iIzAwNjJiOCIvPgo8cGF0aCBkPSJNMTguNzUgMTcuMDAwM0g1LjI1QzQuMDA3MzYgMTcuMDAwMyAzIDE4LjAwNzcgMyAxOS4yNTAzVjE5Ljc1MDNDMyAyMC4xNjQ1IDMuMzM1NzkgMjAuNTAwMyAzLjc1IDIwLjUwMDNIMjAuMjVDMjAuNjY0MiAyMC41MDAzIDIxIDIwLjE2NDUgMjEgMTkuNzUwM1YxOS4yNTAzQzIxIDE4LjAwNzcgMTkuOTkyNiAxNy4wMDAzIDE4Ljc1IDE3LjAwMDNaIiBmaWxsPSIjMDA2MmI4Ii8+CjxwYXRoIGQ9Ik03Ljc1IDE2LjAwMDNINS41VjExLjAwMDNINy43NVYxNi4wMDAzWiIgZmlsbD0iIzAwNjJiOCIvPgo8L3N2Zz4K" alt="License"/>
    </a>
</p>

---

# Overview

This repository contains the source code for the new [Files website](https://files.community). The site is written using [SvelteKit](https://svelte.dev), [TypeScript](https://typescriptlang.org/) and [SCSS](https://sass-lang.com), and deployed with [Netlify](https://www.netlify.com/).

## Codebase Structure

```
.
├──static                 // Contains static assets including branding, images, fonts, etc...
|  ├──branding            // Branding media (logos, banners, etc...)
|  ├──ui                  // Images used in the website's user interface.
|  └──screenshots         // Screenshots and renders of the app used in the website.
└──src                    // The website's source code.
   ├──lib                 // Svelte components used within the website.
   ├──routes              // SvelteKit's filesystem-based routes. Anything in the folder is registered as a URL on build time.
   |  ├──docs             // Documentation and associated files.
   |  └──themes           // The themes page and associated files.
   ├──stores              // Data storage used across various components and routes.
   ├──styles              // SCSS styles that are NOT tied to components in /lib.
   └──types               // Various type mappings used by TypeScript.
```

---

# Development

## Prerequisites
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) with `npm`.
- Command line of your choice.

## Building

### 1: Clone the repository.
```ps
git clone https://github.com/files-community/Website && cd Website
```
This will create a local copy of this repository and navigate you to the root folder of the repository.

### 2: Install Dependencies
Run this command at the root folder to install dependencies:
```ps
npm i
```

### 3: Run Build Script
To build the site in development mode, simply run the following command:
```ps
npm run dev
```

## Additional Scripts

### Linting
This project uses [prettier](https://prettier.io) and [eslint](https://eslint.org/). Run this command to lint your changes:
```ps
npm run lint
```

### Compiling & Distribution

We currently use [SvelteKit's vercel adapter](https://www.npmjs.com/package/@sveltejs/adapter-vercel) module, which allows us to deploy to vercel. To simply build a production bundle, use the following script:

```ps
npm run build
```

> Alternatively, to preview your changes in a production-like build, use `npm run preview`.

## Contributing to Documentation

Our documentation system uses [mdsvex](https://mdsvex.pngwn.io/), a superset of markdown designed to work with [Svelte](htts://svelte.dev). `*.svx` files are equivalent to markdown (`*.md`) files.

### Editing Existing Pages

Documentation files are located at [`src/routes/docs`](https://github.com/files-community/Website/tree/main/src/routes/docs). SvelteKit uses a filesystem-based router, meaning that the layout of pages in the filesystem will reflect the URL path they are compiled to. To edit an existing page, find the corresponding `*.svx` file in the [`docs`]((https://github.com/files-community/Website/tree/main/src/routes/docs)) directory, and edit it like a normal markdown file.

### Adding or Deleting a Page

Modifying the location or adding/deleting pages is slightly more complex. The sidebar used to naviagate documentation is not automatically generated. As such, a mapping of all pages rendered in the sidebar must be kept. If you plan to add, delete, or modify a page's position in the filesystem, this mapping *must* be updated, or the associated page will either be missing from the sidebar or lead to a 404. The mapping is located at [`/src/stores/docs.ts`](https://github.com/files-community/Website/tree/main/src/stores/docs.ts) as a JSON-like format.

This is an example docs mapping:

#### src/routes/docs/
```
.
├──page-1.svx
├──page-2.svx
└──category
    ├──category-page-1.svx
    └──category-page-2.svx
```

#### src/stores/docs.ts
```ts
[
    {
        name: "Page 1",
        path: "/page-1"
    },
    {
        name: "Page 2",
        path: "/page-2"
    },
    {
        type: "category",
        name: "Nested Category",
        pages: [
            {
                name: "Category Page 1",
                path: "/category/category-page-1"
            },
            {
                name: "Category Page 2",
                path: "/category/category-page-2"
            }
        ]
    },
]
```

---

# Contributors

Want to contribute to this project? Feel free to open an [issue](/issues) or [pull request](/pulls).

<a href="https://github.com/files-community/Website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=files-community/Website" />
</a>
