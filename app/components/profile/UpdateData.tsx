"use client";
import UpdateDataLogic from "@/app/logic/profile/UpdateDataLogic";
import UpdateUserDataAction from "@/app/logic/profile/UpdateUserDataAction";
import { User } from "@/types/user";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useActionState, useCallback } from "react";
import { ToastContainer } from "react-toastify";
function UpdateData({
  open,
  setOpen,
  user,
}: Readonly<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: User;
}>) {
  const dataActions = (state: string | undefined, payload: FormData) =>
    UpdateUserDataAction(user, payload);
  const [state, action, pending] = useActionState(dataActions, undefined);
  const logic = UpdateDataLogic(user, state, pending);
  return (
    <Dialog
      className="flex z-40 justify-center items-center fixed inset-0"
      open={open}
      onClose={() => null}
    >
      <div className="bg-overlay z-40 w-full h-full fixed"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative bg-white w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 h-3/4 z-50 rounded-md flex justify-center items-center"
      >
        <form
          action={action}
          className="flex flex-col w-full h-full justify-center items-center"
        >
          <input
            type="file"
            defaultValue={undefined}
            name="image"
            onChange={logic.changeImage}
            id="image"
            className="hidden"
          />
          <label
            htmlFor="image"
            className="cursor-pointer text-[10rem] text-[color:var(--main-color)]"
          >
            {logic.image ? (
              <Image
                src={logic.image}
                className="rounded-full w-40 h-40 mb-5"
                alt="profile"
                width={500}
                height={500}
              />
            ) : (
              <i className="fa-solid fa-circle-user" />
            )}
          </label>
          <input
            type="text"
            required
            defaultValue={user.username}
            placeholder="Username"
            name="username"
          />
          <input
            required
            type="email"
            defaultValue={user.email}
            placeholder="Email Address"
            name="email"
          />
          <button
            disabled={pending}
            type="submit"
            className={`button w-3/4 text-2xl text-white hover:scale-110 ${
              pending ? "text-gray-500" : "text-white"
            }`}
          >
            {pending ? "loading..." : "Confirm"}
          </button>
        </form>
        <i
          onClick={() => setOpen(false)}
          className="fa-regular fa-circle-xmark text-4xl cursor-pointer text-red-600 transition-all duration-300 hover:text-black hover:scale-110 hover:bg-red-600 h-9 rounded-full flex items-center absolute top-5 right-5"
        />
      </motion.div>
      <ToastContainer />
    </Dialog>
  );
}

export default UpdateData;
