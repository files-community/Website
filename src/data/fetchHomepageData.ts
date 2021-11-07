import { links } from "$data/links";

const { owner, repo } = links.github;

export type ContributorData = {
	login: string;
	avatar_url: string;
	contributions: number;
	html_url: string;
	type: "User" | "Bot";
};

// Returns a list of 35 paged contributors to the files-community/files repository
export const getContributors: (
	pageNumber: number
) => Promise<ContributorData[]> = async (pageNumber: number = 1) =>
	await fetch(
		`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=35&page=${pageNumber}`
	)
		// Parse body to object
		.then(result => result.json())
		// Error handler
		.catch(err => {
			console.error(err);
			return "";
		});

// Returns the latest msixbundle from the files github release
export const getReleaseUrl = async () =>
	await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
		// Parse body to object
		.then(result => result.json())

		// Find the first asset in the release that has a file extension of "msixbundle" and return it's download link
		.then(result =>
			result.assets.find((a: { name: string }) => a.name.endsWith(".zip"))?.browser_download_url
		)

		// Error handler
		.catch(err => {
			console.error(err);
			return "";
		});
