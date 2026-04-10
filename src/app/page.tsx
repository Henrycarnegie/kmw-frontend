import Link from "next/link";
import React from "react";
import { Globe2 } from "lucide-react";
import Button from "../components/ui/Button";

const Index = () => {
   const navLinks = [
      { href: "/", label: "Home" },
      { href: "/sel_program", label: "SEL Program" },
      { href: "/get-involved", label: "Get Involved" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
   ];

   return (
      <>
         <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
            <nav className="flex items-center justify-between bg">
               <Link href={"/"} className="inline-flex items-center gap-4">
                  {<Globe2 className="size-10 text-blue-500" />} Know My World
               </Link>

               <div className="flex gap-4">
                  {navLinks.map((link) => (
                     <Link key={link.href} href={link.href}>
                        {link.label}
                     </Link>
                  ))}
               </div>
               <div className="flex gap-4">
                  <Link href={"/login"}>
                     <Button>Login</Button>
                  </Link>
                  <Link href={"/donate"}>
                     <Button variant="secondary">Donate</Button>
                  </Link>
               </div>
            </nav>
         </header>

         <main>
            <div>Index Page</div>
         </main>
      </>
   );
};

export default Index;
