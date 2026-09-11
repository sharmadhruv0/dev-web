import React from 'react';

export default function BookCover({ className = '', size = 'normal' }) {
  const isLarge = size === 'large';
  
  return (
    <div className={`relative group max-w-sm sm:max-w-md mx-auto ${className}`}>
      
      {/* 1. Multi-Layer Ambient Halo Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-gold via-[#F59E0B]/40 to-[#818CF8]/40 rounded-2xl blur-2xl opacity-60 group-hover:opacity-95 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 via-[#EC4899]/30 to-[#6366F1]/50 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 2. Aesthetic Glowing Gradient Border Wrapper */}
      <div className="relative p-[2.5px] rounded-xl bg-gradient-to-tr from-gold via-[#F59E0B] via-[#EC4899] to-[#818CF8] shadow-[0_0_35px_rgba(212,169,79,0.45),0_0_65px_rgba(99,102,241,0.25)] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(212,169,79,0.7),0_0_90px_rgba(99,102,241,0.4)] group-hover:scale-[1.015]">
        
        {/* 3. Book Cover Container with Realistic Spine & Book Texture */}
        <div className="relative w-64 sm:w-72 md:w-80 aspect-[1/1.55] rounded-[10px] overflow-hidden bg-[#0A0D16] flex flex-col justify-between p-7 sm:p-8 text-center">
          
          {/* Book spine highlight gradient on left edge */}
          <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/70 via-white/15 to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-white/10 pointer-events-none" />

          {/* Subtle cloth/linen texture overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

          {/* 4. Elegant Inner Thin Gold Filigree Inset Border */}
          <div className="absolute inset-3 border border-gold/40 rounded-lg pointer-events-none transition-colors duration-500 group-hover:border-gold/80" />
          
          {/* Ornamental Gold Corner Accents */}
          {/* Top-Left */}
          <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t-2 border-l-2 border-gold pointer-events-none" />
          {/* Top-Right */}
          <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 border-gold pointer-events-none" />
          {/* Bottom-Left */}
          <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b-2 border-l-2 border-gold pointer-events-none" />
          {/* Bottom-Right */}
          <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b-2 border-r-2 border-gold pointer-events-none" />

          {/* Top: Category / Genre */}
          <div className="relative z-10 pt-1">
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold font-semibold">
              ✦ POEMS ✦
            </span>
          </div>

          {/* Center: Title & Minimalist Gold Line Illustration */}
          <div className="relative z-10 my-auto py-3 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F1EEE6] font-normal tracking-wide leading-tight px-1">
              Along the<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#F59E0B] to-gold font-light drop-shadow-sm">
                Moving Sun
              </span>
            </h3>

            {/* Minimalist Sun Over Water SVG with radiant gold styling */}
            <div className="w-24 sm:w-28 mx-auto text-gold py-1">
              <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto stroke-current">
                {/* Sun */}
                <circle cx="50" cy="24" r="12" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
                <circle cx="50" cy="24" r="6" strokeWidth="1.4" />
                {/* Horizon line */}
                <line x1="15" y1="36" x2="85" y2="36" strokeWidth="1.2" />
                {/* Water reflections / waves */}
                <line x1="25" y1="42" x2="75" y2="42" strokeWidth="0.9" opacity="0.9" />
                <line x1="32" y1="47" x2="68" y2="47" strokeWidth="0.7" opacity="0.7" />
                <line x1="40" y1="52" x2="60" y2="52" strokeWidth="0.6" opacity="0.5" />
              </svg>
            </div>

            <p className="font-body text-xs text-[#B8B4AC] italic max-w-[190px] mx-auto opacity-90">
              A quiet meditation on light & longing
            </p>
          </div>

          {/* 5. Highlighted Aesthetic Bottom Badge */}
          <div className="relative z-10 pb-1">
            <div className="backdrop-blur-md bg-[#0A0D14]/80 border border-gold/40 rounded-md px-3 py-1.5 flex items-center justify-between shadow-md shadow-black/60 group-hover:border-gold transition-colors duration-300">
              <div className="flex items-center gap-1.5">
                <span className="text-gold text-xs">✦</span>
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold font-semibold">
                  DEV AANSH
                </span>
              </div>
              <span className="font-serif italic text-[11px] text-[#F1EEE6]/80">
                The Debut
              </span>
            </div>
          </div>

          {/* Subtle sheen highlight across the cover */}
          <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent rotate-45 pointer-events-none transition-transform duration-1000 group-hover:translate-x-full" />
        </div>

      </div>

    </div>
  );
}
