<h1 align="center">Files Website • <a href="https://files.community">files.community</a></h1>

<p align="center">This repository contains the source code for the <a href="https://files.community">https://files.community</a>, written using <a href="https://svelte.dev">SvelteKit</a>, <a href="https://typescriptlang.org">TypeScript</a> and <a href="https://sass-lang.com">SCSS</a>, and deployed with Cloudflare.</p>

## Translating

Translation is done via Crowdin: https://crowdin.com/project/files-website

## Building and running

### GitHub Codespaces

You don't need to install any tools on GitHub Codespaces.
After the Codespace has initialized, you can run `pnpm dev` and ports will be listed for previewing.

### Local development

1. Prerequisites
   - [Git](https://git-scm.com)
   - [Node.js](https://nodejs.org) with `npm`.
   - [`pnpm`](https://pnpm.io)
2. Clone the repository.
   ```
   git clone https://github.com/files-community/Website && cd Website
   ```
3. Install dependencies
   ```
   pnpm i
   ```
4. Deploy the website locally
   ```
   pnpm run dev
   ```

### Additional scripts

This project uses [prettier](https://prettier.io) and [eslint](https://eslint.org/). Run this command to lint your changes:

```
pnpm run lint
```

Additionally, we use [lint-staged](https://github.com/okonet/lint-staged) to automatically format all changed files before committing them, ensuring that all code is formatted consistently.

We currently use [SvelteKit's cloudflare adapter](https://www.npmjs.com/package/@sveltejs/adapter-cloudflare) module, which allows us to deploy to cloudflare. To simply build a production bundle, use the following script:

```
pnpm run build
```

Alternatively, to preview your changes in a production-like build, use the following script:

```
pnpm run preview
```

## Contributing

This uses [mdsvex](https://mdsvex.pngwn.io), a superset of markdown designed to work with [Svelte](htts://svelte.dev).

### Editing existing pages

Documentation files are located at [`src/routes/docs`](https://github.com/files-community/Website/tree/main/src/routes/docs). SvelteKit uses a
filesystem-based router, meaning that the layout of page folders in the filesystem will reflect the URL path they are
assigned to.

To edit an existing page, find the corresponding folder in the [`docs`](<(https://github.com/files-community/Website/tree/main/src/routes/docs)>) directory, and edit the `+page.md` file inside it.

### Adding or deleting a page

To create/delete a page, remove the corresponding folder for it, as long with the `+page.md` file inside it.

### Using Categories

Categories are sub-folders inside `src/routes/docs`, which contain a `category.md` file. This file marks a category directory, and contains metadata relating to it.
Categories can contain page folders (with a `+page.md` file in them), or other categories.

### Adding a blog

Similarly to docs pages, the blog also uses [mdsvex](https://mdsvex.pngwn.io/) for it's markdown. Blog posts are located
at [`src/routes/blog/posts`](https://github.com/files-community/Website/tree/main/src/routes/blog/posts) in `*.md` files.
Unlike the docs, a mapping of blog posts doesn't need to be kept.

To publish a post, create a new folder in
the [`posts`](https://github.com/files-community/Website/tree/main/src/routes/blog/posts) folder, and in it place a file
named `+page.md`. It will contain your post's content.

At the top of the file, you'll need to include a few required things before typing the post.

```yml
---
title: Title of the Post
author: author-github-handle
description: Description of the post.
thumbnail: https://path-to-thumbnail-image.png
date: 2021-09-06
---
```

This metadata table is required for all posts, and gives the website some basic information about the post to work with. Below the table, you're free to use whatever markdown or components you want.

### Removing or editing a post

Since we don't need any mapping to be updated, posts can simply be deleted from the folder or edited without any hassle or extra steps.

## Codebase overview

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
