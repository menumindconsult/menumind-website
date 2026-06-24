"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "We redesigned our entire menu together and saw a noticeable profit increase within two months. I now know exactly where the problem was.",
    name: "Restaurant Owner",
    role: "Casual Dining, Riyadh",
  },
  {
    quote:
      "The training program we received saved us months of effort. Our new team gets up to speed faster and makes far fewer mistakes.",
    name: "Operations Manager",
    role: "Cafe Chain, Jeddah",
  },
  {
    quote:
      "The assessment alone was worth the time. It gave us a clear picture of what actually needed to change, not what we assumed.",
    name: "Restaurant Group Owner",
    role: "Fast Casual, Dammam",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-offwhite px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            Testimonials
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            What Clients Say
          </h2>
        </motion.div>

        <div className="relative rounded-[16px] border border-light-gray bg-white p-10 shadow-[0_8px_30px_rgba(23,35,58,0.06)] sm:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              <div className="mb-6 text-[16px] tracking-[3px] text-gold">
                ★★★★★
              </div>
              <p className="font-display text-[19px] italic leading-[1.7] text-dark-text">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <div className="mt-8">
                <div className="text-[14px] font-semibold text-navy">
                  {testimonials[index].name}
                </div>
                <div className="mt-0.5 text-[12.5px] text-dark-text/55">
                  {testimonials[index].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-light-gray bg-white p-2.5 text-navy transition-colors hover:border-gold hover:text-gold sm:flex"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-light-gray bg-white p-2.5 text-navy transition-colors hover:border-gold hover:text-gold sm:flex"
          >
            →
          </button>
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-gold" : "w-2 bg-light-gray"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
