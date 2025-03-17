import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function UpdateDataLogic(user: User, state: any, loading: boolean) {
  const [image, setImage] = useState(user.image || undefined);
  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };
  useEffect(() => {
    if (loading === false) {
      if (state === "success") {
        toast.success("updated successfully");
      }
      if (state?.startsWith("Failed")) {
        toast.error(state);
      }
    }
  }, [state, loading]);
  return { image, changeImage };
}

export default UpdateDataLogic;
