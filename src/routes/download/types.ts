export type DownloadSource = Readonly<{
	name: string;
	description: string;
	href: string;
	protocolHref?: string;
	icon: string;
	darkModeIcon?: string;
	external?: boolean;
	download?: boolean;
	paid?: boolean;
	recommended?: boolean;
	version?: string;
}>;
