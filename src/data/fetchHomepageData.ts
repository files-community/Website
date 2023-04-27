import { links } from "$data/links";

const { owner, repo } = links.github;

export type ContributorData = {
	login: string;
	avatar_url: string;
	contributions: number;
	html_url: string;
	type: "User" | "Bot";
};

// Returns a list of 25 paged contributors to the files-community/files repository
export const getContributors: (
	pageNumber: number
) => Promise<ContributorData[]> = async (pageNumber = 0) =>
	await fetch(
		`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=25&page=${pageNumber}`
	)
		// Parse body to object
		.then(result => result.json())
		// Error handler
		.catch(err => {
			console.error(err);
			return "";
		});
