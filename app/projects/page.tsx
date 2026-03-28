import Link from "next/link";
import { projectsData } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col max-w-[1400px] w-full pb-32">
      
      {/* Top Header - Now responsive! */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-foreground/20 pb-4 mb-16 md:mb-24 gap-4">
        <h1 className="text-2xl md:text-xl tracking-[0.2em] font-light text-foreground">PROJECTS</h1>
        <p className="text-sm tracking-widest text-foreground/50">/charleswereangoye</p>
      </div>

      {/* Projects List */}
      {/* Reduced spacing on mobile, large spacing on desktop */}
      <div className="space-y-24 md:space-y-40">
        {projectsData.map((project, index) => (
          // THE FIX: Stacks vertically on mobile, side-by-side grid on desktop
          <div key={project.slug} className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 items-center">
            
            {/* Image Container */}
            <div className="w-full md:col-span-7">
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="w-full aspect-video overflow-hidden bg-foreground/5 relative border border-foreground/10 rounded-sm">
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </Link>
            </div>

            {/* Text Details */}
            <div className="w-full md:col-span-5 flex flex-col justify-center">
              
              <p className="text-xs md:text-sm tracking-[0.3em] text-foreground/50 mb-4 md:mb-8">
                [ {project.id} / 0{projectsData.length} ]
              </p>
              
              <Link href={`/projects/${project.slug}`} className="group block w-max">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-3 md:mb-4 group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h2>
              </Link>
              
              <p className="text-foreground/60 text-sm mb-4 md:mb-6">{project.category}</p>
              
              <p className="text-foreground/70 leading-relaxed font-light text-sm md:text-[15px]">
                {project.shortDesc}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}