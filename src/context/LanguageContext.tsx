import { createContext, useContext, useState, ReactNode } from 'react';
import { TLanguage } from '@/lib/i18n';
import { ERRORS } from '@/constants/ERRORS';
import { setCookie } from '@/lib/utils';

const LANGUAGE_COOKIE = 'language';

type TLanguageContextType = {
  language: TLanguage;
  setLanguage: (lang: TLanguage) => void;
};

const LanguageContext = createContext<TLanguageContextType | undefined>(undefined);

export const LanguageProvider = ({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: TLanguage;
}) => {
  const [language, setLanguageState] = useState<TLanguage>(initialLanguage);

  const setLanguage = (lang: TLanguage) => {
    setLanguageState(lang);
    setCookie(LANGUAGE_COOKIE, lang);
    if (typeof window !== 'undefined') localStorage.setItem(LANGUAGE_COOKIE, lang);
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
