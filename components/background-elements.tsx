export default function BackgroundElements() {
  return (
    // 'pointer-events-none' ensures you can't accidentally click or highlight the background
    // 'z-[-1]' permanently forces it behind all your content
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      
      {/* 1. The Subliminal Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"
      ></div>
      
      {/* 2. The Cinematic SVG Noise */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* 3. The Vignette (Fades the grid out at the edges for a spotlight effect) */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,black_100%)]"></div>
      
    </div>
  );
}