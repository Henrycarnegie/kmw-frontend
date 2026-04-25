"use client";

import Sidebar from "@/src/components/layout/member/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex">
         <Sidebar />
         <div className="flex-1 bg-gray-50/50 min-h-screen p-8 overflow-y-auto">{children}</div>
      </div>
   );
};

export default layout;
