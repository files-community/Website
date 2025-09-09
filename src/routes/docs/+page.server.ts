import { redirect } from "@sveltejs/kit";

export const load = ({ params }) => {
	redirect(301, `/docs/getting-started/overview/${params.rest ?? ""}`);
};
