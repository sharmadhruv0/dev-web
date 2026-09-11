import React from 'react';

export default function PortraitCard({ className = '' }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Ambient gold glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-gold/20 via-transparent to-gold/10 rounded-sm blur-xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />
      
      {/* Frame wrapper */}
      <div className="relative aspect-[4/5] w-full max-w-sm sm:max-w-md mx-auto rounded-sm overflow-hidden border border-white/10 bg-[#10141C] shadow-2xl">
        
        {/* Editorial author photo */}
        <img
          src="/portrait.png"
          alt="Dev Aansh (Devansh Awasthi) — Poet & Author"
          className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Warm dark gradient overlay to blend into the navy palette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/30 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gold/5 mix-blend-color" />

        {/* Inner thin border */}
        <div className="absolute inset-3 border border-white/10 pointer-events-none" />

        {/* Small corner label */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] tracking-widest uppercase font-sans text-[#B8B4AC]">
          <span className="text-gold/90 font-medium">DEV AANSH</span>
          <span className="opacity-60 font-serif italic text-xs">The Study · 2026</span>
        </div>
      </div>
    </div>
  );
}
