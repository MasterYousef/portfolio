"use server";
import { putDataWithToken } from "@/hooks/putData";
import { UpdateUser, User, UserResponse } from "@/types/user";
import { cookies } from "next/headers";

async function UpdateUserDataAction(state: User, formData: FormData) {
  formData.get("username") === state.username
    ? formData.delete("username")
    : null;
  formData.get("email") === state.email ? formData.delete("email") : null;
  (formData.get("image") as any as File).size <= 0
    ? formData.delete("image")
    : null;
  const store = await cookies();
  const token = store.get("token") as any;
  const user = store.get("user") as any;
  if (!token || !user) {
    return "Please login first";
  } else {
    const id = JSON.parse(user.value)._id;
    const res = await putDataWithToken<UpdateUser>(
      `/auth/${id}`,
      formData,
      token.value
    );
    if ("data" in res) {
      if (res.data.status === "success") {
        const expire = new Date().getTime();
        store.set("user", JSON.stringify(res.data.data), {
          httpOnly: true,
          secure: false,
          sameSite: "strict" as any,
          expires: expire + 24 * 60 * 60 * 1000,
        });
        return "success";
      }
    } else {
      return "Failed to update please try again later";
    }
  }
}

export default UpdateUserDataAction;
