"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import SignUpLogic from "@/app/logic/auth/SignUpLogic";
import Login from "./Login";

function SignUp({
  open,
  setOpen,
}: Readonly<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>) {
  const { action, pending, login, setLogin } = SignUpLogic(setOpen);
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
        className="relative bg-white w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 py-5 z-50 rounded-md flex justify-center items-center"
      >
        <form
          className="flex flex-col w-full h-full justify-center items-center sign-up"
          action={action}
        >
          <i className="fa-solid fa-user-plus text-[7rem] mb-5 text-[color:var(--main-color)]"></i>
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email Address" name="email" />
          <input type="password" placeholder="Your Password" name="password" />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <p
            onClick={() => setLogin(true)}
            className="mb-3 hover:text-[color:var(--main-color)] cursor-pointer"
          >
            Already Have Account ?
          </p>
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
      <Login open={login} setOpen={setLogin} />
    </Dialog>
  );
}

export default SignUp;
