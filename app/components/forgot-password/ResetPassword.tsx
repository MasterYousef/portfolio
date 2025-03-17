"use client";
import ResetPasswordLogic from "@/app/logic/auth/ResetPasswordLogic";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { toast } from "react-toastify";

function ResetPassword({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [state, action, pending] = useActionState(
    ResetPasswordLogic,
    undefined
  );
  useEffect(() => {
    if (pending === false) {
      if (state === "success") {
        toast.success("Password reset successfully!");
        window.location.href = "/";
      } else if (state?.startsWith("Failed") || state?.startsWith("Please")) {
        toast.error("Failed to reset password.");
      }
    }
  }, [state, pending]);
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
        className="relative bg-white w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 h-5/6 z-50 rounded-md flex justify-center items-center"
      >
        <form
          action={action}
          className="flex flex-col w-full h-full justify-center items-center"
        >
          <i className="fa-solid fa-lock text-[10rem] mb-5 text-[color:var(--main-color)]"></i>
          <input
            type="password"
            required
            placeholder="New Password"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            name="confirmPassword"
            required
          />
          <button
            type="submit"
            disabled={pending}
            className={`button w-3/4 text-2xl hover:scale-110 ${
              pending ? "text-gray-500" : "text-white"
            }`}
          >
            {pending ? "Loading..." : "Reset Password"}
          </button>
        </form>
        <i
          onClick={() => setOpen(false)}
          className="fa-regular fa-circle-xmark text-4xl cursor-pointer text-red-600 transition-all duration-300 hover:text-black hover:scale-110 hover:bg-red-600 h-9 rounded-full flex items-center absolute top-5 right-5"
        />
      </motion.div>
    </Dialog>
  );
}

export default ResetPassword;
