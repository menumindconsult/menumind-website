"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-deep px-6 py-28 text-center lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,164,107,0.14),transparent_65%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-2xl"
      >
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold text-offwhite">
          Ready To Improve Restaurant Performance?
        </h2>
        <p className="mt-5 text-[16px] leading-[1.8] text-offwhite/65">
          Let&rsquo;s discuss your goals and identify opportunities to
          strengthen operations, improve profitability, and build
          high-performing teams.
        </p>
        <a
          href="https://wa.me/966540367407?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation"
          target="_blank"
          rel="noopener"
          className="mt-9 inline-block rounded-[12px] bg-gold px-10 py-4 text-[15px] font-semibold text-navy-deep transition-all hover:bg-gold-light hover:shadow-[0_12px_28px_-8px_rgba(200,164,107,0.45)]"
        >
          Book Free Consultation
        </a>
      </motion.div>
    </section>
  );
}
