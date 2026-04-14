import React from "react";

type BaseProps = {
   textarea?: boolean;
   className?: string;
   disabled?: boolean;
   required?: boolean;
};

type InputProps = BaseProps &
   React.InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = BaseProps &
   React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
      textarea: true;
   };

type TextInputProps = InputProps | TextareaProps;

const baseClasses =
   "bg-white text-gray-900 w-full rounded-md border border-gray-300 py-3 px-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors";

const TextInput = React.forwardRef<
   HTMLInputElement | HTMLTextAreaElement,
   TextInputProps
>((props, ref) => {
   const {
      textarea,
      className = "",
      disabled = false,
      required = true,
      ...rest
   } = props;
    if (textarea) {
      return (
         <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={`${baseClasses} ${className}`}
            disabled={disabled}
            required={required}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
         />
      );
   }

   return (
      <input
         ref={ref as React.Ref<HTMLInputElement>}
         className={`${baseClasses} ${className}`}
         disabled={disabled}
         required={required}
         {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
      />
   );
});

TextInput.displayName = "TextInput";

export default TextInput;
