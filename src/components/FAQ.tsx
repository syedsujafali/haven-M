import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./UI";
import { FAQS } from "../data/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-40 bg-warm-white overflow-hidden">
      <div className="absolute top-12 right-6 lg:right-10 hidden md:block">
        <span className="text-[120px] lg:text-[180px] font-bold text-charcoal/[0.04] leading-none select-none">
          07
        </span>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="FAQ · 07"
          title={
            <>
              Questions,{" "}
              <span className="font-serif italic font-medium text-gradient-gold">answered</span>.
            </>
          }
          description="Everything you need to know about working with Haven Construction."
        />

        <div className="mt-14 space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                open === i
                  ? "border-gold/40 bg-white shadow-lg shadow-gold/5"
                  : "border-charcoal/10 bg-white hover:border-gold/30"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 md:px-7 py-5 text-left"
              >
                <span className="text-base md:text-lg font-semibold text-charcoal pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                    open === i ? "bg-gold-gradient text-white" : "bg-charcoal/5 text-charcoal"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-7 pb-6 text-base leading-relaxed text-dark-gray/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}