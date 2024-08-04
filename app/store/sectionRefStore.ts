import { create } from 'zustand';
import { TSectionElement } from '../models/types';

interface IUseSectionRefStore {
    sectionRef: TSectionElement,
    setSection: (sectionName: string, element: HTMLElement | null) => void;
}

export const store = create<IUseSectionRefStore>()((set) => ({
    sectionRef: {},
    setSection: (sectionName: string, element: HTMLElement | null) => set((state) => ({
        sectionRef: { ...state.sectionRef, [sectionName]: element }
    })
    )
}));

export default store;