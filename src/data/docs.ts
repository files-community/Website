export type DocsMap = {
	name: string;
	path?: string;
	type?: "page" | "category";
	pages?: DocsMap[];
};

export const docs: DocsMap[] = [
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
		type: "category",
		name: "Contributing",
		pages: [
			{
				name: "Building Files from source",
				path: "/contributing/building-from-source"
			},
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
