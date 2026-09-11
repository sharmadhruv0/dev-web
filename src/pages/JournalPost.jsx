import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Divider from '../components/Divider';
import QuoteBand from '../components/QuoteBand';
import { journalEntries } from '../data/journalData';

export default function JournalPost() {
  const { slug } = useParams();
  const entry = journalEntries.find((item) => item.slug === slug);

  if (!entry) {
    return <Navigate to="/journal" replace />;
  }

  return (
    <div className="py-12 sm:py-20">
      
      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 mb-8">
        <Link
          to="/journal"
          className="font-sans text-xs tracking-nav uppercase text-[#B8B4AC] hover:text-gold inline-flex items-center gap-2 transition-colors duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO JOURNAL</span>
        </Link>
      </div>

      {/* Post Header */}
      <header className="max-w-3xl mx-auto px-6 sm:px-8 text-center space-y-5 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Eyebrow centered>{entry.category}</Eyebrow>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F1EEE6] font-light leading-tight tracking-tight mt-3 mb-6">
            {entry.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-gold max-w-xl mx-auto leading-relaxed">
            "{entry.subtitle}"
          </p>

          <Divider centered gold className="my-8" />

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-xs font-sans tracking-widest text-[#7A7670] uppercase">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold/70" />
              {entry.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold/70" />
              {entry.readTime}
            </span>
            <span>·</span>
            <span className="text-[#F1EEE6]">DEV AANSH</span>
          </div>
        </motion.div>
      </header>

      {/* Article Body */}
      <article className="max-w-2xl mx-auto px-6 sm:px-8 mb-24 sm:mb-32">
        <div className="font-body text-lg sm:text-xl text-[#B8B4AC] leading-[1.9] space-y-6">
          {entry.content.map((paragraph, index) => {
            if (index === 0) {
              return (
                <p key={index} className="drop-cap text-[#F1EEE6]/90">
                  {paragraph}
                </p>
              );
            }
            return (
              <p key={index}>
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Post Signoff / Colophon */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex items-center justify-between">
          <span className="font-serif italic text-sm text-[#7A7670]">
            From the desk of Devansh Awasthi
          </span>
          <Link
            to="/contact"
            className="font-sans text-xs tracking-wider uppercase text-gold hover:underline"
          >
            RESPOND PRIVATELY →
          </Link>
        </div>
      </article>

      {/* Closing Quote Band */}
      <QuoteBand />

    </div>
  );
}
