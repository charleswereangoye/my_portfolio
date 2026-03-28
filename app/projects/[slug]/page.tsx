import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "../../../lib/projects";

// In Next.js 15, params is a Promise, so we must await it
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Find the project that matches the URL slug
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  // If someone types a bad URL, show a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col max-w-[1400px] w-full mt-12 pb-32">
      
      {/* Back Button */}
      <Link href="/projects" className="text-foreground/60 hover:text-foreground transition-colors tracking-widest text-sm flex items-center gap-2 mb-20 w-max">
        <span>&lt;</span> BACK
      </Link>

      {/* Title & Links */}
      <div className="flex justify-between items-end border-b border-foreground/20 pb-6 mb-16">
        <h1 className="text-4xl font-light tracking-tight text-foreground">{project.title}</h1>
        <div className="flex gap-6 text-sm text-foreground/60 tracking-wider">
          <a href="#" className="hover:text-foreground transition-colors">GitHub &#8599;</a>
          <a href="#" className="hover:text-foreground transition-colors">Demo &#8599;</a>
        </div>
      </div>

      {/* Main Image/Video Area */}
      <div className="w-full aspect-video bg-foreground/5 mb-24 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-90" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-12 gap-16 mb-32">
        
        {/* Left Column: Tools, Duration, Roles */}
        <div className="col-span-5 space-y-16">
          <div>
            <h3 className="text-xl font-light text-foreground mb-6">TOOLS</h3>
            <div className="flex flex-wrap gap-3">
              {project.tools.map(tool => (
                <span key={tool} className="px-5 py-2 rounded-full border border-foreground/30 text-[13px] font-light text-foreground/70">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h3 className="text-xl font-light text-foreground mb-4">DURATION</h3>
              <p className="text-foreground/70 font-light">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-xl font-light text-foreground mb-4">ROLES</h3>
              <p className="text-foreground/70 font-light">{project.roles}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Summary */}
        <div className="col-span-7">
          <h3 className="text-xl font-light text-foreground mb-6">SUMMARY</h3>
          <p className="text-foreground/70 leading-relaxed font-light text-[15px]">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Next Project Button */}
      <div className="flex justify-end border-t border-foreground/20 pt-16">
        <Link href={`/projects/${project.nextProjectSlug}`} className="group flex items-center gap-4 hover:opacity-70 transition-opacity">
          <span className="text-2xl font-light tracking-widest text-foreground">
            {project.nextProjectTitle}
          </span>
          <span className="text-2xl text-foreground font-light">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}