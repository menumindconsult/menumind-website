"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useT } from "@/context/LanguageContext";

export default function RankBadge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const t = useT();

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex items-center gap-5">
        <div className="text-center">
          <div className="font-stat text-[15px] font-semibold text-offwhite/45">
            {t({ en: "Below Standard", ar: "أقل من المستوى المطلوب" })}
          </div>
          <div className="mt-1 text-[10.5px] uppercase tracking-[1.5px] text-offwhite/35">
            {t({ en: "Previous Audit", ar: "التدقيق السابق" })}
          </div>
        </div>

        <motion.svg
          width="48"
          height="20"
          viewBox="0 0 48 20"
          fill="none"
          initial={{ opacity: 0, x: -8 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ transform: t({ en: "none", ar: "scaleX(-1)" }) }}
        >
          <path
            d="M2 10H40M40 10L32 3M40 10L32 17"
            stroke="#E3CB7D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        <div className="text-center">
          <motion.div
            className="font-stat text-[32px] font-bold text-gold-light"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          >
            #1
          </motion.div>
          <div className="mt-1 text-[10.5px] uppercase tracking-[1.5px] text-offwhite/55">
            {t({ en: "Across The Chain", ar: "على مستوى السلسلة" })}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 flex items-center gap-1.5 rounded-full bg-gold/15 px-4 py-1.5"
      >
        <span className="text-[12px] font-semibold text-gold-light">
          {t({ en: "Record-Breaking Result", ar: "نتيجة قياسية غير مسبوقة" })}
        </span>
      </motion.div>
    </div>
  );
}
