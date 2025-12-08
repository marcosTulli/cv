import { create } from 'zustand';
import { LegacyRef } from 'react';

interface IDownloadRefStore {
  downloadRef: LegacyRef<HTMLDivElement>;
  setDownloadRef: (element: LegacyRef<HTMLDivElement> | null) => void;
}

export const store = create<IDownloadRefStore>((set) => ({
  downloadRef: { current: null },
  setDownloadRef: (element: LegacyRef<HTMLDivElement> | null) => set({ downloadRef: element }),
}));

export default store;
