"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage, useT } from "@/context/LanguageContext";

const highlights = [
  { value: "15+", en: "Years Experience", ar: "سنة خبرة" },
  { value: "300+", en: "Employees Trained", ar: "موظف تم تدريبهم" },
  { value: "14", en: "Restaurants Supported", ar: "مطعم تم دعمه" },
  { value: "2", en: "Restaurant Openings", ar: "افتتاح مطعم" },
  { value: "20+", en: "Team Members Managed", ar: "عضو فريق تمت إدارته" },
];

export default function About() {
  const { lang } = useLanguage();
  const t = useT();
  const isRtl = lang === "ar";

  return (
    <section id="about" className="bg-light-gray/40 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
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
            initial={{ opacity: 0, x: isRtl ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
              {t({ en: "About the Founder", ar: "عن المؤسس" })}
            </span>
            <h2 className="font-display text-[clamp(28px,3.6vw,40px)] font-semibold text-navy">
              {t({ en: "Meet Mohamed Abdelkhalek", ar: "تعرف على محمد عبدالخالق" })}
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.85] text-dark-text/70">
              {t({
                en: "With over 15 years of hospitality and restaurant leadership experience, Mohamed Abdelkhalek has worked across restaurant operations, team development, training, guest experience, and business performance improvement.",
                ar: "بخبرة تتجاوز 15 عاماً في قيادة المطاعم والضيافة، عمل محمد عبدالخالق في عمليات المطاعم، وتطوير الفرق، والتدريب، وتجربة الضيوف، وتحسين أداء الأعمال.",
              })}
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.85] text-dark-text/70">
              {t({
                en: "Having trained more than 300 employees, supported 14 restaurant locations, and participated in multiple restaurant openings, Mohamed combines hands-on operational expertise with strategic consulting solutions designed to improve restaurant performance.",
                ar: "بعد تدريب أكثر من 300 موظف، ودعم 14 موقع مطعم، والمشاركة في افتتاح عدة مطاعم، يجمع محمد بين الخبرة العملية المباشرة وحلول استشارية استراتيجية مصممة لتحسين أداء المطاعم.",
              })}
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.en}
                  className="rounded-[12px] border border-light-gray bg-white px-4 py-5 text-center"
                >
                  <div className="font-stat text-[22px] font-bold text-navy">
                    {h.value}
                  </div>
                  <div className="mt-1 text-[11.5px] leading-snug text-dark-text/60">
                    {t(h)}
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
