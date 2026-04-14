import Button from "../../ui/Button";
import { useAuth } from "@/src/hooks/useAuth";
import Link from "next/link";
import { usePath } from "@/src/hooks/usePath";
import { navSidebarLinks } from "@/src/constants/nav-links";
import { Globe2 } from "lucide-react";

const Sidebar = () => {
   const { pathName } = usePath();

   const { logout } = useAuth();

   return (
      <div className="w-64 bg-white h-screen border-r border-gray-200 shadow-md">
         <Link href="/" className="w-full border-b border-gray-200">
            <div className="flex items-center gap-3 px-4 py-4">
               <Globe2 className="size-6 text-blue-500 shrink-0" />
               <span className="font-semibold text-gray-800 text-base leading-none">
                  Know My World
               </span>
            </div>
         </Link>
         <nav className="h-[calc(100vh-5rem)] flex flex-col justify-between">
            <div className="p-4">
               {navSidebarLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                     <Link key={link.href} href={link.href}>
                        <Button
                           variant={pathName === link.href ? "active" : "text"}
                           className="text-left! justify-start mb-2"
                        >
                           <Icon className="size-5" />
                           {link.label}
                        </Button>
                     </Link>
                  );
               })}
            </div>
            <div className="p-4">
               <Button variant="danger" onClick={logout}>
                  Logout
               </Button>{" "}
            </div>
         </nav>
      </div>
   );
};

export default Sidebar;
