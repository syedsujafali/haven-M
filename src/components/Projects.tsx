import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SectionHeading } from "./UI";
import { PROJECTS, PROJECT_FILTERS } from "../data/content";

export function Projects() {
  const [active, setActive] = useState("All Work");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All Work"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-28 md:py-40 bg-warm-white overflow-hidden">
      <div className="absolute top-12 left-6 lg:left-10 hidden md:block">
        <span className="text-[120px] lg:text-[180px] font-bold text-charcoal/[0.04] leading-none select-none">
          05
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="Selected Work · 05"
            title={
              <>
                Projects that speak for{" "}
                <span className="font-serif italic font-medium text-gradient-gold">themselves</span>.
              </>
            }
            description="A curated portfolio of veterinary hospitals, renovations, and residences delivered with precision."
            align="left"
          />
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-center gap-2 border-b border-charcoal/10 pb-6"
        >
          {PROJECT_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-wide transition ${
                active === cat
                  ? "text-white"
                  : "text-charcoal/55 hover:text-charcoal"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="filterPill"
                  className="absolute inset-0 rounded-full bg-charcoal"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {active === cat && (
                <motion.span
                  layoutId="filterPillGold"
                  className="absolute inset-0 rounded-full bg-gold-gradient opacity-0"
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
          <span className="ml-auto text-[11px] font-bold tracking-[0.2em] uppercase text-charcoal/40">
            {filtered.length} {filtered.length === 1 ? "Project" : "Projects"}
          </span>
        </motion.div>

        {/* Masonry */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.button
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-2xl text-left cursor-pointer shadow-lg ${
                  project.span || (i === 0 ? "sm:col-span-2 sm:row-span-2" : "")
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/30 to-transparent opacity-80 group-hover:opacity-95 transition" />

                {/* Top meta */}
                <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* Year */}
                <div className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/80">
                  {project.year}
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase text-white shadow-md">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-lg md:text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/65">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-deep/95 backdrop-blur-md p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full overflow-hidden rounded-3xl bg-charcoal-deep shadow-2xl"
            >
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
              >
                ✕
              </button>
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                className="w-full h-[60vh] object-cover"
              />
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase">
                  <span className="text-gold-light">{filtered[lightbox].category}</span>
                  <span className="h-3 w-px bg-white/20" />
                  <span className="text-white/60">{filtered[lightbox].year}</span>
                  <span className="h-3 w-px bg-white/20" />
                  <span className="text-white/60">{filtered[lightbox].location}</span>
                </div>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                  {filtered[lightbox].title}
                </h3>
                <p className="mt-3 text-white/70 text-sm md:text-base">
                  A signature Haven Construction project—delivered with the precision and craftsmanship our clients expect.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}