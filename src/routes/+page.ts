import { links } from "$data/links";

export type ContributorData = {
	login: string;
	avatar_url: string;
	contributions: number;
	html_url: string;
	type: "User" | "Bot";
};

export const load = async ({ fetch }) => {
	const githubContribData = (page: number) =>
		`https://api.github.com/repos/${links.github.owner}/${links.github.repo}/contributors?per_page=25&page=${page}`;

	const data = [1, 2, 3]
		.map(
			async (page): Promise<ContributorData[]> =>
				await (await fetch(githubContribData(page))).json()
		)
		.flat();

	return {
		contributors: data,
	};
};
