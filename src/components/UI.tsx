import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-10 bg-gold" />
      <span
        className={`text-[11px] font-bold tracking-[0.3em] uppercase ${
          light ? "text-gold-light" : "text-gold-dark"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className={`mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`mt-7 text-lg md:text-xl leading-relaxed ${
            light ? "text-white/75" : "text-dark-gray/70"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}