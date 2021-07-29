import type { Contributor } from "$types";
import { links } from "$stores/links";

const { owner, repo } = links.github;

export const getContributors: (pageNumber: number) => Promise<Contributor[]> = async (pageNumber: number = 1) =>
    await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=35&page=${pageNumber}`)
        .then(result => result.json())
        .then(result => result)
        .catch(err => {
            console.error(err);
            return "";
        });

export const getReleaseUrl = async () =>
    await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
        .then(result => result.json())
        .then(result => result.assets.find(a => a.name.endsWith(".msixbundle")).browser_download_url)
        .catch(err => {
            console.error(err);
            return "";
        });