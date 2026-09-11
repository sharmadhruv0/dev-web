import React from 'react';
import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';
import Divider from '../components/Divider';
import PortraitCard from '../components/PortraitCard';
import QuoteBand from '../components/QuoteBand';

const GUIDING_IDEAS = [
  {
    title: 'Attention',
    quote: 'The rarest form of love. The truest form of craft.'
  },
  {
    title: 'Patience',
    quote: 'The long instrument on which every great thing is played.'
  },
  {
    title: 'Quietness',
    quote: 'Not the absence of sound. The presence of listening.'
  }
];

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  return (
    <div className="py-12 sm:py-20">
      
      {/* 1. Header & Portrait Section */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto text-center mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Eyebrow centered>ABOUT THE AUTHOR</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F1EEE6] font-light">
            Dev Aansh
          </h1>
          <p className="font-serif italic text-gold text-lg sm:text-xl">
            Devansh Awasthi — Poet, Author & Entrepreneur
          </p>
          <Divider centered gold />
        </motion.div>

        {/* Centered Editorial Portrait */}
        <motion.div
          className="mt-12 max-w-sm mx-auto"
          {...fadeInUp}
        >
          <PortraitCard />
        </motion.div>
      </section>

      {/* 2. Long-Form Bio */}
      <section className="px-6 sm:px-8 max-w-2xl mx-auto mb-24 sm:mb-32">
        <motion.div
          className="space-y-8 font-body text-lg sm:text-xl text-[#B8B4AC] leading-[1.85]"
          {...fadeInUp}
        >
          {/* Opening Drop-Cap Paragraph */}
          <p className="drop-cap text-[#F1EEE6]/90">
            Dev Aansh is the pen name of Devansh Awasthi — a poet, author, entrepreneur, and student of the interior life. He writes at the intersection of philosophy and observation, in a voice shaped as much by ancient contemplative traditions as by the streets and skylines of the modern world.
          </p>

          <p>
            Born to a family that valued both discipline and imagination, Dev grew up between books and boardrooms — a childhood of Sanskrit couplets, business ledgers, and long walks through the small honesties of ordinary days. From those years, two loves survived intact: the love of language, and the love of building.
          </p>

          <p>
            His debut collection, <em className="italic text-gold font-serif font-normal">Along the Moving Sun</em>, is a book about attention. It gathers four years of poems written across three cities and one long, slow return to himself. It has been read in living rooms and lecture halls, on trains and in hospital wards — carried, quietly, by readers who wanted a book that would sit still with them.
          </p>

          <p>
            Alongside his writing, Dev leads early-stage ventures in the creative and technology space, where he brings the same principles to his work: patience, craft, and a suspicion of noise. He believes the best businesses, like the best sentences, are the ones you can trust in a quiet room.
          </p>

          <p>
            He writes weekly essays on <em className="italic text-[#F1EEE6] font-serif">philosophy, creativity, business, and the small architectures of love</em>. He is currently at work on his second book — a collection of essays on the slow arts.
          </p>
        </motion.div>
      </section>

      {/* 3. Guiding Ideas Section */}
      <section className="px-6 sm:px-8 max-w-5xl mx-auto mb-20">
        <div className="text-center mb-14">
          <Eyebrow centered>PHILOSOPHY</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F1EEE6] font-light">
            Guiding Ideas
          </h2>
          <Divider centered gold />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {GUIDING_IDEAS.map((idea, index) => (
            <motion.div
              key={idea.title}
              className="rounded-sm border border-white/10 bg-[#10141C] p-8 sm:p-10 text-center space-y-4 shadow-xl hover:border-gold/40 transition-colors duration-300 flex flex-col justify-between"
              {...fadeInUp}
              transition={{ delay: index * 0.15 }}
            >
              <div className="space-y-4">
                <span className="font-sans text-[10px] tracking-[0.25em] text-[#7A7670] uppercase">
                  0{index + 1}
                </span>
                <h3 className="font-serif italic text-2xl sm:text-3xl text-gold font-normal">
                  {idea.title}
                </h3>
              </div>
              <p className="font-body text-base text-[#B8B4AC] leading-relaxed pt-2">
                "{idea.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Quote Band */}
      <QuoteBand />

    </div>
  );
}
