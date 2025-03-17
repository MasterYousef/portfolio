"use server";

import { postData } from "@/hooks/postData";
import { UserResponse } from "@/types/user";
import { cookies } from "next/headers";

async function SignUpAction(state: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    role: "user",
  };
  if (data.password !== data.confirmPassword) return "Passwords not match";
  const res = await postData<UserResponse>("/auth/sign_up", data);
  const expire = new Date().getTime();
  if ("data" in res) {
    if (res.data.status === "success") {
      const store = await cookies();
      const options = {
        httpOnly: true,
        secure: false,
        sameSite: "strict" as any,
        expire: expire + 24 * 60 * 60 * 1000,
      };
      store.set("token", res.data.data.token, options);
      store.set("user", JSON.stringify(res.data.data.User), options);
    }
    return "success";
  } else if (res?.message === "Email already exists") {
    return "Email already exists";
  } else {
    return "Failed to sign up, please try again later";
  }
}

export default SignUpAction;
