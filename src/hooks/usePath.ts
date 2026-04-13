"use client";

import { usePathname } from "next/navigation";

export const usePath = () => {
   const pathName = usePathname();

   return { pathName };
};
