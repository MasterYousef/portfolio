import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useActionState,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import SignUpAction from "./SignUpAction";

function SignUpLogic(setOpen: Dispatch<SetStateAction<boolean>>) {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [state, action, pending] = useActionState(SignUpAction, undefined);
  useEffect(() => {
    if (pending === false) {
      if (state === "success") {
        setOpen(false);
        router.refresh();
      } else if (
        state?.startsWith("Failed") ||
        state?.startsWith("Email") ||
        state?.startsWith("Password")
      ) {
        toast.error(state);
      }
    }
  }, [state, pending]);
  return { action, pending, login, setLogin };
}

export default SignUpLogic;
