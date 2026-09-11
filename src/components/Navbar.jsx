import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'BOOKS', path: '/books' },
  { name: 'JOURNAL', path: '/journal' },
  { name: 'REVIEWS', path: '/reviews' },
  { name: 'MEDIA', path: '/media' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0D14]/90 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-lg shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo / Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-1.5 text-decoration-none"
          aria-label="Dev Aansh Home"
        >
          <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.2em] text-[#F1EEE6] group-hover:text-gold transition-colors duration-300">
            DEV <span className="text-gold text-xs align-middle">·</span> AANSH
          </span>
        </Link>

        {/* Right: Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-sans text-xs uppercase tracking-nav py-1 transition-colors duration-300 group ${
                  isActive ? 'text-gold font-medium' : 'text-[#B8B4AC] hover:text-[#F1EEE6]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {/* Sliding gold underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-gold transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="p-2 text-[#F1EEE6] hover:text-gold transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Nav Overlay Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-[#0A0D14]/98 backdrop-blur-xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-8 px-8 shadow-2xl' : 'max-h-0 opacity-0 py-0 px-8'
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-sans text-xs tracking-nav uppercase transition-colors py-1 ${
                  isActive ? 'text-gold font-semibold' : 'text-[#B8B4AC] hover:text-[#F1EEE6]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
