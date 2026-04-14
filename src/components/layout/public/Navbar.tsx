"use client";

import { motion } from "framer-motion";
import { Globe2, Menu } from "lucide-react";
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

   const { user, isAuthenticated, login, logout } = useAuth();
   const [onClick, setOnClick] = useState(false);

   const [openLightBox, setOpenLightBox] = useState(false);

   return (
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md px-5 md:px-10 py-4">
         <nav className="flex items-center justify-between bg">
            <Link
               href={"/"}
               className="inline-flex items-center gap-2 font-semibold"
            >
               {<Globe2 className="size-10 text-blue-500" />} Know My World
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
            </div>

            <div className="hidden md:flex gap-4">
               {/* Login */}
               {!isAuthenticated ? (
                  <Button variant="primary" onClick={login}>
                     Login / Signup
                  </Button>
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

                     {openLightBox && (
                        <LightBox onClick={() => setOpenLightBox(false)}>
                           <div className="flex flex-col gap-4">
                              {user?.email}
                              <Link href={"/member"}>
                                 <Button variant="primary">Courses</Button>
                              </Link>
                              <Button variant="danger" onClick={logout}>
                                 Logout
                              </Button>
                           </div>
                        </LightBox>
                     )}
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
                           <Button variant="primary" onClick={login}>
                              Login
                           </Button>
                        ) : (
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
