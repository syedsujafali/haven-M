import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./UI";
import { COMPANY } from "../data/content";

const PROJECT_TYPES = [
  "Animal Hospital Construction",
  "Veterinary Clinic Construction",
  "Medical Facility Renovation",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Basement Finishing",
  "Whole Home Renovation",
  "Home Addition",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-charcoal-deep text-white overflow-hidden">
      <div className="absolute top-12 left-6 lg:left-10 hidden md:block">
        <span className="text-[120px] lg:text-[180px] font-bold text-white/[0.03] leading-none select-none">
          08
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          light
          eyebrow="Contact · 08"
          title={
            <>
              Let's begin your{" "}
              <span className="font-serif italic font-medium text-gradient-gold">project</span>.
            </>
          }
          description="Reach out for a complimentary consultation. Our team responds within one business day."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
              <h3 className="relative text-2xl font-bold tracking-tight">Contact Information</h3>
              <p className="relative mt-2 text-sm text-white/60">
                Reach out directly or fill out the form.
              </p>

              <div className="relative mt-8 space-y-5">
                <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-start gap-4 group">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-white shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Phone</p>
                    <p className="mt-1 font-semibold group-hover:text-gold transition-colors">{COMPANY.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 group">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-white shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Email</p>
                    <p className="mt-1 font-semibold group-hover:text-gold transition-colors break-all">{COMPANY.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-white shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Address</p>
                    <p className="mt-1 font-semibold">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-white shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Hours</p>
                    <p className="mt-1 font-semibold">{COMPANY.hours}</p>
                    <p className="text-xs text-white/50">Saturday & Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.453!2d-74.242!3d40.832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ5JzU1LjIiTiA3NMKwMTQnMzEuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                title="Haven M Construction location"
                loading="lazy"
                className="absolute inset-0 h-full w-full grayscale-[25%]"
                style={{ border: 0 }}
              />
              <div className="absolute top-4 left-4 glass-dark rounded-full px-4 py-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Verona · NJ</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 transition focus:border-gold focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-gold/15"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    placeholder="(201) 555-0123"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 transition focus:border-gold focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-gold/15"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="block text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 transition focus:border-gold focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-gold/15"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="project" className="block text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white transition focus:border-gold focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-gold/15"
                >
                  <option value="" disabled className="bg-charcoal-deep">
                    Select a project type
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-charcoal-deep">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Share details about your project, timeline, and vision..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 transition focus:border-gold focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-gold/15 resize-none"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-8 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-charcoal transition-all hover:bg-gold-gradient hover:text-white hover:-translate-y-0.5"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Thank You — We'll Be In Touch Shortly
                  </>
                ) : (
                  <>
                    Send Consultation Request
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>

              <p className="mt-4 text-center text-xs text-white/40">
                By submitting, you agree to our privacy policy. We never share your information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}