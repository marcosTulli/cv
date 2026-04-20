import { useAuth } from '@/hooks';
import { useUi } from '@/hooks';

const useLogout = () => {
  const { clearToken } = useAuth();
  const { setEditMode } = useUi();

  const logout = () => {
    setEditMode(false);
    clearToken();
    window.location.reload();
  };

  return { logout };
};

export default useLogout;
