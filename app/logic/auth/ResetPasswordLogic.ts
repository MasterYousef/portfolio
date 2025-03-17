"use server";

import { putData } from "@/hooks/putData";
import { message } from "@/types/message";
import { cookies } from "next/headers";

async function ResetPasswordLogic(state: any, formData: FormData) {
  const store = await cookies();
  const email = store.get("email");
  if (!email) {
    return "Please provide a valid email";
  }
  const data = {
    email: email.value,
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const res = await putData<message>("/auth/reset_password", data);
  if ("data" in res) {
    if (res.data.status === "success") {
      return "success";
    }
  } else {
    return "Failed to reset password, please try again later";
  }
}

export default ResetPasswordLogic;
