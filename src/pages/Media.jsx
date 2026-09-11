import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Radio, FileText, Download } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Divider from '../components/Divider';
import QuoteBand from '../components/QuoteBand';
import { mediaItems } from '../data/mediaData';

export default function Media() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  return (
    <div className="py-12 sm:py-20">
      
      {/* Header */}
      <section className="px-6 sm:px-8 text-center max-w-4xl mx-auto mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Eyebrow centered>CONVERSATIONS & PRESS</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F1EEE6] font-light">
            Media
          </h1>
          <Divider centered gold />
          <p className="font-body text-base sm:text-lg text-[#B8B4AC] max-w-xl mx-auto italic leading-relaxed">
            Interviews, podcast dialogues, and literary profiles on craft, stillness, and building enduring things.
          </p>
        </motion.div>
      </section>

      {/* Media Items Grid */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto mb-24 sm:mb-32">
        <div className="space-y-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-sm border border-white/10 bg-[#10141C] p-8 sm:p-10 hover:border-gold/40 transition-all duration-300 shadow-xl"
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-5 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold">
                    {item.type.includes('PODCAST') ? <Radio className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">
                      {item.type}
                    </span>
                    <span className="text-[#7A7670] mx-2">·</span>
                    <span className="font-sans text-xs tracking-wider text-[#B8B4AC] font-medium">
                      {item.outlet}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-sans tracking-widest text-[#7A7670] uppercase">
                  {item.date} · {item.duration}
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#F1EEE6] font-light mb-3">
                {item.title}
              </h2>

              <p className="font-body text-base text-[#B8B4AC] leading-relaxed mb-6">
                {item.description}
              </p>

              <div>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-nav uppercase text-gold hover:text-gold-light transition-colors border-b border-gold/40 hover:border-gold pb-0.5"
                >
                  <span>{item.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Press Kit Banner */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20">
        <div className="rounded-sm border border-gold/20 bg-gradient-to-r from-[#10141C] to-[#151A24] p-8 sm:p-12 text-center space-y-4">
          <Eyebrow centered>PRESS & INQUIRIES</Eyebrow>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F1EEE6] font-light">
            Download the Author Press Kit
          </h3>
          <p className="font-body text-base text-[#B8B4AC] max-w-md mx-auto">
            Includes high-resolution author portraits, book cover art, official author bios (short and extended), and book excerpt sheets.
          </p>
          <div className="pt-3">
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                alert('Press kit archive will download once high-resolution print files are ready.');
              }}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-[#0A0D14] px-6 py-3.5 rounded-sm font-sans text-xs tracking-nav font-semibold uppercase transition-all shadow-md shadow-gold/10 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD ASSETS (.ZIP)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Closing Quote Band */}
      <QuoteBand />

    </div>
  );
}
