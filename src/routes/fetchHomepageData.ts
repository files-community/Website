import type { Contributor } from "$types";

import { links } from "$stores";

const { owner, repo } = links.github;

export const getReleaseVersion: () => Promise<string | undefined> = async () =>
	await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
		.then(result => result.json())
		.then((result: { tag_name: string }) => {
			if (result) return result.tag_name;
		})
		.catch(err => {
			console.error(err);
			return "";
		});

export const getContributors: (pageNumber: number) => Promise<Contributor[]> =
	async (pageNumber: number) =>
		await fetch(
			`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=35&page=${pageNumber}`
		)
			.then(result => result.json())
			.then(result => result)
			.catch(err => {
				console.error(err);
				return "";
			});