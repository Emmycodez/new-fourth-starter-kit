"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { getMyUser } from "./queries";

export async function getUser() {
  const { getUser, isAuthenticated, getAccessTokenRaw } =
    getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();
  const accessToken = await getAccessTokenRaw();

  if (!isUserAuthenticated) {
    redirect("/site/unauthorized");
  }

  // Return both user and accessToken as an object
  return { user, accessToken };
}

export const dashboardUserData = async () => {
  const data = await getUser();
  const uid = data?.user?.id;

  const userData = await getMyUser(uid);
  return userData;
};
