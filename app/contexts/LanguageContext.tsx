import React, { createContext, useContext, useEffect, useCallback, } from 'react';
import { Translation, Language } from "@/app/types";
import En from "@/app/loc/strings-en";
import Es from "@/app/loc/strings-es";

interface ILanguageContext {
    lang: Language;
    trans: Translation;
    setLang: (newLang: Language) => void;
    toggleLang: () => void;
}

const defaultContext = {
    lang: Language.EN,
    trans: En,
    setLang: (newLang: Language) => { },
    toggleLang: () => { console.log("Language Switch"); },
};

export const LanguageContext = createContext<ILanguageContext>(defaultContext);

interface LanguageContextProviderProps {
    children: React.ReactNode;
}

export const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = React.useState<Language>(Language.EN);
    const [trans, setTrans] = React.useState<Translation>(Es);
    const setLang = useCallback((newLang: Language) => {
        setCurrentLanguage(newLang);
    }, [currentLanguage]);
    const toggleLang = () => {
        setCurrentLanguage((prevLang) => prevLang === Language.EN ? Language.ES : Language.EN);
    };

    useEffect(() => {
        switch (currentLanguage) {
            case Language.EN:
                return setTrans(En);
            case Language.ES:
                return setTrans(Es);
        }
    }, [currentLanguage]);

    return (
        <LanguageContext.Provider
            value={{
                lang: currentLanguage,
                trans,
                setLang,
                toggleLang
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

