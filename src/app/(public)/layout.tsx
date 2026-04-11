import Footer from "@/src/components/layout/public/Footer";
import Navbar from "@/src/components/layout/public/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   );
};

export default layout;
