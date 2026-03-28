"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Jost } from "next/font/google";
import { useTheme } from "next-themes";

const jost = Jost({ subsets: ["latin"], weight: ["300", "400"] });

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch for the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatically close the menu when a user clicks a link
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    // The entire header is fixed to the top
    <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-foreground/10 transition-colors duration-300">
      
      {/* Top Bar (Always Visible) */}
      <div className="p-6 flex justify-between items-center relative z-20 bg-background/95">
        <Link href="/" className={`${jost.className} tracking-widest text-lg`}>
          CWA
        </Link>
        
        {/* Animated Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-foreground p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5 w-6 relative">
            <span className={`block h-[1px] w-full bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
            <span className={`block h-[1px] w-full bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-[1px] w-full bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Dropdown Menu (Slides down underneath the top bar) */}
      <div 
        className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-foreground/10 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden flex flex-col items-center ${
          isOpen ? "max-h-[400px] py-10 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col space-y-8 text-center w-full">
          {/* I set the text size to 2xl so it fits beautifully in the dropdown */}
          <Link href="/" className={`${jost.className} text-2xl tracking-[0.2em] font-light text-foreground hover:opacity-50 transition-opacity`}>HOME</Link>
          <Link href="/projects" className={`${jost.className} text-2xl tracking-[0.2em] font-light text-foreground hover:opacity-50 transition-opacity`}>PROJECTS</Link>
          <Link href="/outro" className={`${jost.className} text-2xl tracking-[0.2em] font-light text-foreground hover:opacity-50 transition-opacity`}>OUTRO</Link>
          
          {/* Theme Button matches the exact styling of the links above */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`${jost.className} text-2xl tracking-[0.2em] font-light text-foreground hover:opacity-50 transition-opacity uppercase`}
            >
              THEME
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}