"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GoogleRedirect() {
   const router = useRouter();
   const params = useSearchParams();

   useEffect(() => {
      const token = params.get("access_token");

      if (token) {
         localStorage.setItem("jwt", token);
         router.push("/");
      }
   }, [params, router]);

   return <p>Logging in...</p>;
}