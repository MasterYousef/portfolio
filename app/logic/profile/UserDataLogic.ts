"use client";

import { useState } from "react";

function UserDataLogic() {
  const [OpenChangePassword, setOpenChangePassword] = useState(false);
  const [OpenUpdateData, setOpenUpdateData] = useState(false);
  return {
    OpenChangePassword,
    setOpenChangePassword,
    OpenUpdateData,
    setOpenUpdateData,
  };
}

export default UserDataLogic;
