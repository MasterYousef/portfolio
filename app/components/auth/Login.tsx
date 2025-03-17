"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import LoginLogic from "@/app/logic/auth/LoginLogic";
import ForgotPassword from "../forgot-password/ForgotPassword";
import ForgotPasswordContainer from "../forgot-password/ForgotPasswordContainer";

function Login({
  open,
  setOpen,
}: Readonly<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>) {
  const { action, pending } = LoginLogic(setOpen);
  return (
    <Dialog
      className="flex z-40 justify-center items-center fixed inset-0"
      open={open}
      onClose={() => null}
    >
      <div className="bg-overlay z-40 w-full h-full fixed"></div>
      <motion.div className="relative bg-white w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-3/4 z-50 rounded-md flex justify-center items-center">
        <form
          className="flex flex-col w-full h-full justify-center items-center"
          action={action}
        >
          <i className="fa-solid fa-circle-user text-[10rem] mb-5 text-[color:var(--main-color)]"></i>
          <input
            type="email"
            required
            placeholder="Email Address"
            name="email"
            id=""
          />
          <input
            type="password"
            required
            placeholder="Your Password"
            name="password"
            id=""
          />
          <ForgotPasswordContainer />
          <button
            type="submit"
            disabled={pending}
            className={`button w-3/4 text-2xl hover:scale-110 ${
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

export default Login;
