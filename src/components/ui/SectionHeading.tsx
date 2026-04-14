"use client";
import { motion } from "framer-motion";
import React from "react";

interface SectionHeadingProps {
   title: string;
   subtitle?: string;
   centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
   title,
   subtitle,
   centered = true,
}) => {
   return (
      <div
         className={`mb-12 max-w-3xl ${
            centered ? "mx-auto text-center" : "text-left"
         }`}
      >
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
         >
            {title}
         </motion.h2>

         {subtitle && (
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-lg text-gray-600"
            >
               {subtitle}
            </motion.p>
         )}
      </div>
   );
};

export default SectionHeading;
