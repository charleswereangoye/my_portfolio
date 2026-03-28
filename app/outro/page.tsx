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
        
        <p className="text-sm tracking-[0.3em] text-foreground/50 transition-colors duration-300">
          Created by Charles Were Angoye
        </p>
      </FadeIn>
    </div>
  );
}