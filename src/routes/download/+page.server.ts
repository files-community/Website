import type { PageServerLoad } from "./$types";

import stableFallback from "../../../static/appinstallers/Files.stable.appinstaller?raw";
import previewFallback from "../../../static/appinstallers/Files.preview.appinstaller?raw";

const appInstallerVersion = (appInstaller: string) =>
	appInstaller.match(/Version="(\d+(?:\.\d+)*)"/)?.[1];

const fetchVersion = async (
	fetch: typeof globalThis.fetch,
	channel: "stable" | "preview",
	fallback: string,
) => {
	try {
		const response = await fetch(
			`https://cdn.files.community/files/${channel}/Files.Package.appinstaller`,
		);
		if (!response.ok) throw new Error(response.statusText);
		return (
			appInstallerVersion(await response.text()) ??
			appInstallerVersion(fallback)
		);
	} catch {
		return appInstallerVersion(fallback);
	}
};

export const load: PageServerLoad = async ({ fetch }) => {
	const [stableVersion, previewVersion] = await Promise.all([
		fetchVersion(fetch, "stable", stableFallback),
		fetchVersion(fetch, "preview", previewFallback),
	]);

	return { stableVersion, previewVersion };
};
