import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService } from '@services';
import { ILoginParams, ILoginResponse } from '@/models/interfaces';
import { authStore } from '@/store';

const useLogin = () => {
  const router = useRouter();
  const setToken = authStore((state) => state.setToken);

  const mutation = useMutation<ILoginResponse, Error, ILoginParams>({
    mutationFn: (params: ILoginParams) => authService.login(params),
    onSuccess: (data) => {
      console.log('Login response:', data);
      setToken(data.access_token);
      router.push('/');
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });

  return mutation;
};

export default useLogin;
