import Button from "../../ui/Button";
import Link from "next/link";
import { usePath } from "@/src/hooks/usePath";
import { navSidebarLinks } from "@/src/constants/nav-links";
import Image from "next/image";
import { useCredentialAuth } from "@/src/hooks/useCredentialAuth";

const Sidebar = () => {
   const { pathName } = usePath();

   const { logout } = useCredentialAuth();

   return (
      <div className="w-64 bg-white h-screen border-r border-gray-200 shadow-md">
         <Link href="/" className="w-full border-b border-gray-200">
            <div className="flex items-center gap-3 px-4 py-4">
               <Image src="/logo.png" alt="Logo" width={40} height={40} />{" "}
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
