import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { ThemeToggle } from "../components/theme-toggle";
import { SmoothScroll } from "../components/smooth-scroll";
import Link from "next/link";
import { MobileHeader } from "../components/mobile-header"; 

const jost = Jost({ subsets: ["latin"], weight: ["300", "400"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

// --- MASSIVE SEO UPGRADE ---
export const metadata: Metadata = {
  title: "Charles Were Angoye",
  description: "Portfolio of Charles Were Angoye (Chalee Black Trades), a Software Engineer specializing in full-stack development and financial market analysis.",
  keywords: ["Charles Were Angoye", "Chalee Black Trades", "Software Engineer", "Forex Trader", "XAUUSD", "Web Developer", "Next.js"],
  authors: [{ name: "Charles Were Angoye" }],

icons: {
    icon: '/icon.png', 
    shortcut: '/icon.png',
    apple: '/icon.png', // This makes it look good if someone saves it to their iPhone home screen
  },
  
  openGraph: {
    title: "Charles Were Angoye",
    description: "Software Engineering student and Forex Trader.",
    url: "https://charleswereangoye.dev",
    siteName: "Charles Were Angoye",
    images: [
      {
        url: "/portfolio.png", // This image will show when you link your site on Twitter/WhatsApp
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.className} flex flex-col md:flex-row min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          <SmoothScroll>
            
            {/* Desktop Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Navigation Component */}
            <MobileHeader />

            {/* --- DESKTOP SIDEBAR --- */}
            <aside className="hidden md:flex w-48 fixed h-screen p-12 flex-col justify-between z-40">
              <div className="mt-8">
                <nav className="flex flex-col space-y-6 text-xs tracking-[0.2em] text-foreground/50">
                  <div className="border-t border-foreground pt-3 w-16 transition-colors duration-300">
                    <Link href="/" className="text-foreground transition-colors duration-300">HOME</Link>
                  </div>
                  <Link href="/projects" className="hover:text-foreground transition-colors">PROJECTS</Link>
                  <Link href="/outro" className="hover:text-foreground transition-colors">OUTRO</Link>
                </nav>
              </div>
              
              {/* --- UPDATED SOCIAL ICONS --- */}
              <div className="flex flex-col space-y-6 text-foreground/50 mb-8">
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/charles-were-angoye-21a661326" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                
                {/* Instagram */}
                <a href="https://instagram.com/chaleeblack" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>

                {/* X (formerly Twitter) */}
                <a href="https://x.com/chaleeblack" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="X (Twitter)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                </a>

                {/* Facebook */}
                <a href="https://facebook.com/chaleeblack" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/charleswereangoye" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                
              </div>
            </aside>

            {/* --- MAIN CONTENT AREA --- */}
            <main className="md:ml-48 flex-1 p-6 pt-32 md:pl-12 md:pr-24 md:py-24 w-full overflow-hidden">
              {children}
            </main>

          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}