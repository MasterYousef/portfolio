import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useActionState,
  useEffect,
  useState,
} from "react";
import LoginAction from "./LoginAction";
import { toast } from "react-toastify";

function LoginLogic(setOpen: Dispatch<SetStateAction<boolean>>) {
  const router = useRouter();
  const [state, action, pending] = useActionState(LoginAction, undefined);
  useEffect(() => {
    if (pending === false) {
      if (state === "success") {
        setOpen(false);
        router.refresh();
      } else if (state?.startsWith("Failed") || state?.startsWith("email")) {
        toast.error(state);
      }
    }
  }, [state, pending]);
  return { action, pending };
}

export default LoginLogic;
