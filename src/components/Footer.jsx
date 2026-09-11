import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Youtube, BookOpen } from 'lucide-react';
import Divider from './Divider';

const FOOTER_LINKS = [
  { name: 'ABOUT', path: '/about' },
  { name: 'BOOKS', path: '/books' },
  { name: 'JOURNAL', path: '/journal' },
  { name: 'NEWSLETTER', path: '/#newsletter' },
  { name: 'CONTACT', path: '/contact' },
];

const SOCIAL_LINKS = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  { name: 'Goodreads', icon: BookOpen, href: 'https://goodreads.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0D14] pt-16 pb-12 px-6 sm:px-8 text-center relative z-20">
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

        {/* Social Icons (Circular Outline Icons) */}
        <div className="flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-gold flex items-center justify-center text-[#B8B4AC] hover:text-gold transition-all duration-300 hover:scale-110 hover:bg-gold/5"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
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
