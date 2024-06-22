import { create } from 'zustand';
import * as React from 'react';
import { Translation, Language } from "@/app/types";
import { useEN } from '@/app/hooks/';
import Es from "@/app/loc/strings-es";
import En from "@/app/loc/strings-en";


interface ILanguage {
    lang: Language;
    trans: Translation;
    setLang: (newLang: Language) => void;
    toggleLang: () => void;
    isChecked: boolean;
}

const initialState = {
    lang: Language.EN,
    trans: En,
    isChecked: false
};

const selectTrans = (initialState: Partial<ILanguage>): Translation => {
    const currentTrans = initialState.lang;
    if (currentTrans === Language.EN) {
        return En;
    } else {
        return Es;
    }
};

const useLanguage = create<ILanguage>((set) => ({
    ...initialState,
    setLang: (newLang) => { set({ lang: newLang }); },
    toggleLang: () => set((state) => ({ trans: selectTrans(initialState), isChecked: state.isChecked })),

}));

// const useLanguage = create<ILanguage>()((set) => ({
//     ...initialState,
//     setLang: (newLang: Language) => set({ lang: newLang });

//     // const toggleLang = () => {
//     //     setCurrentLanguage((prevLang) => prevLang === Language.EN ? Language.ES : Language.EN);
//     //     setIsChecked((prev) => prev === false ? true : false);
//     // };

//     // React.useEffect(() => {
//     //     switch (currentLanguage) {
//     //         case Language.EN:
//     //             return setTrans(En);
//     //         case Language.ES:
//     //             return setTrans(Es);
//     //     }
//     // }, [currentLanguage]);

//     return {
//         lang: currentLanguage,
//         trans,
//         setLang,
//         toggleLang,
//         isChecked

//     };
// }));

export default useLanguage

