"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import ForgotPasswordLogic from "@/app/logic/auth/ForgotPasswordLogic";
import { toast, ToastContainer } from "react-toastify";
import SendCode from "./SendCode";

function ForgotPassword({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const message = await ForgotPasswordLogic(email);
    setLoading(false);
    if (message === "reset code has sent to your email") {
      setCode(true);
    } else {
      toast.error(message);
    }
  };

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
          className="flex flex-col w-full h-full justify-center items-center"
          onSubmit={handleSubmit}
        >
          <i className="fa-solid fa-key text-[10rem] mb-5 text-[color:var(--main-color)]"></i>
          <input
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            className="input w-3/4 mb-5 p-3 border rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="button w-3/4 text-2xl text-white hover:scale-110"
            disabled={loading}
          >
            {loading ? "Loading..." : "Reset Password"}
          </button>
        </form>
        <i
          onClick={() => setOpen(false)}
          className="fa-regular fa-circle-xmark text-4xl cursor-pointer text-red-600 transition-all duration-300 hover:text-black hover:scale-110 hover:bg-red-600 h-9 rounded-full flex items-center absolute top-5 right-5"
        />
      </motion.div>
      <ToastContainer />
      <SendCode open={code} setOpen={setCode} />
    </Dialog>
  );
}

export default ForgotPassword;
