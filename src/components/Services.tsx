"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, useT } from "@/context/LanguageContext";

const services = [
  {
    icon: "⚙",
    titleEn: "Restaurant Operations Excellence",
    titleAr: "التميز في عمليات المطعم",
    teaserEn:
      "A full operational review of cost control, kitchen flow, and service standards, delivered as a clear, actionable plan.",
    teaserAr:
      "مراجعة شاملة لضبط التكاليف وتدفق العمل في المطبخ ومعايير الخدمة، تُقدَّم في خطة عمل واضحة وقابلة للتنفيذ.",
    fullEn:
      "A great dining experience requires a seamless machine operating behind the scenes. We conduct a comprehensive, end-to-end operational review of your restaurant, examining everything from kitchen flow and prep execution to front-of-house service standards. We do not just point out inefficiencies, we deliver a clear, actionable plan to streamline your daily operations, ensuring your team works smarter, waste is minimized, and service flows naturally.",
    fullAr:
      "تجربة الطعام الرائعة تحتاج إلى آلة متكاملة تعمل بسلاسة من الخلف. نقوم بمراجعة تشغيلية شاملة لمطعمك، تغطي كل شيء من تدفق العمل في المطبخ وتنفيذ التحضير إلى معايير خدمة صالة الضيوف. نحن لا نكتفي بالإشارة إلى نقاط الضعف، بل نقدم خطة عمل واضحة وقابلة للتنفيذ لتبسيط عملياتك اليومية، بما يجعل فريقك يعمل بذكاء أكبر، ويقلل الهدر، ويجعل تدفق الخدمة طبيعياً.",
  },
  {
    icon: "◈",
    titleEn: "Training & Development",
    titleAr: "التدريب والتطوير",
    teaserEn:
      "Role-specific training programs that build confident, consistent teams across the floor and the kitchen.",
    teaserAr:
      "برامج تدريبية مخصصة لكل دور، تبني فرق عمل واثقة وثابتة في الأداء على مستوى الصالة والمطبخ.",
    fullEn:
      "Your restaurant is only as strong as the team running it. We move away from tribal knowledge, where information is passed down randomly, and implement structured, role-specific training programs. Whether it is a line cook mastering knife skills and recipe adherence, or a server perfecting tableside etiquette, we build confident, capable teams. The result is a consistent, high-quality standard that your guests can rely on every single visit.",
    fullAr:
      "قوة مطعمك تعتمد على قوة الفريق الذي يديره. نتجاوز فكرة المعرفة المتناقلة بشكل عشوائي بين الموظفين، ونطبق برامج تدريبية منظمة ومخصصة لكل دور. سواء كان ذلك طباخاً يتقن مهارات السكين والالتزام بالوصفة، أو نادلاً يصقل آداب التعامل مع الضيوف على الطاولة، نبني فرقاً واثقة وقادرة. النتيجة هي مستوى ثابت وعالي الجودة يمكن لضيوفك الاعتماد عليه في كل زيارة.",
  },
  {
    icon: "▤",
    titleEn: "Menu Engineering & Development",
    titleAr: "هندسة وتطوير قائمة الطعام",
    teaserEn:
      "Profitable, well-balanced menus built on correct pricing, food cost discipline, and guest appeal.",
    teaserAr:
      "قوائم طعام مربحة ومتوازنة، مبنية على تسعير صحيح وضبط دقيق لتكلفة الطعام وجاذبية حقيقية للضيوف.",
    fullEn:
      "Your menu is your primary sales tool and your most powerful profit driver. We analyze your menu through the lens of both culinary appeal and mathematical precision. By evaluating food cost discipline, ingredient yield, and pricing psychology, we help you design a well-balanced menu. We identify your stars, high profit and high popularity, and your dogs, low profit and low popularity, guiding you to restructure, reprice, or remove items to maximize your profitability without compromising quality.",
    fullAr:
      "قائمة الطعام هي أداة البيع الأساسية لمطعمك ومحرك ربحك الأقوى. نحلل قائمتك من زاويتين، الجاذبية الذوقية والدقة الرقمية. من خلال تقييم ضبط تكلفة الطعام، ومردود المكونات، وعلم النفس في التسعير، نساعدك على تصميم قائمة متوازنة. نحدد العناصر النجمة، عالية الربح وعالية الشعبية، والعناصر الضعيفة، منخفضة الربح ومنخفضة الشعبية، ونوجهك لإعادة هيكلتها أو تسعيرها أو إزالتها لتحقيق أعلى ربحية دون التأثير على الجودة.",
  },
  {
    icon: "◎",
    titleEn: "Guest Experience Improvement",
    titleAr: "تحسين تجربة الضيوف",
    teaserEn:
      "Service standards and guest journey refinements that turn first-time visitors into regulars.",
    teaserAr:
      "معايير خدمة وتحسينات في رحلة الضيف تحوّل الزائر لأول مرة إلى عميل دائم.",
    fullEn:
      "Getting a guest through the door is only the first step, bringing them back is the goal. We map out the complete guest journey from the moment they make a reservation to the moment they walk out the door. By refining service sequences, improving ambient touchpoints, and empowering your staff to handle guest friction gracefully, we help you transform first-time visitors into loyal, regular advocates for your brand.",
    fullAr:
      "دخول الضيف من الباب هو الخطوة الأولى فقط، والهدف الحقيقي هو أن يعود مرة أخرى. نرسم رحلة الضيف الكاملة من لحظة الحجز إلى لحظة الخروج. من خلال تحسين تسلسل الخدمة، وتطوير نقاط التواصل المحيطة بالضيف، وتمكين فريقك من التعامل بسلاسة مع أي إشكال، نساعدك على تحويل الزوار لأول مرة إلى عملاء دائمين يدعمون علامتك التجارية.",
  },
  {
    icon: "✦",
    titleEn: "New Restaurant Openings",
    titleAr: "افتتاح مطاعم جديدة",
    teaserEn:
      "End-to-end pre-opening support, from team readiness to systems and service standards, before day one.",
    teaserAr:
      "دعم شامل لمرحلة ما قبل الافتتاح، من جاهزية الفريق إلى الأنظمة ومعايير الخدمة، قبل أول يوم تشغيل.",
    fullEn:
      "Opening a new restaurant is a high-stakes endeavor where there is no room for trial and error. We provide end-to-end pre-opening support to ensure you are ready before day one. From writing operational playbooks and designing kitchen layouts to finalizing service standards and conducting mock services, we make sure your team is fully prepared, your systems are tested, and your opening day feels like you have been open for months.",
    fullAr:
      "افتتاح مطعم جديد هو خطوة عالية المخاطر لا تحتمل التجربة والخطأ. نقدم دعماً شاملاً لمرحلة ما قبل الافتتاح لضمان جاهزيتك قبل أول يوم. من كتابة دلائل العمل التشغيلية وتصميم تخطيط المطبخ، إلى وضع معايير الخدمة النهائية وإجراء تجارب خدمة كاملة، نضمن أن فريقك جاهز بالكامل، وأنظمتك مُجرَّبة، وأن يوم افتتاحك يبدو كما لو أن المطعم يعمل منذ شهور.",
  },
  {
    icon: "▲",
    titleEn: "Profitability Optimization",
    titleAr: "تحسين الربحية",
    teaserEn:
      "Identifying where margin is lost across labor, food cost, and waste, then closing those gaps systematically.",
    teaserAr:
      "تحديد مواضع تسرب الهامش الربحي في العمالة وتكلفة الطعام والهدر، ثم إغلاق هذه الثغرات بشكل منظم.",
    fullEn:
      "Revenue is vanity, profit is sanity. Many restaurants are busy but still struggling financially due to hidden margin leaks. We dive deep into your financials to identify exactly where money is being lost, whether through over-portioning in the kitchen, over-staffing on the floor, or excessive food waste. We then implement systematic controls to close those gaps, protecting your margins and ensuring your hard work translates directly to your bottom line.",
    fullAr:
      "الإيراد مظهر، والربح هو الحقيقة. كثير من المطاعم مزدحمة بالضيوف لكنها تعاني مالياً بسبب تسرب خفي في الهامش الربحي. نتعمق في بياناتك المالية لتحديد مكان تسرب المال بدقة، سواء كان ذلك من الإفراط في حجم التقديم في المطبخ، أو زيادة عدد العمالة، أو الهدر الزائد في الطعام. ثم نطبق ضوابط منظمة لإغلاق هذه الثغرات، بما يحمي هامشك الربحي ويضمن أن جهدك ينعكس مباشرة على أرباحك.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = useT();
  const isRtl = lang === "ar";

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
            {t({ en: "Services", ar: "الخدمات" })}
          </span>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-semibold text-navy">
            {t({ en: "How We Help Restaurants Succeed", ar: "كيف نساعد المطاعم على النجاح" })}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            const title = lang === "en" ? service.titleEn : service.titleAr;
            const teaser = lang === "en" ? service.teaserEn : service.teaserAr;
            const full = lang === "en" ? service.fullEn : service.fullAr;
            return (
              <motion.div
                key={service.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className={`group rounded-[12px] border bg-white p-8 shadow-[0_2px_12px_rgba(23,35,58,0.04)] transition-all duration-300 ${
                  isOpen
                    ? "border-gold/50 shadow-[0_20px_40px_-12px_rgba(23,35,58,0.15)] sm:col-span-2 lg:col-span-3"
                    : "hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_40px_-12px_rgba(23,35,58,0.15)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="block w-full text-start"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-[12px] text-[20px] transition-colors duration-300 ${
                      isOpen
                        ? "bg-gold text-navy-deep"
                        : "bg-navy text-gold-light group-hover:bg-gold group-hover:text-navy-deep"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-[17px] font-semibold text-navy">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-dark-text/65">
                    {teaser}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {isOpen
                      ? t({ en: "Show Less", ar: "عرض أقل" })
                      : t({ en: "Learn More", ar: "اعرف أكثر" })}
                    <span
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "group-hover:translate-x-1"
                      }`}
                    >
                      {isOpen ? "↑" : isRtl ? "←" : "→"}
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 border-t border-light-gray pt-6 lg:max-w-3xl">
                        <p className="text-[14.5px] leading-[1.85] text-dark-text/75">
                          {full}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-14 max-w-2xl text-center text-[14.5px] italic leading-[1.8] text-dark-text/60"
        >
          {t({
            en: "Running a successful restaurant requires wearing many hats. At MenuMind, we help you organize those hats, empowering you to focus on what you do best: creating incredible food and memorable experiences, while we ensure the business behind it is built to last.",
            ar: "إدارة مطعم ناجح تتطلب ارتداء قبعات كثيرة. في MenuMind، نساعدك على تنظيم هذه القبعات، لتتمكن من التركيز على ما تتميز فيه فعلاً: صنع طعام رائع وتجارب لا تُنسى، بينما نتولى نحن ضمان أن العمل الذي يقف خلفها مبني ليستمر.",
          })}
        </motion.p>
      </div>
    </section>
  );
}
