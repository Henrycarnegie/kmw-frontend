import React from "react";

interface LightBoxProps {
   children: React.ReactNode;
}

const LightBox = ({ children }: LightBoxProps) => {
   return (
      <div className="fixed right-38 top-19 z-50 flex items-center justify-center">
         <div className="relative bg-white p-4 pr-8 rounded-lg border border-gray-100 shadow-lg">
            <button className="w-full text-right text-gray-600">X</button>
            {children}
         </div>
      </div>
   );
};

export default LightBox;
