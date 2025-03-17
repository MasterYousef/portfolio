"use server";

import { cookies } from "next/headers";
async function getUserDataHook() {
  const store = await cookies();
  const user = store.get("user");
  const token = store.get("token");
  if (!user || !token) {
    return undefined;
  } else {
    return {
      user: JSON.parse(user?.value),
      token: token,
    };
  }
}

export default getUserDataHook;
