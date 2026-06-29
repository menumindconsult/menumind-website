"use client";

import { motion } from "framer-motion";
import { useT } from "@/context/LanguageContext";

const steps = [
  {
    number: "01",
    titleEn: "Assessment",
    titleAr: "التقييم",
    descEn: "A thorough review of your current operations, team performance, and guest experience to identify what is actually holding profitability back.",
    descAr: "مراجعة شاملة لعملياتك الحالية وأداء فريقك وتجربة ضيوفك، لتحديد ما يعيق ربحيتك فعلاً.",
  },
  {
    number: "02",
    titleEn: "Strategy",
    titleAr: "الاستراتيجية",
    descEn: "A clear, written plan tailored to your restaurant, with priorities, timelines, and the specific changes that will move the numbers.",
    descAr: "خطة مكتوبة وواضحة مصممة لمطعمك، تتضمن الأولويات والجدول الزمني والتغييرات المحددة التي ستحرك الأرقام.",
  },
  {
    number: "03",
    titleEn: "Implementation",
    titleAr: "التنفيذ",
    descEn: "Working alongside your team to put the plan into practice, from training sessions to systems and standards on the floor.",
    descAr: "نعمل جنباً إلى جنب مع فريقك لتطبيق الخطة فعلياً، من جلسات التدريب إلى الأنظمة والمعايير في الصالة.",
  },
  {
    number: "04",
    titleEn: "Results",
    titleAr: "النتائج",
    descEn: "Reviewing outcomes against the original goals, then building on what worked. The relationship continues past delivery.",
    descAr: "نراجع النتائج مقابل الأهداف الأصلية، ثم نبني على ما نجح. العلاقة تستمر بعد التسليم.",
  },
];

export default function Process() {
  const t = useT();

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
            {t({ en: "Process", ar: "خطوات العمل" })}
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            {t({ en: "Our Consulting Approach", ar: "منهجيتنا الاستشارية" })}
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
                  {t({ en: step.titleEn, ar: step.titleAr })}
                </h3>
                <p className="mx-auto max-w-[230px] text-[13.5px] leading-[1.75] text-dark-text/60">
                  {t({ en: step.descEn, ar: step.descAr })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
