import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Jost, Inter } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-jost" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://charleswereangoye.dev"),
  title: {
    default: "Charles Were Angoye — Software Engineering Student & Full-Stack Developer",
    template: "%s | Charles Were Angoye",
  },
  description: "Charles Were Angoye is a software engineering student specializing in full-stack development. Explore selected projects, technical skills, and case studies.",
  keywords: ["Charles Were Angoye", "Software Engineering Student", "Full-Stack Developer", "Web Development", "Next.js", "React", "Python"],
  authors: [{ name: "Charles Were Angoye" }],
  openGraph: {
    title: "Charles Were Angoye — Full-Stack Developer",
    description: "Software engineering student building useful things, from interface to API.",
    url: "https://charleswereangoye.dev",
    siteName: "Charles Were Angoye",
    images: [{ url: "/portfolio.png", width: 1200, height: 630, alt: "Charles Were Angoye portfolio" }],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#10110f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jost.variable}`}>
        <header className="site-header">
          <Link className="site-mark" href="/" aria-label="Charles Were Angoye, home"><span className="site-mark-symbol">C.</span><span className="site-mark-name">CHARLES WERE ANGOYE<small>SOFTWARE ENGINEERING / PORTFOLIO</small></span></Link>
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/#work">WORK <span>01</span></Link>
            <Link href="/#about">ABOUT <span>02</span></Link>
            <Link href="/#contact">CONTACT <span>03</span></Link>
          </nav>
          <a className="header-availability" href="mailto:charleswereangoye@gmail.com"><span className="status-dot" /> AVAILABLE FOR A CHAT <span aria-hidden="true">↗</span></a>
        </header>
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
