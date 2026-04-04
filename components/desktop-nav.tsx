"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Magnetic from "./magnetic"; // <-- Added the import

export function DesktopNav() {
  const pathname = usePathname();

  // Helper function: Checks if the current URL matches the link
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    // Added 'items-start' so the magnetic box strictly wraps the text, not the whole screen width
    <nav className="flex flex-col items-start space-y-6 text-xs tracking-[0.2em]">
      
      {/* The Line: Keeps its static width, but the text beneath it becomes magnetic */}
      <div className="border-t border-foreground pt-3 w-32 transition-colors duration-300">
        <Magnetic>
          <Link 
            href="/" 
            className={`inline-block transition-colors duration-300 hover:text-foreground ${isActive("/") ? "text-foreground" : "text-foreground/40"}`}
          >
            HOME
          </Link>
        </Magnetic>
      </div>
      
      <Magnetic>
        <Link 
          href="/projects" 
          className={`inline-block transition-colors duration-300 hover:text-foreground ${isActive("/projects") ? "text-foreground" : "text-foreground/40"}`}
        >
          PROJECTS
        </Link>
      </Magnetic>
      
      <Magnetic>
        <Link 
          href="/outro" 
          className={`inline-block transition-colors duration-300 hover:text-foreground ${isActive("/outro") ? "text-foreground" : "text-foreground/40"}`}
        >
          OUTRO
        </Link>
      </Magnetic>
      
    </nav>
  );
}