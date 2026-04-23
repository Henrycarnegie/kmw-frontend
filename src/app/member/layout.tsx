"use client";

import Sidebar from "@/src/components/layout/member/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex">
         <Sidebar />
         <div className="w-full bg-gray-100 p-4">{children}</div>
      </div>
   );
};

export default layout;
