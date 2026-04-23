"use client";

import Footer from "@/src/components/layout/public/Footer";
import Navbar from "@/src/components/layout/public/Navbar";
import React from "react";
import { AuthProvider } from "../providers/AuthProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <AuthProvider>
            <Navbar />
            {children}
            <Footer />
         </AuthProvider>
      </>
   );
};

export default layout;
