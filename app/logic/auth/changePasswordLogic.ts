"use server";

import { putDataWithToken } from "@/hooks/putData";
import { message } from "@/types/message";
import { cookies } from "next/headers";

async function ChangePasswordLogic(state: any, formData: FormData) {
  const store = await cookies();
  const token = store.get("token");
  const user = store.get("user");
  if (!token || !user) {
    return "Please Login first";
  }
  const data = {
    oldPassword: formData.get("oldPassword"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const res = await putDataWithToken<message>(
    `/auth/${JSON.parse(user.value)._id}/change_password`,
    data,
    token.value
  );
  console.log(res);

  if ("data" in res) {
    if (res.data.status === "success") {
      return "success";
    }
  } else {
    return "Failed to change password, please try again later";
  }
}

export default ChangePasswordLogic;
