import { redirect } from "@sveltejs/kit";

export const load = ({ params }) => {
  redirect(`/docs/customize-settings/${params.rest ?? ""}`)
};