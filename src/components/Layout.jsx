import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import AmbientBackground from './AmbientBackground';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative text-[#F1EEE6]">
      <AmbientBackground />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
