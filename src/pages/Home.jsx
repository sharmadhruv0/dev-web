import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Feather, Mail, ArrowRight, Check } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Divider from '../components/Divider';
import Button from '../components/Button';
import BookCover from '../components/BookCover';
import PortraitCard from '../components/PortraitCard';
import QuoteBand from '../components/QuoteBand';

export default function Home() {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribedEmail.trim()) {
      setIsSubscribed(true);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  return (
    <div className="relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 sm:px-8 py-20 overflow-hidden">
        {/* Faint, darkened background image with heavy dark overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2000&q=80"
            alt="Open book in a quiet study"
            className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-[0.22] scale-105"
          />
          {/* Heavy dark navy overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D14]/90 via-[#0A0D14]/85 to-[#0A0D14]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0D14_75%)]" />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <Eyebrow centered className="tracking-[0.25em]">
            POET · AUTHOR · THINKER
          </Eyebrow>

          {/* Large Headline across two lines */}
          <h1 className="font-serif font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-[#F1EEE6]">
            The quiet lives<br />
            <span className="italic text-gold font-serif font-normal">between the lines.</span>
          </h1>

          {/* Sub-paragraph */}
          <p className="font-body text-base sm:text-lg md:text-xl text-[#B8B4AC] max-w-xl mx-auto leading-relaxed font-normal">
            Welcome to the private study of <strong className="text-[#F1EEE6] font-semibold">Dev Aansh</strong> — poems, philosophy, and slow-written essays for readers who still believe language can hold something sacred.
          </p>

          {/* CTA Buttons in a row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
            <Button to="/books" variant="gold" icon={BookOpen} iconPosition="left">
              EXPLORE BOOKS
            </Button>
            <Button to="/journal" variant="outline" icon={Feather} iconPosition="left">
              READ THE JOURNAL
            </Button>
            <Button to="/contact" variant="link" icon={Mail} iconPosition="left" className="px-3 py-2 text-xs">
              CONNECT
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 hover:opacity-80 transition-opacity">
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#B8B4AC] mb-2">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-[#0A0D14]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large Portrait Image (aspect ratio ~4:5) */}
            <motion.div
              className="lg:col-span-5 flex justify-center"
              {...fadeInUp}
            >
              <PortraitCard />
            </motion.div>

            {/* Right: Text content */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-left"
              {...fadeInUp}
            >
              <Eyebrow>ABOUT</Eyebrow>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F1EEE6] font-light leading-tight">
                A writer devoted to the slow arts.
              </h2>

              <Divider centered={false} gold className="my-5" />

              <p className="font-body text-base sm:text-lg text-[#B8B4AC] leading-relaxed">
                Dev Aansh is the pen name of <strong className="text-[#F1EEE6] font-semibold">Devansh Awasthi</strong> — poet, entrepreneur, and lifelong student of the interior life. His writing sits at the intersection of philosophy and quiet observation, tracing what it means to build a meaningful life in an age that has forgotten how to pause.
              </p>

              <div className="pt-4">
                <Button to="/about" variant="link" icon={ArrowRight} iconPosition="right">
                  READ THE FULL STORY
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED BOOK SECTION */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-[#10141C]/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Book Cover Mockup */}
            <motion.div
              className="lg:col-span-5 flex justify-center order-2 lg:order-1"
              {...fadeInUp}
            >
              <BookCover size="normal" />
            </motion.div>

            {/* Right: Book Details */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2"
              {...fadeInUp}
            >
              <Eyebrow>THE DEBUT</Eyebrow>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F1EEE6] font-light">
                Along the Moving Sun
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-gold font-normal">
                "A quiet meditation on longing, light, and the slow return to oneself."
              </p>

              <Divider centered={false} gold className="my-5" />

              <p className="font-body text-base sm:text-lg text-[#B8B4AC] leading-relaxed">
                A debut collection of poems tracing the arc of a single inner day — from the first restless dawn of desire, through the long noon of doubt, to the amber hush of acceptance. Written across four years and three cities, <em className="text-[#F1EEE6]">Along the Moving Sun</em> is a book for the ones who feel the world in slow tides.
              </p>

              <div className="pt-4">
                <Button to="/books" variant="gold">
                  VIEW THE BOOK
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. JOURNAL PREVIEW SECTION (Centered, text-only) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-[#0A0D14] text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          {...fadeInUp}
        >
          <Eyebrow centered>FROM THE JOURNAL</Eyebrow>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F1EEE6] font-light">
            The Quiet Discipline of Noticing
          </h2>

          <p className="font-body italic text-base sm:text-lg md:text-xl text-[#B8B4AC] max-w-2xl mx-auto leading-relaxed">
            "Attention is the rarest currency of our century. To notice slowly, on purpose, is already a small act of rebellion."
          </p>

          <div className="pt-6">
            <Button to="/journal/the-quiet-discipline-of-noticing" variant="link" icon={ArrowRight} iconPosition="right">
              CONTINUE READING
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 5. NEWSLETTER SECTION */}
      <section id="newsletter" className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-[#10141C]">
        <motion.div
          className="max-w-xl mx-auto text-center space-y-6"
          {...fadeInUp}
        >
          <Eyebrow centered>THE LETTER</Eyebrow>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#F1EEE6] font-light">
            A slow letter, once a month.
          </h2>

          <p className="font-body text-base text-[#B8B4AC] leading-relaxed">
            New poems, unpublished essays, and small notes from the desk. No noise. Unsubscribe anytime.
          </p>

          {isSubscribed ? (
            <div className="p-4 rounded-sm border border-gold/30 bg-gold/5 text-gold flex items-center justify-center gap-2 font-sans text-xs tracking-wide">
              <Check className="w-4 h-4 text-gold" />
              <span>Thank you for welcoming these quiet letters to your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-4">
              <input
                type="email"
                required
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3.5 bg-[#0A0D14] border border-white/10 rounded-sm text-[#F1EEE6] placeholder-[#7A7670] font-sans text-xs tracking-wider focus:outline-none focus:border-gold transition-colors"
              />
              <Button type="submit" variant="gold">
                SUBSCRIBE
              </Button>
            </form>
          )}
        </motion.div>
      </section>

      {/* 6. CLOSING QUOTE BAND */}
      <QuoteBand />

    </div>
  );
}
