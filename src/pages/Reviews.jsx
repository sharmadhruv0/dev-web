import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Divider from '../components/Divider';
import QuoteBand from '../components/QuoteBand';
import { allReviews } from '../data/reviewsData';

export default function Reviews() {
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
          <Eyebrow centered>CRITICAL RECEPTION</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F1EEE6] font-light">
            Reviews & Notices
          </h1>
          <Divider centered gold />
          <p className="font-body text-base sm:text-lg text-[#B8B4AC] max-w-xl mx-auto italic leading-relaxed">
            Notes from publications, critics, and readers who sat with Along the Moving Sun.
          </p>
        </motion.div>
      </section>

      {/* Reviews Grid */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-24 sm:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allReviews.map((review, index) => (
            <motion.div
              key={index}
              className="rounded-sm border border-white/10 bg-[#10141C] p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-xl hover:border-gold/40 transition-all duration-300"
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="space-y-4">
                <Quote className="w-5 h-5 text-gold/40" />
                <blockquote className="font-serif italic text-base sm:text-lg text-[#F1EEE6] font-light leading-relaxed">
                  "{review.quote}"
                </blockquote>
              </div>

              <div className="border-t border-white/[0.06] pt-4">
                <span className="block font-sans text-xs tracking-wider uppercase text-gold font-semibold">
                  — {review.source}
                </span>
                <span className="block font-sans text-[10px] tracking-widest uppercase text-[#7A7670] mt-0.5">
                  {review.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Quote Band */}
      <QuoteBand />

    </div>
  );
}
