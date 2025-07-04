"use client";

import { setCookie } from "@/app/actions/setCookie";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};
function AuthWrapper({ children }: Props) {
  const userId = "1111-1111-1111-1111";
  useEffect(() => {
    setCookie(userId);
  }, [userId]);

  return <>{children}</>;
}

export default AuthWrapper;
