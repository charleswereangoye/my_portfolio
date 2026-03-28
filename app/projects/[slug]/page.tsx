import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "../../../lib/projects";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["300", "400"] });

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col max-w-[1400px] w-full pb-32">
      
      {/* Back Button */}
      <Link href="/projects" className="text-foreground/60 hover:text-foreground transition-colors tracking-widest text-sm md:text-base flex items-center gap-2 mb-12 md:mb-20 w-max">
        <span>&lt;</span> BACK
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-foreground/20 pb-6 mb-12 md:mb-16 gap-6">
        <h1 className={`${jost.className} text-4xl md:text-5xl font-light tracking-tight text-foreground`}>
          {project.title}
        </h1>
        <div className="flex gap-6 text-sm md:text-base text-foreground/60 tracking-wider">
          <a href="#" className="hover:text-foreground transition-colors">GitHub &#8599;</a>
          <a href="#" className="hover:text-foreground transition-colors">Demo &#8599;</a>
        </div>
      </div>

      <div className="w-full aspect-video bg-foreground/5 mb-16 md:mb-24 overflow-hidden border border-foreground/10 rounded-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-contain" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-24 md:mb-32">
        
        <div className="md:col-span-5 space-y-12 md:space-y-16">
          <div>
            <h3 className={`${jost.className} text-xl md:text-2xl font-light text-foreground mb-4 md:mb-6`}>TOOLS</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.tools.map(tool => (
                <span key={tool} className="px-4 py-2 md:px-5 md:py-2 rounded-full border border-foreground/30 text-sm md:text-[15px] font-light text-foreground/80">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <h3 className={`${jost.className} text-xl md:text-2xl font-light text-foreground mb-3 md:mb-4`}>DURATION</h3>
              <p className="text-foreground/70 font-light text-base md:text-lg">{project.duration}</p>
            </div>
            <div>
              <h3 className={`${jost.className} text-xl md:text-2xl font-light text-foreground mb-3 md:mb-4`}>ROLES</h3>
              <p className="text-foreground/70 font-light text-base md:text-lg">{project.roles}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <h3 className={`${jost.className} text-xl md:text-2xl font-light text-foreground mb-4 md:mb-6`}>SUMMARY</h3>
          <p className="text-foreground/80 leading-relaxed font-light text-base md:text-lg">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="flex justify-end border-t border-foreground/20 pt-12 md:pt-16">
        <Link href={`/projects/${project.nextProjectSlug}`} className="group flex items-center gap-4 hover:opacity-70 transition-opacity">
          <span className={`${jost.className} text-2xl md:text-3xl font-light tracking-widest text-foreground`}>
            {project.nextProjectTitle}
          </span>
          <span className="text-2xl md:text-3xl text-foreground font-light">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}