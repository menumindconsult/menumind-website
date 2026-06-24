"use client";

import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <section className="bg-light-gray/40 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            Case Studies
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            Success Stories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-[12px] border border-light-gray bg-white shadow-[0_2px_12px_rgba(23,35,58,0.04)]"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-navy to-navy-deep">
                <span className="font-display text-[15px] italic text-gold-light/70">
                  Case Study Coming Soon
                </span>
              </div>
              <div className="p-6">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-gold">
                  Restaurant Type
                </div>
                <div className="h-3 w-3/4 rounded-full bg-light-gray" />
                <div className="mt-2.5 h-3 w-1/2 rounded-full bg-light-gray" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
