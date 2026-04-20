import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@services';
import { INetworkResponse, IPatchNetworkParams } from '@/models/interfaces';
import { languageStore, uiStore } from '@/store';

const id = process.env.NEXT_PUBLIC_USER_ID || '';

const useUpdateNetwork = () => {
  const queryClient = useQueryClient();
  const showSnackbar = uiStore((state) => state.showSnackbar);
  const { strings, currentLanguage: lang } = languageStore();

  const mutation = useMutation<INetworkResponse, Error, IPatchNetworkParams>({
    mutationFn: (params: IPatchNetworkParams) => userService.patchNetwork(params),
    onSuccess: () => {
      showSnackbar(strings.networkUpdatedSuccess || 'Network updated', 'success');
      queryClient.invalidateQueries({ queryKey: ['user', id, lang] });
    },
    onError: () => {
      showSnackbar(strings.networkUpdatedError || 'Could not update network', 'error');
    },
  });

  return mutation;
};

export default useUpdateNetwork;
