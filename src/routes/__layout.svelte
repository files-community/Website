<script lang="ts">
  import { onMount } from "svelte";

  import { links } from "$data/links";
  import { docs } from "$data/docs";
  import { Navbar } from "$lib";

  import Chat from "@fluentui/svg-icons/icons/chat_24_regular.svg?raw";
  import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";
  import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
  import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
  import News from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
  // import PaintBrush from "@fluentui/svg-icons/icons/paint_brush_24_regular.svg?raw";

  let theme = "light";

  onMount(() => {
    theme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : "light";

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", e => {
        theme = e.matches ? "dark" : "light";
      });
  });

  const { github, discord } = links;

  const navbarItems = [
    {
      name: "Home",
      path: "/",
      icon: Home
    },
    {
      name: "Docs",
      path: "/docs",
      sidebarTree: docs,
      icon: Book
    },
    // {
    //     name: "Themes",
    //     path: "/themes",
    //     icon: PaintBrush
    // },
    {
      name: "Blog",
      path: "/blog",
      icon: News
    }
  ];

  const navbarButtons = [
    {
      label: "Discord",
      href: `https://discord.gg/${ discord }`,
      icon: Chat
    },
    {
      label: "GitHub",
      href: `https://github.com/${ github.owner }/${ github.repo }`,
      icon: Code
    }
  ];
</script>

<svelte:head>
  <meta content="Files" property="og:site_name" />

  <meta content="website" property="og:type" />

  <link
    href="/branding/logo-{theme === 'light' ? 'light' : 'dark'}.svg"
    rel="icon"
    type="image/svg+xml"
  />

  <meta
    content="/branding/banner-{theme === 'light' ? 'light' : 'dark'}.png"
    property="og:image"
  />

  <meta
    content="A modern file explorer that pushes the boundaries of the platform."
    name="description"
  />
  <meta
    content="A modern file explorer that pushes the boundaries of the platform."
    property="og:description"
  />
  <meta
    content="Files, File Explorer, Fluent Design, Microsoft, Windows, UWP"
    name="keywords"
  />
  <meta content="Files Community" name="author" />

  <meta content="#005fb8" name="theme-color" />

  <meta content="summary_large_image" name="twitter:card" />
  <meta content="@FilesForWindows" name="twitter:site" />
  <meta content="@FilesForWindows" name="twitter:creator" />

  <script type="text/javascript">
    (function(c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function() {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "4q1wajdktz");
  </script>
</svelte:head>

<Navbar buttons={navbarButtons} items={navbarItems} />
<slot />

<style global lang="scss">
	@use "src/styles/global";
	@use "src/styles/markdown";
</style>