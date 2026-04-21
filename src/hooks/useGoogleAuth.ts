"use client";

const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useGoogleAuth = () => {
   const loginWithGoogle = () => {
      window.location.href = `${backendUrl}/api/connect/google`;
   };

   const login = async (data: {
      identifier: string;
      password: string;
   }) => {
      try {
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

         // ✅ simpan ke localStorage
         localStorage.setItem("jwt", result.jwt);
         localStorage.setItem("username", result.user.username);
         localStorage.setItem("email", result.user.email);

         return result;
      } catch (err) {
         console.error("Login error:", err);
         return { error: "An unexpected error occurred" };
      }
   };

   const logout = () => {
      localStorage.clear();
      window.location.href = "/";
   };

   return {
      login,
      loginWithGoogle,
      logout,
   };
};
