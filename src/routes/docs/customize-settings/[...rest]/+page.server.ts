// src/routes/docs/customize-settings/[...rest]/page.server.ts
import { redirect } from "@sveltejs/kit";

export const load = ({ params }) => {
  if (params.rest === "custom-themes") redirect(301, "/docs/customize-settings/appearance");
  if (params.rest === "replace-file-explorer") redirect(301, "/docs/customize-settings/advanced");
  if (params.rest === "keyboard-shortcuts") redirect(301, "/docs/customize-settings/actions");
  return
};