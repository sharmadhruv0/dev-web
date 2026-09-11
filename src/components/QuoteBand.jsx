import React from 'react';
import Divider from './Divider';

export default function QuoteBand({ className = '' }) {
  return (
    <section className={`py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-[#070A0F]/40 backdrop-blur-[2px] border-t border-b border-white/[0.06] ${className}`}>
      {/* Subtle radial ambient warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
        <Divider centered gold className="mb-8" />
        
        <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F1EEE6] font-light leading-relaxed tracking-wide px-4">
          "The quiet is not empty. It is full of answers."
        </blockquote>

        <p className="font-sans text-xs sm:text-[13px] tracking-[0.25em] uppercase text-gold font-medium pt-2">
          — DEV AANSH
        </p>

        <Divider centered gold className="mt-8" />
      </div>
    </section>
  );
}
