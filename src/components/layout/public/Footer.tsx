import { Globe2 } from "lucide-react";
import React from "react";

const Footer = () => {
   return (
      <footer className="bg-gray-800 text-white py-8">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
               <div className="flex gap-4 border-b md:border-none mb-4">
                  <Globe2 className="size-10 text-blue-500"></Globe2>
                  <div className="mb-4 md:mb-0">
                     <h3 className="text-2xl font-bold">Know My World</h3>
                     <p className="text-sm text-gray-400">
                        Social Emotional Learning (SEL) for children
                     </p>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                  <div className="flex flex-col gap-2">
                     <h3 className="text-lg font-bold">Programs</h3>
                     <div className="flex flex-col gap-1">
                        <a href="#" className="text-sm opacity-60 hover:opacity-100 text-white">
                           SEL Courses
                        </a>
                        <a href="#" className="text-sm opacity-60 hover:opacity-100 text-white">
                           SECAL Framework
                        </a>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <h3 className="text-lg font-bold">Resources</h3>
                     <div className="flex flex-col gap-1">
                        <a href="#" className="text-sm opacity-60 hover:opacity-100 text-white">
                           Courses
                        </a>
                        <a href="#" className="text-sm opacity-60 hover:opacity-100 text-white">
                           Webinars
                        </a>
                        <a href="#" className="text-sm opacity-60 hover:opacity-100 text-white">
                           Blog
                        </a>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <h3 className="text-lg font-bold">Organization</h3>
                     <div className="flex flex-col gap-1">
                        <a href="#" className="text-sm opacity-60 hover:opacity-100 text-white">
                           About Us
                        </a>
                        <a href="#" className="text-sm opacity-60 hover:opacity-100 text-white">
                           Get Involved
                        </a>
                        <a href="#" className="text-sm opacity-60 hover:opacity-100 text-white">
                           Contact Us
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
