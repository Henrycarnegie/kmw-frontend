"use client";

import Button from "@/src/components/ui/Button";
import InputLabel from "@/src/components/ui/InputLabel";
import TextInput from "@/src/components/ui/TextInput";
import { useAuth } from "@/src/hooks/useAuth";
import { Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type FormValue = {
   email: string;
   password: string;
};

const LoginForm = () => {
   const { login } = useAuth();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValue>();

   const onSubmit = (data: FormValue) => {
      console.log("FORM DATA:", data);
   };

   return (
      <div className="flex flex-col gap-4">
         <Link
            href={"/"}
            className="inline-flex items-center gap-2 font-semibold text-blue-500"
         >
            <Globe2 className="size-10 text-blue-500" /> Know My World
         </Link>

         <h1 className="text-4xl font-extrabold">Login</h1>

         <form
            className="flex flex-col gap-4 mb-8"
            onSubmit={handleSubmit(onSubmit)}
         >
            <div className="flex flex-col">
               <InputLabel label="Email" />
               <TextInput
               type="email"
                  placeholder="Email"
                  {...register("email", {
                     required: "Email is required",
                  })}
               />
               {errors.email && (
                  <span className="text-red-500 text-sm">
                     {errors.email.message}
                  </span>
               )}
            </div>

            <div className="flex flex-col">
               <InputLabel label="Password" />
               <TextInput
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                     required: "Password is required",
                     minLength: {
                        value: 6,
                        message: "Password minimal 6 karakter",
                     },
                  })}
               />
               {errors.password && (
                  <span className="text-red-500 text-sm">
                     {errors.password.message}
                  </span>
               )}
            </div>

            <Button type="submit" variant="primary">
               Sign Up
            </Button>
         </form>

         <div className="flex flex-col gap-2">
            <span className="text-center text-gray-500 text-sm">
               Don&apos;t have an account?
               <Link
                  href="/signup"
                  className="ml-2 text-blue-500 font-bold underline cursor-pointer"
               >
                  Create Now
               </Link>
            </span>

            <span className="inline-flex items-center gap-2 text-center text-gray-500 my-2 text-sm">
               <div className="w-full h-px bg-gray-300" /> or{" "}
               <div className="w-full h-px bg-gray-300" />
            </span>

            <Button
               type="button"
               variant="outline"
               className="flex items-center gap-2 border-black!"
               onClick={login}
            >
               <Image
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="Google"
                  width={20}
                  height={20}
               />
               Sign in with Google
            </Button>
         </div>
      </div>
   );
};

export default LoginForm;