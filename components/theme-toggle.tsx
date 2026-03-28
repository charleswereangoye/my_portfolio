"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for component to mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="fixed top-8 right-12 z-50">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`w-14 h-7 border rounded-full flex items-center p-1 transition-colors duration-300 ${
          isDark ? "border-zinc-500 hover:border-white" : "border-zinc-400 hover:border-black"
        }`}
        aria-label="Toggle Dark Mode"
      >
        <div
          className={`w-5 h-5 rounded-full transition-transform duration-300 ${
            isDark ? "bg-zinc-300 translate-x-7" : "bg-zinc-600 translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}