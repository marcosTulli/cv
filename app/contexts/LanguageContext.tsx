import React, { createContext, useContext, useEffect, useCallback, } from 'react';
import { Translation, Language } from "@/app/types";
import { useEN } from '@/app/hooks/';
import Es from "@/app/loc/strings-es";
// import En from "@/app/loc/strings-es";

const En = useEN();

interface ILanguageContext {
    lang: Language;
    trans: Translation;
    setLang: (newLang: Language) => void;
    toggleLang: () => void;
    isChecked: boolean;
}

const defaultContext = {
    lang: Language.EN,
    trans: En,
    setLang: (newLang: Language) => { newLang; },
    toggleLang: () => { console.log("Language Switch"); },
    isChecked: false
};

export const LanguageContext = createContext<ILanguageContext>(defaultContext);

interface LanguageContextProviderProps {
    children: React.ReactNode;
}

export const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = React.useState<Language>(Language.EN);
    const [trans, setTrans] = React.useState<Translation>(Es);
    const [isChecked, setIsChecked] = React.useState<boolean>(false);
    // const { En } = EN();
    const setLang = useCallback((newLang: Language) => {
        setCurrentLanguage(newLang);
    }, [currentLanguage]);
    const toggleLang = () => {
        setCurrentLanguage((prevLang) => prevLang === Language.EN ? Language.ES : Language.EN);
        setIsChecked((prev) => prev === false ? true : false);
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
                toggleLang,
                isChecked

            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

