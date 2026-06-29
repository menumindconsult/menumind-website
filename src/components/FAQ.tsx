"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT, useLanguage } from "@/context/LanguageContext";

const faqs = [
  {
    question: {
      en: "Why hire a restaurant consultant?",
      ar: "لماذا أحتاج إلى استشاري مطاعم؟",
    },
    answer: {
      en: "A restaurant consultant brings an outside, experienced perspective on problems that are hard to see from inside daily operations, whether that is rising food cost, inconsistent service, or staff turnover. The right consultant identifies the real cause and helps you fix it with a plan built for your specific restaurant, not generic advice.",
      ar: "يقدم استشاري المطاعم منظوراً خارجياً وخبرة عملية لمشاكل يصعب رؤيتها من داخل العمليات اليومية، سواء كانت ارتفاع تكلفة الطعام، أو تفاوت مستوى الخدمة، أو دوران الموظفين. الاستشاري المناسب يحدد السبب الحقيقي ويساعدك على حله بخطة مصممة خصيصاً لمطعمك، لا بنصائح عامة.",
    },
  },
  {
    question: {
      en: "Do you support new restaurant openings?",
      ar: "هل تدعمون افتتاح مطاعم جديدة؟",
    },
    answer: {
      en: "Yes. Pre-opening support covers team readiness, training, service standards, and operational systems, so your restaurant opens with a team that already knows how to run it well from day one.",
      ar: "نعم. يشمل الدعم قبل الافتتاح تجهيز الفريق والتدريب ومعايير الخدمة والأنظمة التشغيلية، حتى يفتتح مطعمك بفريق يعرف بالفعل كيف يديره بشكل جيد منذ اليوم الأول.",
    },
  },
  {
    question: {
      en: "Can you train my team?",
      ar: "هل يمكنكم تدريب فريقي؟",
    },
    answer: {
      en: "Yes. Training programs are built around your team's actual needs, covering customer service, food safety, upselling, and day-to-day performance, delivered in a way your staff can apply immediately.",
      ar: "نعم. تُبنى برامج التدريب حول احتياجات فريقك الفعلية، وتشمل خدمة العملاء والسلامة الغذائية ومهارات البيع والأداء اليومي، وتُقدم بطريقة يمكن لموظفيك تطبيقها فوراً.",
    },
  },
  {
    question: {
      en: "Do you work with independent restaurants?",
      ar: "هل تتعاملون مع المطاعم المستقلة؟",
    },
    answer: {
      en: "Yes. MenuMind works with independent restaurant owners as well as multi-unit operators and franchise groups. Every engagement is scoped to the size and needs of your business.",
      ar: "نعم. تتعامل MenuMind مع أصحاب المطاعم المستقلة وأيضاً مع مشغلي السلاسل ومجموعات الامتياز. يتم تحديد نطاق كل مشروع حسب حجم واحتياجات عملك.",
    },
  },
  {
    question: {
      en: "How do consulting engagements work?",
      ar: "كيف تتم آلية العمل في الاستشارات؟",
    },
    answer: {
      en: "Every engagement starts with a free consultation to understand your situation, followed by a clear written proposal covering scope, timeline, and price. From there, work is delivered remotely with regular check-ins and a defined path to measurable results.",
      ar: "تبدأ كل عملية استشارية باستشارة مجانية لفهم وضعك، تليها مذكرة عرض واضحة تغطي نطاق العمل والمدة الزمنية والسعر. بعد ذلك، يتم تنفيذ العمل عن بُعد مع متابعة دورية ومسار واضح لتحقيق نتائج قابلة للقياس.",
    },
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useT();
  const { dir } = useLanguage();
  const textAlign = dir === "rtl" ? "text-right" : "text-left";

  return (
    <section className="bg-light-gray/40 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 block text-[11.5px] font-semibold uppercase tracking-[3px] text-gold">
            {t({ en: "FAQ", ar: "الأسئلة الشائعة" })}
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,40px)] font-semibold text-navy">
            {t({ en: "Frequently Asked Questions", ar: "الأسئلة الأكثر تكراراً" })}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question.en}
                className="overflow-hidden rounded-[12px] border border-light-gray bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-4 px-7 py-5 ${textAlign}`}
                >
                  <span className="text-[15px] font-semibold text-navy">
                    {t(faq.question)}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold text-[13px] text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 text-[14px] leading-[1.75] text-dark-text/65">
                        {t(faq.answer)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
