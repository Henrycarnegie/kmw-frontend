"use client";

import { useEffect, useState } from "react";

type User = {
   id: number;
   username: string;
   email: string;
};

export const useCredentialAuth = () => {
   const [user, setUser] = useState<User | null>(null);
   const [isLogged, setIsLogged] = useState<boolean | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("/api/me")
         .then(async (res) => {
            if (res.status === 401) {
               return null;
            }
            return res.json();
         })
         .then((data) => {
            setUser(data);
            setIsLogged(true);
         })
         .catch(() => {
            setUser(null);
            setIsLogged(false);
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);

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
      user,
      isLogged,
      loading, // ✅ penting
      login,
      signup,
      logout,
   };
};
