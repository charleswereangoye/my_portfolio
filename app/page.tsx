import { Raleway } from "next/font/google";

// Importing a very thin font for the main heading
const raleway = Raleway({ subsets: ["latin"], weight: ["100"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full max-w-[1400px] w-full mt-12">
      
      <div className="grid grid-cols-12 gap-12 items-start w-full">
        
        {/* Left Side: Name and Contact */}
        <div className="col-span-7 flex flex-col justify-between h-full">
          <div>
            {/* Main Title: Full contrast */}
            <h1 className={`${raleway.className} text-[7.5rem] leading-[1.05] tracking-tight mb-6 text-foreground transition-colors duration-300`}>
              CHARLES<br />WERE
            </h1>
            {/* Subtitle: 60% opacity */}
            <p className="text-foreground/60 text-[15px] tracking-wide transition-colors duration-300">
              Software Engineer / Developer
            </p>
          </div>

          <div className="mt-40">
            <p className="text-foreground/60 text-[15px] transition-colors duration-300">
              For business inquiries, email me at<br />
              {/* Email Link: 80% opacity, full contrast on hover */}
              <a href="mailto:charleswereangoye@gmail.com" className="text-foreground/80 hover:text-foreground transition-colors mt-1 inline-block">
                charleswereangoye@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Side: About Me */}
        <div className="col-span-5 mt-40">
          {/* Section Heading: Full contrast text, faint border */}
          <h2 className="text-[14px] tracking-[0.15em] border-b border-foreground/20 w-full pb-4 mb-8 text-foreground transition-colors duration-300">
            ABOUT ME
          </h2>
          {/* Body Text: 70% opacity for better readability */}
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
    </div>
  );
}