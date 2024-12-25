import React from "react";
import GroupsPage from "./_components/GroupPage";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getMyUser, getUserGroups } from "@/actions/queries";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const uid = user?.id;
  const groupList = await getUserGroups(uid);
  console.log("These are the users groups: ", groupList);
  const userDB = await getMyUser(uid);
  return (
    <>
      <GroupsPage uid={uid}  groups={groupList} user={userDB} />
    </>
  );
};

export default page;
