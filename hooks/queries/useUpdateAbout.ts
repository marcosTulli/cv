import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@services';
import { IPatchAboutParams, IUserInfoResponse } from '@/models/interfaces';
import { languageStore, uiStore } from '@/store';

const id = process.env.NEXT_PUBLIC_USER_ID || '';

const useUpdateAbout = () => {
  const queryClient = useQueryClient();
  const showSnackbar = uiStore((state) => state.showSnackbar);
  const { strings, currentLanguage } = languageStore();

  const mutation = useMutation<IUserInfoResponse, Error, IPatchAboutParams>({
    mutationFn: (params: IPatchAboutParams) => userService.patchAbout(params),
    onSuccess: () => {
      showSnackbar(strings.aboutUpdatedSuccess || 'About updated', 'success');
      queryClient.invalidateQueries({ queryKey: ['user', id, currentLanguage] });
    },
    onError: () => {
      showSnackbar(strings.aboutUpdatedError || 'Could not update about', 'error');
    },
  });

  return mutation;
};

export default useUpdateAbout;
