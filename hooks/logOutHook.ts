"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function useProfileLogic() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/log-out", {
      method: "POST",
    });
    router.refresh();
  };

  return {
    open,
    setOpen,
    handleLogout,
  };
}

export default useProfileLogic;
