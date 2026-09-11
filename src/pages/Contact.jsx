import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Divider from '../components/Divider';
import Button from '../components/Button';
import QuoteBand from '../components/QuoteBand';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12 sm:py-20">
      
      {/* Header */}
      <section className="px-6 sm:px-8 text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Eyebrow centered>GET IN TOUCH</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F1EEE6] font-light">
            Say Something Quiet
          </h1>
          <Divider centered gold />
          <p className="font-body text-base sm:text-lg text-[#B8B4AC] max-w-xl mx-auto italic leading-relaxed">
            For literary inquiries, readings, venture conversations, or simply a thoughtful note from one reader to another.
          </p>
        </motion.div>
      </section>

      {/* Main Form & Info */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct details Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-sm border border-white/10 bg-[#10141C] p-6 space-y-3">
              <div className="flex items-center gap-3 text-gold">
                <Mail className="w-4 h-4" />
                <span className="font-sans text-xs tracking-wider uppercase font-semibold">Direct Letter</span>
              </div>
              <p className="font-body text-sm text-[#B8B4AC]">
                Letters arrive directly at Devansh's personal study:
              </p>
              <a
                href="mailto:letters@devaansh.com"
                className="font-serif text-base text-[#F1EEE6] hover:text-gold transition-colors inline-block"
              >
                letters@devaansh.com
              </a>
            </div>

            <div className="rounded-sm border border-white/10 bg-[#10141C] p-6 space-y-3">
              <div className="flex items-center gap-3 text-gold">
                <MapPin className="w-4 h-4" />
                <span className="font-sans text-xs tracking-wider uppercase font-semibold">Location</span>
              </div>
              <p className="font-body text-sm text-[#B8B4AC]">
                Writing between New Delhi, London, and quiet mountain retreats.
              </p>
            </div>

            <div className="rounded-sm border border-white/10 bg-[#10141C] p-6 space-y-3">
              <div className="flex items-center gap-3 text-gold">
                <Clock className="w-4 h-4" />
                <span className="font-sans text-xs tracking-wider uppercase font-semibold">Pacing</span>
              </div>
              <p className="font-body text-sm text-[#B8B4AC]">
                Correspondences are read with care. Expect a slow, measured reply within several days.
              </p>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-white/10 bg-[#10141C] p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full border border-gold/40 bg-gold/10 text-gold mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#F1EEE6] font-light">Your words have been received.</h3>
                  <p className="font-body text-base text-[#B8B4AC] max-w-sm mx-auto">
                    Thank you, {formData.name}. Your note has been delivered quietly to Dev's study desk.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-sans text-[11px] tracking-[0.2em] uppercase text-[#B8B4AC] mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Devansh Awasthi"
                      className="w-full px-4 py-3.5 bg-[#0A0D14] border border-white/10 rounded-sm text-[#F1EEE6] placeholder-[#7A7670] font-sans text-xs tracking-wider focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-sans text-[11px] tracking-[0.2em] uppercase text-[#B8B4AC] mb-2">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="reader@domain.com"
                      className="w-full px-4 py-3.5 bg-[#0A0D14] border border-white/10 rounded-sm text-[#F1EEE6] placeholder-[#7A7670] font-sans text-xs tracking-wider focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-sans text-[11px] tracking-[0.2em] uppercase text-[#B8B4AC] mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="On Along the Moving Sun / Literary inquiry"
                      className="w-full px-4 py-3.5 bg-[#0A0D14] border border-white/10 rounded-sm text-[#F1EEE6] placeholder-[#7A7670] font-sans text-xs tracking-wider focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans text-[11px] tracking-[0.2em] uppercase text-[#B8B4AC] mb-2">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your thoughts here..."
                      className="w-full px-4 py-3.5 bg-[#0A0D14] border border-white/10 rounded-sm text-[#F1EEE6] placeholder-[#7A7670] font-sans text-xs tracking-wider focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gold" icon={Send} iconPosition="right" className="w-full">
                    SEND MESSAGE
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Closing Quote Band */}
      <QuoteBand />

    </div>
  );
}
