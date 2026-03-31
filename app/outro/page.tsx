import { Jost } from "next/font/google";
import { FadeIn } from "../../components/fade-in";

// Using the ultra-thin weight for the main thank you text
const jostThin = Jost({ subsets: ["latin"], weight: ["100"] });

export default function OutroPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] w-full text-center">
      <FadeIn delay={0.2}>
        <h1 className={`${jostThin.className} text-4xl md:text-6xl tracking-[0.1em] text-foreground mb-8 transition-colors duration-300`}>
          Thank you for visiting.
        </h1>
        
        <p className="text-sm tracking-[0.3em] text-foreground/50 transition-colors duration-300 mb-16 md:mb-0">
          Created by Charles Were Angoye
        </p>
      </FadeIn>

      {/* --- MOBILE ONLY SOCIAL ICONS (FIXED) --- */}
      <FadeIn delay={0.4}>
        <div className="flex md:hidden items-center justify-center gap-8 text-foreground/50 w-full mt-8">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/charles-were-angoye-21a661326" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          
          {/* Instagram */}
          <a href="https://instagram.com/chaleeblack" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>

          {/* X (formerly Twitter) */}
          <a href="https://x.com/chaleeblack" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="X (Twitter)">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com/chaleeblack" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/charleswereangoye" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </FadeIn>
      
    </div>
  );
}