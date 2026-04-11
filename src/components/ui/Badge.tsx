import React from "react";

interface BadgeProps extends React.ComponentProps<"span"> {
   children: React.ReactNode;
   className?: string;
   variant: string;
}

const variants = {
   primary: "bg-blue-100 text-blue-800",
   secondary: "bg-green-100 text-green-800",
   danger: "bg-red-100 text-red-800",
   active: "bg-sky-100 text-sky-800",
   text: "bg-gray-100 text-gray-800",

   beginner: "bg-green-100 text-green-700",
   intermediate: "bg-amber-100 text-amber-700",
   advanced: "bg-red-100 text-red-700",
   expert: "bg-violet-100 text-violet-700",
};

const Badge = ({ children, className = "", variant, ...props }: BadgeProps) => {
   const baseStyle = "px-4 py-2 rounded-full text-xs font-medium";

   const normalizedVariant = variant.toLowerCase() as keyof typeof variants;

   return (
      <span
         className={`${baseStyle} ${variants[normalizedVariant]} ${className}`}
         {...props}
      >
         {children}
      </span>
   );
};

export default Badge;
