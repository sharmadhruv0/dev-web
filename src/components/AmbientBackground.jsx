import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {/* Base Deep Tone */}
      <div className="absolute inset-0 bg-[#070A0F]" />

      {/* Floating Low-Faded Aesthetic Color Orbs */}
      {/* Orb 1: Soft Antique Gold Glow (Slow moving) */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full bg-[#D4A94F]/[0.065] blur-[130px] sm:blur-[160px] animate-float-1 will-change-transform"
      />

      {/* Orb 2: Midnight Twilight Indigo (Slow moving) */}
      <div
        className="absolute top-[25%] -right-[15%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-[#364968]/[0.08] blur-[140px] sm:blur-[170px] animate-float-2 will-change-transform"
      />

      {/* Orb 3: Quiet Warm Sepia / Amber (Center breathing) */}
      <div
        className="absolute top-[60%] left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[#9e7638]/[0.055] blur-[130px] sm:blur-[160px] animate-float-3 will-change-transform"
      />

      {/* Orb 4: Deep Slate Ocean (Bottom right drift) */}
      <div
        className="absolute -bottom-[15%] right-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full bg-[#1e3447]/[0.075] blur-[140px] sm:blur-[170px] animate-float-4 will-change-transform"
      />

      {/* Subtle Film Grain / Paper Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Deep Edge Vignette to preserve legibility and editorial mood */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#070A0F_90%)] opacity-85" />
    </div>
  );
}
