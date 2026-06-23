import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, COMPANY } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal-deep/85 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" aria-label="Haven M Construction home">
            <Logo light />
          </a>

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md px-2 py-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide transition ${
                  scrolled
                    ? "text-white/75 hover:text-white"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden md:block text-[12px] font-semibold tracking-wide text-white/80 hover:text-gold transition"
            >
              {COMPANY.phone}
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold text-charcoal transition hover:bg-gold-gradient hover:text-white hover:-translate-y-0.5"
            >
              Request Consultation
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal-deep/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <Logo light />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              className="mt-12 flex flex-col items-center gap-2 px-8"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="w-full rounded-2xl px-6 py-5 text-center text-2xl font-serif italic text-white/90 transition hover:bg-white/5 hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold-gradient px-8 py-4 text-base font-semibold text-white"
              >
                Request Consultation
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}