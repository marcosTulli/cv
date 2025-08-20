import { TreeServicesInstance } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useRemoveNode = () => {
  const queryClient = useQueryClient();
  const { mutate: removeNode } = useMutation({
    mutationFn: TreeServicesInstance.removeNode,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rootNode'] });
    },
  });
  return { removeNode };
};

export default useRemoveNode;
