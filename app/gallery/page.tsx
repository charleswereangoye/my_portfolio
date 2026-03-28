import { Playfair_Display } from "next/font/google";

// Importing an elegant serif font for the footer message
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Placeholder data for your gallery
// You can replace the images and text with your actual works later
const galleryItems = [
  {
    id: 1,
    title: "Minimalist Interface",
    designer: "Charles Were",
    folder: "Web Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Dark Mode Architecture",
    designer: "Charles Were",
    folder: "UI/UX",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Market Analysis Dashboard",
    designer: "Charles Were",
    folder: "Frontend",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "System Design Grid",
    designer: "Charles Were",
    folder: "Concept",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col max-w-[1400px] w-full mt-12 pb-32">
      
      {/* Top Header */}
      <div className="flex justify-between items-end border-b border-foreground/20 pb-4 mb-24 text-foreground">
        <h1 className="text-xl tracking-[0.1em] font-light">Gallery</h1>
        <p className="text-sm tracking-widest text-foreground/60">@charleswere</p>
      </div>

      {/* Gallery Grid (Staggered) */}
      <div className="grid grid-cols-2 gap-x-24 gap-y-32">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id} 
            // This is the magic line that pushes every 2nd column down to create the staggered effect
            className={`flex flex-col ${index % 2 !== 0 ? 'mt-32' : ''}`}
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/5] bg-foreground/5 mb-6 overflow-hidden relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Details Section */}
            <div className="w-full">
              <h2 className="text-xl text-foreground font-light tracking-wide border-b border-foreground/20 pb-3 mb-3">
                {item.title}
              </h2>
              
              <div className="flex justify-between items-center border-b border-foreground/10 pb-2 mb-2">
                <span className="text-foreground/50 text-sm tracking-wide">Designer</span>
                <span className="text-foreground/80 text-sm font-light">{item.designer}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-foreground/10 pb-2">
                <span className="text-foreground/50 text-sm tracking-wide">Category</span>
                <span className="text-foreground/80 text-sm font-light">{item.folder}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Message Footer */}
      <div className="mt-64 mb-12 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className={`${playfair.className} text-4xl tracking-wide text-foreground/90 italic`}>
          Thank you for visiting.
        </h2>
        <p className={`${playfair.className} text-lg text-foreground/60 tracking-wider`}>
          Created by Charles Were
        </p>
      </div>

    </div>
  );
}