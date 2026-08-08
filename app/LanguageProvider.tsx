"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "ti" | "en";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: "ti", setLanguage: () => undefined });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ti");

  useEffect(() => {
    const saved = window.localStorage.getItem("bp-language");
    if (saved === "en" || saved === "ti") setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "ti"
      ? "80 ተባዕ ካህን | ትምህርቲ ብኢንተርነት"
      : "80 Bold Priest | Online Learning";
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("bp-language", nextLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher" aria-label="Language">
      <button className={language === "ti" ? "active" : ""} onClick={() => setLanguage("ti")} type="button">ትግ</button>
      <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} type="button">EN</button>
    </div>
  );
}

export function LocalizedText({ ti, en }: { ti: string; en: string }) {
  const { language } = useLanguage();
  return <>{language === "ti" ? ti : en}</>;
}
