"use client";

import { motion } from "framer-motion";
import TrendChart from "./TrendChart";
import { useT } from "@/context/LanguageContext";

const phasesOne = [
  {
    label: { en: "Phase 1", ar: "المرحلة 1" },
    title: {
      en: "Back of House Re-Engineering",
      ar: "إعادة هيكلة المطبخ",
    },
    description: {
      en: "Hands-on recipe re-training so every cook could read and execute standardized recipes with full fidelity, paired with a strict mise en place protocol requiring scales and portion tools before any prep began.",
      ar: "إعادة تدريب عملي على الوصفات حتى يتمكن كل طباخ من قراءة وتنفيذ الوصفات الموحدة بدقة كاملة، إلى جانب بروتوكول صارم للتحضير المسبق يتطلب استخدام الموازين وأدوات القياس قبل بدء أي تحضير.",
    },
  },
  {
    label: { en: "Phase 2", ar: "المرحلة 2" },
    title: {
      en: "Management Accountability",
      ar: "مساءلة الإدارة",
    },
    description: {
      en: "The Manager on Duty became fully responsible for prep sheet accuracy, with daily check-ins comparing forecast to actual usage, plus a zero-tolerance policy on labeling and shelf-life tracking to cut spoilage.",
      ar: "أصبح المدير المسؤول عن الوردية مسؤولاً بالكامل عن دقة جدول التحضير، مع متابعة يومية تقارن بين التوقع والاستخدام الفعلي، إضافة إلى سياسة صارمة في وضع الملصقات وتتبع تاريخ الصلاحية للحد من الهدر.",
    },
  },
  {
    label: { en: "Phase 3", ar: "المرحلة 3" },
    title: {
      en: "Front of House Standardization",
      ar: "توحيد إجراءات الصالة",
    },
    description: {
      en: "A non-negotiable order-verification sequence for the floor team, with the MOD actively coaching every shift, eliminating the root cause behind remakes and comped meals.",
      ar: "تسلسل ثابت وغير قابل للتفاوض للتحقق من الطلبات لفريق الصالة، مع توجيه فعلي من المدير المسؤول في كل وردية، مما أزال السبب الجذري لإعادة التحضير والوجبات المجانية.",
    },
  },
];


export default function CaseStudies() {
  const t = useT();

  return (
    <section className="bg-light-gray/40 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            {t({ en: "Case Studies", ar: "قصص النجاح" })}
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            {t({ en: "Success Stories", ar: "قصص نجاح حقيقية" })}
          </h2>
        </motion.div>

        {/* Featured real case study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[16px] border border-light-gray bg-white shadow-[0_8px_30px_rgba(23,35,58,0.08)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="relative flex flex-col justify-center bg-navy px-8 py-10 text-center lg:col-span-2 lg:px-9">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(200,164,107,0.14),transparent_60%)]" />
              <div className="relative">
                <span className="mb-5 block text-[11px] font-semibold uppercase tracking-[2px] text-gold-light/80">
                  {t({ en: "Casual Dining", ar: "مطعم عائلي" })}
                </span>
                <TrendChart
                  points={[
                    { label: t({ en: "Month 0", ar: "الشهر 0" }), value: 35 },
                    { label: t({ en: "Month 1", ar: "الشهر 1" }), value: 32 },
                    { label: t({ en: "Month 2", ar: "الشهر 2" }), value: 30 },
                  ]}
                />
                <p className="mt-5 text-[12.5px] font-medium text-offwhite/65">
                  {t({
                    en: "Food cost trend across a 60-day engagement",
                    ar: "اتجاه تكلفة الطعام خلال مشروع استمر 60 يوماً",
                  })}
                </p>
              </div>
            </div>

            <div className="p-8 lg:col-span-3 lg:p-10">
              <h3 className="font-display text-[22px] font-semibold text-navy">
                {t({
                  en: "Transforming Profitability Through Operational Excellence",
                  ar: "تحويل الأرباح من خلال التميز التشغيلي",
                })}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-dark-text/65">
                {t({
                  en: "A mid-sized casual dining brand was facing a food cost of 35% and needed an immediate, targeted intervention. A full operational audit traced the problem to friction on both sides of the house: inconsistent order verification at the table, eyeballed portioning in the kitchen instead of standardized measurement, and prep sheets that were not being completed accurately, leading to chronic over-production and spoilage.",
                  ar: "كان مطعم عائلي متوسط الحجم يواجه تكلفة طعام بنسبة 35٪ واحتاج إلى تدخل فوري ومحدد. أظهر تدقيق تشغيلي شامل أن المشكلة موجودة في كل من الصالة والمطبخ: تحقق غير ثابت من الطلبات عند الطاولة، وتقدير الكميات بالعين بدل القياس الموحد في المطبخ، وجدول تحضير لا يُستكمل بدقة، مما أدى إلى تحضير زائد وهدر مستمر.",
                })}
              </p>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {phasesOne.map((phase) => (
                  <div key={phase.label.en}>
                    <span className="font-stat text-[11px] font-bold text-gold">
                      {t(phase.label)}
                    </span>
                    <h4 className="mt-1.5 text-[13.5px] font-semibold text-navy">
                      {t(phase.title)}
                    </h4>
                    <p className="mt-1.5 text-[12.5px] leading-[1.65] text-dark-text/60">
                      {t(phase.description)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[10px] bg-light-gray/60 px-5 py-4">
                <p className="text-[13px] leading-[1.7] text-dark-text/75">
                  <span className="font-semibold text-navy">
                    {t({ en: "Result: ", ar: "النتيجة: " })}
                  </span>
                  {t({
                    en: "Strict process compliance dropped food cost by 3 points in the first month alone. A follow-up visit focused on habituation, coaching the new standards until they became second nature, unlocked the remaining 2 points and landed the restaurant at a sustainable 30%.",
                    ar: "أدى الالتزام الصارم بالإجراءات إلى خفض تكلفة الطعام بنسبة 3 نقاط في الشهر الأول فقط. ركزت زيارة متابعة على ترسيخ العادات، من خلال توجيه الفريق حتى أصبحت المعايير الجديدة طبيعة ثانية، مما أدى إلى تحقيق النقطتين المتبقيتين والوصول إلى نسبة مستقرة وصحية بلغت 30٪.",
                  })}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
