"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionaries, type Language } from "@/data/i18n";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (typeof dictionaries)[Language];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageStorageKey = "portfolio-language";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  return savedLanguage === "en" || savedLanguage === "th" ? savedLanguage : "en";
}

function subscribeToLanguageChange(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-language-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-language-change", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguageChange,
    getStoredLanguage,
    () => "en"
  );

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(languageStorageKey, nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.dispatchEvent(new Event("portfolio-language-change"));
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "th" : "en"),
      t: dictionaries[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
