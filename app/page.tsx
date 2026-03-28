import { Jost } from "next/font/google";
import { FadeIn } from "../components/fade-in";

// We keep Jost exclusively for headings to maintain the sharp design
const jostHeading = Jost({ subsets: ["latin"], weight: ["100"] });
const jostSub = Jost({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  return (
    <div className="flex flex-col max-w-[1400px] w-full mt-12 pb-32 space-y-32 md:space-y-48">
      
      {/* ----------------- SECTION 1: HERO ----------------- */}
      <FadeIn delay={0.2}>
        {/* Changed to flex-col for mobile, grid for desktop */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-12 items-start w-full min-h-[auto] md:min-h-[80vh]">
          
          <div className="md:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Responsive text sizing: text-6xl on mobile, text-[7.5rem] on desktop */}
              <h1 className={`${jostHeading.className} text-6xl md:text-[7.5rem] leading-[1.05] tracking-tight mb-4 md:mb-6 text-foreground transition-colors duration-300`}>
                CHARLES<br />WERE
              </h1>
              <p className={`${jostSub.className} text-foreground/60 text-sm md:text-[15px] tracking-wide transition-colors duration-300`}>
                Software Engineer / Developer
              </p>
            </div>

            <div className="mt-16 md:mt-40">
              <p className="text-foreground/60 text-sm md:text-[15px] transition-colors duration-300">
                For business inquiries, email me at<br />
                <a href="mailto:charleswereangoye@gmail.com" className="text-foreground/80 hover:text-foreground transition-colors mt-1 inline-block">
                  charleswereangoye@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-5 mt-16 md:mt-40">
            <h2 className={`${jostSub.className} text-[14px] tracking-[0.15em] border-b border-foreground/20 w-full pb-4 mb-8 text-foreground transition-colors duration-300`}>
              ABOUT ME
            </h2>
            <div className="space-y-6 text-sm md:text-[15px] text-foreground/70 leading-relaxed font-light transition-colors duration-300">
              <p>
                I am a dedicated Software Engineering student with a strong focus on building clean, efficient, and scalable web applications.
              </p>
              <p>
                My primary interest is in full-stack development, where I enjoy designing systems, exploring modern technologies, and developing practical, high quality solutions.
              </p>
              <p>
                Beyond programming, I do analyze and trade on financial markets and create educational content, which strengthens my analytical thinking and communication skills.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ----------------- SECTION 2: MOTIVATION ----------------- */}
      <FadeIn delay={0.1}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-12 items-center w-full">
          
          <div className="md:col-span-5 md:pr-8 mt-12 md:mt-0">
            <h2 className={`${jostSub.className} text-[14px] tracking-[0.15em] border-b border-foreground/20 w-full pb-4 mb-8 text-foreground transition-colors duration-300`}>
              MOTIVATION
            </h2>
            <div className="space-y-6 text-sm md:text-[15px] text-foreground/70 leading-relaxed font-light transition-colors duration-300">
              <p>
                When you interact with an application, it should feel seamless and intuitive.
              </p>
              <p>
                That’s the approach I bring to development, building solutions that are efficient, user focused, and designed to solve real problems.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex justify-center items-center w-full">
            {/* Responsive image sizing */}
            <div className="relative w-full max-w-[300px] md:max-w-[480px] aspect-square rounded-full overflow-hidden border-2 border-foreground/20 dark:border-white shadow-2xl shadow-foreground/5 dark:shadow-white/5 bg-foreground/5 transition-all duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/my_photo.jpg" 
                alt="Charles Were Angoye" 
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  transform: 'scaleX(-1)',
                  objectPosition: 'top center' 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ----------------- SECTION 3: SKILLS ----------------- */}
      <FadeIn delay={0.1}>
        <div className="w-full">
          <h2 className={`${jostSub.className} text-[14px] tracking-[0.15em] border-b border-foreground/20 w-full pb-4 mb-12 text-foreground transition-colors duration-300`}>
            SKILLS
          </h2>

          {/* Collapses to 1 column on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            {/* Frontend Column */}
            <div>
              <h3 className={`${jostSub.className} text-[15px] tracking-[0.1em] text-foreground mb-6 transition-colors duration-300`}>FRONTEND</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Responsive Web Design', 'UI Development'].map((skill) => (
                  <span key={skill} className="px-5 py-2 rounded-full border border-foreground/30 text-[13px] font-light text-foreground/70 hover:border-foreground/80 hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Column */}
            <div>
              <h3 className={`${jostSub.className} text-[15px] tracking-[0.1em] text-foreground mb-6 transition-colors duration-300`}>BACKEND</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Node.js', 'Database (SQL & PostgreSQL)', 'Enterprise Architecture', 'REST APIs'].map((skill) => (
                  <span key={skill} className="px-5 py-2 rounded-full border border-foreground/30 text-[13px] font-light text-foreground/70 hover:border-foreground/80 hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Column */}
            <div>
              <h3 className={`${jostSub.className} text-[15px] tracking-[0.1em] text-foreground mb-6 transition-colors duration-300`}>TOOLS</h3>
              <div className="flex flex-wrap gap-3">
                {['Linux', 'Command Line', 'Git', 'VSCode', 'Figma', 'Podman'].map((skill) => (
                  <span key={skill} className="px-5 py-2 rounded-full border border-foreground/30 text-[13px] font-light text-foreground/70 hover:border-foreground/80 hover:text-foreground transition-colors cursor-default">
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