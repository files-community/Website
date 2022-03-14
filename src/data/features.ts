import Cloud from "@fluentui/svg-icons/icons/cloud_24_regular.svg?raw";
import Tag from "@fluentui/svg-icons/icons/tag_24_regular.svg?raw";
import TabDesktop from "@fluentui/svg-icons/icons/tab_desktop_20_regular.svg?raw";
import EyeVisible from "@fluentui/svg-icons/icons/eye_20_regular.svg?raw";

export type FeatureCardData = {
	title: string;
	description: string;
	icon: any;
};

export type Tag = {
	name: string;
	color: string;
};

export interface FileData {
	name: string;
	icon: string;
}

export type CloudFileData = FileData & {
	status: "success" | "sync";
};

export type TaggedFileData = FileData & {
	tag: string;
};

export const featureCards: FeatureCardData[] = [
	{
		title: "Seamless cloud integration",
		description:
			"Integration with cloud services such as OneDrive, Google Drive, and iCloud allow you to manage your documents and photos in the cloud, right from the sidebar.",
		icon: Cloud
	},
	{
		title: "File preview",
		description:
			"Preview documents, photos, and more without opening them. Support for rich previews, syntax highlighting, markdown and video playback is all built in.",
		icon: EyeVisible
	},
	{
		title: "Tagged Files & Folders",
		description:
			"Quickly mark and organize your files and folders for later use by assigning them colored and named tags for easy identification. You can even add your own custom tags!",
		icon: Tag
	},
	{
		title: "Multitask with tabs",
		description:
			"Avoid multiple windows and keep your desktop clutter-free. Files features a browser-like tabbing interface complete with keyboard shortcuts.",
		icon: TabDesktop
	}
];

export const cloudFiles: CloudFileData[] = [
	{
		name: "GitHub",
		icon: "folder",
		status: "success"
	},
	{
		name: "electron-v1.4.13-win32-ia32.zip",
		icon: "zip",
		status: "sync"
	},
	{
		name: "start.js",
		icon: "file",
		status: "success"
	},
	{
		name: "2021-05-08 15.03.05.mp4",
		icon: "video",
		status: "success"
	},
	{
		name: "christmas-card-2021.pub",
		icon: "picture",
		status: "success"
	},
	{
		name: "install.bat",
		icon: "exe",
		status: "success"
	},
	{
		name: "dQw4w9WgXcQ.mp3",
		icon: "music",
		status: "success"
	}
];

export const previewFiles = [
	{
		name: "Files v3",
		icon: "/ui/icons/folder.png",
		items: 16,
		added: "Wednesday, October 6, 2021 9:34 PM",
		modified: "Thursday, January 1, 1970 00:00 PM",
		path: "C:\\Users\\Sara\\source\\repos\\Files v3"
	},
	{
		name: "waves",
		extension: "png",
		icon: "/preview-samples/waves.png",
		bitDepth: 24,
		dimensions: {
			horizontal: 1496,
			vertical: 960
		},
		dpi: {
			horizontal: 72,
			vertical: 72
		},
		added: "Sunday, August 1, 2021 42:69 AM",
		modified: "Monday, August 9, 2021 12:34 PM",
		path: "C:\\Users\\Sara\\OneDrive\\Pictures\\waves.png"
	},
	{
		name: "index",
		extension: "html",
		icon: "/ui/icons/file.png",
		added: "Wednesday, July 14, 2021 8:47 PM",
		modified: "Saturday, July 31, 2021 6:32 AM",
		path: "C:\\Users\\Sara\\OneDrive\\Documents\\index.html"
	},
	{
		name: "main",
		extension: "cpp",
		icon: "/ui/icons/cpp.svg",
		added: "Monday, June 28, 2021 8:20 AM",
		modified: "Friday, August 13, 2021 4:30 PM",
		lineCount: 8,

		// Yep, this is a very ugly way to do this, but
		// PrismJS and shiki both have extremely poor
		// documentation and support for SvelteKit, and
		// I don't want to add another highlighter
		// just for something completely decorative.
		code: `<span class="macro property"><span class="directive-hash">#</span><span class="directive keyword">include</span> <span class="string">&lt;iostream&gt;</span></span>

<span class="keyword">using</span> <span class="keyword">namespace</span> std<span class="punctuation">;</span>

<span class="keyword">int</span> <span class="function">main</span><span class="punctuation">(</span><span class="punctuation">)</span>
<span class="punctuation">{</span>
cout <span class="operator">&lt;&lt;</span> <span class="string">"Hello World"</span> <span class="operator">&lt;&lt;</span> endl<span class="punctuation">;</span>
<span class="keyword">return</span> <span class="number">0</span><span class="punctuation">;</span>
<span class="punctuation">}</span>`,
		path: "C:\\Users\\Sara\\source\\repos\\Files v3\\main.cpp"
	}
];

export const tags: Tag[] = [
	{
		name: "Purple",
		color: "#800080"
	},
	{
		name: "Yellow",
		color: "#edb120"
	},
	{
		name: "Green",
		color: "#77ac30"
	},
	{
		name: "Gray",
		color: "#9ea3a1"
	},
	{
		name: "Orange",
		color: "#d95319"
	}

];

export const taggedFiles: TaggedFileData[] = [
	{
		name: "Super Secret Plans - Do Not Publish.docx",
		icon: "file",
		tag: "Purple"
	},
	{
		name: "Presentation - Project Sledgehammer.pptx",
		icon: "file",
		tag: "Yellow"
	},
	{
		name: "Files (MacOS)",
		icon: "folder",
		tag: "Green"
	},
	{
		name: "Estimate_261_2022-01-31 (outdated).pdf",
		icon: "file",
		tag: "Gray"
	},
	{
		name: "Files (Linux)",
		icon: "folder",
		tag: "Green"
	},
	{
		name: "Files v4.0",
		icon: "folder",
		tag: "Orange"
	}
];
