"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  { value: "15+", label: "Years Experience" },
  { value: "300+", label: "Employees Trained" },
  { value: "14", label: "Restaurants Supported" },
  { value: "2", label: "Restaurant Openings" },
  { value: "65", label: "Team Members Managed" },
];

export default function About() {
  return (
    <section id="about" className="bg-light-gray/40 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="absolute -inset-3 -z-10 rounded-[20px] bg-gradient-to-br from-gold/15 to-transparent" />
            <div className="overflow-hidden rounded-[16px] shadow-[0_24px_60px_-16px_rgba(23,35,58,0.3)]">
              <Image
                src="/images/founder.png"
                alt="Mohamed Abdelkhalek, Founder of MenuMind Restaurant Consultancy"
                width={1086}
                height={1448}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
              About the Founder
            </span>
            <h2 className="font-display text-[clamp(28px,3.6vw,40px)] font-semibold text-navy">
              Meet Mohamed Abdelkhalek
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.85] text-dark-text/70">
              With over 15 years of hospitality and restaurant leadership
              experience, Mohamed Abdelkhalek has worked across restaurant
              operations, team development, training, guest experience, and
              business performance improvement.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.85] text-dark-text/70">
              Having trained more than 300 employees, supported 14 restaurant
              locations, and participated in multiple restaurant openings,
              Mohamed combines hands-on operational expertise with strategic
              consulting solutions designed to improve restaurant
              performance.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-[12px] border border-light-gray bg-white px-4 py-5 text-center"
                >
                  <div className="font-stat text-[22px] font-bold text-navy">
                    {h.value}
                  </div>
                  <div className="mt-1 text-[11.5px] leading-snug text-dark-text/60">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
