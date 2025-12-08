import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TreeServicesInstance } from '@/services';

export const useClearTree = () => {
  const queryClient = useQueryClient();

  const { mutate: clearTree } = useMutation({
    mutationFn: TreeServicesInstance.clearTree,
    onSuccess: () => {
      toast('Tree cleared', {
        type: 'success',
      });
      queryClient.invalidateQueries({ queryKey: ['rootNode'] });
    },
  });

  return { clearTree };
};
