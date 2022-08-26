export type DocsNode = {
	name: string,
	icon?: string,
}

export type DocsPage = DocsNode & { path: string }

export type DocsCategory = DocsNode & { pages: DocsPage[] }

export const docs: (DocsPage | DocsCategory)[] = [
	{
		name: "Overview",
		path: ""
	},
	{
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
				name: "Replacing File Explorer with Files",
				path: "/configuring/replace-file-explorer"
			}
		]
	},
	{
		name: "Contributing",
		pages: [
			{
				name: "Building Files from Source",
				path: "/contributing/building-from-source"
			},
			{
				name: "Updates",
				path: "/contributing/updates"
			},
			{
				name: "Code Style",
				path: "/contributing/code-style"
			}
		]
	}
];
