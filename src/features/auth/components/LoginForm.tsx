"use client";

import Button from "@/src/components/ui/Button";
import InputLabel from "@/src/components/ui/InputLabel";
import TextInput from "@/src/components/ui/TextInput";
import { useGoogleAuth } from "@/src/hooks/useGoogleAuth";
import { Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormValue = {
   identifier: string;
   password: string;
};

// const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const LoginForm = () => {
   const router = useRouter();
   const { login, loginWithGoogle } = useGoogleAuth();
   const [error, setError] = useState<string | null>(null);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValue>();

   const onSubmit = async (data: FormValue) => {
      setError(null);
      const result = await login(data);

      if (result?.error) {
         console.error("Login failed:", result.error);
         setError(result.error);
      } else {
         console.log("Login successful");
         router.push("/");
         router.refresh();
      }
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
            {error && (
               <div className="p-3 bg-red-100 text-red-600 rounded text-sm">
                  {error}
               </div>
            )}
            <div className="flex flex-col">
               <InputLabel label="Email" />
               <TextInput
                  type="text"
                  placeholder="Email"
                  {...register("identifier", {
                     required: "Email is required",
                  })}
               />
               {errors.identifier && (
                  <span className="text-red-500 text-sm">
                     {errors.identifier.message}
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
               Login
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

            {/* Temporarily Disabled Google Auth Section */}
            <Button
               type="button"
               variant="outline"
               className="flex items-center gap-2 border-black! opacity-50 cursor-not-allowed"
               disabled
               onClick={loginWithGoogle}
            >
               <Image
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5 grayscale"
                  alt="Google"
                  width={20}
                  height={20}
               />
               Sign in with Google (Soon)
            </Button>
         </div>
      </div>
   );
};

export default LoginForm;
