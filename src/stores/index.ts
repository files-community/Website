import type DocsMap from "$types";

export const links = {
    discord: "files",
    storeId: "9nghp3dx8hdx",
    github: {
        owner: "files-community",
        repo: "files",
        siteRepo: "website"
    }
};

export const docsMap: DocsMap = [
    {
        name: "Overview",
        path: ""
    },
    {
        type: "category",
        name: "Configuring Files",
        pages: [
            {
                name: "Terminal Profiles",
                path: "/configuring/terminal-profiles"
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
        type: "category",
        name: "Contributing",
        pages: [
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
