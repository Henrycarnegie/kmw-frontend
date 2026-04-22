"use client";

import { useState, useEffect } from "react";

type User = {
   jwt: string | null;
   username: string | null;
   email: string | null;
};

const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// ambil user langsung dari localStorage
const getUser = (): User | null => {
   if (typeof window === "undefined") return null;

   const jwt = localStorage.getItem("jwt");
   const username = localStorage.getItem("username");
   const email = localStorage.getItem("email");

   if (!jwt) return null;

   return { jwt, username, email };
};

export const useCredentialAuth = () => {
   const [user, setUser] = useState<User | null>(null);
   const [isLogged, setIsLogged] = useState(false);

   useEffect(() => {
      const storedUser = getUser();
      setUser(storedUser);
      setIsLogged(!!storedUser?.jwt);
   }, []);

   const login = async (data: {
      identifier: string;
      password: string;
   }) => {
      const res = await fetch(`${backendUrl}/api/auth/local`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
         return { error: result.error?.message || "Login failed" };
      }

      // simpan ke localStorage
      localStorage.setItem("jwt", result.jwt);
      localStorage.setItem("username", result.user.username);
      localStorage.setItem("email", result.user.email);

      // refresh UI
      window.location.href = "/";

      return result;
   };

   const signup = async (data: {
      username: string;
      email: string;
      password: string;
   }) => {
      const res = await fetch(`${backendUrl}/api/auth/local/register`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
         return { error: result.error?.message || "Signup failed" };
      }

      localStorage.setItem("jwt", result.jwt);
      localStorage.setItem("username", result.user.username);
      localStorage.setItem("email", result.user.email);

      // redirect supaya Navbar update
      window.location.href = "/";

      return result;
   };

   const logout = () => {
      localStorage.clear();
      window.location.href = "/";
   };

   return {
      user,
      isLogged,
      login,
      signup,
      logout,
   };
};