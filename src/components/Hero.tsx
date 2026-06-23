import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Play, Star, ChevronDown } from "lucide-react";
import { COMPANY, HERO_VIDEO, HERO_POSTER, HERO_STATS, MARQUEE_ITEMS } from "../data/content";

function StatBlock({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="border-l border-white/15 pl-4 sm:pl-5"
    >
      <div className="flex items-baseline gap-0.5">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">{value}</span>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-light">{suffix}</span>
      </div>
      <p className="mt-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-white/55">
        {label}
      </p>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full overflow-hidden bg-charcoal-deep"
    >
      {/* Cinematic split: video + content */}
      <div className="relative min-h-screen flex flex-col lg:flex-row">
        {/* LEFT — Video panel (60%) */}
        <div className="relative lg:w-[58%] h-[45vh] sm:h-[50vh] lg:h-screen overflow-hidden">
          <motion.video
            style={{ scale: videoScale }}
            autoPlay
            loop
            muted
            playsInline
            poster={HERO_POSTER}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
            <source
              src="https://cdn.coverr.co/videos/coverr-construction-site-aerial-view-2596/1080p.mp4"
              type="video/mp4"
            />
          </motion.video>

          {/* Layered overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/40 via-transparent to-charcoal-deep/80 lg:to-charcoal-deep" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/70 via-transparent to-transparent" />

        </div>

        {/* RIGHT — Editorial content */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative lg:w-[42%] flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-0 bg-charcoal-deep"
        >
          {/* Top tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10"
          >
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase text-gold-light">
              Est. 2009
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 whitespace-nowrap">
              Verona · NJ
            </span>
          </motion.div>

          {/* Massive headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,5.5vw,5.5rem)] font-bold text-white leading-[0.95] tracking-tight text-balance"
            >
              Building the
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,5.5vw,5.5rem)] font-serif italic font-medium text-gradient-gold leading-[0.95] tracking-tight"
            >
              future of
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,5.5vw,5.5rem)] font-bold text-white leading-[0.95] tracking-tight text-balance"
            >
              animal care.
            </motion.h1>
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-white/65 leading-relaxed max-w-md"
          >
            {COMPANY.subtagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-white px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-charcoal shadow-2xl transition-all hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span className="relative z-10">Request Consultation</span>
              <ArrowUpRight className="relative z-10 h-3 sm:h-4 w-3 sm:w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gold-gradient transition-transform duration-500 group-hover:translate-x-0" />
              <span className="absolute inset-0 -translate-x-full bg-gold-gradient transition-transform duration-500 group-hover:translate-x-0 group-hover:[&>span]:text-white">
                <span className="sr-only">Request Consultation</span>
              </span>
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/20 px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white transition hover:border-gold hover:bg-white/5 w-full sm:w-auto"
            >
              <span className="inline-flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-gold-gradient flex-shrink-0">
                <Play className="h-2.5 sm:h-3 w-2.5 sm:w-3 fill-white ml-0.5" />
              </span>
              See Our Work
            </a>
          </motion.div>

          {/* Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 sm:h-4 w-3 sm:w-4 fill-gold text-gold flex-shrink-0" />
              ))}
            </div>
            <p className="text-[11px] sm:text-xs text-white/60">
              <span className="text-white font-semibold">5.0</span> · 120+ verified reviews
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative z-10 border-t border-white/10 bg-charcoal-deep/80 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-12">
          {HERO_STATS.map((s, i) => (
            <StatBlock key={s.label} {...s} delay={1.7 + i * 0.15} />
          ))}
        </div>
      </motion.div>

      {/* Marquee strip */}
      <div className="relative border-t border-white/10 bg-gold-gradient overflow-hidden py-3 sm:py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="mx-4 sm:mx-8 text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-charcoal-deep"
            >
              {item}
              <span className="mx-4 sm:mx-8 text-charcoal-deep/30">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 sm:bottom-32 right-4 sm:right-6 lg:right-10 z-10 hidden md:flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center mb-6 sm:mb-8">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}