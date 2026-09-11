import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#06080E]" aria-hidden="true">
      
      {/* Dynamic Luminous Color Orbs — Rich, Bright, Aesthetic & Visibly Moving */}
      
      {/* Orb 1: Radiant Solar Gold / Amber (Top-Left to Center-Right Drift) */}
      <div
        className="absolute -top-[12%] -left-[10%] w-[65vw] h-[65vw] min-w-[450px] min-h-[450px] max-w-[950px] max-h-[950px] rounded-full bg-[#F59E0B]/[0.36] blur-[75px] sm:blur-[95px] animate-ambient-1 will-change-transform"
      />

      {/* Orb 2: Electric Twilight Violet / Iris Indigo (Top-Right to Center-Left Drift) */}
      <div
        className="absolute top-[8%] -right-[12%] w-[70vw] h-[70vw] min-w-[480px] min-h-[480px] max-w-[1000px] max-h-[1000px] rounded-full bg-[#6366F1]/[0.34] blur-[80px] sm:blur-[105px] animate-ambient-2 will-change-transform"
      />

      {/* Orb 3: Luminous Sunset Rose / Warm Coral (Mid-Left to Mid-Right Drift) */}
      <div
        className="absolute top-[40%] left-[8%] w-[58vw] h-[58vw] min-w-[420px] min-h-[420px] max-w-[850px] max-h-[850px] rounded-full bg-[#F43F5E]/[0.28] blur-[75px] sm:blur-[100px] animate-ambient-3 will-change-transform"
      />

      {/* Orb 4: Radiant Turquoise Teal / Aegean Cyan (Bottom-Right Drift) */}
      <div
        className="absolute -bottom-[12%] right-[5%] w-[65vw] h-[65vw] min-w-[450px] min-h-[450px] max-w-[950px] max-h-[950px] rounded-full bg-[#06B6D4]/[0.30] blur-[80px] sm:blur-[105px] animate-ambient-4 will-change-transform"
      />

      {/* Orb 5: Center Warm Light Pool (Gentle breathing accent) */}
      <div
        className="absolute top-[30%] left-[30%] w-[45vw] h-[45vw] min-w-[320px] min-h-[320px] max-w-[650px] max-h-[650px] rounded-full bg-[#D4A94F]/[0.24] blur-[90px] animate-ambient-1 will-change-transform"
      />

      {/* Tactile Silk / Film Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Ultra-light ambient perimeter wash to maintain contrast without darkening the bright moving colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,#06080E_100%)] opacity-35 pointer-events-none" />
    </div>
  );
}
