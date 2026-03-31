"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function DesktopNav() {
  const pathname = usePathname();

  // Helper function: Checks if the current URL matches the link
  // The 'startsWith' ensures that if you are on "/projects/internlink", 
  // the "PROJECTS" tab stays highlighted!
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="flex flex-col space-y-6 text-xs tracking-[0.2em]">
      {/* The Line: Changed from w-16 to w-32 to match the word PROJECTS */}
      <div className="border-t border-foreground pt-3 w-32 transition-colors duration-300">
        <Link 
          href="/" 
          className={`transition-colors duration-300 hover:text-foreground ${isActive("/") ? "text-foreground" : "text-foreground/40"}`}
        >
          HOME
        </Link>
      </div>
      
      <Link 
        href="/projects" 
        className={`transition-colors duration-300 hover:text-foreground ${isActive("/projects") ? "text-foreground" : "text-foreground/40"}`}
      >
        PROJECTS
      </Link>
      
      <Link 
        href="/outro" 
        className={`transition-colors duration-300 hover:text-foreground ${isActive("/outro") ? "text-foreground" : "text-foreground/40"}`}
      >
        OUTRO
      </Link>
    </nav>
  );
}