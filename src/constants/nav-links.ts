import { BoxIcon, ClipboardList, Home, Mic2Icon } from "lucide-react";
import { LucideIcon } from "lucide-react";

type NavLink = {
   href: string;
   label: string;
};

type SidebarLink = {
   href: string;
   label: string;
   icon: LucideIcon;
};

export const navLandingPageLinks: NavLink[] = [
   { href: "/", label: "Home" },
   { href: "/courses", label: "Courses" },
   { href: "/sel_program", label: "SEL Program" },
   { href: "/get-involved", label: "Get Involved" },
   { href: "/about", label: "About" },
   { href: "/blog", label: "Blog" },
];

export const navSidebarLinks: SidebarLink[] = [
   { href: "/member", label: "Dashboard", icon: Home },
   { href: "/courses", label: "Courses", icon: ClipboardList },
   { href: "/webinars", label: "Webinar", icon: Mic2Icon },
   { href: "/resources", label: "Resources", icon: BoxIcon },
];
