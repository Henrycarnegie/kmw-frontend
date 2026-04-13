"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
   const { data: session, status } = useSession();

   const login = () => {
      signIn("google", { callbackUrl: "/member" });
   };

   const logout = () => {
      signOut({ callbackUrl: "/" });
   };

   return {
      user: session?.user,
      isLoading: status === "loading",
      isAuthenticated: status === "authenticated",
      login,
      logout,
   };
};