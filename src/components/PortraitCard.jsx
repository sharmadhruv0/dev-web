import React from 'react';

export default function PortraitCard({ className = '' }) {
  return (
    <div className={`relative group max-w-sm sm:max-w-md mx-auto ${className}`}>
      
      {/* 1. Multi-Layer Ambient Halo Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-gold via-[#F59E0B]/40 to-[#818CF8]/40 rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 via-[#EC4899]/30 to-[#6366F1]/50 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 2. Aesthetic Glowing Gradient Border Wrapper */}
      <div className="relative p-[2.5px] rounded-xl bg-gradient-to-tr from-gold via-[#F59E0B] via-[#EC4899] to-[#818CF8] shadow-[0_0_35px_rgba(212,169,79,0.45),0_0_65px_rgba(99,102,241,0.25)] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(212,169,79,0.7),0_0_90px_rgba(99,102,241,0.4)] group-hover:scale-[1.015]">
        
        {/* 3. Inner Card Container */}
        <div className="relative aspect-[4/5] w-full rounded-[10px] overflow-hidden bg-[#0A0D14]">
          
          {/* Author Portrait — Clear, Crisp & Naturally Lit */}
          <img
            src="/portrait.png"
            alt="Dev Aansh (Devansh Awasthi) — Poet & Author"
            className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Gentle Bottom-Only Vignette to anchor the title plate */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0D14]/90 via-[#0A0D14]/40 to-transparent pointer-events-none" />

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

          {/* 5. Highlighted Aesthetic Plaque / Badge */}
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <div className="backdrop-blur-md bg-[#0A0D14]/80 border border-gold/40 rounded-md px-4 py-2.5 flex items-center justify-between shadow-lg shadow-black/60 group-hover:border-gold transition-colors duration-300">
              <div className="flex items-center gap-2">
                <span className="text-gold text-xs">✦</span>
                <span className="font-serif text-sm tracking-wide text-[#F1EEE6] font-medium">
                  Dev Aansh
                </span>
              </div>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/90 font-semibold">
                POET · AUTHOR
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
