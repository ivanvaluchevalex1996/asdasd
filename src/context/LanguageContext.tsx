import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { TLanguage } from "@/lib/i18n";
import { ERRORS } from "@/constants/ERRORS";

type TLanguageContextType = {
  language: TLanguage;
  setLanguage: (lang: TLanguage) => void;
};

const LanguageContext = createContext<TLanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<TLanguage>("ru");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as TLanguage;
    if (savedLang && (savedLang === "en" || savedLang === "ru")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: TLanguage) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(ERRORS.LANGUAGE_CONTEXT_ERROR);
  }
  return context;
};
