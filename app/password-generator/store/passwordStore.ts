import { create } from 'zustand';

interface PasswordStoreState {
  password: string;
  setPassword: (password: string) => void;
}

export const passwordStore = create<PasswordStoreState>()((set) => ({
  password: '',
  setPassword: (password) => set({ password }),
}));

export default passwordStore;
