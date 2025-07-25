"use server";

import { cookies } from "next/headers";

export const setCookie = async (userId: string) => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "userId",
    value: userId,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });
};
