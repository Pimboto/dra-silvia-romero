"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, TranslationKeys } from "@/config/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectLanguage = (): Language => {
    if (typeof navigator === "undefined") return "es";
    const browserLang = navigator.language || (navigator as any).userLanguage || "";
    return browserLang.startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("es");

    useEffect(() => {
        setLanguage(detectLanguage());
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
