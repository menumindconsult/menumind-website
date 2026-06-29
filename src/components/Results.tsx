"use client";

import { motion } from "framer-motion";
import { useT } from "@/context/LanguageContext";

const results = [
  {
    labelEn: "Food Cost",
    labelAr: "تكلفة الطعام",
    rangeEn: "3 to 8 pts",
    rangeAr: "3 إلى 8 نقاط",
    detailEn: "typical reduction within the first 60 days of an engagement",
    detailAr: "انخفاض معتاد خلال أول 60 يوماً من بدء التعاون",
  },
  {
    labelEn: "Order Accuracy",
    labelAr: "دقة الطلبات",
    rangeEn: "Fewer remakes",
    rangeAr: "إعادة تحضير أقل",
    detailEn: "from standardizing order verification on the floor",
    detailAr: "نتيجة توحيد طريقة تأكيد الطلب في الصالة",
  },
  {
    labelEn: "Prep Discipline",
    labelAr: "انضباط التحضير",
    rangeEn: "Less waste",
    rangeAr: "هدر أقل",
    detailEn: "from accurate, daily prep forecasting",
    detailAr: "نتيجة توقع دقيق وويومي لكميات التحضير",
  },
  {
    labelEn: "Team Consistency",
    labelAr: "ثبات أداء الفريق",
    rangeEn: "Faster ramp-up",
    rangeAr: "تأهيل أسرع",
    detailEn: "for new hires, once role-specific training replaces tribal knowledge",
    detailAr: "للموظفين الجدد، بعد استبدال المعرفة المتناقلة بتدريب مخصص لكل دور",
  },
  {
    labelEn: "Engagement Length",
    labelAr: "مدة التعاون",
    rangeEn: "30 to 60 days",
    rangeAr: "30 إلى 60 يوماً",
    detailEn: "for most operational turnaround engagements",
    detailAr: "لمعظم مشاريع التحسين التشغيلي",
  },
  {
    labelEn: "Approach",
    labelAr: "منهجية العمل",
    rangeEn: "Measured, not guessed",
    rangeAr: "مقاس، لا مخمَّن",
    detailEn: "every recommendation is tied to data from your own operation",
    detailAr: "كل توصية مرتبطة ببيانات حقيقية من عمليات مطعمك",
  },
];

export default function ResultsSection() {
  const t = useT();

  return (
    <section id="results" className="bg-offwhite px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 max-w-2xl text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            {t({ en: "Results", ar: "النتائج" })}
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            {t({ en: "What Engagements Typically Look Like", ar: "كيف تبدو مشاريع التعاون عادةً" })}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-16 max-w-2xl text-center text-[14.5px] leading-[1.8] text-dark-text/60"
        >
          {t({
            en: "Every restaurant is different, so we do not promise a single number. These are the patterns we typically see, grounded in real engagements like the case study below.",
            ar: "كل مطعم مختلف، لذلك لا نَعِد برقم واحد ثابت. هذه هي الأنماط التي نراها عادةً، مستندة إلى مشاريع تعاون حقيقية مثل دراسة الحالة أدناه.",
          })}
        </motion.p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result, i) => (
            <motion.div
              key={result.labelEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="rounded-[12px] border border-light-gray bg-white p-8 text-center shadow-[0_2px_12px_rgba(23,35,58,0.04)]"
            >
              <div className="font-stat text-[26px] font-bold leading-tight text-navy">
                {t({ en: result.rangeEn, ar: result.rangeAr })}
              </div>
              <div className="mt-3 text-[14.5px] font-semibold text-dark-text">
                {t({ en: result.labelEn, ar: result.labelAr })}
              </div>
              <div className="mt-1 text-[12.5px] leading-[1.6] text-dark-text/55">
                {t({ en: result.detailEn, ar: result.detailAr })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
