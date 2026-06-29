"use client";

import { motion } from "framer-motion";
import { useT } from "@/context/LanguageContext";

export default function FinalCTA() {
  const t = useT();
  const whatsappMessage = t({
    en: "Hello, I would like to book a free consultation",
    ar: "مرحباً، أرغب في حجز استشارة مجانية",
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-deep px-6 py-28 text-center lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,164,107,0.14),transparent_65%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-2xl"
      >
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold text-offwhite">
          {t({
            en: "Ready To Improve Restaurant Performance?",
            ar: "هل أنت مستعد لتحسين أداء مطعمك؟",
          })}
        </h2>
        <p className="mt-5 text-[16px] leading-[1.8] text-offwhite/65">
          {t({
            en: "Let's discuss your goals and identify opportunities to strengthen operations, improve profitability, and build high-performing teams.",
            ar: "لنتحدث عن أهدافك ونحدد الفرص لتعزيز العمليات، وتحسين الأرباح، وبناء فريق عمل عالي الأداء.",
          })}
        </p>
        <a
          href={`https://wa.me/966540367407?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener"
          className="mt-9 inline-block rounded-[12px] bg-gold px-10 py-4 text-[15px] font-semibold text-navy-deep transition-all hover:bg-gold-light hover:shadow-[0_12px_28px_-8px_rgba(200,164,107,0.45)]"
        >
          {t({ en: "Book Free Consultation", ar: "احجز استشارة مجانية" })}
        </a>
        <p className="mt-5 text-[14px] text-offwhite/55">
          {t({ en: "Or reach us directly on WhatsApp: ", ar: "أو تواصل معنا مباشرة على واتساب: " })}
          <a
            href="https://wa.me/966540367407"
            target="_blank"
            rel="noopener"
            className="font-stat font-semibold text-gold-light transition-colors hover:text-gold"
          >
            +966 54 036 7407
          </a>
        </p>
      </motion.div>
    </section>
  );
}
