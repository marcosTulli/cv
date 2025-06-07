import { create } from 'zustand';

interface AdminDialogState {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
}

export const useAdminDialogStore = create<AdminDialogState>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));
