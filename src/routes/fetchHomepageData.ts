import type { Contributor } from "$types";
import { links } from "$stores";

const { owner, repo } = links.github;

export const getContributors: (pageNumber: number) => Promise<Contributor[]> = async (pageNumber: number = 1) =>
    await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=35&page=${pageNumber}`)
        .then(result => result.json())
        .then(result => result)
        .catch(err => {
            console.error(err);
            return "";
        });