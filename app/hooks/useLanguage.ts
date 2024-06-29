import { create } from 'zustand';
import { Translation, Language } from "@/app/models";
import es from "@/app/loc/strings-es";
import en from "@/app/loc/strings-en";

interface ILanguage {
    currentLanguage: Language;
    strings: Translation | Partial<Translation>;
    setLang: (newLang: Language) => void;
}

const initialState = {
    currentLanguage: Language.EN,
    strings: en,
    isChecked: false
};

const useLanguage = create<ILanguage>((set) => ({
    ...initialState,
    setLang: (newLang: Language) => {
        const strings = newLang === Language.EN ? en : es;
        set({ currentLanguage: newLang, strings });
    },
}));

export default useLanguage;

