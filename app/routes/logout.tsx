import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { logout } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  return logout(request);
};

// if someone lands on this page accidentally, it will just redirect them home
export const loader: LoaderFunction = async () => {
  return redirect("/");
};
