import React from 'react';

export default function BookCover({ className = '', size = 'normal' }) {
  const isLarge = size === 'large';

  return (
    <div className={`relative group max-w-sm sm:max-w-md mx-auto transition-transform duration-500 ease-out hover:-translate-y-2 ${className}`}>
      
      {/* 1. Multi-Layer Ambient Halo Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-gold/50 via-[#F59E0B]/30 to-[#818CF8]/30 rounded-2xl blur-2xl opacity-60 group-hover:opacity-95 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/40 via-[#EC4899]/20 to-[#6366F1]/40 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 2. Aesthetic Glowing Gradient Border Wrapper */}
      <div className="relative p-[2.5px] rounded-xl bg-gradient-to-tr from-gold/80 via-[#F59E0B]/60 to-[#818CF8]/70 shadow-[0_15px_45px_rgba(0,0,0,0.85),0_0_35px_rgba(212,169,79,0.35)] transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_55px_rgba(212,169,79,0.6)]">
        
        {/* 3. Book Cover Container */}
        <div className={`relative ${isLarge ? 'w-64 sm:w-80 md:w-88' : 'w-64 sm:w-72 md:w-80'} aspect-[950/1600] rounded-[9px] overflow-hidden bg-[#0A0D16] shadow-2xl`}>
          
          {/* Actual Book Cover Image */}
          <img
            src="/book-cover.jpg"
            alt="Along the Moving Sun by Dev Aansh"
            className="w-full h-full object-cover filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Book Spine Highlight Overlay on left edge */}
          <div className="absolute top-0 bottom-0 left-0 w-3.5 sm:w-4 bg-gradient-to-r from-black/60 via-white/10 to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-3.5 sm:left-4 w-[1px] bg-black/40 pointer-events-none" />

          {/* Subtle Right Edge Paper Depth */}
          <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />

          {/* Subtle Sheen Reflection on Hover */}
          <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent rotate-45 pointer-events-none transition-transform duration-1000 group-hover:translate-x-full" />
        </div>

      </div>

    </div>
  );
}
