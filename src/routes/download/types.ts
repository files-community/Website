export type DownloadSource = Readonly<{
	name: string;
	description: string;
	href: string;
	icon: string;
	darkModeIcon?: string;
	external?: boolean;
}>;
