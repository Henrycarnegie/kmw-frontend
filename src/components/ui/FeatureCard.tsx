"use client";

import { motion } from "framer-motion";
import React from "react";

interface FeatureCardProps {
   title: string;
   description: React.ReactNode;
   icon: React.ReactNode;
   delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
   title,
   description,
   icon,
   delay = 0,
}) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-50px" }}
         transition={{ duration: 0.6, delay }}
         className="group relative bg-white/70 backdrop-blur-xl border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
      >
         {/* Subtle gradient background on hover */}
         <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 via-transparent to-transparent group-hover:from-blue-50/50 group-hover:to-transparent transition-colors duration-500 z-0 pointer-events-none" />

         <div className="relative z-10">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
               {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
         </div>
      </motion.div>
   );
};

export default FeatureCard;
