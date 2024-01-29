// src/routes/docs/customize-settings/[...rest]/page.server.ts
import { redirect } from "@sveltejs/kit";

export const load = ({ params }) => {
  if (params.rest === "custom-themes") redirect("/docs/customize-settings/appearance");
  if (params.rest === "replace-file-explorer") redirect("/docs/customize-settings/advanced");
  redirect(`/docs/customize-settings/${params.rest}`)
};