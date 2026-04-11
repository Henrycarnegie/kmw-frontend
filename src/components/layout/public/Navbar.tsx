"use client";

import { motion } from "framer-motion";
import { Globe2, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../../ui/Button";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
   const pathName = usePathname();
   const navLinks = [
      { href: "/", label: "Home" },
      { href: "/sel_program", label: "SEL Program" },
      { href: "/get-involved", label: "Get Involved" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
   ];

   const [onClick, setOnClick] = useState(false);

   return (
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md px-5 md:px-10 py-4">
         <nav className="flex items-center justify-between bg">
            <Link href={"/"} className="inline-flex items-center gap-2 font-semibold">
               {<Globe2 className="size-10 text-blue-500" />} Know My World
            </Link>

            <div className="hidden md:flex gap-4">
               {navLinks.map((link) => (
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
               <Link href={"/login"}>
                  <Button>Login</Button>
               </Link>
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
                     {navLinks.map((link) => (
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
                     <div className="md:hidden w-full flex gap-4">
                        <Link href={"/login"} className="w-full">
                           <Button className="text-center!">Login</Button>
                        </Link>
                        <Link href={"/donate"} className="w-full">
                           <Button variant="secondary" className="text-center!">
                              Donate
                           </Button>
                        </Link>
                     </div>
                  </nav>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Navbar;
