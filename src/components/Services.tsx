import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./UI";
import { SERVICES } from "../data/content";

export function Services() {
  const featured = SERVICES[0];
  const rest = SERVICES.slice(1);

  return (
    <section id="services" className="relative py-28 md:py-40 bg-charcoal-deep text-white overflow-hidden">
      {/* Decorative number */}
      <div className="absolute top-12 right-6 lg:right-10 hidden md:block">
        <span className="text-[120px] lg:text-[180px] font-bold text-white/[0.03] leading-none select-none">
          02
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            light
            eyebrow="Capabilities · 02"
            title={
              <>
                Services built around{" "}
                <span className="font-serif italic font-medium text-gradient-gold">
                  your vision
                </span>
                .
              </>
            }
            description="From world-class animal hospitals to bespoke residences, every project is delivered with the same uncompromising standard."
            align="left"
          />
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="group inline-flex items-center gap-2 self-start md:self-end rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-gold-gradient hover:border-transparent transition-all whitespace-nowrap"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Featured large card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="group relative overflow-hidden rounded-[2rem] mb-6"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/60 via-charcoal-deep/20 to-transparent" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-1.5 shadow-lg shadow-gold/30">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                  {featured.badge}
                </span>
              </div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-white shadow-lg shadow-gold/30">
                <featured.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
                {featured.title}
              </h3>
              <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed max-w-md">
                {featured.description} From ground-up construction to specialty
                interiors, every detail is engineered for clinical excellence and
                long-term performance.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex relative z-10 items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-gold-gradient hover:text-white"
              >
                Discuss Your Build
                <ArrowUpRight className="h-4 w-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Smaller cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {rest.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-gold/40 hover:bg-white/[0.04] transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover img-zoom opacity-80 group-hover:opacity-100 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/40 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white group-hover:bg-gold-gradient group-hover:border-transparent transition-all">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}