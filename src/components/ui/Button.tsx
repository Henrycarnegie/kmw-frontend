interface ButtonProps {
   children: React.ReactNode;
   className?: string;
   variant?: "primary" | "secondary" | "danger" | "active" | "text";
   size?: "sm" | "md" | "lg";
   disabled?: boolean;
}

export default function Button({
   children,
   className = "",
   variant = "primary",
   size = "md",
   disabled = false,
   ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
   const baseStyle =
      "w-full text-left md:text-center rounded-lg font-medium transition focus:outline-none disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-50";

   const variants = {
      primary:
         "bg-blue-50 border border-blue-100 text-blue-900 hover:bg-blue-100",
      secondary: "bg-green-600 font-bold text-white hover:bg-green-700",
      danger: "bg-red-600 text-white hover:bg-red-700",
      active: "bg-sky-100 text-sky-700 hover:bg-sky-200",
      text: "text-gray-700 hover:bg-gray-100",
   };

   const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
   };

   return (
      <button
         disabled={disabled}
         className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
         {...props}
      >
         {children}
      </button>
   );
}
