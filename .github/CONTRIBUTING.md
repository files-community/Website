# Contributing to Files Website

Files Website also thrives off of the contributions and input from users. There are several ways you can get involved.

1. [Contributing to the docs](#contributing-to-the-docs)
2. [Contributing to the blog](#contributing-to-the-blog)
3. [Translating the website](#translating-the-website)

## Contributing to the docs

The documentation system we use is [mdsvex](https://mdsvex.pngwn.io/), a superset of markdown designed to work with [Svelte](htts://svelte.dev).

**Editing existing pages**

Documentation files are located at [`src/routes/docs`](https://github.com/files-community/Website/tree/main/src/routes/docs). SvelteKit uses a
filesystem-based router, meaning that the layout of page folders in the filesystem will reflect the URL path they are
assigned to.

To edit an existing page, find the corresponding folder in
the [`docs`](<(https://github.com/files-community/Website/tree/main/src/routes/docs)>) directory, and edit the `+page.md` file inside it.

**Adding or deleting a page**

To create/delete a page, remove the corresponding folder for it, as long with the `+page.md` file inside it.

**Using categories**

Categories are sub-folders inside `src/routes/docs`, which contain a `category.md` file. This file marks a category directory, and contains metadata relating to it.
Categories can contain page folders (with a `+page.md` file in them), or other categories.

## Contributing to the blog

> [!NOTE]
> This feature is limited to the project owners

Similarly to docs pages, the blog also uses [mdsvex](https://mdsvex.pngwn.io/) for it's markdown. Blog posts are located
at [`src/routes/blog/posts`](https://github.com/files-community/Website/tree/main/src/routes/blog/posts) in `*.md` files.
Unlike the docs, a mapping of blog posts doesn't need to be kept.

**Publishing a post**

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

**Removing or editing a post**

Since we don't need any mapping to be updated, posts can simply be deleted from the folder or edited without any hassle or extra steps.

## Translating the website

Localization resources are managed in [our Crowdin project](https://crowdin.com/project/files-website).
