"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Assessment",
    description:
      "A thorough review of your current operations, team performance, and guest experience to identify what is actually holding profitability back.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A clear, written plan tailored to your restaurant, with priorities, timelines, and the specific changes that will move the numbers.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Working alongside your team to put the plan into practice, from training sessions to systems and standards on the floor.",
  },
  {
    number: "04",
    title: "Results",
    description:
      "Reviewing outcomes against the original goals, then building on what worked. The relationship continues past delivery.",
  },
];

export default function Process() {
  return (
    <section className="bg-offwhite px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            Process
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            Our Consulting Approach
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-7 hidden h-px w-full -translate-x-1/2 bg-light-gray lg:block" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-offwhite font-stat text-[16px] font-bold text-navy">
                  {step.number}
                </div>
                <h3 className="mb-3 font-display text-[18px] font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-[230px] text-[13.5px] leading-[1.75] text-dark-text/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
