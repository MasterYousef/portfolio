"use server";

import { postData } from "@/hooks/postData";
import { UserResponse } from "@/types/user";
import { cookies } from "next/headers";

async function LoginAction(state: any, formData: FormData) {
  "use server";
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const res = await postData<UserResponse>("/auth/login", data);
  const expire = new Date().getTime();
  if ("data" in res) {
    if (res.data.status === "success") {
      const store = await cookies();
      const options = {
        httpOnly: true,
        secure: false,
        sameSite: "strict" as any,
        expires: expire + 24 * 60 * 60 * 1000,
      };
      store.set("token", res.data.data.token, options);
      store.set("user", JSON.stringify(res.data.data.User), options);
    }
    return "success";
  } else if (
    res?.message === "email not found" ||
    res?.message === "password not correct"
  ) {
    return "email or password are incorrect";
  } else {
    return "Failed to login please try again later";
  }
}

export default LoginAction;
