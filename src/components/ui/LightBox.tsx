import React from "react";
import { motion } from "framer-motion";

interface LightBoxProps {
   children: React.ReactNode;
   onClick: () => void;
}

const LightBox = ({ children, onClick }: LightBoxProps) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -10 }}
         className="absolute right-0 mt-2 z-0"
      >
         <div className="bg-white p-4 rounded-lg border shadow-lg min-w-[200px]">
            <div onClick={onClick}>{children}</div>
         </div>
      </motion.div>
   );
};

export default LightBox;
