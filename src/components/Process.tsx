import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./UI";
import { PROCESS } from "../data/content";

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-40 bg-warm-white overflow-hidden">
      <div className="absolute top-12 left-6 lg:left-10 hidden md:block">
        <span className="text-[120px] lg:text-[180px] font-bold text-charcoal/[0.04] leading-none select-none">
          03
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Process · 03"
          title={
            <>
              A refined path from{" "}
              <span className="font-serif italic font-medium text-gradient-gold">concept</span> to
              ribbon cutting.
            </>
          }
          description="Six deliberate phases that turn your vision into a finished space—on time, on budget, and to the highest standard."
        />

        <div className="mt-20 relative">
          {/* Animated connecting line - desktop horizontal */}
          <div className="hidden lg:block absolute top-12 left-[6%] right-[6%] h-px bg-charcoal/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="h-full bg-gold-gradient origin-left"
            />
          </div>

          {/* Animated connecting line - desktop bottom row */}
          <div className="hidden lg:block absolute top-[52%] left-[6%] right-[6%] h-px bg-charcoal/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, delay: 0.2, ease: "easeInOut" }}
              className="h-full bg-gold-gradient origin-left"
            />
          </div>

          {/* Animated connector from top to bottom row */}
          <div className="hidden lg:block absolute top-12 right-[6%] h-[40%] w-px bg-charcoal/10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, delay: 0.1, ease: "easeInOut" }}
              className="w-full bg-gold-gradient origin-top"
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
          >
            {PROCESS.map((step) => (
              <motion.div
                key={step.step}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="group relative"
              >
                {/* Number */}
                <div className="relative">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-warm-white border border-charcoal/10 group-hover:border-gold/40 group-hover:shadow-xl group-hover:shadow-gold/10 transition-all duration-500">
                    <span className="text-4xl font-serif italic text-charcoal group-hover:text-gradient-gold transition">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-charcoal tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-dark-gray/70 max-w-sm">
                  {step.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-dark opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Phase {step.step}</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}