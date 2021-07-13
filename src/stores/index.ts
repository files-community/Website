import type DocsPage from "$types";

export const links = {
    discord: "G5aqYcgWxB",
    storeId: "9nghp3dx8hdx",
    github: {
        owner: "files-community",
        repo: "files",
        siteRepo: "website"
    }
};

export const docsMap: DocsPage = [
    {
        name: "Overview",
        path: ""
    },
    {
        name: "Configuring Files",
        path: "/configuring",
        children: [
            {
                name: "Terminal Profiles",
                path: "/configuring/terminal-profiles"
            },
            {
                name: "Performance Settings",
                path: "/configuring/performance-settings"
            },
            {
                name: "Date Formats",
                path: "/configuring/date-formats"
            },
            {
                name: "Custom Themes",
                path: "/configuring/custom-themes"
            },
            {
                name: "Keyboard Shortcuts",
                path: "/configuring/keyboard-shortcuts"
            },
            {
                name: "Configuring the Win + E Shortcut",
                path: "/configuring/configure-win-e"
            },
            {
                name: "Replacing File Explorer with Files",
                path: "/configuring/replace-file-explorer"
            }
        ]
    },
    {
        name: "Contributing",
        path: "/contributing",
        children: [
            {
                name: "Translating Files",
                path: "/contributing/translating-files"
            },
            {
                name: "Building Extensions for Files",
                path: "/contributing/building-extensions"
            },
            {
                name: "Code Style",
                path: "/contributing/code-style"
            }
        ]
    }
];
