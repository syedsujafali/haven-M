import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1600;
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 200);
    };
    tick();
    return () => {};
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal-deep overflow-hidden"
        >
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.15),transparent_60%)]" />

          <div className="relative flex flex-col items-center gap-10">
            {/* Logo with rotating ring */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <svg width="90" height="90" viewBox="0 0 44 44" fill="none">
                  <defs>
                    <linearGradient id="loadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E5C98E" />
                      <stop offset="50%" stopColor="#C8A96A" />
                      <stop offset="100%" stopColor="#8E6E3E" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M22 2 L40 12 L40 32 L22 42 L4 32 L4 12 Z"
                    stroke="url(#loadGrad)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M15 14 L15 30 M29 14 L29 30 M15 22 L29 22"
                    stroke="url(#loadGrad)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <circle cx="22" cy="9" r="1.5" fill="url(#loadGrad)" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute -inset-3 rounded-full border border-gold/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ borderTopColor: "#C8A96A", borderRightColor: "transparent" }}
              />
            </div>

            {/* Text */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Haven Construction
              </h2>
              <p className="mt-2 text-[10px] font-bold tracking-[0.4em] uppercase text-gold-light">
                Verona · New Jersey
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="relative h-px w-64 overflow-hidden bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gold-gradient"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}