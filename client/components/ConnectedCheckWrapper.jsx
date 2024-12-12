import { dashboardUserData, getUser } from "@/actions/getUser";
import React from "react";
import ConnectedCheck from "./ConnectedCheck";

const ConnectedCheckWrapper = async ({ children }) => {
  const data = await dashboardUserData();
  return (
    <div>
      <ConnectedCheck userData={data}>{children}</ConnectedCheck>
    </div>
  );
};

export default ConnectedCheckWrapper;
