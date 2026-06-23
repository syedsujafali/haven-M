import { Logo } from "./Logo";
import { COMPANY, NAV_LINKS, SERVICES } from "../data/content";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-charcoal-deep text-white overflow-hidden border-t border-white/5">
      {/* Top thin accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        {/* Big wordmark */}
        <div className="mb-16 pb-10 border-b border-white/5">
          <h3 className="text-[clamp(3rem,12vw,9rem)] font-bold tracking-tighter leading-[0.9] text-white/[0.06] select-none">
            HAVEN M<span className="font-serif italic text-gradient-gold">.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 text-sm text-white/55 leading-relaxed max-w-sm">
              {COMPANY.name} builds exceptional animal hospitals,
              veterinary clinics, and luxury residences with precision,
              craftsmanship, and uncompromising quality.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold hover:bg-gold-gradient hover:text-white hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-light">Studio</h4>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-light">Capabilities</h4>
            <ul className="mt-6 space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-sm text-white/60 hover:text-gold transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-light">Studio</h4>
            <ul className="mt-6 space-y-4 text-sm text-white/60">
              <li>
                <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/35 mb-1">Address</span>
                {COMPANY.address}
              </li>
              <li>
                <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/35 mb-1">Phone</span>
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-gold transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/35 mb-1">Hours</span>
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {COMPANY.name}. Crafted in Verona, NJ.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}