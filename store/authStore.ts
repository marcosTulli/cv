import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Roles } from '@/models/enums';

interface IJwtPayload {
  sub?: string;
  email?: string;
  role?: Roles;
  exp?: number;
}

interface IAuthStore {
  accessToken: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  isAuthenticated: () => boolean;
  isAdmin: () => boolean;
}

const decodePayload = (token: string): IJwtPayload | null => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
};

const isPayloadValid = (payload: IJwtPayload | null): boolean => {
  if (!payload) return false;
  return typeof payload.exp === 'number' && payload.exp * 1000 > Date.now();
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
        const payload = decodePayload(token);
        if (!isPayloadValid(payload)) {
          set({ accessToken: null });
          return false;
        }
        return true;
      },
      isAdmin: () => {
        const token = get().accessToken;
        if (!token) return false;
        const payload = decodePayload(token);
        if (!isPayloadValid(payload)) return false;
        return payload?.role === Roles.admin;
      },
    }),
    {
      name: 'cv-auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default authStore;
