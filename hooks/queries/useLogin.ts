import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService } from '@services';
import { ILoginParams, ILoginResponse } from '@/models/interfaces';
import { useAuth } from '@/hooks';

const useLogin = () => {
  const router = useRouter();
  const { setToken } = useAuth();

  const mutation = useMutation<ILoginResponse, Error, ILoginParams>({
    mutationFn: (params: ILoginParams) => authService.login(params),
    onSuccess: (data) => {
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
