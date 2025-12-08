import { create } from 'zustand';

const initialState = {
  isActionsMenuOpen: false,
};

interface UserMenuState {
  isActionsMenuOpen: boolean;
  toggleActionsMenu: () => void;
}

export const useActionsMenu = create<UserMenuState>()((set) => ({
  ...initialState,
  toggleActionsMenu: () => set((state) => ({ isActionsMenuOpen: !state.isActionsMenuOpen })),
}));
