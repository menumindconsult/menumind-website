"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextValue {
  lang: Language;
  toggleLang: () => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, dir }}>
      <div lang={lang} dir={dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/**
 * Small helper for components: pass an object with `en` and `ar` keys,
 * get back the string for the currently active language.
 */
export function useT() {
  const { lang } = useLanguage();
  return function t(strings: { en: string; ar: string }) {
    return strings[lang];
  };
}
