import React from 'react';

export default function Eyebrow({ children, className = '', centered = false }) {
  return (
    <span
      className={`block font-sans text-[11px] sm:text-xs font-semibold tracking-eyebrow uppercase text-gold mb-3 ${
        centered ? 'text-center' : ''
      } ${className}`}
    >
      {children}
    </span>
  );
}
