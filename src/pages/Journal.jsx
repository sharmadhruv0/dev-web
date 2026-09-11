import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Divider from '../components/Divider';
import QuoteBand from '../components/QuoteBand';
import { journalEntries } from '../data/journalData';

export default function Journal() {
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
          <Eyebrow centered>THE JOURNAL</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F1EEE6] font-light">
            Essays & Fragments
          </h1>
          <Divider centered gold />
          <p className="font-body text-base sm:text-lg text-[#B8B4AC] max-w-xl mx-auto italic leading-relaxed">
            Slow notes on attention, poetry, philosophy, and building quiet lives.
          </p>
        </motion.div>
      </section>

      {/* Journal Entries Grid */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto mb-24 sm:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.slug}
              className="rounded-sm border border-white/10 bg-[#10141C] p-8 sm:p-10 flex flex-col justify-between hover:border-gold/40 transition-all duration-300 shadow-xl group"
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="space-y-4">
                {/* Meta */}
                <div className="flex items-center justify-between text-[11px] font-sans tracking-widest text-[#7A7670]">
                  <span className="text-gold font-medium uppercase">{entry.category}</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#7A7670]" />
                    {entry.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F1EEE6] group-hover:text-gold transition-colors duration-300 font-light leading-snug">
                  <Link to={`/journal/${entry.slug}`}>
                    {entry.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="font-body italic text-base text-[#B8B4AC] leading-relaxed pt-1">
                  "{entry.subtitle}"
                </p>
              </div>

              {/* Read Link */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#7A7670]">
                  {entry.date}
                </span>
                <Link
                  to={`/journal/${entry.slug}`}
                  className="font-sans text-xs tracking-nav uppercase text-gold hover:text-gold-light inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span>CONTINUE READING</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Closing Quote Band */}
      <QuoteBand />

    </div>
  );
}
