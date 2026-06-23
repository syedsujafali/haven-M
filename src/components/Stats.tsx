import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { COMPANY_STATS } from "../data/content";

function BigCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left"
    >
      <div className="flex items-baseline justify-center md:justify-start gap-1">
        <span className="text-7xl md:text-8xl lg:text-9xl font-bold text-charcoal tracking-tighter leading-none">
          {value}
        </span>
        <span className="text-5xl md:text-6xl font-serif italic text-gradient-gold leading-none">
          {suffix}
        </span>
      </div>
      <p className="mt-3 text-[11px] font-bold tracking-[0.3em] uppercase text-dark-gray/60">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-24 md:py-32 bg-warm-white overflow-hidden border-y border-charcoal/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold-dark">
            By the Numbers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
            A track record of <span className="font-serif italic text-gradient-gold">excellence</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {COMPANY_STATS.map((stat) => (
            <BigCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}