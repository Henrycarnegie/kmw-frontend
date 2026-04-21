"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import Button from "../../ui/Button";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useAuth } from "@/src/hooks/useAuth";
import Image from "next/image";
import LightBox from "../../ui/LightBox";
import { usePath } from "@/src/hooks/usePath";
import { navLandingPageLinks } from "@/src/constants/nav-links";

const Navbar = () => {
   const { pathName } = usePath();

   const { user, isAuthenticated, logout } = useAuth();
   const [onClick, setOnClick] = useState(false);

   const [openLightBox, setOpenLightBox] = useState(false);

   return (
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md px-5 md:px-10 py-4">
         <nav className="flex items-center justify-between bg">
            <Link
               href={"/"}
               className="inline-flex items-center gap-2 font-semibold"
            >
               <Image src="/logo.png" alt="Logo" width={40} height={40} /> Know
               My World
            </Link>

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
               {isAuthenticated && (
                  <Link href={"/member"}>
                     <Button
                        variant={pathName === "/member" ? "active" : "outline"}
                     >
                        Member
                     </Button>
                  </Link>
               )}
            </div>

            <div className="hidden md:flex gap-4">
               {/* Login */}
               {!isAuthenticated ? (
                  <Link href={"/login"}>
                     <Button variant="primary">Login / Signup</Button>
                  </Link>
               ) : (
                  <div className="relative">
                     <Button
                        variant="text"
                        onClick={() => setOpenLightBox((prev) => !prev)}
                     >
                        {user?.image && (
                           <Image
                              src={user.image}
                              alt={user.name || "User"}
                              width={24}
                              height={24}
                              className="rounded-full"
                           />
                        )}
                        {user?.name}
                     </Button>

                     <AnimatePresence>
                        {openLightBox && (
                           <LightBox onClick={() => setOpenLightBox(false)}>
                              <div className="px-2 py-2 w-full">
                                 <div className="px-2 pb-3 mb-2 border-b border-gray-100 flex flex-col">
                                    {user?.name && (
                                       <span className="text-sm font-semibold text-gray-800">
                                          {user.name}
                                       </span>
                                    )}
                                    <span className="text-xs text-gray-500 font-medium truncate">
                                       {user?.email}
                                    </span>
                                 </div>
                                 <div className="space-y-1">
                                    <Link href={"/member"} className="block">
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
                                       className="w-full justify-between! text-red-600 hover:bg-red-50 hover:text-red-700"
                                       icon={LogOut}
                                       onClick={logout}
                                    >
                                       Logout
                                    </Button>
                                 </div>
                              </div>
                           </LightBox>
                        )}
                     </AnimatePresence>
                  </div>
               )}
               <Link href={"/donate"}>
                  <Button variant="secondary">Donate</Button>
               </Link>
            </div>

            <div className="md:hidden">
               <Button
                  variant="text"
                  onClick={() => setOnClick((prev) => !prev)}
               >
                  {<Menu className="size-8"></Menu>}
               </Button>
            </div>
         </nav>
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
                     <div className="md:hidden w-full space-y-4">
                        <Link href={"/donate"} className="w-full">
                           <Button variant="secondary" className="text-center!">
                              Donate
                           </Button>
                        </Link>
                        {!isAuthenticated ? (
                           <Link href={"/login"}>
                              <Button variant="primary" className="mt-2">
                                 Login / Signup
                              </Button>
                           </Link>
                        ) : (
                           <>
                              <span className="flex items-center gap-2 text-center text-gray-500 my-2 mt-4 text-sm">
                                 <div className="w-full h-px bg-black" />{" "}
                                 profile{" "}
                                 <div className="w-full h-px bg-black" />
                              </span>
                              <Button variant="text">
                                 {user?.image && (
                                    <Image
                                       src={user.image}
                                       alt={user.name || "User"}
                                       width={24}
                                       height={24}
                                       className="rounded-full"
                                    />
                                 )}
                                 {user?.name}
                              </Button>
                              <div className="flex flex-col gap-4">
                                 <Link href={"/member"}>
                                    <Button variant="primary">Courses</Button>
                                 </Link>
                                 <Button variant="danger" onClick={logout}>
                                    Logout
                                 </Button>
                              </div>
                           </>
                        )}
                     </div>
                  </nav>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Navbar;
