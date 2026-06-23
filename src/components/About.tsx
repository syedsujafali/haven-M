import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Building2 } from "lucide-react";
import { Eyebrow, FadeIn } from "./UI";
import { COMPANY, PHILOSOPHY } from "../data/content";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-40 bg-warm-white overflow-hidden">
      {/* Editorial section number */}
      <div className="absolute top-12 left-6 lg:left-10 hidden md:block">
        <span className="text-[120px] lg:text-[180px] font-bold text-charcoal/[0.04] leading-none select-none">
          01
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — image collage */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <FadeIn>
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-charcoal/15">
                  <motion.img
                    style={{ y: imgY }}
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                    alt="Haven Construction team at work"
                    className="absolute inset-0 h-[110%] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Overlapping image */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="absolute -bottom-10 -right-6 md:-right-12 w-44 md:w-56 aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl shadow-charcoal/30 border-8 border-warm-white hidden sm:block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=600&q=80"
                    alt="Premium craftsmanship"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Floating award card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="absolute -top-6 -left-4 md:-left-8 glass rounded-2xl p-5 shadow-2xl shadow-charcoal/15 max-w-[200px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-white">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-charcoal leading-none">15+</p>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-dark-gray/60 mt-1">
                        Years Building
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Right — editorial content */}
          <div className="lg:col-span-6">
            <FadeIn>
              <Eyebrow>The Studio · 01</Eyebrow>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.05] tracking-tight text-balance">
                A studio devoted to{" "}
                <span className="font-serif italic font-medium text-gradient-gold">precision</span>,
                craft, and the buildings that{" "}
                <span className="font-serif italic font-medium text-gradient-gold">heal</span>.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-dark-gray/75">
                <p>
                  At <span className="font-semibold text-charcoal">{COMPANY.name}</span>,
                  we approach every project as a partnership. We bring unmatched
                  craftsmanship and deep expertise to veterinary hospitals, medical
                  facilities, and luxury residences—balancing beauty, function,
                  and uncompromising quality.
                </p>
                <p>
                  For over a decade, we've helped veterinarians, healthcare
                  providers, and discerning homeowners across the Tri-State area
                  bring their most ambitious visions to life.
                </p>
              </div>
            </FadeIn>

            {/* Philosophy grid */}
            <div className="mt-12 grid sm:grid-cols-2 gap-px bg-charcoal/10 rounded-2xl overflow-hidden border border-charcoal/10">
              {PHILOSOPHY.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                    className="bg-white p-6 md:p-7 group hover:bg-charcoal hover:text-white transition-colors duration-500"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-dark group-hover:text-gold-light transition">
                        {item.number}
                      </span>
                      <Icon className="h-5 w-5 text-gold group-hover:text-gold-light transition" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-gray/65 group-hover:text-white/70 transition">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-4 text-sm font-semibold text-white transition hover:bg-gold-gradient hover:-translate-y-0.5"
                >
                  Begin Your Project
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-gold transition-colors group"
                >
                  <Building2 className="h-4 w-4" />
                  Explore Selected Work
                  <span className="h-px w-8 bg-charcoal group-hover:w-12 group-hover:bg-gold transition-all" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}