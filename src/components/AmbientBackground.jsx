import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#080c14]" aria-hidden="true">
      
      {/* Floating Low-Faded Aesthetic Color Orbs */}
      
      {/* Orb 1: Warm Antique Gold / Amber Glow (Top-Left Drift) */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] min-w-[380px] min-h-[380px] max-w-[750px] max-h-[750px] rounded-full bg-[#D4A94F]/[0.22] blur-[70px] sm:blur-[90px] animate-ambient-1 will-change-transform"
      />

      {/* Orb 2: Twilight Indigo / Celestial Slate (Top-Right to Center Drift) */}
      <div
        className="absolute top-[10%] -right-[10%] w-[55vw] h-[55vw] min-w-[400px] min-h-[400px] max-w-[800px] max-h-[800px] rounded-full bg-[#415aa5]/[0.22] blur-[80px] sm:blur-[100px] animate-ambient-2 will-change-transform"
      />

      {/* Orb 3: Dusty Rose / Warm Ember (Lower-Left Drift) */}
      <div
        className="absolute top-[45%] left-[5%] w-[45vw] h-[45vw] min-w-[350px] min-h-[350px] max-w-[700px] max-h-[700px] rounded-full bg-[#a5506e]/[0.18] blur-[75px] sm:blur-[95px] animate-ambient-3 will-change-transform"
      />

      {/* Orb 4: Deep Calming Teal / Oceanic Slate (Bottom-Right Drift) */}
      <div
        className="absolute -bottom-[10%] right-[5%] w-[52vw] h-[52vw] min-w-[380px] min-h-[380px] max-w-[750px] max-h-[750px] rounded-full bg-[#237887]/[0.20] blur-[80px] sm:blur-[100px] animate-ambient-4 will-change-transform"
      />

      {/* Subtle Tactile Film Grain / Paper Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Soft Vignette that protects text contrast without hiding the moving colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#080c14_95%)] opacity-60 pointer-events-none" />
    </div>
  );
}
