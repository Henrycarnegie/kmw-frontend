"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <SessionProvider>
            {children}
         </SessionProvider>
      </>
   );
};

export default layout;
