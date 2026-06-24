"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const results = [
  { label: "Operational Efficiency", value: 38, suffix: "%", detail: "average improvement" },
  { label: "Team Performance", value: 42, suffix: "%", detail: "increase in productivity" },
  { label: "Guest Satisfaction", value: 4.8, suffix: "/5", detail: "average rating", decimals: 1 },
  { label: "Speed of Service", value: 31, suffix: "%", detail: "faster ticket times" },
  { label: "Food Cost Optimization", value: 11, suffix: "pts", detail: "average reduction" },
  { label: "Training Effectiveness", value: 94, suffix: "%", detail: "staff retention post-training" },
];

export default function ResultsSection() {
  return (
    <section id="results" className="bg-offwhite px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            Results
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            Delivering Measurable Results
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="rounded-[12px] border border-light-gray bg-white p-8 text-center shadow-[0_2px_12px_rgba(23,35,58,0.04)]"
            >
              <div className="font-stat text-[40px] font-bold text-navy">
                <AnimatedCounter
                  value={result.value}
                  suffix={result.suffix}
                  decimals={result.decimals ?? 0}
                />
              </div>
              <div className="mt-3 text-[14.5px] font-semibold text-dark-text">
                {result.label}
              </div>
              <div className="mt-1 text-[12.5px] text-dark-text/55">
                {result.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
