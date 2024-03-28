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
		.map(async (page): Promise<ContributorData[]> => {
			const data = await fetch(githubContribData(page));
			if (!data.ok) throw Error("No data could be fetched from promise");
			return await data.json();
		})
		.flat();

	return {
		contributors: data,
	};
};
