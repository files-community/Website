export type DocsMetadata = { title: string };

export type DocsNode = DocsMetadata & {
	path: string;
	icon?: string;
};

export type DocsCategory = DocsNode & { pages: DocsTree };

export type DocsTree = (DocsNode | DocsCategory)[];

const docs: DocsTree = [
	{
		title: "Overview",
		path: "/"
	},
	{
		title: "Configuring Files",
		path: "/configuring",
		pages: [
			{
				title: "Terminal Profiles",
				path: "/configuring/terminal-profiles"
			},
			{
				title: "Date Formats",
				path: "/configuring/date-formats"
			},
			{
				title: "Custom Themes",
				path: "/configuring/custom-themes"
			},
			{
				title: "Keyboard Shortcuts",
				path: "/configuring/keyboard-shortcuts"
			},
			{
				title: "Cloud Drives",
				path: "/configuring/cloud-drives"
			},
			{
				title: "Replacing File Explorer with Files",
				path: "/configuring/replace-file-explorer"
			},
			{
				title: "Troubleshooting Installation Issues",
				path: "/configuring/troubleshooting-installation"
			}
		]
	},
	{
		title: "Contributing",
		path: "/contributing",
		pages: [
			{
				title: "Building Files from Source",
				path: "/contributing/building-from-source"
			},
			{
				title: "Updates",
				path: "/contributing/updates"
			},
			{
				title: "Code Style",
				path: "/contributing/code-style"
			}
		]
	}
];
