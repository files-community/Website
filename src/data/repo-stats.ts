import { links } from "$data/links";

export type RepoStats = {
	stars: number;
	contributors: number;
	releasesThisYear: number;
};

export type ContributorData = {
	login: string;
	avatar_url: string;
	contributions: number;
	html_url: string;
	type: "User" | "Bot";
};

const api = `https://api.github.com/repos/${links.github.owner}/${links.github.repo}`;

const get = async (fetch: typeof globalThis.fetch, path: string) => {
	const response = await fetch(`${api}${path}`);
	if (!response.ok) throw Error(`GitHub API returned ${response.status}`);
	return response;
};

// Counts from 25 Oct 2026, used when GitHub can't be reached (it allows 60
// unauthenticated calls an hour per IP, shared on Cloudflare). Stars and
// contributors are shown rounded down, so these stay true as they grow.
const snapshot = { stars: 46213, contributors: 312, releasesThisYear: 16 };

export const loadRepoStats = async (
	fetch: typeof globalThis.fetch,
): Promise<RepoStats> => {
	const [stars, contributors, releasesThisYear] = await Promise.all([
		get(fetch, "")
			.then(r => r.json())
			.then(repo => repo.stargazers_count as number)
			.catch(() => snapshot.stars),
		// With one contributor per page, the last page number is the count
		get(fetch, "/contributors?per_page=1")
			.then(
				r =>
					Number(
						r.headers.get("link")?.match(/[?&]page=(\d+)>; rel="last"/)?.[1],
					) || snapshot.contributors,
			)
			.catch(() => snapshot.contributors),
		get(fetch, "/releases?per_page=100")
			.then(r => r.json())
			.then(
				(releases: { prerelease: boolean; published_at: string }[]) =>
					releases.filter(
						r =>
							!r.prerelease &&
							Date.now() - Date.parse(r.published_at) <
								365 * 24 * 60 * 60 * 1000,
					).length,
			)
			.catch(() => snapshot.releasesThisYear),
	]);

	return { stars, contributors, releasesThisYear };
};

// An empty list hides the facepile if GitHub can't be reached
export const loadContributors = (
	fetch: typeof globalThis.fetch,
): Promise<ContributorData[]> =>
	get(fetch, "/contributors?per_page=30")
		.then(r => r.json() as Promise<ContributorData[]>)
		.then(contributors => contributors.filter(c => c.type === "User"))
		.catch(() => []);
