"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why hire a restaurant consultant?",
    answer:
      "A restaurant consultant brings an outside, experienced perspective on problems that are hard to see from inside daily operations, whether that is rising food cost, inconsistent service, or staff turnover. The right consultant identifies the real cause and helps you fix it with a plan built for your specific restaurant, not generic advice.",
  },
  {
    question: "Do you support new restaurant openings?",
    answer:
      "Yes. Pre-opening support covers team readiness, training, service standards, and operational systems, so your restaurant opens with a team that already knows how to run it well from day one.",
  },
  {
    question: "Can you train my team?",
    answer:
      "Yes. Training programs are built around your team's actual needs, covering customer service, food safety, upselling, and day-to-day performance, delivered in a way your staff can apply immediately.",
  },
  {
    question: "Do you work with independent restaurants?",
    answer:
      "Yes. MenuMind works with independent restaurant owners as well as multi-unit operators and franchise groups. Every engagement is scoped to the size and needs of your business.",
  },
  {
    question: "How do consulting engagements work?",
    answer:
      "Every engagement starts with a free consultation to understand your situation, followed by a clear written proposal covering scope, timeline, and price. From there, work is delivered remotely with regular check-ins and a defined path to measurable results.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-light-gray/40 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            FAQ
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,40px)] font-semibold text-navy">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[12px] border border-light-gray bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-navy">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold text-[13px] text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 text-[14px] leading-[1.75] text-dark-text/65">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
