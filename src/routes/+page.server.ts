import { loadContributors, loadRepoStats } from "$data/repo-stats";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
	// GitHub answers 403 to requests without a User-Agent, which the Cloudflare
	// runtime doesn't send
	const github: typeof fetch = (input, init) =>
		fetch(input, {
			...init,
			headers: {
				accept: "application/vnd.github+json",
				"user-agent": "files.community",
			},
		});

	const [contributors, stats] = await Promise.all([
		loadContributors(github),
		loadRepoStats(github),
	]);

	// Four GitHub API calls per render, so let the CDN serve the page for an hour
	setHeaders({ "cache-control": "public, max-age=600, s-maxage=3600" });

	return { contributors, stats };
};
