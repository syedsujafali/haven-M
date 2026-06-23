import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Eyebrow } from "./UI";
import { TESTIMONIALS } from "../data/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative py-28 md:py-40 bg-charcoal-deep text-white overflow-hidden">
      <div className="absolute top-12 right-6 lg:right-10 hidden md:block">
        <span className="text-[120px] lg:text-[180px] font-bold text-white/[0.03] leading-none select-none">
          06
        </span>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-deep/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow light>Press · 06</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-white"
          >
            What our clients{" "}
            <span className="font-serif italic font-medium text-gradient-gold">say</span>.
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] glass-dark border border-white/10">
            <div className="absolute -top-12 -left-12 text-gold/10">
              <Quote className="h-56 w-56" strokeWidth={1} />
            </div>

            <div className="relative grid md:grid-cols-5 gap-8 p-8 md:p-14">
              <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="h-36 w-36 md:h-44 md:w-44 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                      <img
                        src={current.image}
                        alt={current.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.name + "-info"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                  >
                    <h4 className="text-xl font-bold text-white">{current.name}</h4>
                    <p className="text-sm text-white/55">{current.role}</p>
                    <div className="mt-3 flex items-center gap-1 md:justify-start justify-center">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="md:col-span-3 flex items-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.blockquote
                    key={current.name + "-quote"}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed text-white/90 text-balance"
                  >
                    "{current.quote}"
                  </motion.blockquote>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition hover:bg-gold-gradient hover:border-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-10 bg-gold-gradient" : "w-1.5 bg-white/25"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition hover:bg-gold-gradient hover:border-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}