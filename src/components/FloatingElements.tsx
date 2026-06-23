import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone, ArrowUpRight } from "lucide-react";
import { COMPANY } from "../data/content";

export function FloatingElements() {
  const [showTop, setShowTop] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 800);
      setShowCTA(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-deep text-white shadow-xl border border-white/10 transition hover:bg-gold-gradient hover:-translate-y-1"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating CTA - desktop */}
      <AnimatePresence>
        {showCTA && (
          <motion.a
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            href="#contact"
            className="hidden xl:flex fixed bottom-6 left-6 z-50 group items-center gap-3 rounded-full bg-white pl-5 pr-2 py-2 shadow-2xl shadow-charcoal-deep/30 hover:shadow-gold/30 transition-all"
          >
            <span className="text-sm font-semibold text-charcoal">Request Consultation</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-white transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Sticky mobile phone */}
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        aria-label="Call Haven Construction"
        className="xl:hidden fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-white shadow-2xl shadow-gold/40 md:hidden"
      >
        <Phone className="h-5 w-5" />
      </a>
    </>
  );
}