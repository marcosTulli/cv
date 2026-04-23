import { authStore } from '@/store';

const useAuth = () => {
  const accessToken = authStore((state) => state.accessToken);
  const setToken = authStore((state) => state.setToken);
  const clearToken = authStore((state) => state.clearToken);
  const isAuthenticated = authStore((state) => state.isAuthenticated);
  const isAdmin = authStore((state) => state.isAdmin);

  return {
    accessToken,
    setToken,
    clearToken,
    isAuthenticated: isAuthenticated(),
    isAdmin: isAdmin(),
  };
};

export default useAuth;
