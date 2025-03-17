import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";

function ForgotPasswordContainer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <p
        onClick={() => setOpen(true)}
        className="mb-3 hover:text-[color:var(--main-color)] cursor-pointer"
      >
        Forgot Your Password ?
      </p>
      <ForgotPassword open={open} setOpen={setOpen} />
    </>
  );
}

export default ForgotPasswordContainer;
