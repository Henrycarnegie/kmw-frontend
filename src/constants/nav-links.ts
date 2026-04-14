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
   { href: "/sel_program", label: "SEL Program" },
   { href: "/get-involved", label: "Get Involved" },
   { href: "/about", label: "About" },
   { href: "/blog", label: "Blog" },
];

export const navSidebarLinks: SidebarLink[] = [
   { href: "/member", label: "Dashboard", icon: Home },
   { href: "/member/course", label: "Courses", icon: ClipboardList },
   { href: "/member/webinar", label: "Webinar", icon: Mic2Icon },
   { href: "/member/resources", label: "Resources", icon: BoxIcon },
];
