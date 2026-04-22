"use client";

const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useGoogleAuth = () => {
   const loginWithGoogle = () => {
      window.location.href = `${backendUrl}/api/connect/google`;
   };

   const logout = () => {
      localStorage.clear();
      window.location.href = "/";
   };

   return {
      loginWithGoogle,
      logout,
   };
};
