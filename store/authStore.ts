import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IAuthStore {
  accessToken: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  isAuthenticated: () => boolean;
}

const isTokenValid = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return typeof payload.exp === 'number' && payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const authStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      accessToken: null,
      setToken: (token: string) => set({ accessToken: token }),
      clearToken: () => set({ accessToken: null }),
      isAuthenticated: () => {
        const token = get().accessToken;
        if (!token) return false;
        if (!isTokenValid(token)) {
          set({ accessToken: null });
          return false;
        }
        return true;
      },
    }),
    {
      name: 'cv-auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default authStore;
