export default function Button({
   children,
   className = "",
   variant = "primary",
   ...props
}) {
   const variantStyle = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 transition",
      secondary: "bg-green-600 text-white hover:bg-green-700 transition",
   };
   return (
      <button
         className={`px-4 py-2 rounded ${variantStyle[variant]} ${className}`}
         {...props}
      >
         {children}
      </button>
   );
}
