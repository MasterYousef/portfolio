"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import ChangePassword from "./ChangePassword";
import UserDataLogic from "@/app/logic/profile/UserDataLogic";
import UpdateData from "./UpdateData";
import { User } from "@/types/user";
import Image from "next/image";
function UserData({
  open,
  setOpen,
  user,
}: Readonly<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: User;
}>) {
  const logic = UserDataLogic();
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
        transition={{ duration: 0.5 }}
        className="relative bg-white w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 h-3/4 z-50 rounded-md flex justify-center items-center"
      >
        <div className="flex flex-col w-full font-mono h-full justify-center items-center">
          {user.image ? (
            <Image
              src={user.image}
              alt="profile"
              width={500}
              height={500}
              className="w-40 h-40 rounded-full"
            />
          ) : (
            <i className="fa-solid fa-circle-user text-[10rem] mb-5 text-[color:var(--main-color)]" />
          )}

          <h2 className="text-3xl my-3">{user.username}</h2>
          <p className="text-xl mb-5">{user.email}</p>
          <div className="flex w-3/4 flex-col">
            <button
              onClick={() => logic.setOpenChangePassword(true)}
              className="button text-xl sm:text-2xl  text-white hover:scale-110"
            >
              Change Password
            </button>
            <button
              onClick={() => logic.setOpenUpdateData(true)}
              className="button text-xl sm:text-2xl my-3 text-white hover:scale-110"
            >
              Update Data
            </button>
          </div>
        </div>
        <i
          onClick={() => setOpen(false)}
          className="fa-regular fa-circle-xmark text-4xl cursor-pointer text-red-600 transition-all duration-300 hover:text-black hover:scale-110 hover:bg-red-600 h-9 rounded-full flex items-center absolute top-5 right-5"
        />
      </motion.div>
      <ChangePassword
        open={logic.OpenChangePassword}
        setOpen={logic.setOpenChangePassword}
      />
      <UpdateData
        open={logic.OpenUpdateData}
        setOpen={logic.setOpenUpdateData}
        user={user}
      />
    </Dialog>
  );
}

export default UserData;
