import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D14] text-[#F1EEE6]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
