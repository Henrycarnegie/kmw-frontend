import React from "react";
import { motion } from "framer-motion";

interface LightBoxProps {
   children: React.ReactNode;
   onClick?: () => void;
   className?: string;
}

const LightBox = ({ children, onClick, className = "" }: LightBoxProps) => {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.95, y: 5 }}
         animate={{ opacity: 1, scale: 1, y: 0 }}
         exit={{ opacity: 0, scale: 0.95, y: 5 }}
         transition={{ duration: 0.15, ease: "easeOut" }}
         className={`absolute right-0 mt-3 z-100 origin-top-right ${className}`}
      >
         <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 min-w-[240px] overflow-hidden backdrop-saturate-150">
            <div onClick={onClick} className="w-full">
               {children}
            </div>
         </div>
      </motion.div>
   );
};

export default LightBox;
