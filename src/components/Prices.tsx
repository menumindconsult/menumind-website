"use client";

import { motion } from "framer-motion";
import Price from "./Price";
import { useT } from "@/context/LanguageContext";

const anchoredPrices = [
  {
    en: "Operations Audit",
    ar: "تدقيق العمليات",
    amount: "3,500",
    descEn: "A full operational review with a written report and a clear action plan.",
    descAr: "مراجعة تشغيلية كاملة مع تقرير مكتوب وخطة عمل واضحة.",
  },
  {
    en: "Training Manual",
    ar: "دليل التدريب",
    amount: "2,500",
    descEn: "A detailed manual built for your restaurant type, ready to use from day one.",
    descAr: "دليل تفصيلي مُصمَّم لنوع مطعمك، جاهز للاستخدام من اليوم الأول.",
  },
  {
    en: "Monthly Retainer",
    ar: "اشتراك شهري",
    amount: "2,000",
    descEn: "Ongoing support with weekly check-ins and continuous performance tracking.",
    descAr: "دعم مستمر مع جلسات أسبوعية ومتابعة مستمرة للأداء.",
  },
];

const customQuoteServices = [
  { en: "Menu Engineering & Development", ar: "هندسة وتطوير قائمة الطعام" },
  { en: "Tailored Training Programs", ar: "برامج تدريب مخصصة" },
  { en: "Field Visits & Mystery Shopper Audits", ar: "زيارات ميدانية وتدقيق المتسوق الخفي" },
];

export default function Prices() {
  const t = useT();

  return (
    <section id="prices" className="bg-light-gray/40 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 max-w-2xl text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            {t({ en: "Prices", ar: "الأسعار" })}
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            {t({ en: "Straightforward, Transparent Pricing", ar: "أسعار واضحة وشفافة" })}
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
            en: "Prices below are a starting point and vary based on your restaurant's size and needs. The exact price is confirmed after your free consultation.",
            ar: "الأسعار أدناه نقطة بداية تقريبية وتختلف حسب حجم مطعمك واحتياجاته. السعر النهائي يُحدَّد بعد استشارتك المجانية.",
          })}
        </motion.p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {anchoredPrices.map((item, i) => (
            <motion.div
              key={item.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[12px] border border-light-gray bg-white p-8 text-center shadow-[0_2px_12px_rgba(23,35,58,0.04)]"
            >
              <h3 className="mb-3 text-[15px] font-semibold text-navy">
                {t(item)}
              </h3>
              <div className="font-stat text-[34px] font-bold text-navy">
                <Price amount={item.amount} bold />
              </div>
              <div className="mt-1 text-[11.5px] uppercase tracking-[0.5px] text-gold">
                {item.en === "Monthly Retainer"
                  ? t({ en: "starting from, per month", ar: "يبدأ من، شهرياً" })
                  : t({ en: "starting from", ar: "يبدأ من" })}
              </div>
              <p className="mt-4 text-[13px] leading-[1.7] text-dark-text/60">
                {t({ en: item.descEn, ar: item.descAr })}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 rounded-[12px] border border-light-gray bg-white p-8"
        >
          <h3 className="mb-4 text-center text-[15px] font-semibold text-navy">
            {t({ en: "Custom Quote Services", ar: "خدمات بعرض سعر مخصص" })}
          </h3>
          <p className="mx-auto mb-5 max-w-xl text-center text-[13px] leading-[1.7] text-dark-text/60">
            {t({
              en: "These services vary too much from one restaurant to the next for a fixed price. Each is scoped individually after your free consultation.",
              ar: "هذه الخدمات تختلف كثيراً من مطعم لآخر بحيث لا يمكن تحديد سعر ثابت لها. يتم تحديد نطاق كل خدمة بشكل فردي بعد استشارتك المجانية.",
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {customQuoteServices.map((service) => (
              <span
                key={service.en}
                className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[12.5px] font-medium text-navy"
              >
                {t(service)}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
