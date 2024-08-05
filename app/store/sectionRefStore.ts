import { create } from 'zustand';
import { RefObject } from 'react';
import { TSectionElement } from '../models/types';

interface IUseSectionRefStore {
    sectionRef: TSectionElement;
    setSection: (sectionName: string, element: RefObject<HTMLDivElement> | null) => void;
}

export const store = create<IUseSectionRefStore>((set) => ({
    sectionRef: {},
    setSection: (sectionName: string, element: RefObject<HTMLDivElement> | null) =>
        set((state) => ({
            sectionRef: { ...state.sectionRef, [sectionName]: element },
        })),
}));

export default store;
