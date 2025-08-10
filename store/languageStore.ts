import { create } from 'zustand';
import { Translation } from '@/models/interfaces';
import { Language } from '../models/enums';
import es from '@/loc/strings-es';
import en from '@/loc/strings-en';

interface ILanguage {
  currentLanguage: Language;
  strings: Translation | Partial<Translation>;
  setLang: (newLang: Language) => void;
}

const initialState = {
  currentLanguage: Language.EN,
  strings: en,
  isChecked: false,
};

const languageStore = create<ILanguage>((set) => ({
  ...initialState,
  setLang: (newLang: Language) => {
    const strings = newLang === Language.EN ? en : es;
    set({ currentLanguage: newLang, strings });
  },
}));

export default languageStore;
