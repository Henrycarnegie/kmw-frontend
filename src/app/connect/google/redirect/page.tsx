"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function GoogleRedirect() {
   const router = useRouter();
   const params = useSearchParams();

   useEffect(() => {
      const access_token = params.get("access_token");

      if (!access_token) {
         router.push("/login");
         return;
      }

      fetch("/api/auth/google/callback", {
         method: "POST",
         credentials: "include",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ access_token }),
      })
         .then((res) => {
            if (!res.ok) throw new Error();
            return res.json();
         })
         .then(() => {
            router.push("/");
         })
         .catch(() => {
            router.push("/login");
         });
   }, [params, router]);
   return <p>Logging in with Google...</p>;
}
