import { create } from 'zustand';
import { TSectionElement } from '../models/types';

interface IUseSectionRefStore {
    sectionRef: TSectionElement,
    setSection: (sectionName: string, element: HTMLElement | HTMLDivElement | null) => void;
}

export const store = create<IUseSectionRefStore>()((set) => ({
    sectionRef: { current: null },
    setSection: (sectionName: string, element: HTMLElement | HTMLDivElement | null) => set((state) => ({
        sectionRef: { ...state.sectionRef, [sectionName]: element }
    })
    )
}));

export default store;