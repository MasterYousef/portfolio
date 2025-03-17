"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import SendCodeLogic from "@/app/logic/auth/SendCodeLogic";
import { toast, ToastContainer } from "react-toastify";
import ResetPassword from "./ResetPassword";

function SendCode({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [reset, setReset] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const message = await SendCodeLogic(code);
    console.log(message);
    if (message === "success") {
      setReset(true);
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
            type="text"
            placeholder="Enter your code"
            className="input w-3/4 mb-5 p-3 border rounded"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            type="submit"
            className="button w-3/4 text-2xl text-white hover:scale-110"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit Code"}
          </button>
        </form>
        <i
          onClick={() => setOpen(false)}
          className="fa-regular fa-circle-xmark text-4xl cursor-pointer text-red-600 transition-all duration-300 hover:text-black hover:scale-110 hover:bg-red-600 h-9 rounded-full flex items-center absolute top-5 right-5"
        />
      </motion.div>
      <ToastContainer />
      <ResetPassword open={reset} setOpen={setReset} />
    </Dialog>
  );
}

export default SendCode;
