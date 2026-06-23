import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gold-gradient" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_25%_50%,rgba(255,255,255,0.4),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(15,20,25,0.2),transparent_55%)]" />

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20 Z' stroke='white' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-charcoal-deep/15 backdrop-blur-sm px-4 py-1.5 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-charcoal-deep">
                Free Consultation
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-deep tracking-tight text-balance leading-[1.05]">
              Ready to build a modern animal hospital?
            </h2>
            <p className="mt-5 text-lg text-charcoal-deep/80 max-w-2xl mx-auto lg:mx-0">
              Let's turn your vision into a world-class facility. Schedule a complimentary consultation today.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-charcoal-deep px-10 py-5 text-base font-bold text-white shadow-2xl shadow-charcoal-deep/30 transition-all hover:shadow-3xl hover:-translate-y-1 whitespace-nowrap"
          >
            Schedule Consultation
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}