import React from "react";

interface TextInputProps {
   placeholder: string;
   name: string;
   type?: string;
   className?: string;
   textarea?: boolean;
   disabled?: boolean;
   required?: boolean;
}

const TextInput = ({
   required = true,
   disabled = false,
   placeholder,
   textarea = false,
   type = "text",
   className = "",
   name,
   ...props
}: TextInputProps &
   React.InputHTMLAttributes<HTMLInputElement> &
   React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
   const baseClasses =
      "bg-white text-gray-900 w-full rounded-md border border-gray-300 py-3 pl-8 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors";
   return textarea ? (
      <textarea
         required={required}
         disabled={disabled}
         name={name}
         placeholder={placeholder}
         className={` ${baseClasses} ${className}`}
         minLength={60}
         maxLength={525}
         {...props}
      />
   ) : (
      <input
         required={required}
         disabled={disabled}
         name={name}
         placeholder={placeholder}
         type={type}
         className={` ${baseClasses} ${className}`}
         {...props}
      />
   );
};

export default TextInput;
