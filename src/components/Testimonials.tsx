"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT, useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    quote: {
      en: "We redesigned our entire menu together and saw a noticeable profit increase within two months. I now know exactly where the problem was.",
      ar: "أعدنا تصميم القائمة بالكامل معاً ولاحظنا زيادة ملموسة في الأرباح خلال شهرين. أصبحت أعرف تماماً أين كانت المشكلة.",
    },
    name: { en: "Restaurant Owner", ar: "صاحب مطعم" },
    role: { en: "Casual Dining", ar: "مطعم عائلي" },
  },
  {
    quote: {
      en: "The training program we received saved us months of effort. Our new team gets up to speed faster and makes far fewer mistakes.",
      ar: "وفر برنامج التدريب الذي حصلنا عليه شهوراً من الجهد. أصبح فريقنا الجديد يتأقلم بشكل أسرع ويرتكب أخطاء أقل بكثير.",
    },
    name: { en: "Operations Manager", ar: "مدير العمليات" },
    role: { en: "Cafe Chain", ar: "سلسلة كافيهات" },
  },
  {
    quote: {
      en: "The assessment alone was worth the time. It gave us a clear picture of what actually needed to change, not what we assumed.",
      ar: "كان التقييم وحده يستحق الوقت المستغرق. أعطانا صورة واضحة عن ما يحتاج إلى تغيير حقيقي، لا ما كنا نتوقعه.",
    },
    name: { en: "Restaurant Group Owner", ar: "صاحب مجموعة مطاعم" },
    role: { en: "Fast Casual", ar: "وجبات سريعة عصرية" },
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = useT();
  const { dir } = useLanguage();
  const isRtl = dir === "rtl";

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
            {t({ en: "Testimonials", ar: "آراء العملاء" })}
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            {t({ en: "What Clients Say", ar: "ماذا يقول عملاؤنا" })}
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
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p className="font-display text-[19px] italic leading-[1.7] text-dark-text">
                {t({ en: "\u201C", ar: "\u201D" })}
                {t(testimonials[index].quote)}
                {t({ en: "\u201D", ar: "\u201C" })}
              </p>
              <div className="mt-8">
                <div className="text-[14px] font-semibold text-navy">
                  {t(testimonials[index].name)}
                </div>
                <div className="mt-0.5 text-[12.5px] text-dark-text/55">
                  {t(testimonials[index].role)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            aria-label={t({ en: "Previous testimonial", ar: "الرأي السابق" })}
            className={`absolute top-1/2 hidden -translate-y-1/2 rounded-full border border-light-gray bg-white p-2.5 text-navy transition-colors hover:border-gold hover:text-gold sm:flex ${
              isRtl ? "right-3" : "left-3"
            }`}
          >
            {isRtl ? "\u2192" : "\u2190"}
          </button>
          <button
            onClick={next}
            aria-label={t({ en: "Next testimonial", ar: "الرأي التالي" })}
            className={`absolute top-1/2 hidden -translate-y-1/2 rounded-full border border-light-gray bg-white p-2.5 text-navy transition-colors hover:border-gold hover:text-gold sm:flex ${
              isRtl ? "left-3" : "right-3"
            }`}
          >
            {isRtl ? "\u2190" : "\u2192"}
          </button>
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`${t({ en: "Go to testimonial", ar: "الذهاب إلى الرأي" })} ${i + 1}`}
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
