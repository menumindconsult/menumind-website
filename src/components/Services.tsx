"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "⚙",
    title: "Restaurant Operations Excellence",
    description:
      "A full operational review of cost control, kitchen flow, and service standards, delivered as a clear, actionable plan.",
  },
  {
    icon: "◈",
    title: "Training & Development",
    description:
      "Role-specific training programs that build confident, consistent teams across the floor and the kitchen.",
  },
  {
    icon: "▤",
    title: "Menu Engineering & Development",
    description:
      "Profitable, well-balanced menus built on correct pricing, food cost discipline, and guest appeal.",
  },
  {
    icon: "◎",
    title: "Guest Experience Improvement",
    description:
      "Service standards and guest journey refinements that turn first-time visitors into regulars.",
  },
  {
    icon: "✦",
    title: "New Restaurant Openings",
    description:
      "End-to-end pre-opening support, from team readiness to systems and service standards, before day one.",
  },
  {
    icon: "▲",
    title: "Profitability Optimization",
    description:
      "Identifying where margin is lost across labor, food cost, and waste, then closing those gaps systematically.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-offwhite px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            Services
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            How We Help Restaurants Succeed
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group rounded-[12px] border border-light-gray bg-white p-8 shadow-[0_2px_12px_rgba(23,35,58,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_40px_-12px_rgba(23,35,58,0.15)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[12px] bg-navy text-[20px] text-gold-light transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                {service.icon}
              </div>
              <h3 className="mb-3 text-[17px] font-semibold text-navy">
                {service.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-dark-text/65">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
