import { create } from 'zustand';
import { TLoadingState } from '../models/types';

interface IAreSectionsLoading {
  sectionsLoadingState: TLoadingState[];
  setSectionsLoadingState: (sectionName: keyof TLoadingState, isLoadng: boolean) => void;
}

export const store = create<IAreSectionsLoading>()((set) => ({
  sectionsLoadingState: [],
  setSectionsLoadingState: (sectionName, isLoading) =>
    set((state) => ({
      sectionsLoadingState: {
        ...state.sectionsLoadingState,
        [sectionName]: isLoading,
      },
    })),
}));

export default store;
