<p align="center">
  <a style="text-decoration:none" href="https://files.community">
    <img alt="Files hero image" src="https://github.com/files-community/Files/blob/main/assets/ReadmeHero.png" /></a>
  <h1 align="center">Website</h1>
</p>

<p align="center">
  Powered by <a href="https://mdsvex.pngwn.io">mdsvex</a>, <a href="https://svelte.dev">SvelteKit</a>, and <a href="https://typescriptlang.org">TypeScript</a>. Deployed with <a href="https://www.cloudflare.com">Cloudflare</a>.
</p>

## Contributing to Files Website

Before starting contibution to this repository, please read [our code of conduct](./CODE_OF_CONDUCT.md) first.

Contributing to this repository involves several valuable activities: filing issues to [report bugs](https://github.com/files-community/Files/issues/new/choose), [improving documentation](./CONTRIBUTING.md#contributing-to-the-docs) for better user comprehension, developing and maintaining the website infrastructure, and [translating the website](https://crowdin.com/project/files-website) to make it accessible to a wider audience.

## Developing

**Setup on GitHub Codespaces**

```bash
pnpm dev
```

**Setup on your local**

1. Install [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) with `npm`, and [pnpm](https://pnpm.io).
2. Prepare terminal.
3. Run the following commands:
```bash
git clone https://github.com/files-community/Website
pnpm i
pnpm run dev
```

**Linting**

The following command uses [prettier](https://prettier.io) and [eslint](https://eslint.org/).
<br/>
[lint-staged](https://github.com/okonet/lint-staged) is also used to automatically format all changed files before committing them

```bash
pnpm run lint
```

**Compiling & distributing**

We use [SvelteKit's cloudflare adapter](https://www.npmjs.com/package/@sveltejs/adapter-cloudflare) module, which allows us to deploy to cloudflare. To simply build a production bundle, run the following command:

```bash
pnpm run build
```

## Structure of codebase

```
.
├──static                 // Contains static assets including branding, images, fonts, etc...
│  ├──branding            // Branding media (logos, banners, etc...)
│  ├──fonts               // Static font files loaded by the website.
│  ├──preview-samples     // Sample files used in the preview pane in the features section.
│  ├──screenshots         // Screenshots and renders of the app used in the website.
│  └──ui                  // Images other than branding used in the website's user interface.
└──src                    // The website's source code.
   ├──lib                 // Re-usable Svelte components used within the website.
   ├──layout              // Components responsible for defining page layout, such as headers, footers, page sections, etc...
   ├──routes              // SvelteKit's filesystem-based routes. Anything in the folder is registered as a URL on build time.
   │  ├──docs             // Documentation and associated files.
   │  └──blog             // Blog page and associated files.
   │     └──posts         // Folder containing blog posts in Markdown format.
   ├──data                // Data storage used across various components and routes. NOT stores, just exported variables.
   └──styles              // SCSS styles that are NOT tied to components in /lib.
```
