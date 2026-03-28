import Link from "next/link";
import { projectsData } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col max-w-[1400px] w-full mt-12 pb-32">
      
      {/* Top Header */}
      <div className="flex justify-between items-end border-b border-foreground/20 pb-4 mb-24">
        <h1 className="text-xl tracking-[0.2em] font-light text-foreground">PROJECTS</h1>
        <p className="text-sm tracking-widest text-foreground/50">/charleswere</p>
      </div>

      {/* Projects List */}
      <div className="space-y-40">
        {projectsData.map((project, index) => (
          <div key={project.slug} className="grid grid-cols-12 gap-16 items-center">
            
            {/* Left: Image (Clickable) */}
            <div className="col-span-7">
              <Link href={`/projects/${project.slug}`}>
                <div className="w-full aspect-video overflow-hidden bg-foreground/5 relative group cursor-pointer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </Link>
            </div>

            {/* Right: Text Details */}
            <div className="col-span-5 flex flex-col justify-center">
              <p className="text-sm tracking-[0.3em] text-foreground/50 mb-8">
                [ {project.id} / 0{projectsData.length} ]
              </p>
              
              <Link href={`/projects/${project.slug}`} className="group">
                <h2 className="text-4xl font-light tracking-tight text-foreground mb-4 group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h2>
              </Link>
              
              <p className="text-foreground/60 text-sm mb-6">{project.category}</p>
              
              <p className="text-foreground/70 leading-relaxed font-light text-[15px]">
                {project.shortDesc}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}