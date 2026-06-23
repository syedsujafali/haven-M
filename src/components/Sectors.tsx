import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./UI";
import { SECTORS } from "../data/content";

export function Sectors() {
  return (
    <section id="sectors" className="relative py-28 md:py-40 bg-light-gray overflow-hidden">
      <div className="absolute top-12 right-6 lg:right-10 hidden md:block">
        <span className="text-[120px] lg:text-[180px] font-bold text-charcoal/[0.04] leading-none select-none">
          04
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Sectors · 04"
          title={
            <>
              Deep expertise across{" "}
              <span className="font-serif italic font-medium text-gradient-gold">specialized</span>{" "}
              industries.
            </>
          }
          description="Each sector we serve demands a unique set of standards. We bring domain knowledge to every project type."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SECTORS.map((sector) => (
            <motion.article
              key={sector.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-charcoal-deep aspect-[4/5] cursor-pointer shadow-xl"
            >
              <img
                src={sector.image}
                alt={sector.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover img-zoom opacity-70 group-hover:opacity-50 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/30 to-transparent" />

              {/* Number watermark */}
              <div className="absolute top-6 left-6 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
                {sector.number}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                <div className="h-px w-10 bg-gold mb-4 transition-all duration-500 group-hover:w-20" />
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {sector.title}
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-32">
                  {sector.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-light">
                  Explore
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}