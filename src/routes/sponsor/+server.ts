import { sponsorTeam } from "$data/links";
import type { RequestHandler } from "./$types";

// A random member on every visit, so sponsorships are spread across the team
// and nobody has to pick. Not cached, or the browser would keep one of them
export const GET: RequestHandler = () => {
	const member = sponsorTeam[Math.floor(Math.random() * sponsorTeam.length)];

	return new Response(null, {
		status: 302,
		headers: {
			Location: `https://github.com/sponsors/${member}`,
			"Cache-Control": "no-store",
		},
	});
};
