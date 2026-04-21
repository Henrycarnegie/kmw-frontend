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
   username: string;
   email: string;
   password: string;
};

const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const SignupForm = () => {
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
      try {
         const response = await fetch(`${backendUrl}/api/auth/local/register`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         const result = await response.json();

         if (response.ok) {
            console.log("Signup successful, logging in...");
            // Automatically login after signup
            const loginResult = await login({
               identifier: data.email,
               password: data.password,
            });

            if (loginResult?.error) {
               setError(
                  "Signup successful, but auto-login failed. Please login manually.",
               );
               router.push("/login");
            } else {
               router.push("/");
               router.refresh();
            }
         } else {
            console.error("Signup failed:", result);
            setError(
               result.error?.message || "Signup failed. Please try again.",
            );
         }
      } catch (err) {
         console.error("Signup error:", err);
         setError("An unexpected error occurred. Please try again.");
      }
   };

   return (
      <div className="flex flex-col gap-4">
         <Link
            href={"/"}
            className="inline-flex items-center gap-2 font-semibold text-blue-500"
         >
            {<Globe2 className="size-10 text-blue-500" />} Know My World
         </Link>

         <h1 className="text-4xl font-extrabold">Create Account</h1>

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
               <InputLabel label="Username" />
               <TextInput
                  type="text"
                  placeholder="Username"
                  {...register("username", {
                     required: "Username is required",
                  })}
               />
               {errors.username && (
                  <span className="text-red-500 text-sm">
                     {errors.username.message}
                  </span>
               )}
            </div>
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
                        message: "Password minimun 6 characters",
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
               Already have an account?
               <Link
                  href="/login"
                  className="ml-2 text-blue-500 font-bold underline cursor-pointer"
               >
                  Login Now
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

export default SignupForm;
