import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { ThemeToggle } from "../components/theme-toggle";
import Link from "next/link";

// Using Inter for the clean body text
const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata: Metadata = {
  title: "Charles Were Angoye",
  description: "Personal portfolio and works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          
          <ThemeToggle />

          {/* Sidebar Navigation */}
          <aside className="w-48 fixed h-screen p-12 flex flex-col justify-between z-40">
            <div className="mt-8">
              <nav className="flex flex-col space-y-6 text-xs tracking-[0.2em] text-foreground/50">
                <div className="border-t border-foreground pt-3 w-16 transition-colors duration-300">
                  <Link href="/" className="text-foreground transition-colors duration-300">HOME</Link>
                </div>
                <Link href="/projects" className="hover:text-foreground transition-colors">PROJECTS</Link>
                <Link href="/gallery" className="hover:text-foreground transition-colors">GALLERY</Link>
              </nav>
            </div>
            
            {/* Social Icons - Semi-transparent, turning solid on hover */}
            <div className="flex flex-col space-y-6 text-foreground/50 mb-8">
              <a href="#" className="hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="ml-48 flex-1 pl-12 pr-24 py-24">
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}