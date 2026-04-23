"use client";

import React from "react";
import { AuthProvider } from "../providers/AuthProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <AuthProvider>{children}</AuthProvider>
      </>
   );
};

export default layout;
