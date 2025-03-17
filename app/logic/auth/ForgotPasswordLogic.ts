"use server";

import { postData } from "@/hooks/postData";
import { message } from "@/types/message";
import { cookies } from "next/headers";

async function ForgotPasswordLogic(email: string) {
  const data = { email };
  const res = await postData<message>("/auth/forgot_password", data);
  if ("data" in res) {
    if (res.data.status === "success") {
      const expire = new Date().getTime();
      (await cookies()).set("email", email, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        expires: expire + 5 * 60 * 1000,
      });
      return res.data.data.message;
    }
  } else {
    return "Failed to send reset code, please try again later";
  }
}

export default ForgotPasswordLogic;
