"use client";

import Footer from "@/src/components/layout/public/Footer";
import Navbar from "@/src/components/layout/public/Navbar";
import React from "react";
import { SessionProvider } from "next-auth/react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <SessionProvider>
            <Navbar />
            {children}
            <Footer />
         </SessionProvider>
      </>
   );
};

export default layout;
