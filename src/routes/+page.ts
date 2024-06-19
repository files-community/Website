import { links } from "$data/links";

export type ContributorData = {
	login: string;
	avatar_url: string;
	contributions: number;
	html_url: string;
	type: "User" | "Bot";
};

export const load = async ({ fetch }) => {
	return {
		contributors: [1, 2, 3]
			.map(
				async page =>
					await fetch(
						`https://api.github.com/repos/${links.github.owner}/${links.github.repo}/contributors?per_page=25&page=${page}`,
					)
						.then<ContributorData[]>(r => r.json())
						.catch(() => {
							throw Error("No data could be fetched from promise");
						}),
			)
			.flat(),
	};
};
