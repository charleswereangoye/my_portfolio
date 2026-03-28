import { Raleway } from "next/font/google";
import { FadeIn } from "../components/fade-in";

// Importing a very thin font for the main heading
const raleway = Raleway({ subsets: ["latin"], weight: ["100"] });

export default function Home() {
  return (
    // Removed h-full and added pb-32 so the page can scroll naturally
    <div className="flex flex-col max-w-[1400px] w-full mt-12 pb-32 space-y-48">
      
      {/* ----------------- SECTION 1: HERO ----------------- */}
      <FadeIn delay={0.2}>
        <div className="grid grid-cols-12 gap-12 items-start w-full min-h-[80vh]">
          
          {/* Left Side: Name and Contact */}
          <div className="col-span-7 flex flex-col justify-between h-full">
            <div>
              <h1 className={`${raleway.className} text-[7.5rem] leading-[1.05] tracking-tight mb-6 text-foreground transition-colors duration-300`}>
                CHARLES<br />WERE
              </h1>
              <p className="text-foreground/60 text-[15px] tracking-wide transition-colors duration-300">
                Software Engineer / Developer
              </p>
            </div>

            <div className="mt-40">
              <p className="text-foreground/60 text-[15px] transition-colors duration-300">
                For business inquiries, email me at<br />
                <a href="mailto:charleswereangoye@gmail.com" className="hover-target text-foreground/80 hover:text-foreground transition-colors mt-1 inline-block">
                  charleswereangoye@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Side: About Me */}
          <div className="col-span-5 mt-40">
            <h2 className="text-[14px] tracking-[0.15em] border-b border-foreground/20 w-full pb-4 mb-8 text-foreground transition-colors duration-300">
              ABOUT ME
            </h2>
            <div className="space-y-6 text-[15px] text-foreground/70 leading-relaxed font-light transition-colors duration-300">
              <p>
                I am currently pursuing a degree in Software Engineering, with a strong focus on building clean, efficient, and scalable web applications.
              </p>
              <p>
                My main focus is full-stack development, and I enjoy exploring new technologies, refining system architectures, and experimenting with creative technical solutions.
              </p>
              <p>
                Outside of programming, I spend my time analyzing the XAU/USD market and creating educational content for my channel.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ----------------- SECTION 2: MOTIVATION ----------------- */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Side: Text */}
          <div className="col-span-5 pr-8">
            <h2 className="text-[14px] tracking-[0.15em] border-b border-foreground/20 w-full pb-4 mb-8 text-foreground transition-colors duration-300">
              MOTIVATION
            </h2>
            <div className="space-y-6 text-[15px] text-foreground/70 leading-relaxed font-light transition-colors duration-300">
              <p>
                I am a software engineer with a growing focus on full-stack development. While I am still exploring where I want my career to evolve, I have discovered that building seamless user experiences is what excites me the most.
              </p>
              <p>
                That is why I am currently dedicating my energy to improving both my technical execution and design sensitivity across the entire stack.
              </p>
            </div>
          </div>

          {/* Right Side: Circular Flipped Image */}
          <div className="col-span-7 flex justify-center items-center">
            {/* 1. Container: We make this a square with rounded-full and overflow-hidden to create the circle */}
            {/* We also add a sharp border and a subtle 'glow' in dark mode to really match the aesthetic */}
            <div className="hover-target relative w-[480px] h-[480px] aspect-square rounded-full overflow-hidden border-2 border-foreground/20 dark:border-white shadow-2xl shadow-foreground/5 dark:shadow-white/5 bg-foreground/5 transition-all duration-300">
              
              {/* 2. Image: Standard Next.js Image Component */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/my_photo.jpg" // Next.js looks in the 'public' folder for this
                alt="Charles Were Angoye" 
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  /* 3. FLIP: This mirrors the image horizontally */
                  transform: 'scaleX(-1)',
                  
                  /* 4. HEAD VISIBLE: To ensure your head isn't cut off by the circle crop, we center the image position on the top-center */
                  objectPosition: 'top center' 
                }}
              />
              
              {/* Gradient Overlay for texture (optional) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ----------------- SECTION 3: SKILLS ----------------- */}
      <FadeIn delay={0.1}>
        <div className="w-full">
          {/* Skills Header spanning full width */}
          <h2 className="text-[14px] tracking-[0.15em] border-b border-foreground/20 w-full pb-4 mb-12 text-foreground transition-colors duration-300">
            SKILLS
          </h2>

          {/* 3 Column Grid for Skill Categories */}
          <div className="grid grid-cols-3 gap-16">
            
            {/* Frontend Column */}
            <div>
              <h3 className="text-[15px] tracking-[0.1em] text-foreground mb-6 transition-colors duration-300">FRONTEND</h3>
              <div className="flex flex-wrap gap-3">
                {['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Zustand'].map((skill) => (
                  <span key={skill} className="hover-target px-5 py-2 rounded-full border border-foreground/30 text-[13px] font-light text-foreground/70 hover:border-foreground/80 hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Column */}
            <div>
              <h3 className="text-[15px] tracking-[0.1em] text-foreground mb-6 transition-colors duration-300">BACKEND</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Python', 'Java', 'SQL', 'PostgreSQL', 'REST APIs'].map((skill) => (
                  <span key={skill} className="hover-target px-5 py-2 rounded-full border border-foreground/30 text-[13px] font-light text-foreground/70 hover:border-foreground/80 hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Column */}
            <div>
              <h3 className="text-[15px] tracking-[0.1em] text-foreground mb-6 transition-colors duration-300">TOOLS</h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'VSCode', 'Figma', 'Linux', 'Docker', 'Vercel'].map((skill) => (
                  <span key={skill} className="hover-target px-5 py-2 rounded-full border border-foreground/30 text-[13px] font-light text-foreground/70 hover:border-foreground/80 hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </FadeIn>

    </div>
  );
}