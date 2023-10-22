import type { SvelteComponent } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type FeatureCardData = {
	title: string;
	description: string;
	icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>;
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

export const cloudFiles: CloudFileData[] = [
	{
		name: "GitHub",
		icon: "folder",
		status: "success",
	},
	{
		name: "electron-v1.4.13-win32-ia32.zip",
		icon: "zip",
		status: "sync",
	},
	{
		name: "start.js",
		icon: "file",
		status: "success",
	},
	{
		name: "2021-08-05 15.03.05.mp4",
		icon: "video",
		status: "success",
	},
	{
		name: "christmas-card-2017.png",
		icon: "picture",
		status: "success",
	},
	{
		name: "install.bat",
		icon: "exe",
		status: "success",
	},
	{
		name: "dQw4w9WgXcQ.mp3",
		icon: "music",
		status: "success",
	},
];

export const previewFiles = [
	{
		name: "Files v3",
		icon: "/ui/icons/folder.png",
		items: 16,
		added: "Wednesday, October 6, 2021 42:69 AM",
		modified: "Thursday, January 1, 1970 00:00",
		path: "C:\\Users\\Sara\\Desktop\\Files v3",
	},
	{
		name: "waves",
		extension: "jpg",
		icon: "/preview-samples/waves.jpg",
		bitDepth: 24,
		dimensions: {
			horizontal: 1496,
			vertical: 960,
		},
		dpi: {
			horizontal: 72,
			vertical: 72,
		},
		added: "Sunday, August 1, 2021 12:34 AM",
		modified: "Monday, August 9, 2021 12:34 AM",
		path: "C:\\Users\\Sara\\Pictures\\waves.png",
	},
	{
		name: "index",
		extension: "html",
		icon: "/ui/icons/file.png",
		added: "Wednesday, July 14, 2021 8:47 PM",
		modified: "Saturday, July 31, 2021 4:32 AM",
		path: "C:\\Users\\Sara\\Documents\\index.html",
	},
	{
		name: "main",
		extension: "cpp",
		icon: "/ui/icons/cpp.svg",
		added: "Monday, June 28, 2021 8:20 AM",
		modified: "Monday, July 12, 2021 1:30 PM",
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
		path: "C:\\Users\\Sara\\Documents\\GitHub\\\\waves.png",
	},
];

export const tags: Tag[] = [
	{
		name: "Blue",
		color: "#0072bd",
	},
	{
		name: "Yellow",
		color: "#edb120",
	},
	{
		name: "Green",
		color: "#77ac30",
	},
	{
		name: "Gray",
		color: "#9ea3a1",
	},
	{
		name: "Orange",
		color: "#d95319",
	},
];

export const taggedFiles: TaggedFileData[] = [
	{
		name: "Super Secret Plans - Do Not Publish.docx",
		icon: "file",
		tag: "Yellow",
	},
	{
		name: "Presentation - Project Sledgehammer.pptx",
		icon: "file",
		tag: "Green",
	},
	{
		name: "Files (MacOS)",
		icon: "folder",
		tag: "Gray",
	},
	{
		name: "Estimate_261_2022-01-31.pdf",
		icon: "file",
		tag: "Blue",
	},
	{
		name: "Files (Linux)",
		icon: "folder",
		tag: "Gray",
	},
	{
		name: "Files v4.0",
		icon: "folder",
		tag: "Orange",
	},
];
