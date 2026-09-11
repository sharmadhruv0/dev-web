import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Divider from '../components/Divider';
import BookCover from '../components/BookCover';
import QuoteBand from '../components/QuoteBand';
import { featuredReviews } from '../data/reviewsData';

export default function Books() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const purchaseLinks = [
    { name: 'AMAZON', url: 'https://amazon.com' },
    { name: 'BARNES & NOBLE', url: 'https://barnesandnoble.com' },
    { name: 'GOODREADS', url: 'https://goodreads.com' },
  ];

  return (
    <div className="py-12 sm:py-20">
      
      {/* 1. Page Header (Centered) */}
      <section className="px-6 sm:px-8 text-center max-w-4xl mx-auto mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Eyebrow centered>THE LIBRARY</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F1EEE6] font-light">
            Books
          </h1>
          <Divider centered gold />
          <p className="font-body text-base sm:text-lg text-[#B8B4AC] max-w-xl mx-auto italic leading-relaxed">
            Slow-written volumes for slow readers. Each book below is meant to be lived with, not consumed.
          </p>
        </motion.div>
      </section>

      {/* 2. Book Detail Block */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Cover image left */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            {...fadeInUp}
          >
            <BookCover size="large" />
          </motion.div>

          {/* Details right */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            {...fadeInUp}
          >
            <Eyebrow>POEMS · 2024</Eyebrow>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F1EEE6] font-light">
              Along the Moving Sun
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-gold font-normal">
              "A quiet meditation on longing, light, and the slow return to oneself."
            </p>

            <Divider centered={false} gold className="my-5" />

            <p className="font-body text-base sm:text-lg text-[#B8B4AC] leading-relaxed">
              A debut collection of poems tracing the arc of a single inner day — from the first restless dawn of desire, through the long noon of doubt, to the amber hush of acceptance. Written across four years and three cities, Along the Moving Sun is a book for the ones who feel the world in slow tides.
            </p>

            {/* Row of three outlined pill/tab buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              {purchaseLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 hover:border-gold text-[#F1EEE6] hover:text-gold bg-transparent font-sans text-xs tracking-wider uppercase transition-all duration-300 hover:bg-gold/5"
                >
                  <span>{item.name}</span>
                  <ExternalLink className="w-3 h-3 text-gold/70" />
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Excerpt Quote Box */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto mb-24 sm:mb-32">
        <motion.div
          className="relative rounded-sm border border-white/10 bg-[#10141C] p-8 sm:p-12 shadow-2xl space-y-6"
          {...fadeInUp}
        >
          {/* Quote Mark Icon */}
          <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold">
            <Quote className="w-4 h-4 rotate-180" />
          </div>

          {/* Poem Excerpt in Italic Serif */}
          <div className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#F1EEE6] leading-loose space-y-6 font-light">
            <p>
              I have carried the morning<br />
              like a coin in my pocket —<br />
              warm from being held,<br />
              and softer for the wear.
            </p>
            <p>
              Somewhere between waking<br />
              and the first honest word,<br />
              a small sun is always moving<br />
              in the language of my chest.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold font-medium">
              EXCERPT · FROM THE COLLECTION
            </span>
            <span className="font-serif italic text-xs text-[#7A7670]">
              Along the Moving Sun
            </span>
          </div>
        </motion.div>
      </section>

      {/* 4. Reviews Section (Two side-by-side bordered quote cards) */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto mb-20">
        <div className="text-center mb-12">
          <Eyebrow centered>CRITICAL RECEPTION</Eyebrow>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F1EEE6] font-light">
            Words on the Book
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredReviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="rounded-sm border border-white/10 bg-[#10141C] p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-lg hover:border-gold/30 transition-colors duration-300"
              {...fadeInUp}
            >
              <blockquote className="font-serif italic text-base sm:text-lg text-[#F1EEE6] font-light leading-relaxed">
                "{review.quote}"
              </blockquote>
              <div className="border-t border-white/[0.06] pt-4 flex items-center justify-between">
                <span className="font-sans text-xs tracking-wider uppercase text-gold font-semibold">
                  — {review.source}
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-[#7A7670]">
                  {review.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Closing Quote Band */}
      <QuoteBand />

    </div>
  );
}
