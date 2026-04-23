"use client";

export const useCredentialAuth = () => {

   const login = async (data: { identifier: string; password: string }) => {
      const res = await fetch(`/api/auth/login`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
         return { error: result.error || "Login failed" };
      }

      window.location.href = "/";
      return result;
   };

   const signup = async (data: {
      username: string;
      email: string;
      password: string;
   }) => {
      const res = await fetch("/api/auth/signup", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
         return { error: result.error };
      }

      window.location.href = "/";
      return result;
   };

   const logout = async () => {
      await fetch("/api/auth/logout", {
         method: "POST",
      });

      window.location.href = "/";
   };

   return {
      login,
      signup,
      logout,
   };
};
