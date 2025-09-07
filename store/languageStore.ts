import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Translation } from '@/models/interfaces';
import { Language } from '../models/enums';
import es from '@/loc/strings-es';
import en from '@/loc/strings-en';

interface ILanguage {
  currentLanguage: Language;
  strings: Translation | Partial<Translation>;
  setLang: (newLang: Language) => void;
}

const getStrings = (lang: Language) => (lang === Language.EN ? en : es);

const languageStore = create<ILanguage>()(
  persist(
    (set) => ({
      currentLanguage: Language.EN,
      strings: en,
      setLang: (newLang: Language) => {
        const strings = getStrings(newLang);
        set({ currentLanguage: newLang, strings });
      },
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({ currentLanguage: state.currentLanguage }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.strings = getStrings(state.currentLanguage);
        }
      },
    },
  ),
);

export default languageStore;
