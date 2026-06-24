"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Operational Expertise",
    description:
      "Hands-on restaurant experience delivering real-world solutions, not theory from a textbook.",
  },
  {
    title: "Implementation Focus",
    description:
      "Not just recommendations. We stay through execution and track measurable improvement.",
  },
  {
    title: "Industry Understanding",
    description:
      "Built specifically for restaurant operators and hospitality businesses, nothing generic.",
  },
];

export default function WhyMenuMind() {
  return (
    <section className="bg-navy px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold-light">
            Why MenuMind
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-offwhite">
            Why Restaurant Owners Choose MenuMind
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-offwhite/10 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-navy-deep/40 p-9 text-center sm:text-left"
            >
              <span className="font-stat mb-4 block text-[13px] font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-display text-[19px] font-semibold text-offwhite">
                {reason.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-offwhite/60">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
