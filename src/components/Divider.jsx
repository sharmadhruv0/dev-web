import React from 'react';

export default function Divider({ className = '', centered = true, gold = true }) {
  return (
    <div
      className={`h-[1px] w-16 sm:w-20 ${centered ? 'mx-auto' : ''} ${
        gold ? 'bg-gold/60' : 'bg-white/10'
      } my-6 ${className}`}
      aria-hidden="true"
    />
  );
}
