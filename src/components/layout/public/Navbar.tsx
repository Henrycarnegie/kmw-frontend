"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import Button from "../../ui/Button";
import { useState } from "react";
import Image from "next/image";
import LightBox from "../../ui/LightBox";
import { usePath } from "@/src/hooks/usePath";
import { navLandingPageLinks } from "@/src/constants/nav-links";
import { useCredentialAuth } from "@/src/hooks/useCredentialAuth";

const Navbar = () => {
   const { pathName } = usePath();
   const [onClick, setOnClick] = useState(false);
   const [openLightBox, setOpenLightBox] = useState(false);

   const { user, isLogged, logout } = useCredentialAuth();

   return (
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md px-5 md:px-10 py-4">
         <nav className="flex items-center justify-between">
            {/* LOGO */}
            <Link
               href="/"
               className="inline-flex items-center gap-2 font-semibold"
            >
               <Image src="/logo.png" alt="Logo" width={40} height={40} />
               Know My World
            </Link>

            {/* MENU */}
            <div className="hidden md:flex gap-4">
               {navLandingPageLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                     <Button
                        variant={pathName === link.href ? "active" : "text"}
                     >
                        {link.label}
                     </Button>
                  </Link>
               ))}

               <Link href={isLogged ? "/member" : "/login"}>
                  <Button
                     variant={pathName === "/member" ? "active" : "outline"}
                  >
                     Courses
                  </Button>
               </Link>
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex gap-4">
               {isLogged && user ? (
                  <div className="relative">
                     <Button
                        variant="text"
                        onClick={() => setOpenLightBox((prev) => !prev)}
                     >
                        {user.username}
                     </Button>

                     <AnimatePresence>
                        {openLightBox && (
                           <LightBox onClick={() => setOpenLightBox(false)}>
                              <div className="px-2 py-2 w-full">
                                 <div className="px-2 pb-3 mb-2 border-b border-gray-100 flex flex-col">
                                    <span className="text-sm font-semibold text-gray-800">
                                       {user.username}
                                    </span>
                                    <span className="text-xs text-gray-500 truncate">
                                       {user.email}
                                    </span>
                                 </div>

                                 {/* <div className="space-y-1"> */}
                                    <Link href="/member">
                                       <Button
                                          variant="text"
                                          className="w-full justify-between!"
                                          icon={ArrowUpRight}
                                       >
                                          Courses
                                       </Button>
                                    </Link>

                                 <Button
                                    variant="text"
                                    className="w-full justify-between! text-red-600"
                                    icon={LogOut}
                                    onClick={() => logout()}
                                 >
                                    Logout
                                 </Button>
                              </div>
                           </LightBox>
                        )}
                     </AnimatePresence>
                  </div>
               ) : (
                  <Link href="/login">
                     <Button variant="primary">Login / Signup</Button>
                  </Link>
               )}

               <Link href="/donate">
                  <Button variant="secondary">Donate</Button>
               </Link>
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
               <Button
                  variant="text"
                  onClick={() => setOnClick((prev) => !prev)}
               >
                  <Menu className="size-8" />
               </Button>
            </div>
         </nav>

         {/* MOBILE MENU */}
         <AnimatePresence>
            {onClick && (
               <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden overflow-hidden bg-card"
               >
                  <nav className="flex flex-col p-4 gap-1">
                     {navLandingPageLinks.map((link) => (
                        <Link
                           key={link.href}
                           href={link.href}
                           onClick={() => setOnClick(false)}
                        >
                           <Button
                              variant={
                                 pathName === link.href ? "active" : "text"
                              }
                              className="block!"
                           >
                              {link.label}
                           </Button>
                        </Link>
                     ))}

                     <Link href="/donate">
                        <Button variant="secondary" className="w-full">
                           Donate
                        </Button>
                     </Link>

                     {!isLogged ? (
                        <Link href="/login">
                           <Button variant="primary" className="w-full">
                              Login / Signup
                           </Button>
                        </Link>
                     ) : (
                        <>
                           <div className="text-center text-sm text-gray-500 my-2">
                              {user?.username}
                           </div>

                           <Link href="/member">
                              <Button variant="primary" className="w-full">
                                 Courses
                              </Button>
                           </Link>

                           <Button
                              variant="danger"
                              className="w-full"
                              onClick={() => {
                                 logout();
                                 setOnClick(false);
                              }}
                           >
                              Logout
                           </Button>
                        </>
                     )}
                  </nav>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Navbar;
