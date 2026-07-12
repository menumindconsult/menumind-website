"use client";

import Image from "next/image";
import { useT } from "@/context/LanguageContext";

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-navy-deep px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <Image
              src="/images/logo-silver-gold.png"
              alt="MENUMIND Restaurant Consultancy"
              width={195}
              height={143}
              className="h-12 w-auto"
            />
            <p className="mt-5 text-[13.5px] leading-[1.75] text-offwhite/50">
              {t({
                en: "Practical restaurant consulting for operators who want measurable results: stronger teams, leaner operations, and better guest experiences.",
                ar: "استشارات مطاعم عملية لأصحاب المطاعم الذين يريدون نتائج قابلة للقياس: فرق عمل أقوى، عمليات أكثر كفاءة، وتجربة ضيوف أفضل.",
              })}
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-gold-light">
                {t({ en: "Quick Links", ar: "روابط سريعة" })}
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-offwhite/55">
                <li><a href="#services" className="hover:text-gold-light">{t({ en: "Services", ar: "الخدمات" })}</a></li>
                <li><a href="#about" className="hover:text-gold-light">{t({ en: "About", ar: "من نحن" })}</a></li>
                <li><a href="#results" className="hover:text-gold-light">{t({ en: "Results", ar: "النتائج" })}</a></li>
                <li><a href="#contact" className="hover:text-gold-light">{t({ en: "Contact", ar: "تواصل معنا" })}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-gold-light">
                {t({ en: "Contact", ar: "التواصل" })}
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-offwhite/55">
                <li>
                  <a href="mailto:menumind.consult@gmail.com" className="hover:text-gold-light">
                    menumind.consult@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/966540367407"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-gold-light"
                  >
                    +966 54 036 7407
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mohamed-abdelkhalek-menumind"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-gold-light"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-offwhite/10 pt-7 text-center text-[12px] text-offwhite/40">
          {t({
            en: "\u00A9 2026 MenuMind Restaurant Consultancy. All rights reserved.",
            ar: "\u00A9 2026 MenuMind لاستشارات المطاعم. جميع الحقوق محفوظة.",
          })}
        </div>
      </div>
    </footer>
  );
}
