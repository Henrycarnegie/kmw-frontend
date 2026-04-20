import { LucideIcon } from "lucide-react";

interface ButtonProps {
   children: React.ReactNode;
   className?: string;
   variant?: "primary" | "secondary" | "danger" | "active" | "text" | "outline";
   size?: "sm" | "md" | "lg";
   disabled?: boolean;
   icon?: LucideIcon;
}

export default function Button({
   children,
   className = "",
   variant = "primary",
   size = "md",
   disabled = false,
   icon: Icon,
   ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
   const baseStyle =
      "group w-full text-left rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 focus:outline-none disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer";

   const variants = {
      primary:
         "bg-sky-500 border border-sky-100 text-white hover:bg-sky-600",
      secondary: "bg-blue-600 font-extrabold text-white hover:bg-blue-700",
      danger: "bg-red-500 text-white hover:bg-red-600",
      outline:
         "bg-white border border-gray-200 text-gray-700 hover:border-gray-300",
      active: "bg-sky-100 text-sky-700 hover:bg-sky-200",
      text: "text-gray-700 hover:bg-gray-100",
   };

   const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-lg",
   };

   return (
      <button
         disabled={disabled}
         className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
         {...props}
      >
         {children}
         {Icon && <Icon className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />}
      </button>
   );
}
