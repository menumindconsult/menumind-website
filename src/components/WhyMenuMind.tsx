"use client";

import { motion } from "framer-motion";
import { useT } from "@/context/LanguageContext";

const reasons = [
  {
    titleEn: "Operational Expertise",
    titleAr: "خبرة تشغيلية حقيقية",
    descEn: "Hands-on restaurant experience delivering real-world solutions, not theory from a textbook.",
    descAr: "خبرة عملية مباشرة في المطاعم تقدم حلولاً حقيقية، لا نظريات من كتاب.",
  },
  {
    titleEn: "Implementation Focus",
    titleAr: "التركيز على التنفيذ",
    descEn: "Not just recommendations. We stay through execution and track measurable improvement.",
    descAr: "لا نقدم توصيات فقط. نبقى معك خلال التنفيذ ونتابع التحسن بشكل قابل للقياس.",
  },
  {
    titleEn: "Industry Understanding",
    titleAr: "فهم حقيقي للقطاع",
    descEn: "Built specifically for restaurant operators and hospitality businesses, nothing generic.",
    descAr: "مبني خصيصاً لمشغلي المطاعم وأعمال الضيافة، وليس حلاً عاماً.",
  },
];

export default function WhyMenuMind() {
  const t = useT();

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
            {t({ en: "Why MenuMind", ar: "لماذا MenuMind" })}
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-offwhite">
            {t({ en: "Why Restaurant Owners Choose MenuMind", ar: "لماذا يختار أصحاب المطاعم MenuMind" })}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-offwhite/10 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-navy-deep/40 p-9 text-center sm:text-start"
            >
              <span className="font-stat mb-4 block text-[13px] font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-display text-[19px] font-semibold text-offwhite">
                {t({ en: reason.titleEn, ar: reason.titleAr })}
              </h3>
              <p className="text-[14px] leading-[1.75] text-offwhite/60">
                {t({ en: reason.descEn, ar: reason.descAr })}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
