import React from 'react';
import { Link } from 'react-router-dom';
import Divider from './Divider';
import { SOCIAL_LINKS } from '../data/socialLinks';
import { getSocialIcon } from './SocialIcons';

const FOOTER_LINKS = [
  { name: 'ABOUT', path: '/about' },
  { name: 'BOOKS', path: '/books' },
  { name: 'JOURNAL', path: '/journal' },
  { name: 'NEWSLETTER', path: '/#newsletter' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070A0F]/60 backdrop-blur-sm pt-16 pb-12 px-6 sm:px-8 text-center relative z-20">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Centered Pull Quote */}
        <div className="space-y-3">
          <blockquote className="font-serif italic text-lg sm:text-xl text-[#F1EEE6]/90 font-light">
            "The quiet is not empty. It is full of answers."
          </blockquote>
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold font-medium">
            — DEV AANSH
          </p>
        </div>

        <Divider centered gold className="opacity-40 my-6" />

        {/* Social Links with App Icons and Platform Names */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.appLabel}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-gold/60 text-[#B8B4AC] hover:text-gold bg-[#10141C]/60 hover:bg-gold/5 transition-all duration-300 font-sans text-xs tracking-wider"
            >
              {getSocialIcon(social.name, { className: 'w-3.5 h-3.5' })}
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Footer Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-sans text-[11px] tracking-nav uppercase text-[#B8B4AC] hover:text-gold transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Copyright Line */}
        <div className="pt-6 border-t border-white/[0.04]">
          <p className="font-sans text-[10px] sm:text-[11px] tracking-widest uppercase text-[#7A7670]">
            © 2026 DEVANSH AWASTHI. ALL WORDS, QUIETLY KEPT.
          </p>
        </div>

      </div>
    </footer>
  );
}
