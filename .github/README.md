<p align="center">
  <a style="text-decoration:none" href="https://files.community">
    <img alt="Files hero image" src="https://github.com/files-community/Files/blob/main/assets/ReadmeHero.png" /></a>
  <h1 align="center">Website</h1>
</p>

Powered by [SvelteKit](https://svelte.dev), [TypeScript](https://typescriptlang.org/) and [SCSS](https://sass-lang.com). Deployed with Cloudflare.

## Building the source

- **On GitHub Codespaces:** Run `pnpm dev` on the terminal, then you're ready.
- **On your local:** See [SETUP.md](./SETUP.md)

## Contributing to Files Website

- **Report bugs:** [File an issue](https://github.com/files-community/Files/issues/new/choose) if you encounter a bug.
- **Add or improve docs:** [`src/routes/docs`](./src/routes/docs). has all docs as `+page.md`, which are [mdsvex](https://mdsvex.pngwn.io/) and work with [Svelte](htts://svelte.dev). Note that the layout of page folders in the filesystem will reflect the URL path they are assigned to. You can create a category through `category.md`, which makes a category directory and cintains metadata relating to it.
- **Help trabslations:** Help us out localize the app on [Crowdin](https://crowdin.com/project/files-website).
- **Add a post (the owner only):** [`src/routes/blog/posts`](./src/routes/blog/posts) keeps posts. Unlike the docs, a mapping of blog posts doesn't need to be kept.
