import React from 'react';

export default function BookCover({ className = '', size = 'normal' }) {
  const isLarge = size === 'large';
  
  return (
    <div className={`relative group perspective-1000 ${className}`}>
      {/* Ambient shadow behind book */}
      <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 via-transparent to-gold/5 blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Book Container with realistic spine & book edges */}
      <div className="relative mx-auto w-64 sm:w-72 md:w-80 aspect-[1/1.55] rounded-r-md rounded-l-[3px] bg-[#0c101a] border-y border-r border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),-8px_0_15px_rgba(0,0,0,0.6)] flex flex-col justify-between p-7 sm:p-8 text-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
        
        {/* Book spine highlight gradient on left edge */}
        <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/60 via-white/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-white/5 pointer-events-none" />

        {/* Subtle cloth/linen texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        {/* Outer decorative blind-emboss frame */}
        <div className="absolute inset-3.5 sm:inset-4 border border-gold/20 rounded-sm pointer-events-none" />
        <div className="absolute inset-4 sm:inset-4.5 border border-gold/10 pointer-events-none" />

        {/* Top: Category / Genre */}
        <div className="relative z-10 pt-2">
          <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold/80 font-medium">
            POEMS
          </span>
        </div>

        {/* Center: Title & Minimalist Gold Line Illustration */}
        <div className="relative z-10 my-auto py-4 space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F1EEE6] font-normal tracking-wide leading-tight px-2">
            Along the<br />
            <span className="italic text-gold font-light">Moving Sun</span>
          </h3>

          {/* Minimalist Sun Over Water SVG */}
          <div className="w-24 sm:w-28 mx-auto text-gold/90 py-2">
            <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto stroke-current">
              {/* Sun */}
              <circle cx="50" cy="24" r="12" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
              <circle cx="50" cy="24" r="6" strokeWidth="1.2" />
              {/* Horizon line */}
              <line x1="15" y1="36" x2="85" y2="36" strokeWidth="1" />
              {/* Water reflections / waves */}
              <line x1="25" y1="42" x2="75" y2="42" strokeWidth="0.8" opacity="0.8" />
              <line x1="32" y1="47" x2="68" y2="47" strokeWidth="0.6" opacity="0.6" />
              <line x1="40" y1="52" x2="60" y2="52" strokeWidth="0.5" opacity="0.4" />
            </svg>
          </div>

          <p className="font-body text-xs text-[#B8B4AC] italic max-w-[180px] mx-auto opacity-75">
            A quiet meditation on light & longing
          </p>
        </div>

        {/* Bottom: Author Name */}
        <div className="relative z-10 pb-2">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            DEV AANSH
          </span>
        </div>

        {/* Subtle sheen highlight across the cover */}
        <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent rotate-45 pointer-events-none transition-transform duration-1000 group-hover:translate-x-full" />
      </div>
    </div>
  );
}
