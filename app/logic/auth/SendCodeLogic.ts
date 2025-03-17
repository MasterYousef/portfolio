"use server";

import { postData } from "@/hooks/postData";
import { message } from "@/types/message";
import { cookies } from "next/headers";

async function SendCodeLogic(code: string) {
  const email = (await cookies()).get("email");
  if (!email) {
    return "Failed to send code, please try again later";
  }
  const data = { code, email: email?.value };
  const res = await postData<message>("/auth/send_code", data);
  if ("data" in res) {
    if (res.data.status === "success") {
      return "success";
    }
  } else {
    return "Failed to apply code, please try again later";
  }
}

export default SendCodeLogic;
